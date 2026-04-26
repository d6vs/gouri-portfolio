import Image from "next/image";
import VideoPlayer from "@/components/ui/VideoPlayer";

const projects = [
  {
    label: "Project one",
    video:
      "https://www.youtube.com/embed/cH40jaVHtRM?si=7jkMyAs6IC2iO-9p&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1",
  },
  {
    label: "Project two",
    src: "/images/hero-section/project-2.webp",
    alt: "project two",
  },
  {
    label: "Project three",
    src: "/images/hero-section/project-3.webp",
    alt: "project three",
  },
  {
    label: "Project four",
    src: "/images/hero-section/project-4.webp",
    alt: "project four",
  },
];

export default function HeroSection() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">

      {/* Top Section */}
      <div className="flex justify-between items-start">
        <h1 className="font-chandler text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none">
          PORTFOLIO
        </h1>

        <div className="text-right mt-1 sm:mt-2 lg:mt-4">
          <h2 className="font-brim text-sm sm:text-base lg:text-xl font-semibold">
            GOURI DHAWAN
          </h2>
          <h3 className="font-chandler text-xs sm:text-sm">
            creative director
          </h3>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-10 sm:mt-20 lg:mt-36 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pb-16 sm:pb-28 lg:pb-40">
        {projects.map((project, index) => (
          <div key={index} className={index >= 2 ? "sm:pt-10" : ""}>
            <p className="font-chandler text-base sm:text-lg lg:text-xl mb-2 sm:mb-3">
              {project.label}
            </p>
            {project.video ? (
              <VideoPlayer
                src={project.video}
                label={project.label}
                className="w-full text-center aspect-video rounded-lg overflow-hidden mt-12"
              />
            ) : (
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-112">
                <Image
                  src={project.src!}
                  alt={project.alt!}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
