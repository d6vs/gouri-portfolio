import Image from "next/image";

export default function Project() {
  return (
    <>
      <Image 
        src="/images/project-1/hero/project-1.svg"
        alt="Project image"
        width={1200}
        height={400}
        className="w-xl h-m object-cover"
      />
    </>
  );
}