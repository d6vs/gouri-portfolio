import Image from "next/image";

export default function problem() {
  return (
    <>
      <Image 
        src="/images/project-1/problem/problem.svg"
        alt="Project image"
        width={1200}
        height={400}
        className="w-xl h-l object-cover"
      />
    </>
  );
}