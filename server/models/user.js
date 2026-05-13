import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    refreshToken:{
        type:String,
    }
  },
  {
    timestamps: true,
  }
);

const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;