export default function Page2() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] px-10 py-8">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <p className="font-chandler text-[16px] mb-3">Project three</p>
          <img
            src="/images/image3.webp"
            alt="project three"
            className="w-full h-[320px] object-cover"
          />
        </div>

        <div>
          <p className="font-chandler text-[16px] mb-3">Project four</p>
          <img
            src="/images/image4.webp"
            alt="project four"
            className="w-full h-[320px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
