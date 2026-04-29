import { Ship, Anchor, MapPin, Navigation as NavIcon, Languages, FileBadge, MonitorPlay, GraduationCap, Heart, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  const skills = [
    { name: '船舶駕駛 / 開船', icon: Ship },
    { name: '雷達操作與應用', icon: Anchor },
    { name: '航海規畫與導航', icon: NavIcon },
  ];

  const certs = ['四小證', '保全意識', '保全職責', '進階滅火', '救生艇筏', '醫療急救'];
  
  const compSkills = [
    { category: 'Microsoft Office', items: 'Word / Excel / PPT / Outlook' },
    { category: 'Apple iWork', items: 'Pages / Numbers / Keynote' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-5xl mx-auto flex flex-col space-y-8"
    >
      {/* Hero Section */}
      <header className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-4 relative z-10">
        <div className="flex flex-col">
          <span className="text-[10px] sm:text-xs tracking-[0.4em] opacity-50 uppercase mb-1">Deck Officer Portfolio</span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-white">
            彭奕翔 <span className="text-xl sm:text-2xl font-light text-accent ml-2 sm:ml-4">PENG YI-XIANG</span>
          </h1>
        </div>
        
        <div className="flex space-x-6 sm:space-x-8 text-[10px] sm:text-xs font-mono tracking-widest sm:text-right">
          <div className="flex flex-col">
            <span className="opacity-40">HOROSCOPE</span>
            <span className="text-accent">摩羯座</span>
          </div>
          <div className="flex flex-col">
            <span className="opacity-40">BLOOD TYPE</span>
            <span className="text-accent">O POSITIVE</span>
          </div>
          <div className="flex flex-col">
            <span className="opacity-40">LOCATION</span>
            <span className="text-[#E0E6ED]">旗津校區五航四甲</span>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-6 items-stretch">
        {/* Left Column */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
          <section className="card-border p-6 rounded-sm">
            <h2 className="text-xs font-bold text-accent mb-4 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-2">
              Education / 歷程
            </h2>
            <div className="relative pl-4 border-l border-[#00d1ff]/30">
              <div className="absolute w-2 h-2 bg-accent rounded-full -left-[4.5px] top-1"></div>
              <p className="text-sm font-semibold text-white">國立高雄科技大學</p>
              <p className="text-xs opacity-70">航運技術系</p>
              <p className="text-[10px] text-accent mt-1 tracking-wider">2022.09.11 — 2027.06.30</p>
            </div>
          </section>

          <section className="card-border p-6 rounded-sm flex-grow">
            <h2 className="text-xs font-bold text-accent mb-4 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-2">
              Statement / 自傳摘要
            </h2>
            <div className="text-xs leading-relaxed opacity-80 space-y-3 font-light text-[#E0E6ED]">
              <p>
                「我是彭奕翔，就讀國立高雄科技大學旗津校區航運技術系五航四甲，是個認真且謹慎的學生，性格溫柔。在學校基本上沒出過甚麼事情，所以應該也算個好苗子。」
              </p>
              <p>
                「自幼對海洋充滿嚮往，深知海員不僅是一份職業，更是一種高度專業且需具備使命感的志業。在校期間，我保持優異操行，於專業科目如傳藝學、天文航海學等取得深刻理解，為海上實習打下堅實理論基礎。」
              </p>
              <p>
                 這門資訊軟體應用課程我非常期待能學到關於相關軟體的應用，希望以後在船公司可以利用學到的知識完成工作。
              </p>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6">
          <section className="card-border p-6 rounded-sm">
            <h2 className="text-xs font-bold text-accent mb-4 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-2">
              Professional & Languages / 技能與語言
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-[10px] uppercase opacity-50 tracking-widest text-white">Maritime Skills</p>
                <ul className="text-xs space-y-2 opacity-90">
                  {skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-accent">•</span> {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] uppercase opacity-50 tracking-widest text-white">Languages</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-xs font-medium">English</span>
                      <span className="text-[10px] text-accent tracking-widest">TOEIC 900</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-none h-[2px]">
                      <div className="bg-accent h-[2px]" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-xs font-medium">台語</span>
                      <span className="text-[10px] opacity-70 tracking-widest">尚可</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-none h-[2px]">
                      <div className="bg-white/40 h-[2px]" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="card-border p-6 rounded-sm">
            <h2 className="text-xs font-bold text-accent mb-4 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-2">
              Certifications / 專業證照
            </h2>
            <div className="flex flex-wrap gap-3">
              {certs.map(cert => (
                <span key={cert} className="text-[10px] px-2 py-1 border border-accent text-accent rounded-sm uppercase tracking-widest shrink-0">
                  {cert}
                </span>
              ))}
            </div>
          </section>

          <section className="card-border p-6 rounded-sm">
            <h2 className="text-xs font-bold text-accent mb-4 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-2">
              Digital Proficiency / 電腦技能
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-[11px] font-mono tracking-wide">
              {compSkills.map(group => (
                <div key={group.category}>
                  <p className="opacity-50 mb-1">{group.category.toUpperCase()}</p>
                  <p className="text-white opacity-90">{group.items}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
