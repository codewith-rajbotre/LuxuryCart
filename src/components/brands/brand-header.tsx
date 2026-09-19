"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import CreateBrandDialog from "./create-brand-dialog";

interface BrandHeaderProps {
  totalBrands: number;
}

export default function BrandHeader({ totalBrands }: BrandHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Brands
            </h1>

            <Badge variant="secondary" className="rounded-full">
              {totalBrands}
            </Badge>
          </div>

          <p className="max-w-2xl text-muted-foreground">
            Manage the world's finest luxury brands showcased on AUREQUIS PARIJAT.
            Add, update, and organize premium brand collections from one place.
          </p>
        </div>

        <Button
          size="lg"
          onClick={() => setOpen(true)}
          className="bg-brand-gold font-semibold text-black hover:opacity-90"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add Brand
        </Button>
      </header>

      <CreateBrandDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
