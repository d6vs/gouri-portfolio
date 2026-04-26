import Image from "next/image";

export default function approach1() {
  return (
    <>
      <Image 
        src="/images/project-1/approach/approach-1.svg"
        alt="Project image"
        width={1200}
        height={400}
        className="w-xl h-l object-cover"
      />
    </>
  );
}