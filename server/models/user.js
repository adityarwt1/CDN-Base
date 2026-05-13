import mongoose, { Schema } from "mongoose";

const RefreshTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    refreshTokens: {
      type: [RefreshTokenSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Optional indexes
UserSchema.index({ email: 1 });

const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;