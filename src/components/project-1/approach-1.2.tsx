import Image from "next/image";

export default function approach2() {
  return (
    <>
      <Image 
        src="/images/project-1/approach/approach-2.svg"
        alt="Project image"
        width={1200}
        height={400}
        className="object-contain"
      />
    </>
  );
}