import { z } from "zod";

import { BrandStatus } from "@/lib/types/brand";

export const BrandSchema = z.object({
    id: z.uuid(),

    name: z
        .string()
        .trim()
        .min(1)
        .max(120),

    slug: z
        .string()
        .trim()
        .min(1)
        .max(150),

    description: z
        .string()
        .nullable(),

    logoUrl: z
        .string()
        .url()
        .nullable(),

    bannerUrl: z
        .string()
        .url()
        .nullable(),

    websiteUrl: z
        .string()
        .url()
        .nullable(),

    country: z
        .string()
        .max(100)
        .nullable(),

    foundedYear: z
        .number()
        .int()
        .nullable(),

    status: z.enum([
        BrandStatus.PUBLISHED,
        BrandStatus.HIDDEN,
    ]),

    isFeatured: z.boolean(),

    displayOrder: z.number().int(),

    createdBy: z
        .string()
        .uuid()
        .nullable(),

    createdAt: z.iso.datetime(),

    updatedAt: z.iso.datetime(),
});

export const BrandsSchema = z.array(BrandSchema);

export type Brand = z.infer<typeof BrandSchema>;