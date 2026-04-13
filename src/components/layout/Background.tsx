'use client';

export default function Background() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Luz Azul Superior Izquierda */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[100px] opacity-50 dark:opacity-20 animate-pulse-slow"></div>
      
      {/* Luz Cyan Inferior Derecha */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[100px] opacity-50 dark:opacity-20"></div>
      
      {/* Luz Central sutil (opcional) */}
      <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-indigo-500/5 rounded-full blur-[120px]"></div>
    </div>
  );
}