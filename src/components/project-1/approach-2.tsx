import Image from "next/image";

export default function Approach2() {
  return (
    <section className="w-full px-4 lg:px-8 pt-10">
      <Image
        src="/images/project-1/approach/approach-2.svg"
        alt="Approach"
        width={1920}
        height={700}
        className="w-full h-auto block"
      />

      {/* Bottom text row */}
      <div className="flex justify-between items-start mt-8 gap-8">
        <div className="max-w-sm">
          <p className="font-chandler text-sm leading-7 tracking-wide">
            Worked only with what existed:
          </p>
          <p className="font-chandler text-sm leading-7 tracking-wide mt-4">
            Shifted&nbsp;&nbsp;from&nbsp;&nbsp;documentation<br />
            to&nbsp;interpretation.
          </p>
        </div>

        <div className="text-left">
          <p className="font-chandler text-sm leading-7 tracking-wide">- light</p>
          <p className="font-chandler text-sm leading-7 tracking-wide">- material</p>
          <p className="font-chandler text-sm leading-7 tracking-wide">- proportion</p>
          <p className="font-chandler text-sm leading-7 tracking-wide">- movement</p>
        </div>
      </div>
    </section>
  );
}
