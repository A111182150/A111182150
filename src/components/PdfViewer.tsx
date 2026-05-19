import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { getPublicAssetPath } from '../lib/utils';

// Set up the worker for pdf.js using modern unpkg link
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function PdfViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(600);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth - 40); // 40px padding
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }

  // Ensure url is properly resolved via getPublicAssetPath
  const resolvedUrl = url.startsWith('http') ? url : getPublicAssetPath(url);

  return (
    <div className="flex flex-col w-full h-full bg-[#05070a]/50 border border-white/5 shadow-2xl relative group" ref={containerRef}>
      {/* Toolbar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 p-2 bg-[#0a1423]/90 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-2xl">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setScale(s => Math.max(0.5, s - 0.25))}
            className="p-2 rounded-full hover:bg-white/10 text-accent/70 hover:text-accent transition-colors"
            title="縮小"
          >
            <ZoomOut size={16} />
          </button>
          <span className="text-[10px] font-mono text-accent/70 w-10 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale(s => Math.min(3, s + 0.25))}
            className="p-2 rounded-full hover:bg-white/10 text-accent/70 hover:text-accent transition-colors"
            title="放大"
          >
            <ZoomIn size={16} />
          </button>
        </div>
        
        <div className="w-[1px] h-4 bg-white/10"></div>
        
        <div className="flex items-center gap-2">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(p => p - 1)}
            className="p-2 rounded-full hover:bg-white/10 text-accent/70 hover:text-accent disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-[10px] font-mono tracking-widest text-accent/70 w-12 text-center">
            {pageNumber} / {numPages || '-'}
          </span>
          <button
            disabled={!numPages || pageNumber >= numPages}
            onClick={() => setPageNumber(p => p + 1)}
            className="p-2 rounded-full hover:bg-white/10 text-accent/70 hover:text-accent disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-auto flex justify-center py-6 custom-scrollbar">
        <Document
          file={resolvedUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex flex-col items-center"
          loading={
            <div className="flex items-center justify-center p-8 text-accent/50 animate-pulse text-xs font-mono tracking-widest h-full w-full">
              載入 PDF 中...
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center p-8 text-red-400 h-full w-full">
              <p className="text-sm">無法載入 PDF 檔案</p>
              <p className="text-xs mt-2 opacity-50">載入失敗: {resolvedUrl}</p>
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            scale={scale} 
            width={Math.min(containerWidth, 800)}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-2xl"
          />
        </Document>
      </div>
    </div>
  );
}
