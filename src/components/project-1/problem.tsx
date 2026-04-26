import Image from "next/image";

export default function Problem() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">

      <Image
        src="/images/project-1/problem/problem.svg"
        alt="Project image"
        width={120}
        height={180}
        className="w-2/3 h-auto block"
      />

      {/* [problem] — top right, over image */}
      <div className="absolute top-8 right-8 z-10 text-right max-w-xs">
        <h2 className="font-chandler text-4xl mb-4">[problem]</h2>
        <p className="font-chandler text-sm leading-7 tracking-wide text-left">
          - No furniture<br />
          - No styling<br />
          - No lived-in context
        </p>
        <p className="font-chandler text-sm leading-7 tracking-wide mt-6 text-left">
          The question became:<br />
          How does an empty<br />
          space still hold<br />
          feeling?
        </p>
      </div>

      {/* [intent] — bottom left, over image */}
      <div className="absolute bottom-8 left-8 z-10 max-w-xs">
        <h2 className="font-chandler text-4xl mb-4">[intent]</h2>
        <p className="font-chandler text-sm leading-7 tracking-wide">
          A home is not just visual.<br />
          It&apos;s something you return to;<br />
          to pause, to reset. The work<br />
          focused on capturing that<br />
          quality, instead of presenting<br />
          the property conventionally.
        </p>
      </div>

    </section>
  );
}
