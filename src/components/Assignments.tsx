import { ExternalLink, Video, Box, Presentation, FileText } from 'lucide-react';
import { motion } from 'motion/react';

const assignments = [
  {
    id: 1,
    title: '3月30號 製作A版虛擬/計畫旅遊影片',
    icon: Video,
    description: '使用AI工具生成的虛擬旅遊計畫影片',
    links: [
      { name: '影片 1', url: 'https://hailuoai.video/zh-Hant/share/ai-video/Vj0pqDWm98le?source-scene=shared&source-media=shared_link' },
      { name: '影片 2', url: 'https://www.mindvideo.ai/zh-TW/v/F1FTZ/?utm_source=share' },
      { name: '影片 3', url: 'https://hailuoai.video/zh-Hant/share/ai-video/JpRDnbe7Zkz9?source-scene=shared&source-media=shared_link' },
      { name: '影片 4', url: 'https://hailuoai.video/zh-Hant/share/ai-video/GpnRJvz9Eq4E?source-scene=shared&source-media=shared_link' },
    ],
  },
  {
    id: 2,
    title: '3D公仔個人及其他攣生兄弟',
    icon: Box,
    description: '使用 Tripo3D 製作的個人與攣生兄弟 3D 模型',
    links: [
      { name: '個人公仔', url: 'https://studio.tripo3d.ai/3d-model/b8af5081-c0ec-40d2-a58b-a26d51c537c0?invite_code=JMQKOF' },
      { name: '攣生兄弟 1', url: 'https://studio.tripo3d.ai/3d-model/711043e6-1a58-4a55-af4a-17079393ad51?invite_code=JMQKOF' },
      { name: '攣生兄弟 2', url: 'https://studio.tripo3d.ai/3d-model/db973071-1f96-4b0a-a099-9c9a168a44c5?invite_code=JMQKOF' },
    ],
  },
  {
    id: 3,
    title: 'AI GAMMA簡報',
    icon: Presentation,
    description: '使用 Gamma app 製作的 AI 簡報',
    links: [
      { name: '觀看簡報', url: 'https://gamma.app/docs/-e9nmbeq95oegv4w' },
    ],
  },
  {
    id: 4,
    title: 'NotebookAI簡報: 2026 東京×北海道 雙城深度自由行',
    icon: FileText,
    description: '由 NotebookLM 及 AI 工具整理生成的日本初訪情侶質感旅遊藍圖，涵蓋交通規劃、住宿建議與美學穿搭',
    links: [
      { name: '開啟 PDF 簡報', url: '/presentation.pdf' }
    ],
  },
];

export function Assignments() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-3xl mx-auto"
    >
      <div className="mb-12 border-b border-[#00d1ff]/20 pb-6">
        <h1 className="text-[10px] sm:text-xs tracking-[0.4em] text-accent uppercase mb-2 font-mono">Assignments / 課程作業展演</h1>
        <p className="mt-2 text-sm text-[#E0E6ED]/70 max-w-2xl font-light leading-relaxed">
          資訊軟體應用課程的實作成果，運用 AI 工具結合創新思維完成的任務。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {assignments.map((assignment, index) => {
          const Icon = assignment.icon;
          return (
            <motion.div
              key={assignment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-border rounded-sm flex flex-col group transition-colors hover:border-[#00D1FF]/50"
            >
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-[#00D1FF]/10 text-accent rounded-sm border border-[#00D1FF]/20 group-hover:bg-accent group-hover:text-[#05070A] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-accent font-mono mb-1 tracking-widest">#0{assignment.id}</p>
                    <h2 className="text-sm font-bold text-white tracking-widest">{assignment.title}</h2>
                    <p className="text-[#E0E6ED]/60 text-xs mt-2 font-light">{assignment.description}</p>
                  </div>
                </div>

                {assignment.links.length > 0 && (
                  <div className="mt-auto pt-6 flex flex-wrap gap-2">
                    {assignment.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono tracking-widest text-[#00D1FF] bg-[#00D1FF]/5 
                                 hover:bg-[#00D1FF] hover:text-[#05070A] border border-[#00D1FF]/20 
                                 rounded-sm transition-all"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
                {assignment.id === 4 && (
                  <div className="mt-6 p-4 bg-black/40 rounded-sm border border-[#00d1ff]/10">
                    <p className="text-[11px] text-[#E0E6ED] leading-relaxed mb-4 font-light opacity-80">
                      這是一份高度客製化的旅遊企劃，探討「雙重節奏的浪漫」，從東京的「當代前衛與感官極致」轉換至北海道的「自然純粹與情感沉澱」。包括優雅應對 2026 航空電力新制和退稅流程、交通戰略矩陣分析、以及頂級燒肉與私人溫泉的極致饗宴。
                    </p>
                    <div className="flex gap-2 text-[9px] text-accent font-mono uppercase tracking-widest">
                      <span className="px-2 py-1 border border-accent/30 rounded-sm">行程規劃</span>
                      <span className="px-2 py-1 border border-accent/30 rounded-sm">情侶旅遊</span>
                      <span className="px-2 py-1 border border-accent/30 rounded-sm">質感美學</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
