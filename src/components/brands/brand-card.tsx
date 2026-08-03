"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Globe,
  Pencil,
  Star,
  Trash2,
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
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/brands/${brand.slug}`)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl"
    >
      <CardContent className="space-y-6 p-8">
        <div className="flex items-start justify-between">
          <div>
            <Badge
              variant="outline"
              className="border-[#D4AF37]/40 text-[#D4AF37]"
            >
              {brand.status}
            </Badge>

            <h2 className="mt-6 text-3xl font-light tracking-wide transition-colors group-hover:text-[#D4AF37]">
              {brand.name}
            </h2>

            <p className="mt-2 text-muted-foreground">
              {brand.country ?? "Unknown Country"}
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              onClick={(e) => e.stopPropagation()}
              className="rounded-lg p-2 hover:bg-accent"
            >
              <MoreVertical className="h-5 w-5" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem
                className="text-destructive"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {brand.isFeatured && (
          <Badge className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]">
            <Star className="mr-1 h-3 w-3 fill-current" />
            Featured Brand
          </Badge>
        )}

        <p className="line-clamp-4 leading-7 text-muted-foreground">
          {brand.description ?? "No description available."}
        </p>

        <div className="grid grid-cols-2 gap-6 rounded-xl border border-border p-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Founded
            </p>

            <p className="mt-2 text-lg font-semibold">
              {brand.foundedYear ?? "-"}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Country
            </p>

            <p className="mt-2 text-lg font-semibold">{brand.country ?? "-"}</p>
          </div>
        </div>

        {brand.websiteUrl && (
          <Link
            href={brand.websiteUrl}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-[#D4AF37] transition hover:opacity-80"
          >
            <Globe className="h-4 w-4" />
            Official Website
          </Link>
        )}
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-4 border-t border-border p-6">
        <Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </Button>

        <Button
          variant="destructive"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
