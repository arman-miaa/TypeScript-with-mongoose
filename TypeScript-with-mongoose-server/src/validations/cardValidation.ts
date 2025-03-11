import { z } from "zod";


const cardValidationSchema = z.object({
    title: z.string().min(1, "Title is required"),
    body: z.string().optional(),
    date: z.date().optional(),
})

export default cardValidationSchema;