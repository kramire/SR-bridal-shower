
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";

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

export default function SaveTheDatePage() {
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

            {/* Animated headline */}
            <div className="mb-8">
              <h1 className="font-[family-name:var(--font-script)] text-6xl leading-tight text-[var(--color-rose)] sm:text-7xl">
                <span className="write-in">
                  She's saying
                </span>
                <br />
                <span className="write-in-delay w-full">
                  "I do!  "
                </span>
              </h1>
            </div>

            {/* Floral divider */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[var(--color-border)]" />
              <span className="text-2xl text-[var(--color-sage)]">✿</span>
              <div className="h-px w-12 bg-[var(--color-border)]" />
            </div>

            {/* Event details */}
            <div className="details-reveal">

              <p className="mb-1 text-base font-semibold tracking-[0.2em] text-[var(--color-text-muted)]">
                Save the date
              </p>
              <p className="mb-3 text-base font-semibold tracking-[0.2em] text-[var(--color-text-muted)]">
                to honor the bride-to-be
              </p>

              <p className="mb-5 font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-wide text-[var(--color-text)] sm:text-5xl">
                Sarah Ramiré
              </p>

              <div className="space-y-2 font-[family-name:var(--font-serif)] text-2xl font-medium tracking-wide text-[var(--color-text)]">
                <p>Saturday, April 24, 2027</p>
                <p>
                  Westfield, NJ
                </p>
              </div>

              <p className="mt-6 text-xs font-medium tracking-[0.2em] text-[var(--color-text-muted)] sm:text-sm">
                Invitation to follow
              </p>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
