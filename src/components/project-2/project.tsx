import Image from "next/image";

export default function Project2() {
  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 md:p-0 md:h-screen">
      <div className="relative w-full h-[56vw] sm:h-[50vw] md:h-[95vh]">
        <Image
          src="/images/project-2/hero/hero.svg"
          alt="Project image"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
