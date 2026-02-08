import React, { useState, useEffect } from 'react';
import { RESTAURANTS } from '../data';

/**
 * High-Fidelity Image Component
 * Handles aspect ratio, cinematic overlays, and hover states.
 */
const SectionImage: React.FC<{ src?: string; alt: string }> = ({ src, alt }) => {
  if (!src) return null;

  return (
    <div className="mt-10 mb-12 w-full group overflow-hidden border-y border-zinc-800 relative bg-zinc-900 shadow-xl">
      <div className="aspect-[16/9] w-full relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

const SitePrototype: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScenarioClick = (id: string) => {
    setSelectedScenario(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-tc-black text-tc-white font-serif min-h-screen selection:bg-tc-gold selection:text-black antialiased overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col group cursor-pointer">
            <h1 className="text-lg md:text-xl font-serif tracking-[0.25em] font-medium text-white group-hover:text-tc-gold transition-colors duration-500">
              JIMBOCHO SELECTION
            </h1>
            <span className="text-[9px] text-gray-500 tracking-[0.4em] font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-y-1 group-hover:translate-y-0">
              TOKYO GOURMET GUIDE
            </span>
          </div>
          <div className="hidden md:flex space-x-12 text-[10px] tracking-[0.25em] font-sans text-gray-400 uppercase font-medium">
            <a href="#diagnosis" className="hover:text-white hover:tracking-[0.35em] transition-all duration-300">Diagnosis</a>
            <a href="#matrix" className="hover:text-white hover:tracking-[0.35em] transition-all duration-300">Comparison</a>
            <a href="#recommendation" className="hover:text-white hover:tracking-[0.35em] transition-all duration-300">Details</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 animate-slow-zoom bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-tc-black"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in flex flex-col items-center">
          <div className="mb-10 flex flex-col items-center">
            <span className="h-12 w-[1px] bg-tc-gold mb-6"></span>
            <p className="text-tc-gold text-[11px] tracking-[0.5em] font-sans uppercase">
              The Executive Guide
            </p>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.2] mb-12 font-serif tracking-widest text-white drop-shadow-2xl">
            神保町の夜、<br/>
            貴方が選ぶべき<br/>
            <span className="italic text-tc-gold font-light relative inline-block mt-2">
              「正解」
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-tc-gold/50"></span>
            </span>
            はどこか。
          </h2>
          
          <p className="text-sm md:text-base font-light tracking-[0.2em] leading-[2.4] text-gray-300 max-w-2xl mx-auto font-serif">
            歴史と文化が交錯する街、神保町。<br/>
            ここには、知る人ぞ知る名店が存在する。<br/>
            しかし、その「使い分け」を知る大人は意外と少ない。<br/>
            <br/>
            <span className="text-white border-b border-gray-600 pb-1">「賑やかな社交」</span>か、
            <span className="text-white border-b border-gray-600 pb-1 mx-2">「正統派の宴席」</span>か、<br/>
            それとも<span className="text-white border-b border-tc-gold pb-1">「親密な没入」</span>か。
          </p>
          
          <div className="absolute bottom-12 animate-bounce text-tc-gray text-xs tracking-[0.3em] opacity-60 font-sans">
            SCROLL TO EXPLORE
          </div>
        </div>
      </header>

      {/* Diagnosis Section */}
      <section id="diagnosis" className="py-32 px-6 bg-tc-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
                <span className="text-tc-gold text-[10px] tracking-[0.4em] font-sans border border-tc-gold/30 px-4 py-2 uppercase inline-block mb-8">
                  Situation Diagnosis
                </span>
                <h3 className="text-3xl md:text-4xl font-serif tracking-widest text-white">
                  今夜のシチュエーションを選択
                </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                  { id: 'cadet', num: '01', title: 'デート・少人数', desc: ['二人の距離を縮めたい', '美味しい料理と静かな会話', 'シェフの哲学に触れたい'] },
                  { id: 'garb_pintino', num: '02', title: '女子会・グループ', desc: ['おしゃれな空間で騒ぎたい', 'テラスで風を感じたい', 'カジュアルに楽しみたい'] },
                  { id: 'jimbocho_gokita', num: '03', title: '大人数の宴会・接待', desc: ['失敗できないフォーマルな席', '上司や親族を招く', 'クラシックな雰囲気が好き'] }
                ].map((item) => (
                  <div 
                      key={item.id}
                      onClick={() => handleScenarioClick(item.id)}
                      className={`
                        cursor-pointer group relative bg-zinc-900/40 backdrop-blur-sm border 
                        ${selectedScenario === item.id ? 'border-tc-gold shadow-[0_0_40px_rgba(197,160,89,0.1)]' : 'border-zinc-800'} 
                        p-10 transition-all duration-500 hover:bg-zinc-900/80 hover:border-tc-gold/50 hover:-translate-y-2
                      `}
                  >
                      <div className="absolute top-6 left-6 text-7xl font-serif text-white opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 font-bold">
                        {item.num}
                      </div>
                      <div className="h-40 flex flex-col justify-end items-center mb-10 relative z-10">
                          <h4 className="text-xl font-medium text-center tracking-[0.2em] border-b border-zinc-700 pb-4 group-hover:border-tc-gold transition-colors duration-500 w-full">
                            {item.title}
                          </h4>
                      </div>
                      <div className="text-sm text-gray-400 text-center leading-[2.2] font-light group-hover:text-gray-200 transition duration-500 min-h-[6rem]">
                          {item.desc.map((line, i) => (
                            <React.Fragment key={i}>{line}<br/></React.Fragment>
                          ))}
                      </div>
                      <div className="mt-12 text-center opacity-50 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-[9px] tracking-[0.3em] text-tc-gold uppercase">
                            View Solution →
                          </span>
                      </div>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Selection Criteria Section - Editorial Style */}
      <section className="py-28 px-4 bg-[#050505] border-y border-zinc-900">
        <div className="container mx-auto max-w-4xl relative">
           <div className="relative md:pl-20 border-l border-zinc-800/50">
              <div className="absolute -left-[1px] top-0 h-32 w-[1px] bg-gradient-to-b from-tc-gold to-transparent"></div>
              
              <div className="mb-14">
                  <div className="flex items-center gap-4 mb-6">
                    <p className="text-tc-gold text-[10px] tracking-[0.4em] font-sans uppercase">Editorial Note</p>
                    <div className="h-[1px] bg-zinc-800 w-24"></div>
                  </div>
                  <h3 className="text-3xl font-serif text-white tracking-[0.1em] mb-8 leading-relaxed">
                    なぜ、この3店舗なのか。<br/>
                    <span className="text-gray-500 text-2xl">神保町フレンチの選定基準について</span>
                  </h3>
                  <div className="text-sm text-gray-400 font-light leading-[2.4] text-justify-spacing max-w-2xl">
                    <p className="mb-4">
                      <span className="text-white font-medium">Research Scope:</span><br/>
                      Google検索「フレンチ 神保町」「フレンチディナー 神保町」における上位表示100位以内の23店舗を対象にリサーチを実施。
                    </p>
                    <p>
                      その中から、単に料理が美味しいだけでなく、<span className="text-gray-200 border-b border-gray-700 pb-[1px]">「空間の物語性」</span>と<span className="text-gray-200 border-b border-gray-700 pb-[1px]">「利用シーンの明確な棲み分け」</span>を持つ3店舗を厳選した。
                      2026年1月3日時点において、この3店舗こそが、神保町という街で大人が選ぶべき「最適解」であると結論づける。
                    </p>
                  </div>
              </div>

              <div className="grid md:grid-cols-1 gap-10 border-t border-zinc-900 pt-10">
                  <div className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                      <div className="flex items-baseline shrink-0 w-48">
                          <span className="text-tc-gold font-serif mr-3 text-sm">01.</span>
                          <span className="text-white text-lg font-serif tracking-widest group-hover:text-tc-gold transition-colors duration-300">cadet</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 leading-loose">
                          伝統と革新の融合。日本の食材を用いた創作フレンチは、カウンターでのデートにおいて「会話のきっかけ」と「感動」を同時に提供する。
                      </p>
                  </div>
                  
                  <div className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                      <div className="flex items-baseline shrink-0 w-48">
                          <span className="text-tc-gold font-serif mr-3 text-sm">02.</span>
                          <span className="text-white text-lg font-serif tracking-widest group-hover:text-tc-gold transition-colors duration-300">GARB pintino</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 leading-loose">
                          カジュアルと本格の両立。開放的な空間は、家族や友人との食事において「緊張感」を取り除き、「純粋な楽しさ」を演出する。
                      </p>
                  </div>

                  <div className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                      <div className="flex items-baseline shrink-0 w-48">
                          <span className="text-tc-gold font-serif mr-3 text-sm">03.</span>
                          <span className="text-white text-lg font-serif tracking-widest group-hover:text-tc-gold transition-colors duration-300">神保町 五木田</span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 leading-loose">
                          静寂と格式。個室完備のクラシックな空間は、接待や大人数での会食において「失敗のない安心感」を約束する。
                      </p>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Recommendation Section - Alternating Layout */}
      <section id="recommendation" className="bg-tc-black">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
            {RESTAURANTS.map((restaurant, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div 
                      key={restaurant.id}
                      id={restaurant.id} 
                      className="py-32 border-b border-zinc-900/50 last:border-0 scroll-mt-20"
                  >
                      {/* Main Visual & Intro - Zigzag Layout */}
                      <div className={`flex flex-col gap-12 lg:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                          
                          {/* Image Side */}
                          <div className="md:w-1/2 relative group">
                              <div className="overflow-hidden relative shadow-2xl shadow-black h-[500px] w-full">
                                  <img 
                                      src={restaurant.imgUrl} 
                                      alt={restaurant.name} 
                                      className="w-full h-full object-cover transition duration-[3s] ease-in-out transform group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0"
                                  />
                                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-1000"></div>
                              </div>
                              {/* Floating Badge */}
                              <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} bg-zinc-900 border border-zinc-800 p-6 shadow-xl hidden md:block z-10`}>
                                  <span className="block text-tc-gold text-xs tracking-widest mb-1">ATMOSPHERE</span>
                                  <span className="block text-white font-serif text-lg tracking-wider">{restaurant.atmosphere}</span>
                              </div>
                          </div>
                          
                          {/* Text Side */}
                          <div className="md:w-1/2 flex flex-col justify-center relative">
                              <div className="mb-6 flex items-baseline gap-4">
                                  <span className="text-tc-gold font-serif text-5xl opacity-50">0{index + 1}</span>
                                  <div className="h-[1px] flex-grow bg-zinc-800"></div>
                              </div>
                              
                              <h3 className="text-4xl lg:text-5xl font-serif font-medium mb-6 leading-tight text-white tracking-widest">
                                  {restaurant.name}
                              </h3>
                              
                              <p className="text-sm text-tc-gold italic mb-10 font-serif tracking-wider opacity-90">
                                  ― {restaurant.catchphrase}
                              </p>
                              
                              <p className="text-gray-400 leading-[2.4] text-sm text-justify-spacing font-light mb-10 md:pr-8">
                                  {restaurant.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-3">
                                  {restaurant.features.map((f, i) => (
                                      <span key={i} className="text-[10px] tracking-widest uppercase border border-zinc-800 text-gray-500 px-3 py-1">
                                          {f}
                                      </span>
                                  ))}
                              </div>
                          </div>
                      </div>

                      {/* Detailed Info Grid */}
                      <div className="mt-24 bg-[#080808] border border-zinc-900 p-8 md:p-16">
                           <h4 className="text-center text-tc-gold text-[10px] tracking-[0.5em] uppercase mb-16 relative">
                              <span className="bg-[#080808] px-4 relative z-10">The Experience</span>
                              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-800 -z-0"></div>
                           </h4>

                           {/* 3 Columns for Details */}
                           <div className="grid md:grid-cols-3 gap-12 mb-20">
                              {restaurant.detailedFeatures.map((feature, idx) => (
                                  <div key={idx} className="group">
                                      <div className="h-[200px] w-full bg-zinc-900 mb-6 overflow-hidden relative border border-zinc-800">
                                        {/* Placeholder visual if no image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-serif text-6xl opacity-20 group-hover:scale-110 transition duration-1000">
                                          {idx + 1}
                                        </div>
                                        {feature.img && <img src={feature.img} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-700" alt="" />}
                                      </div>
                                      <h5 className="text-base font-serif mb-4 text-white tracking-widest border-b border-zinc-800 pb-2">
                                        {feature.title.replace(/^\d+\s/, '')}
                                      </h5>
                                      <p className="text-xs text-gray-500 leading-[2.2] text-justify-spacing">
                                          {feature.description}
                                      </p>
                                  </div>
                              ))}
                           </div>

                           {/* Info Grid (Course, Atmosphere, Data) */}
                           <div className="grid md:grid-cols-2 gap-12 md:gap-24 border-t border-zinc-900 pt-16">
                              <div>
                                  <h4 className="text-tc-gray text-[10px] tracking-[0.4em] uppercase mb-8">Menu & Atmosphere</h4>
                                  <div className="space-y-8">
                                      <div>
                                        <p className="text-tc-white text-sm font-serif mb-2 tracking-wider">Course Menu</p>
                                        <p className="text-xs text-gray-400 leading-relaxed whitespace-pre-wrap font-sans">{restaurant.courseInfo}</p>
                                      </div>
                                      <div>
                                        <p className="text-tc-white text-sm font-serif mb-2 tracking-wider">Space Design</p>
                                        <p className="text-xs text-gray-400 leading-relaxed text-justify-spacing">{restaurant.atmosphereDetail}</p>
                                      </div>
                                  </div>
                              </div>

                              <div>
                                  <h4 className="text-tc-gray text-[10px] tracking-[0.4em] uppercase mb-8">Information</h4>
                                  <table className="w-full text-xs text-left text-gray-500 border-collapse">
                                      <tbody className="divide-y divide-zinc-900/50">
                                          {[
                                            { label: 'ADDRESS', value: restaurant.basicInfo.address },
                                            { label: 'ACCESS', value: restaurant.basicInfo.access },
                                            { label: 'HOURS', value: restaurant.basicInfo.hours },
                                            { label: 'CLOSED', value: restaurant.basicInfo.closingDay },
                                          ].map((row, rIdx) => (
                                            <tr key={rIdx} className="group hover:bg-zinc-900/30 transition">
                                                <th className="py-3 pr-4 font-normal text-gray-500 w-20 whitespace-nowrap align-top pt-3">{row.label}</th>
                                                <td className="py-3 text-gray-300 tracking-wider leading-relaxed">{row.value}</td>
                                            </tr>
                                          ))}
                                      </tbody>
                                  </table>
                                  
                                  <div className="mt-10">
                                      <a 
                                          href={`https://www.google.com/search?q=${restaurant.name}+神保町+予約`} 
                                          target="_blank" 
                                          rel="noreferrer"
                                          className="block w-full text-center bg-white text-black py-4 text-xs font-bold tracking-[0.25em] hover:bg-tc-gold hover:text-white transition-all duration-500 ease-out border border-white hover:border-tc-gold"
                                      >
                                          OFFICIAL RESERVE
                                      </a>
                                  </div>
                              </div>
                           </div>
                      </div>
                  </div>
                );
            })}
        </div>
      </section>

      {/* Comparison Matrix */}
      <section id="matrix" className="py-32 px-4 bg-[#0a0a0a] border-t border-zinc-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
             <p className="text-[10px] font-sans tracking-[0.4em] text-tc-gray mb-4 uppercase">Objective Data</p>
             <h3 className="text-3xl font-serif text-white tracking-widest">神保町フレンチ・スペック比較</h3>
          </div>

          <div className="overflow-x-auto pb-6">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-zinc-800 text-gray-500 text-[10px] font-sans tracking-[0.2em] uppercase">
                    <th className="p-6 w-1/4 font-normal">Features</th>
                    <th className="p-6 w-1/4 text-tc-gold font-normal bg-zinc-900/20">cadet</th>
                    <th className="p-6 w-1/4 font-normal">GARB pintino</th>
                    <th className="p-6 w-1/4 font-normal">五木田</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 font-serif text-sm">
                {[
                  { label: '雰囲気', c1: '洗練された隠れ家', c2: 'モダン・開放的', c3: 'クラシック・重厚' },
                  { label: '推奨人数', c1: '1名〜2名', c2: '4名〜大人数', c3: '3名〜大人数' },
                  { label: '価格帯', c1: '¥12,000〜', c2: '¥6,000〜', c3: '¥7,000〜' },
                  { label: '決定打', c1: '没入感と思想', c2: '賑やかさとテラス', c3: '正統派の安心感', highlight: true },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-zinc-900/30 transition">
                      <td className="p-6 text-gray-500 font-sans text-xs tracking-wider">{row.label}</td>
                      <td className={`p-6 text-white leading-relaxed bg-zinc-900/20 ${row.highlight ? 'text-tc-gold' : ''}`}>{row.c1}</td>
                      <td className="p-6 text-gray-300">{row.c2}</td>
                      <td className="p-6 text-gray-300">{row.c3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-24 border-t border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="text-tc-gold font-serif text-2xl tracking-[0.25em] mb-8 opacity-90">JIMBOCHO SELECTION</div>
          <p className="text-zinc-600 text-[10px] font-sans tracking-[0.2em] leading-loose uppercase mb-12">
              Independent Research & Curation<br/>
              for the Sophisticated Gourmets of Tokyo.
          </p>
          <div className="w-12 h-[1px] bg-zinc-800 mx-auto mb-8"></div>
          <p className="text-zinc-800 text-[10px] font-sans">
              © 2024 Jimbocho Selection.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SitePrototype;