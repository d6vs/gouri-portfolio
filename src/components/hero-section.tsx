export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] px-10 py-8">
      
      {/* Top Section */}
      <div className="flex justify-between items-start">
        
        {/* Left Title */}
        <h1 className="font-chandler text-[80px] leading-none">
          PORTFOLIO
        </h1>

        {/* Right Name */}
        <div className="text-right mt-4">
          <h2 className="font-brim text-[20px] font-semibold">
            GOURI DHAWAN
          </h2>
          <h3 className="font-chandler text-[14px]">
            creative director
          </h3>
        </div>

      </div>

      {/* Projects Section */}
      <div className="mt-36 grid grid-cols-2 gap-10">
        
        {/* Project One */}
        <div>
          <p className="font-chandler text-[16px] mb-3">
            Project one
          </p>
          <img
            src="/images/image1.webp"
            alt="project one"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Project Two */}
        <div>
          <p className="font-chandler text-[16px] mb-3">
            Project two
          </p>
          <img
            src="/images/image2.webp"
            alt="project two"
            className="w-full h-[400px] object-cover"
          />
        </div>

      </div>

    </div>
  );
}