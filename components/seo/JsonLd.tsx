/**
 * Injects JSON-LD in document (safe stringify, no user HTML).
 */
export default function JsonLd({
  data,
}: {
  data: Record<string, unknown> | { "@context": string; "@graph": unknown[] };
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
