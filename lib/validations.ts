import { z } from "zod";

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

// Step 1: faqat email
export const signUpStep1Schema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
});

// Step 2: faqat name
export const signUpStep2Schema = z.object({
  otp: z.string().min(6),
});

// Step 3: password + confirmPassword
export const signUpStep3Schema = z

  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
