export const BrandStatus = {
    PUBLISHED: "published",
    HIDDEN: "hidden",
} as const;

export type BrandStatus =
    (typeof BrandStatus)[keyof typeof BrandStatus];

export interface Brand {
    id: string;

    name: string;

    slug: string;

    description: string | null;

    logoUrl: string | null;

    bannerUrl: string | null;

    websiteUrl: string | null;

    country: string | null;

    foundedYear: number | null;

    status: BrandStatus;

    isFeatured: boolean;

    displayOrder: number;

    createdBy: string | null;

    createdAt: string;

    updatedAt: string;
}