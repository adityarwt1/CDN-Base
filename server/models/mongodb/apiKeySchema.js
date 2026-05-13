import mongoose, { Schema } from "mongoose";

const UsageCountSchema = new Schema(
  {
    daily: {
      type: Number,
      default: 0,
    },

    monthly: {
      type: Number,
      default: 0,
    },

    lastReset: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: false,
  }
);

const ApiKeySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    apiKey: {
      type: String,
      required: true,
      unique: true,
      index: true,
      match: /^cbk_live_[a-zA-Z0-9]+$/,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    mode: {
      type: String,
      enum: ["PLATFORM", "OWN_MONGODB"],
      required: true,
      default: "PLATFORM",
    },

    // OWN_MONGODB mode
    mongodbUri: {
      type: String,
      default: null,
    },

    // PLATFORM mode
    dbPrefix: {
      type: String,
      default: null,
    },

    // Rate limits
    requestsPerMinute: {
      type: Number,
      default: 100,
      min: 1,
    },

    requestsPerDay: {
      type: Number,
      default: 10000,
      min: 1,
    },

    usageCount: {
      type: UsageCountSchema,
      default: () => ({}),
    },

    // Security
    allowedOrigins: [
      {
        type: String,
        trim: true,
      },
    ],

    ipWhitelist: [
      {
        type: String,
        trim: true,
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },

    expiresAt: {
      type: Date,
      default: null,
    },

    lastUsedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Optional indexes
ApiKeySchema.index({ apiKey: 1 });
ApiKeySchema.index({ userId: 1 });
ApiKeySchema.index({ expiresAt: 1 });

const ApiKeyModel =
  mongoose.models.ApiKey || mongoose.model("ApiKey", ApiKeySchema);

export default ApiKeyModel;