import { Video, Box, Presentation, FileText, LucideIcon } from 'lucide-react';
import twinStarsImg from '../assets/twin_stars.png';

export interface AssignmentLink {
  name: string;
  url: string;
}

export interface Assignment {
  id: number;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  links: AssignmentLink[];
  longDescription?: string;
  tags?: string[];
  embedUrl?: string;
}

export const assignments: Assignment[] = [
  {
    id: 1,
    title: '3月30號 製作A版虛擬/計畫旅遊影片',
    shortTitle: '旅遊影片',
    icon: Video,
    description: '使用AI工具生成的虛擬旅遊計畫影片',
    links: [
      { name: 'YouTube 完整影片', url: 'https://youtu.be/deKbXi-a58Q?si=Rl0tdTzKvd7r5vep' },
      { name: '影片 1', url: 'https://hailuoai.video/zh-Hant/share/ai-video/Vj0pqDWm98le?source-scene=shared&source-media=shared_link' },
      { name: '影片 2', url: 'https://www.mindvideo.ai/zh-TW/v/F1FTZ/?utm_source=share' },
      { name: '影片 3', url: 'https://hailuoai.video/zh-Hant/share/ai-video/JpRDnbe7Zkz9?source-scene=shared&source-media=shared_link' },
      { name: '影片 4', url: 'https://hailuoai.video/zh-Hant/share/ai-video/GpnRJvz9Eq4E?source-scene=shared&source-media=shared_link' },
    ],
    embedUrl: 'https://www.youtube.com/embed/deKbXi-a58Q'
  },
  {
    id: 2,
    title: '3D公仔個人及其他攣生兄弟',
    shortTitle: '3D公仔',
    icon: Box,
    description: '使用 Tripo3D 製作的個人與攣生兄弟 3D 模型',
    links: [
      { name: '個人公仔', url: 'https://studio.tripo3d.ai/3d-model/b8af5081-c0ec-40d2-a58b-a26d51c537c0?invite_code=JMQKOF' },
      { name: '攣生兄弟 1', url: 'https://studio.tripo3d.ai/3d-model/711043e6-1a58-4a55-af4a-17079393ad51?invite_code=JMQKOF' },
      { name: '攣生兄弟 2', url: 'https://studio.tripo3d.ai/3d-model/db973071-1f96-4b0a-a099-9c9a168a44c5?invite_code=JMQKOF' },
    ],
    embedUrl: twinStarsImg
  },
  {
    id: 3,
    title: 'AI GAMMA簡報',
    shortTitle: 'GAMMA簡報',
    icon: Presentation,
    description: '使用 Gamma app 製作的 AI 簡報',
    links: [
      { name: '觀看簡報 (Gamma)', url: 'https://gamma.app/docs/-e9nmbeq95oegv4w' },
      { name: '開啟 Google Slides 簡報', url: 'https://drive.google.com/file/d/1f2Tal9QQ-1U90Rm68UoaIgv8A3jgknC9/view?usp=drive_link' }
    ],
    embedUrl: 'https://drive.google.com/file/d/1f2Tal9QQ-1U90Rm68UoaIgv8A3jgknC9/preview'
  },
  {
    id: 4,
    title: 'NotebookAI簡報: 2026 東京×北海道 雙城深度自由行',
    shortTitle: 'NotebookAI',
    icon: FileText,
    description: '由 NotebookLM 及 AI 工具整理生成的日本初訪情侶質感旅遊藍圖，涵蓋交通規劃、住宿建議與美學穿搭',
    links: [
      { name: '開啟 Google Slides 簡報', url: 'https://drive.google.com/file/d/1csj-jMpEkqswQVhpi-9BtUkYLJM8dC6C/view?usp=sharing' }
    ],
    embedUrl: 'https://drive.google.com/file/d/1csj-jMpEkqswQVhpi-9BtUkYLJM8dC6C/preview',
    longDescription: '這是一份高度客製化的旅遊企劃，探討「雙重節奏的浪漫」，從東京的「當代前衛與感官極致」轉換至北海道的「自然純粹與情感沉澱」。包括優雅應對 2026 航空電力新制和退稅流程、交通戰略矩陣分析、以及頂級燒肉與私人溫泉的極致饗宴。',
    tags: ['行程規劃', '情侶旅遊', '質感美學']
  },
  {
    id: 5,
    title: 'MANUS 專案簡報',
    shortTitle: 'MANUS',
    icon: FileText,
    description: '深入探討 MANUS 系統之應用與分析簡報',
    links: [
      { name: '開啟 Google Slides 簡報', url: 'https://drive.google.com/file/d/1tXqv2JL1h2EhLLOdSvNCz9NBFaNDOBeF/view?usp=drive_link' }
    ],
    embedUrl: 'https://drive.google.com/file/d/1tXqv2JL1h2EhLLOdSvNCz9NBFaNDOBeF/preview'
  },
];
