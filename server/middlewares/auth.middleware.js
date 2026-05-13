// ============================================
// middleware/auth.middleware.js
// ============================================

import jwt from 'jsonwebtoken';
import ApiKey from '../models/mongodb/apiKeySchema.js';
import User from '../models/user.js';

// Authenticate Dashboard User (JWT)
export async function authenticateUser(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        error: { statusCode: 401, message: 'Access token required' }
      });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        error: { statusCode: 401, message: 'Invalid token' }
      });
    }
    
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        error: { statusCode: 401, message: 'Token expired' }
      });
    }
    
    return res.status(401).json({
      success: false,
      error: { statusCode: 401, message: 'Invalid token' }
    });
  }
}

// Authenticate API Key (for Gateway Requests)
export async function authenticateApiKey(req, res, next) {
  try {
    const apiKey = req.params.apiKey;
    
    if (!apiKey) {
      return res.status(401).json({
        success: false,
        error: { statusCode: 401, message: 'API key required' }
      });
    }
    
    const keyDoc = await ApiKey.findOne({ 
      apiKey, 
      isActive: true 
    }).populate('userId');
    
    if (!keyDoc) {
      return res.status(401).json({
        success: false,
        error: { statusCode: 401, message: 'Invalid or inactive API key' }
      });
    }
    
    // Check CORS origin
    const origin = req.headers.origin;
    if (keyDoc.allowedOrigins.length > 0 && 
        !keyDoc.allowedOrigins.includes(origin)) {
      return res.status(403).json({
        success: false,
        error: { statusCode: 403, message: 'Origin not allowed' }
      });
    }
    
    // Check rate limits
    const isWithinLimit = await checkRateLimit(keyDoc);
    if (!isWithinLimit) {
      return res.status(429).json({
        success: false,
        error: { statusCode: 429, message: 'Rate limit exceeded' }
      });
    }
    
    // Update last used
    keyDoc.lastUsedAt = new Date();
    await keyDoc.save();
    
    req.apiKey = keyDoc;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: { statusCode: 500, message: 'Authentication failed' }
    });
  }
}

async function checkRateLimit(apiKey) {
  // Implement Redis-based rate limiting for production
  // For now, simple in-memory check
  const now = new Date();
  const dayStart = new Date(now.setHours(0, 0, 0, 0));
  
  if (apiKey.usageCount.lastReset < dayStart) {
    apiKey.usageCount.daily = 0;
    apiKey.usageCount.lastReset = dayStart;
  }
  
  if (apiKey.usageCount.daily >= apiKey.requestsPerDay) {
    return false;
  }
  
  apiKey.usageCount.daily++;
  await apiKey.save();
  
  return true;
}