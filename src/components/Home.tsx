import { Ship, Anchor, MapPin, Navigation as NavIcon, Languages, FileBadge, MonitorPlay, GraduationCap, Heart, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import profileImg from '../assets/IMG_4564.JPG';

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
      className="max-w-6xl mx-auto flex flex-col space-y-12 py-8"
    >
      {/* Hero Section */}
      <header className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-8 relative z-10">
        <div className="flex items-center gap-8">
          <div className="relative shrink-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-accent/30 p-1.5 bg-[#0a1423]">
              <img 
                src={profileImg} 
                alt="彭奕翔" 
                className="w-full h-full rounded-full object-cover filter brightness-110 contrast-110"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#05070A] ring-1 ring-green-500/20"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm tracking-[0.4em] opacity-50 uppercase mb-2">Deck Officer Portfolio</span>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white">
              彭奕翔 <span className="text-2xl sm:text-3xl font-light text-accent ml-2 sm:ml-4 whitespace-nowrap">PENG YI-XIANG</span>
            </h1>
          </div>
        </div>
        
        <div className="flex space-x-8 sm:space-x-12 text-xs sm:text-sm font-mono tracking-widest sm:text-right pb-2">
          <div className="flex flex-col">
            <span className="opacity-40 text-[10px]">HOROSCOPE</span>
            <span className="text-accent text-sm">摩羯座</span>
          </div>
          <div className="flex flex-col">
            <span className="opacity-40 text-[10px]">BLOOD TYPE</span>
            <span className="text-accent text-sm">O POSITIVE</span>
          </div>
          <div className="flex flex-col">
            <span className="opacity-40 text-[10px]">LOCATION</span>
            <span className="text-[#E0E6ED] text-sm">旗津校區五航四甲</span>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-12 gap-8 items-stretch">
        {/* Left Column */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-8">
          <section className="card-border p-8 rounded-sm">
            <h2 className="text-sm font-bold text-accent mb-6 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-3">
              Education / 歷程
            </h2>
            <div className="relative pl-6 border-l-2 border-[#00d1ff]/30">
              <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(0,209,255,0.5)]"></div>
              <p className="text-lg font-bold text-white mb-1">國立高雄科技大學</p>
              <p className="text-sm opacity-70 mb-2">航運技術系</p>
              <p className="text-xs text-accent mt-1 tracking-widest font-mono uppercase">2022.09.11 — 2027.06.30</p>
            </div>
          </section>

          <section className="card-border p-8 rounded-sm flex-grow">
            <h2 className="text-sm font-bold text-accent mb-6 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-3">
              Statement / 自傳摘要
            </h2>
            <div className="text-sm leading-relaxed opacity-80 space-y-5 font-light text-[#E0E6ED]">
              <p>
                「我是彭奕翔，就讀國立高雄科技大學旗津校區航運技術系五航四甲，是個認真且謹慎的學生，性格溫柔。在學校基本上沒出過甚麼事情，所以應該也算個好苗子。」
              </p>
              <p>
                「自幼對海洋充滿嚮往，深知海員不僅是一份職業，更是一種高度專業且需具備使命感的志業。在校期間，我保持優異操行，於專業科目如傳藝學、天文航海學等取得深刻理解，為海上實習打下堅實理論基礎。」
              </p>
              <p className="border-t border-accent/10 pt-4 text-accent/90">
                 這門資訊軟體應用課程我非常期待能學到關於相關軟體的應用，希望以後在船公司可以利用學到的知識完成工作。
              </p>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-8">
          <section className="card-border p-8 rounded-sm">
            <h2 className="text-sm font-bold text-accent mb-6 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-3">
              Professional & Languages / 技能與語言
            </h2>
            <div className="grid sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-[11px] uppercase opacity-40 tracking-[0.3em] text-white font-mono">Maritime Skills</p>
                <ul className="text-sm space-y-3 opacity-90">
                  {skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-accent text-lg leading-none">•</span> 
                      <span className="tracking-wide">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] uppercase opacity-40 tracking-[0.3em] text-white font-mono">Languages</p>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold tracking-wider">English</span>
                      <span className="text-xs text-accent font-mono tracking-widest">TOEIC 900</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-none h-[3px]">
                      <div className="bg-accent h-[3px] shadow-[0_0_8px_rgba(0,209,255,0.4)]" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-sm font-bold tracking-wider">台語 (Taiwanese)</span>
                      <span className="text-xs opacity-70 font-mono tracking-widest uppercase">Conversational</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-none h-[3px]">
                      <div className="bg-white/40 h-[3px]" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="card-border p-8 rounded-sm">
            <h2 className="text-sm font-bold text-accent mb-6 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-3">
              Certifications / 專業證照
            </h2>
            <div className="flex flex-wrap gap-4">
              {certs.map(cert => (
                <span key={cert} className="text-[11px] px-3 py-1.5 border border-accent/40 text-accent rounded-sm uppercase tracking-[0.2em] font-mono hover:bg-accent/5 transition-colors cursor-default">
                  {cert}
                </span>
              ))}
            </div>
          </section>

          <section className="card-border p-8 rounded-sm">
            <h2 className="text-sm font-bold text-accent mb-6 tracking-widest uppercase border-b border-[#00d1ff]/20 pb-3">
              Digital Proficiency / 電腦技能
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 text-xs font-mono tracking-widest">
              {compSkills.map(group => (
                <div key={group.category} className="group">
                  <p className="opacity-40 mb-2 border-l-2 border-transparent group-hover:border-accent pl-2 transition-all">{group.category.toUpperCase()}</p>
                  <p className="text-white opacity-90 pl-2">{group.items}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
