import Image from "next/image";

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 800;
const IMAGE_CLASS = "w-full h-[450px] object-cover";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] px-10 py-8">
      
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        {/* Left Title */}
        <h1 className="font-chandler text-7xl leading-none">
          PORTFOLIO
        </h1>

        {/* Right Name */}
        <div className="text-right mt-4">
          <h2 className="font-brim text-xl font-semibold">
            GOURI DHAWAN
          </h2>
          <h3 className="font-chandler text-sm">
            creative director
          </h3>
        </div>

      </div>

      {/* Projects Section */}
      <div className="mt-36 grid grid-cols-2 gap-10 pb-40">
        <div>
          <p className="font-chandler text-xl mb-3">Project one</p>
          <Image
            src="/images/hero-section/project-1.webp"
            alt="project one"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className={IMAGE_CLASS}
          />
        </div>

        <div>
          <p className="font-chandler text-xl mb-3">Project two</p>
          <Image
            src="/images/hero-section/project-2.webp"
            alt="project two"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className={IMAGE_CLASS}
          />
        </div>

        <div className="pt-10">
          <p className="font-chandler text-xl mb-3">Project three</p>
          <Image
            src="/images/hero-section/project-3.webp"
            alt="project three"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className={IMAGE_CLASS}
          />
        </div>

        <div className="pt-10">
          <p className="font-chandler text-xl mb-3">Project four</p>
          <Image
            src="/images/webp-only/hero-section/.webp"
            alt="project four"
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            className={IMAGE_CLASS}
          />
        </div>
      </div>

    </div>
  );
}