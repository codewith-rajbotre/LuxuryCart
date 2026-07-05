import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home(): React.JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <Card className="w-full max-w-xl border-border shadow-2xl">
        <CardContent className="flex flex-col items-center gap-6 py-14 text-center">
          <Badge variant="secondary">Private Luxury Marketplace</Badge>

          <h1 className="text-5xl font-bold tracking-tight">
            Luxury Cart
          </h1>

          <p className="max-w-md text-muted-foreground italic">
            "Reserved for those who seek legacy over luxury."
          </p>

          <p className="text-sm text-muted-foreground">
            © 2026 Luxury Cart. All Rights Reserved.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}