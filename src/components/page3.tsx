export default function Page3() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] px-10 py-8">
      <div className="mx-auto max-w-[1280px] rounded-[32px] border border-[#d9d9d9] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-[28px] border border-[#e5e5e5] bg-[#f7f7f7] p-10 text-left">
            <span className="font-chandler text-[16px] uppercase tracking-[0.3em] text-[#1a1a1a]">
              Project one
            </span>
            <h1 className="font-chandler mt-6 text-[64px] leading-[0.9] text-[#111111]">
              SOFT<br />STRUCTURES
            </h1>
            <p className="font-brim mt-4 text-[18px] text-[#3e3e3e]">
              Unfurnished residence.
            </p>
            <div className="mt-10 text-[14px] text-[#454545]">
              <p>Black Rock Homes | Villa Blanco</p>
              <p className="mt-2">Contemporary Residence</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#e5e5e5] bg-[#f2f2f2]">
            <img
              src="/images/image5.webp"
              alt="Soft Structures project" 
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/90 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
