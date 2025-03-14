import { z } from "zod";


const cardValidationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  date: z.string().optional(),
});

export default cardValidationSchema;