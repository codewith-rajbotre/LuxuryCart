export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto flex h-16 items-center justify-center px-6">
                <p className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Luxury Cart. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}