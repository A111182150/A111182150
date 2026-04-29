import { Anchor } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#00d1ff]/20 py-8 relative z-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#E0E6ED]/40 font-mono tracking-widest uppercase">
        <div>COORD: 22.6105° N, 120.2924° E | NKUST CIJIN CAMPUS</div>
        <div>NAVIGATIONAL PORTFOLIO v1.0.4</div>
      </div>
    </footer>
  );
}
