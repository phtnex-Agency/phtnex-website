const brands = [
  'Travel Agencies & Tour Operators',
  'Immigration Consultants',
  'Tax & Financial Consultants',
  'Business Consultants',
  'Legal Consultants',
  'Real Estate Agents',
  'Wedding & Event Planners',
  'Clinics & Dental Practices',
  'Salons & Beauty Studios',
  'Gyms & Fitness Trainers',
  'Auto Workshops & Detailing',
  'Educational Academies & Tutors',
  'Interior Designers',
  'Photographers & Videographers',
  'Restaurants & Cafés',
]

// Duplicate for seamless loop
const marqueeItems = [...brands, ...brands]

export default function TrustBar() {
  return (
    <section className="section-py-sm border-y border-border bg-surface-2" aria-label="Trusted by">
      <div className="container-main mb-8">
        <p className="section-label text-center">
          HELPING PAKISTANI AGENCIES &amp; CONSULTANTS DOMINATE LOCAL SEARCH
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative" aria-hidden="true">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-surface-2 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-surface-2 to-transparent pointer-events-none" />

        <div className="flex whitespace-nowrap marquee-track">
          {marqueeItems.map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center px-10 lg:px-14"
            >
              <span className="font-display text-lg lg:text-xl font-medium text-ink-muted/60 tracking-tight select-none">
                {brand}
              </span>
              <span className="ml-10 lg:ml-14 w-1 h-1 rounded-full bg-border-dark inline-block flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
