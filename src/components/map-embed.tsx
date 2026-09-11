export function MapEmbed({ query, title }: { query: string; title: string }) {
  return (
    <iframe
      src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
      title={title}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-72 w-full rounded-2xl border border-border sm:h-80"
    />
  );
}
