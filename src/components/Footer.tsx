import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 bg-[hsl(var(--background))]">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Park Secheol. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/seru1027"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
