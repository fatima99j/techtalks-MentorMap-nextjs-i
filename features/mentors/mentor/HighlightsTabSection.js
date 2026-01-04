export default function HighlightsTabSection({ mentor }) {
  const { highlights } = mentor;

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Highlights</h2>
        <p className="text-base text-gray-600">
          Selected work, achievements, and contributions.
        </p>
      </div>

      <div className="space-y-4 mt-6">
        {highlights.map((highlight, index) => (
          <div key={index} className="border-l-2 border-primary-600 pl-4">
            <h3 className="text-base font-medium text-gray-900 mb-2">
              {highlight.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
