import Container from "./ui/Container";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 bg-[hsl(var(--background))]">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Park Secheol. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/seru1027"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/admin"
              className="flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-primary transition-all border border-white/5 bg-white/2 px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              <Lock className="w-3 h-3" />
              Admin
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
