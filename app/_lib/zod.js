import { object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required." })
    .min(1, "Email is required")
    .email("Invalid Email"),
  password: string({ required_error: "Password is required." }).min(
    1,
    "Password is required"
  ),
});

export const roleAssignmentSchema = object({
  name: string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: string({ required_error: "Email is required." })
    .min(1, "Email is required")
    .email("Invalid Email"),
  role: string({
    required_error: "Please select a role.",
  }),
});
