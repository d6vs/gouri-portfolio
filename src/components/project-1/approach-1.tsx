import Image from "next/image";

export default function Approach1() {
  return (
    <section className="w-full px-4 lg:px-8 pt-10">
      <h2 className="font-chandler text-3xl lg:text-4xl mb-4">[approach]</h2>
      <Image
        src="/images/project-1/approach/approach-1.svg"
        alt="Approach"
        width={1920}
        height={700}
        className="w-full h-auto block"
      />
    </section>
  );
}
