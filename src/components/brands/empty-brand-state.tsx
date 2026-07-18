import { Plus, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyBrandStateProps {
  onAddBrand?: () => void;
}

export default function EmptyBrandState({ onAddBrand }: EmptyBrandStateProps) {
  return (
    <Card className="border-border bg-card shadow-sm">
      <CardContent className="flex min-h-105 flex-col items-center justify-center px-6 py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/10">
          <Sparkles className="h-10 w-10 text-brand-gold" />
        </div>

        <h2 className="mt-8 text-3xl font-bold text-foreground">
          No Brands Available
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          Your luxury brand collection is currently empty. Add your first
          premium brand to begin building an exclusive catalogue for Luxury
          Cart.
        </p>

        <Button
          size="lg"
          onClick={onAddBrand}
          className="mt-10 bg-brand-gold font-semibold text-black hover:opacity-90"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add First Brand
        </Button>
      </CardContent>
    </Card>
  );
}
