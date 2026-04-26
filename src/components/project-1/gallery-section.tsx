import VideoPlayer from "@/components/ui/VideoPlayer";

export default function GallerySection() {
  return (
    <section className="w-full">

      {/* 1st — full width landscape */}
      <div className="m-10">
      <VideoPlayer
        src="https://www.youtube.com/embed/cH40jaVHtRM?si=-OKrRvuAKBhg6_TR&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
        label="Villa Blanco Film 1"
        className="w-full"
      />
      </div>

      {/* 2nd — full width landscape */}
      <div className="m-10">

     
      <VideoPlayer
        src="https://www.youtube.com/embed/7MWHFN4CeWQ?si=niRQ7OH-PfrQiSaw&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
        label="Villa Blanco Film 2"
        className="w-full"
      />
       </div>

      {/* 3rd — 3-column: empty | short 1 | short 2 */}
      <div className="grid grid-cols-3 p-10 gap-4">

        {/* 1st third — empty */}
        <div />

        {/* 2nd third — YouTube Short (portrait 9:16) */}
        <div className="relative w-full aspect-9/16 overflow-hidden group">
          <iframe
            src="https://www.youtube.com/embed/th-AJnwt2KU?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1&loop=1&playlist=th-AJnwt2KU"
            title="Villa Blanco Short 1"
            className="absolute left-0 w-full"
            style={{ border: 0, top: "-60px", height: "calc(100% + 120px)" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="absolute inset-0 z-6" />
        </div>

        {/* 3rd third — YouTube Short (portrait 9:16) */}
        <div className="relative w-full aspect-9/16 overflow-hidden group">
          <iframe
            src="https://www.youtube.com/embed/mYpAXfejorQ?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1&loop=1&playlist=mYpAXfejorQ"
            title="Villa Blanco Short 2"
            className="absolute left-0 w-full"
            style={{ border: 0, top: "-60px", height: "calc(100% + 120px)" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="absolute inset-0 z-6" />
        </div>

      </div>

      {/* [note] */}
      <div className="flex justify-end px-10 py-16">
        <div className="max-w-md">
          <h2 className="font-chandler text-3xl lg:text-4xl mb-4">[note]</h2>
          <p className="font-chandler text-sm leading-7 tracking-wide">
            This project clarified how, sometimes, little is<br />
            required to construct atmosphere.<br />
            Without objects, space is defined by framing, timing,<br />
            and movement.
          </p>
        </div>
      </div>

    </section>
  );
}
