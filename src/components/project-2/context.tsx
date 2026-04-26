import Image from "next/image";

export default function Context() {
  return (
    <section className="w-full px-8 lg:px-16 py-16">

      {/* Top description */}
      <div className="mb-16">
        <p className="font-chandler text-sm leading-7 tracking-wide text-center">
          Wearable identity system for a pizza kitchen moving into a physical space.<br />
          Brutalist interior. Open kitchen. High-use environment.
        </p>
      </div>

      {/* Two-column: left (heading + text) | right (2x2 images) */}
      <div className="flex gap-8 lg:gap-12 items-start">

        {/* Left: [context] heading + body text */}
        <div className="w-72 lg:w-80 shrink-0">
          <h2 className="font-chandler text-4xl lg:text-5xl mb-8">[context]</h2>
          <p className="font-chandler text-sm leading-7 tracking-wide mb-6">
            Developed for Secret Slice Society
          </p>
          <p className="font-chandler text-sm leading-7 tracking-wide mb-6">
            Previously operating as a night kitchen,<br />
            transitioning into a<br />
            dine-in flagship.
          </p>
          <p className="font-chandler text-sm leading-7 tracking-wide">
            Space defined by<br />
            - minimal, structured<br />
            architecture<br />
            - open kitchen layout<br />
            - limited ventilation
          </p>
        </div>

        {/* Right: 2x2 image grid */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          <div className="relative w-full aspect-video">
            <Image
              src="/images/project-2/context/image1.webp"
              alt="Secret Slice Society interior 1"
              fill
              sizes="(max-width: 768px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-video">
            <Image
              src="/images/project-2/context/image2.webp"
              alt="Secret Slice Society interior 2"
              fill
              sizes="(max-width: 768px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-video">
            <Image
              src="/images/project-2/context/image3.webp"
              alt="Secret Slice Society interior 3"
              fill
              sizes="(max-width: 768px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-video">
            <Image
              src="/images/project-2/context/image4.webp"
              alt="Secret Slice Society interior 4"
              fill
              sizes="(max-width: 768px) 50vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
