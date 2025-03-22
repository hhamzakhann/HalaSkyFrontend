import { object, string, z } from "zod";

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

export const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  number: z.string().regex(/^\d+$/, "Must be a valid number"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

// Define Zod schemas for form validation
export const postFormSchema = z.object({
  content: z.string().min(1, { message: "Post content is required" }),
});

export const pollFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  question: z.string().min(1, { message: "Poll question is required" }),
  options: z
    .array(z.string().min(1, { message: "Option cannot be empty" }))
    .min(2, { message: "At least 2 options are required" }),
});
