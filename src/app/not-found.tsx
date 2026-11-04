
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

export default function NotFound() {
  return (
    <main
      className={`${script.variable} ${serif.variable} min-h-screen bg-[var(--color-background)] text-[var(--color-text)] overflow-hidden`}
    >
      <section className="relative flex min-h-screen items-center justify-center px-6 py-10">
        {/* Decorative florals */}
        <div className="pointer-events-none absolute -left-12 top-0 rotate-[-25deg] font-[family-name:var(--font-serif)] text-[120px] text-[var(--color-floral-sage)] opacity-60">
          ❀
        </div>
        <div className="pointer-events-none absolute -right-10 bottom-0 rotate-[25deg] font-[family-name:var(--font-serif)] text-[140px] text-[var(--color-floral-rose)] opacity-70">
          ✿
        </div>
        {/* Invitation card */}
        <div className="relative z-10 w-full max-w-2xl border border-[var(--color-border)] bg-[var(--color-paper)] px-7 py-16 text-center shadow-[0_10px_50px_var(--color-shadow)] sm:px-16 sm:py-20">
          {/* Inner border */}
          <div className="pointer-events-none absolute inset-3 border border-[var(--color-border-soft)]" />
          <div className="relative">
            {/* Intro */}
            <p className="mb-10 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-text-muted)] sm:text-sm">
              A special celebration is blooming
            </p>
            {/* Floral divider */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[var(--color-border)]" />
              <span className="text-2xl text-[var(--color-sage)]">✿</span>
              <div className="h-px w-12 bg-[var(--color-border)]" />
            </div>
            <div>
              <div className="space-y-2 font-[family-name:var(--font-serif)] text-2xl font-medium tracking-wide text-[var(--color-text)] mb-3">
                <p>Sorry, this page is</p>
              </div>
              <p className="mb-5 font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-wide text-[var(--color-text)] sm:text-5xl">
                Not Found
              </p>
              <Link href="/save-the-date" className="underline mt-10 text-xs font-medium tracking-[0.2em] text-[var(--color-text-muted)] sm:text-sm">
                View Save-the-Date
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
