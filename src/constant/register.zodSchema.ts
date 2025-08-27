import z from "zod";

export const registerZodSchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .min(3, { error: "Name must be atleast 3 characters" }),
  email: z.email({ error: "Invalid email" }),
  role: z.enum(["rider", "driver", "admin"], { error: "Please select your role" }),
  password: z
    .string("Password must be string")
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least 1 uppercase letter.",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least 1 number.",
    }),
  phone: z
    .string("Phone Number must be string")
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    }),
  vehicleInfo: z.object({
    model: z.string().optional(),
    registration_no: z.string().optional(),
  }),
});
