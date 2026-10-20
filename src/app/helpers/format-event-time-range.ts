export function formatEventTimeRange(
  startTime: string,
  endTime: string,
  timeZone: string
) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone,
  });

  const start = formatter.format(new Date(startTime));
  const end = formatter.format(new Date(endTime));

  return `${start} – ${end}`;
}