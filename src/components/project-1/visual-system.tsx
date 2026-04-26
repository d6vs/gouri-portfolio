import Image from "next/image";

export default function VisualSystem() {
  return (
    <section className="w-full px-8 lg:px-16 py-16">

      {/* ── Top row: palette (left) + visual system & role (right) ── */}
      <div className="flex gap-12 lg:gap-16 items-start">

        {/* Left: colour palette SVG */}
        <div className="w-80 lg:w-96 shrink-0 -rotate-3">
          <Image
            src="/images/project-1/visual-system/visualdesign.svg"
            alt="Colour palette"
            width={400}
            height={520}
            className="w-full h-auto"
          />
        </div>

        {/* Right: text content */}
        <div className="flex-1">

          {/* [visual system] */}
          <h2 className="font-chandler text-4xl lg:text-5xl mb-4">[visual system]</h2>
          <p className="font-chandler text-sm leading-7 tracking-wide">
            slow pacing, soft transitions,<br />
            partial framing, minimal tonal<br />
            range
          </p>

          {/* Avoided tropes — center of column */}
          <div className="flex justify-center mt-6 mb-10">
            <p className="font-chandler text-sm leading-7 tracking-wide max-w-xs">
              Avoided real estate tropes:<br />
              (no wide reveals, no fast edits,<br />
              no sales language)<br />
              Positioned closer to editorial<br />
              media.
            </p>
          </div>

          {/* [role] */}
          <h2 className="font-chandler text-3xl lg:text-4xl mb-5">[role]</h2>
          <div className="flex gap-12 lg:gap-16">
            <p className="font-chandler text-sm leading-8 tracking-wide">
              - Creative Direction<br />
              - Concept Development<br />
              - On-Screen Presence
            </p>
            <div>
              <p className="font-chandler text-sm leading-8 tracking-wide">Led:</p>
              <p className="font-chandler text-sm leading-8 tracking-wide mt-1">
                - moodboard<br />
                - spatial interpretation<br />
                - shoot planning<br />
                - team direction<br />
                - editing
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom row: output (left) + spatial edit (right/center) ── */}
      <div className="flex gap-12 lg:gap-16 items-start mt-16">

        {/* Left: [output] — aligned with palette column */}
        <div className="w-80 lg:w-96 shrink-0">
          <h2 className="font-chandler text-3xl lg:text-4xl mb-5">[output]</h2>
          <p className="font-chandler text-sm leading-8 tracking-wide">
            • 4 short-form videos<br />
            • Designed for Instagram<br />
            • Maintained consistent<br />
            &nbsp;&nbsp;editorial language across<br />
            &nbsp;&nbsp;formats
          </p>
        </div>

        {/* Right: [spatial edit] — centered within its column */}
        <div className="flex-1 text-center">
          <h2 className="font-chandler text-4xl lg:text-5xl mb-8">[spatial edit]</h2>
          <div className="inline-block text-left">
            <p className="font-chandler text-sm leading-7 tracking-wide mb-5">
              The entire house wasn&apos;t used.
            </p>
            <p className="font-chandler text-sm leading-7 tracking-wide mb-2">Selected fragments</p>
            <p className="font-chandler text-sm leading-7 tracking-wide">
              1. bathroom-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reflection, surface<br />
              2. kitchen edges-&nbsp;&nbsp;geometry<br />
              3. entryways-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transition<br />
              4. greenery-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contrast<br />
              5. exterior-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scale
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
