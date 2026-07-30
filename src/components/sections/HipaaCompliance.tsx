import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HipaaCompliance() {
  return (
    <section id="hipaa" className="bg-[#1e1e2e] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-10 md:text-left">
            <Image
              src="/hipaa-compliant-badge.svg"
              alt="HIPAA Compliant"
              width={155}
              height={60}
              className="h-16 w-auto shrink-0"
            />
            <p className="max-w-md text-sm leading-relaxed text-text-dark">
              Patient information is protected with encryption in transit and
              at rest, role-based access controls, and safeguards that meet
              HIPAA requirements.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
