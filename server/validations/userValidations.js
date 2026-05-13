import z from "zod";

export const userRegisterValidations = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name cannot exceed 50 characters")
    .trim(),

  userName: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .trim(),

  email: z
    .string()
    .email("Invalid email address")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password cannot exceed 100 characters"),
});