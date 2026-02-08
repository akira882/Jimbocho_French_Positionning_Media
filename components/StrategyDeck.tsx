import React from 'react';
import { RESTAURANTS } from '../data';

interface StrategyDeckProps {
  onApprove: () => void;
}

export const StrategyDeck: React.FC<StrategyDeckProps> = ({ onApprove }) => {
  // Find specific restaurants by ID to ensure correct placement in the matrix regardless of array order
  const garb = RESTAURANTS.find(r => r.id === 'garb_pintino');
  const gokita = RESTAURANTS.find(r => r.id === 'jimbocho_gokita');
  const cadet = RESTAURANTS.find(r => r.id === 'cadet');

  if (!garb || !gokita || !cadet) return null;

  return (
    <div className="min-h-screen bg-white text-tc-black font-sans p-4 md:p-12 pb-32">
      <div className="max-w-6xl mx-auto">
        {/* Slide 1: Title */}
        <div className="border-b-4 border-black pb-10 mb-20">
          <p className="text-gray-500 font-bold tracking-widest uppercase mb-2">Strategic Web Concept</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            The <span className="text-blue-700">"Concierge"</span> Model
          </h1>
          <p className="text-2xl font-serif text-gray-700 mt-6">
            恣意性を排除し、信頼を獲得する。<br/>
            神保町フレンチ・ポジショニング戦略
          </p>
          <div className="mt-8 flex gap-4 text-sm font-bold text-gray-400">
            <span>CLIENT: cadet & GARB pintino</span>
            <span>APPROACH: User-Centric Recommendation</span>
            <span>GOAL: Trust & Conversion</span>
          </div>
        </div>

        {/* Slide 2: Market Segmentation */}
        <section className="mb-24">
            <h2 className="text-3xl font-bold mb-10 flex items-center">
                <span className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full mr-4 text-xl">01</span>
                神保町フレンチの「序列と役割」
            </h2>
            <p className="text-lg mb-8 text-gray-600 max-w-3xl">
                神保町には優れたフレンチが存在するが、その利用動機は明確に異なる。<br/>
                まず<span className="font-bold text-black">「圧倒的な本質（Cadet）」</span>を提示し、
                その対極にある<span className="font-bold text-black">「社交の場（GARB）」</span>、
                そして比較対象としての<span className="font-bold text-gray-500">「伝統（五木田）」</span>を配置。<br/>
                クライアント2店舗で「静」と「動」のニーズを完全網羅する。
            </p>

            <div className="grid md:grid-cols-3 gap-0 border border-gray-200 shadow-xl rounded-xl overflow-hidden">
                {/* 1. Cadet (The Hero/Client) */}
                <div className="p-8 bg-white relative z-10 border-t-4 border-blue-600 shadow-2xl transform md:scale-105 md:origin-top-left">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1">PRIORITY</div>
                    <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">SCENE: INTIMATE</h3>
                    <p className="font-bold text-2xl mb-4">{cadet.name}</p>
                    <div className="bg-blue-100 text-blue-800 text-xs font-bold p-2 mb-4 rounded text-center">
                        没入 × カウンター
                    </div>
                    <p className="text-sm text-gray-800">
                        「二人の距離を縮めたい」<br/>
                        「食材の思想に触れたい」<br/>
                        → <span className="font-bold">勝負デート・本質的食事</span>の絶対王者
                    </p>
                </div>

                {/* 2. GARB (The Social/Client) */}
                <div className="p-8 bg-gray-50 border-r border-gray-200">
                    <h3 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">SCENE: CASUAL</h3>
                    <p className="font-bold text-xl mb-4">{garb.name}</p>
                    <div className="bg-green-100 text-green-800 text-xs font-bold p-2 mb-4 rounded text-center">
                        賑やか × 開放感
                    </div>
                    <p className="text-sm text-gray-600">
                        「とにかく楽しく飲みたい」<br/>
                        「テラスで風を感じたい」<br/>
                        → <span className="font-bold">女子会・グループ飲み</span>の絶対王者
                    </p>
                </div>

                {/* 3. Gokita (The Traditional/Anchor) */}
                <div className="p-8 bg-gray-50 border-r border-gray-200">
                    <h3 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-2">SCENE: FORMAL</h3>
                    <p className="font-bold text-xl mb-4">{gokita.name}</p>
                    <div className="bg-purple-100 text-purple-800 text-xs font-bold p-2 mb-4 rounded text-center">
                        正統派 × 大人数の宴会
                    </div>
                    <p className="text-sm text-gray-600">
                        「失敗できない接待」<br/>
                        「親族との記念日」<br/>
                        → <span className="font-bold">オフィシャルな会食</span>の絶対王者
                    </p>
                </div>
            </div>
        </section>

        {/* Approval Button */}
        <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur border-t border-gray-200 p-6 flex justify-between items-center z-50">
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Next Step</p>
                <p className="font-bold text-black">中立的レコメンデーションUIの実装</p>
            </div>
            <button 
                onClick={onApprove}
                className="bg-black text-white font-serif italic px-8 py-4 text-lg hover:bg-gray-800 transition shadow-lg flex items-center gap-2"
            >
                <span>Launch Media</span>
                <span className="not-italic">→</span>
            </button>
        </div>
    </div>
  );
};