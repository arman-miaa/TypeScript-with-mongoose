"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const cardValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    body: zod_1.z.string().optional(),
    date: zod_1.z.date().optional(),
});
exports.default = cardValidationSchema;
