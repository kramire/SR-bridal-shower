import { EVENT, SECTIONS, LOCAL_ACTIVITIES, MAPS_URL } from "@/app/App.constants";


export default function InvitationPage() {
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: EVENT.timeZone,
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: EVENT.timeZone,
  });

  const eventDate = dateFormatter.format(new Date(EVENT.startTime));
  const eventTime = `${timeFormatter.format(
    new Date(EVENT.startTime)
  )} – ${timeFormatter.format(new Date(EVENT.endTime))} ET`;

  return (
    <main className="overflow-hidden bg-paper font-body text-ink">
      {/* HERO */}
      <section
        aria-labelledby="hero-title"
        className="relative grid min-h-svh place-items-center px-6 py-12 text-center sm:py-16"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
          <span className="animate-hero-appear text-[10px] font-semibold tracking-[0.2em] text-ink-soft">
            WITH LOVE, WE INVITE YOU TO
          </span>

          <span
            aria-hidden="true"
            className="animate-floral-appear mb-3 mt-7 text-3xl text-accent"
          >
            ❀
          </span>

          <h1
            id="hero-title"
            className="animate-hero-appear font-script text-[clamp(3rem,10vw,5.125rem)] leading-tight"
          >
            A Bridal Shower
          </h1>

          <p className="mt-5 text-xs tracking-wide text-ink-soft">
            honoring the bride-to-be
          </p>

          <p className="mt-2 max-w-full break-words font-script text-[clamp(2.625rem,9vw,4.25rem)] leading-snug">
            {EVENT.bride}
          </p>

          <div
            aria-hidden="true"
            className="my-7 flex w-32 items-center gap-3 text-accent"
          >
            <span className="h-px flex-1 bg-line" />
            <span className="text-xl font-bold">✳</span>
            <span className="h-px flex-1 bg-line" />
          </div>

          <p className="text-base tracking-wider">{eventDate}</p>
          <p className="text-base leading-loose">
            Westfield, New Jersey
          </p>

          <a
            href="#details"
            className="mt-8 inline-flex min-h-12 min-w-50 items-center justify-center gap-4 border border-ink bg-ink px-6 py-3 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-ink"
          >
            See details
          </a>

          <a
            href="#details"
            aria-label="Scroll to event details"
            className="mt-8 flex flex-col items-center gap-3 text-ink-soft no-underline"
          >
            <span className="text-xs tracking-[0.2em]">
              SCROLL TO EXPLORE
            </span>
            <span
              aria-hidden="true"
              className="animate-arrow-bounce text-2xl text-ink"
            >
              ↓
            </span>
          </a>
        </div>
      </section>

      {/* WELCOME & EVENT DETAILS */}
      <section
        id="details"
        className="scroll-mt-6 border-t border-line px-6 py-20 text-center sm:py-28"
      >
        <div className="mx-auto max-w-2xl">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-ink-soft">
            A NOTE FROM THE HOSTS
          </p>

          <h2 className="mt-4 font-script text-4xl sm:text-5xl">
            A day to celebrate
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-xs leading-[2.2] text-ink-soft sm:text-sm">
            {EVENT.welcome}
          </p>

          <div className="mx-auto mt-12 max-w-lg border border-line px-6 py-10 sm:px-12 sm:py-14">
            <span
              aria-hidden="true"
              className="text-2xl text-accent"
            >
              ✳
            </span>

            <h3 className="mt-5 font-script text-3xl">
              The celebration
            </h3>

            <div className="mt-8 space-y-7 text-xs">
              <div>
                <p className="mb-2 text-[9px] tracking-[0.2em] text-ink-soft">
                  DATE
                </p>
                <p>{eventDate}</p>
              </div>

              <div>
                <p className="mb-2 text-[9px] tracking-[0.2em] text-ink-soft">
                  TIME
                </p>
                <p>{eventTime}</p>
              </div>

              <div>
                <p className="mb-2 text-[9px] tracking-[0.2em] text-ink-soft">
                  VENUE
                </p>
                <p>{EVENT.venue}</p>
                <p className="mt-1 text-ink-soft">{EVENT.address}</p>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex border-b border-accent pb-1 text-[11px] hover:border-ink"
            >
              Get directions ↗
            </a>
          </div>
        </div>
      </section>

      {/* PHOTO */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          {EVENT.photoUrl ? (
            <img
              src={EVENT.photoUrl}
              alt={`Celebrating ${EVENT.bride}`}
              className="max-h-[650px] w-full object-cover object-center"
            />
          ) : (
            <div className="flex min-h-[280px] flex-col items-center justify-center bg-paper-soft px-6 text-center sm:min-h-[420px]">
              <span
                aria-hidden="true"
                className="text-4xl text-accent"
              >
                ❀
              </span>
              <p className="mt-4 text-xs text-ink-soft">
                A favorite photo of the bride goes here
              </p>
              <p className="mt-1 text-[10px] text-ink-soft">
                Add your photo when you're ready
              </p>
            </div>
          )}
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="bg-paper-soft px-6 py-20 text-center sm:py-24"
      >
        <div className="mx-auto max-w-xl">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-ink-soft">
            WE HOPE YOU CAN JOIN US
          </p>

          <h2 className="mt-4 font-script text-4xl sm:text-5xl">
            Kindly RSVP
          </h2>

          <p className="mt-5 text-xs leading-loose text-ink-soft">
            Please let us know if you can celebrate with us by{" "}
            {EVENT.rsvpBy}.
          </p>

          {EVENT.rsvpUrl.startsWith("http") ? (
            <a
              href={EVENT.rsvpUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-4 border border-ink bg-ink px-8 py-3 text-[11px] text-white transition-colors hover:bg-white hover:text-ink"
            >
              RSVP HERE <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <p className="mt-7 text-xs text-ink-soft">
              [Add your RSVP link or contact information]
            </p>
          )}
        </div>
      </section>

      {/* GIFTS */}
      <section
        id="gifts"
        className="px-6 py-20 text-center sm:py-24"
      >
        <div className="mx-auto max-w-xl">
          <span
            aria-hidden="true"
            className="text-2xl text-accent"
          >
            ❀
          </span>

          <h2 className="mt-4 font-script text-4xl sm:text-5xl">
            A little note on gifts
          </h2>

          <p className="mt-5 text-xs leading-[2.2] text-ink-soft">
            {EVENT.giftNote}
          </p>

          {EVENT.registryUrl.startsWith("http") && (
            <a
              href={EVENT.registryUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex border-b border-accent pb-1 text-[11px] hover:border-ink"
            >
              View the registry ↗
            </a>
          )}
        </div>
      </section>

      {/* ARRIVAL GUIDE */}
      <section
        id="arrival"
        className="bg-paper-soft px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-ink-soft">
              MAKING YOUR WAY TO US
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl">
              Directions & arrival
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-[2.2] text-ink-soft">
              Whether you're driving in or taking the train from New York,
              here's a little help planning your trip.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {SECTIONS.map((section) => (
              <article
                key={section.number}
                className="border border-line bg-white p-7 sm:p-9"
              >
                <p className="text-[10px] tracking-[0.2em] text-accent">
                  {section.number}
                </p>

                <h3 className="mt-4 text-3xl">
                  {section.title}
                </h3>

                <p className="mt-4 text-sm leading-[2.2] text-ink-soft">
                  {section.description}
                </p>

                <a
                  href={section.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex border-b border-accent pb-1 text-[11px] hover:border-ink"
                >
                  {section.link} ↗
                </a>
              </article>
            ))}
          </div>

          <div className="mt-5 border border-line bg-white p-7 sm:p-9">
            <p className="text-[10px] tracking-[0.2em] text-accent">
              A LITTLE EXTRA HELP
            </p>

            <h3 className="mt-3 text-3xl">
              Before you arrive
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-[2.1] text-ink-soft">
              <li>
                <span className="mr-2 text-ink">✳</span>
                <strong className="font-semibold text-ink">
                  Parking:
                </strong>{" "}
                [Add parking locations, costs, restrictions, and walking
                distance to the venue.]
              </li>
              <li>
                <span className="mr-2 text-ink">✳</span>
                <strong className="font-semibold text-ink">
                  Train travel:
                </strong>{" "}
                Check NJ Transit for the latest weekend schedules and
                connections before departing.
              </li>
              <li>
                <span className="mr-2 text-ink">✳</span>
                <strong className="font-semibold text-ink">
                  Arrival time:
                </strong>{" "}
                [Add when guests should arrive and any building access
                instructions.]
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* THINGS TO DO IN WESTFIELD */}
      <section
        id="explore"
        className="px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-ink-soft">
              MAKING A DAY OF IT
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl">
              Explore Westfield
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-[2.2] text-ink-soft">
              Staying a little longer? Here are a few ideas for enjoying
              some extra time in town.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {LOCAL_ACTIVITIES.map((activity) => (
              <article
                key={activity.title}
                className="border border-line p-6 transition-colors duration-200 hover:bg-paper-soft sm:p-7"
              >
                <p className="text-[9px] tracking-[0.18em] text-accent">
                  {activity.category}
                </p>

                <h3 className="mt-4 text-3xl">
                  {activity.title}
                </h3>

                <p className="mt-4 text-sm leading-[2.2] text-ink-soft">
                  {activity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line px-6 py-14 text-center">
        <p className="font-script text-3xl">
          With love,
        </p>

        <p className="mt-3 text-[9px] tracking-[0.2em] text-ink-soft">
          WE CAN'T WAIT TO CELEBRATE WITH YOU
        </p>

        <a
          href="#top"
          className="mt-8 inline-block text-[10px] text-ink-soft underline decoration-line underline-offset-4 hover:text-ink"
        >
          Back to the top ↑
        </a>
      </footer>
    </main>
  );
}
