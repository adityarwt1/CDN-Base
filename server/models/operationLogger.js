import mongoose, { Schema } from "mongoose";

const MetadataSchema = new Schema(
  {
    ip: {
      type: String,
      required: true,
      trim: true,
    },

    userAgent: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const LoggerSchema = new Schema(
  {
    apiKeyId: {
      type: Schema.Types.ObjectId,
      ref: "ApiKey",
      required: true,
      index: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    operation: {
      type: String,
      enum: ["CREATE", "READ", "UPDATE", "DELETE"],
      required: true,
    },

    model: {
      type: String,
      required: true,
      trim: true,
    },

    responseTime: {
      type: Number,
      required: true,
      min: 0,
    },

    statusCode: {
      type: Number,
      required: true,
    },

    timestamp: {
      type: Date,
      default: Date.now,
      index: true,
    },

    metadata: {
      type: MetadataSchema,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

// Optional indexes for analytics & filtering
LoggerSchema.index({ apiKeyId: 1, timestamp: -1 });
LoggerSchema.index({ userId: 1, timestamp: -1 });
LoggerSchema.index({ operation: 1 });
LoggerSchema.index({ statusCode: 1 });

const LoggerModel =
  mongoose.models.Logger || mongoose.model("Logger", LoggerSchema);

export default LoggerModel;
