import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Testimonial = {
  quote: string;
  name: string;
  credentials: string;
  practiceName: string;
  practiceUrl: string;
  headshot: string;
  logo?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "FlowSurge shined a light on where leads and referrals were quietly getting lost in the shuffle of our busy practice. It pushed us to take a hard look at what was working and what wasn't — and showed us what next-level processes look like. That sparked us to sharpen our operations and pour our energy into the things that really drive growth.",
    name: "Dr. Silas Dudley",
    credentials: "DDS, MSD",
    practiceName: "Dudley Smiles Orthodontics",
    practiceUrl: "https://dudleysmiles.com/",
    headshot: "/dr-silas-dudley.jpg",
    logo: "/dudley-smiles-logo.svg",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm md:p-12">
      <svg
        className="mb-6 h-10 w-10 text-teal"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.6 4.8C5.9 6.9 3.6 10.2 3.6 14.4c0 3 1.8 4.8 4 4.8 2 0 3.5-1.5 3.5-3.5 0-1.9-1.4-3.3-3.2-3.3-.3 0-.7.1-.8.1.3-2.3 2.3-5 4.4-6.3L9.6 4.8zm9.7 0c-3.6 2.1-6 5.4-6 9.6 0 3 1.8 4.8 4 4.8 2 0 3.5-1.5 3.5-3.5 0-1.9-1.4-3.3-3.2-3.3-.3 0-.6.1-.8.1.3-2.3 2.3-5 4.4-6.3l-1.9-1.4z" />
      </svg>
      <blockquote className="flex-1 text-lg leading-relaxed text-text-body md:text-xl">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-8">
        <Image
          src={testimonial.headshot}
          alt={`${testimonial.name}, ${testimonial.practiceName}`}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover object-[center_20%]"
        />
        <div className="flex-1">
          <div className="font-semibold text-text-heading">
            {testimonial.name}, {testimonial.credentials}
          </div>
          <a
            href={testimonial.practiceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted transition-colors hover:text-teal"
          >
            {testimonial.practiceName}
          </a>
        </div>
        {testimonial.logo && (
          <a
            href={testimonial.practiceUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={testimonial.practiceName}
          >
            <Image
              src={testimonial.logo}
              alt={`${testimonial.practiceName} logo`}
              width={98}
              height={60}
              className="h-14 w-auto"
            />
          </a>
        )}
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={
            testimonials.length === 1
              ? "mx-auto max-w-3xl"
              : "grid gap-8 md:grid-cols-2"
          }
        >
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.15}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
