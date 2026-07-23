import Image from "next/image";
import Link from "next/link";

import {
  Globe,
  Pencil,
  Star,
  Trash2,
  Eye,
  Building2,
  MoreVertical,
} from "lucide-react";

import type { Brand } from "@/lib/types/brand";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <Card className="overflow-hidden border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Banner */}

      <div className="relative h-40 w-full bg-muted">
        {brand.bannerUrl ? (
          <Image
            src={brand.bannerUrl}
            alt={brand.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Building2 className="h-12 w-12 text-muted-foreground" />
          </div>
        )}
      </div>

      <CardContent className="space-y-6">
        {/* Header */}

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border bg-background">
              {brand.logoUrl ? (
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  fill
                  className="object-contain p-2"
                />
              ) : (
                <Building2 className="h-7 w-7 text-muted-foreground" />
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold">{brand.name}</h3>

              <p className="text-sm text-muted-foreground">
                {brand.country ?? "Unknown Country"}
              </p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent focus:outline-none">
              <MoreVertical className="h-4 w-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                View
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Status */}

        <div className="flex flex-wrap gap-2">
          <Badge>{brand.status}</Badge>

          {brand.isFeatured && (
            <Badge variant="secondary" className="gap-1">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </Badge>
          )}
        </div>

        {/* Description */}

        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
          {brand.description ?? "No description available."}
        </p>

        {/* Details */}

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Founded</span>

            <span>{brand.foundedYear ?? "-"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Website</span>

            {brand.websiteUrl ? (
              <Link
                href={brand.websiteUrl}
                target="_blank"
                className="flex items-center gap-1 text-brand-gold hover:underline"
              >
                <Globe className="h-4 w-4" />
                Visit
              </Link>
            ) : (
              <span>-</span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-3 gap-3">
        <Button variant="outline">
          <Eye className="mr-2 h-4 w-4" />
          View
        </Button>

        <Button variant="outline">
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </Button>

        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
