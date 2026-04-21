/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Footprints, 
  Wind, 
  ShieldCheck, 
  Activity, 
  UserRound, 
  Heart, 
  Timer, 
  CheckCircle2, 
  Info,
  Target,
  ArrowRight,
  Dumbbell,
  Zap,
  Coffee,
  Mail,
  ChevronRight,
  Map,
  MoveDown,
  ExternalLink
} from "lucide-react";

export default function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-deep-red/10 selection:text-deep-red">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto px-8 pt-16 pb-8 border-serif-red flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
        <div className="title-group">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-black text-deep-red tracking-tight leading-none mb-4"
          >
            長常隨香
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-olive font-serif text-lg font-bold tracking-widest"
          >
            隨香，即是修行：在每一步中，開啟身體、心靈與神明的對話。
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-deep-red text-white p-6 rounded-sm text-center shadow-brutal-gold w-full md:w-auto"
        >
          <span className="block text-3xl font-black mb-1">負重 ≤ 5 公斤</span>
          <span className="text-xs opacity-90 italic tracking-wider">意志力是用來挑戰極限，智慧是知止善行</span>
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-8 pb-24">
        {/* Intro */}
        <section className="mb-16">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            className="text-xl leading-relaxed text-ink/80 max-w-3xl font-serif italic space-y-6"
          >
            <p>
              每年，我們都在升級腳下的鞋、背上的包，<br />
              但最值得我們溫柔對待的，是陪我們走過千里的這副身體。
            </p>

            <p>
              身體不是在走下坡，它是在進化成更有智慧的載體。<br />
              我們不求練出強大的肌肉，<br />
              但求透過平日的微小調校——<br />
              讓腳底更有支撐，讓核心更有力量，讓筋膜更有韌性。
            </p>

            <p>
              升級裝備，是為了減少負擔；<br />
              調校身心，是為了圓滿修行。
            </p>
          </motion.div>
        </section>

        {/* Body Metrics */}
        <section className="mb-24">
          <h3 className="text-2xl font-serif font-bold text-olive mb-8 uppercase tracking-widest flex items-center gap-4">
            身體度量衡：三維度診斷
            <div className="flex-grow h-[1px] bg-olive/20" />
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Stability", title: "結構穩定度", metric: "指標：靠牆深蹲持續 90 秒", remedy: "每日刷牙時練習，強化膝蓋周邊肌群。" },
              { label: "Balance", title: "驅動平衡力", metric: "指標：單腳站立 60 秒 (腳趾抓地)", remedy: "等車或排隊時單腳練習，喚醒臀部穩定。" },
              { label: "Flexibility", title: "柔韌修復力", metric: "指標：彎腰觸趾 (雙腿伸直)", remedy: "牆面小腿深度伸展，釋放長期行走壓力。" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
              >
                <span className="text-[0.65rem] font-black text-olive uppercase tracking-[0.2em] mb-4 block">{item.label}</span>
                <h4 className="text-2xl font-serif font-bold text-deep-red mb-6 leading-tight">{item.title}</h4>
                <div className="bg-card-bg p-5 rounded-lg text-sm mb-6 border-l-4 border-gold grow">
                  <div className="text-ink font-bold mb-2">檢測指標</div>
                  <span className="text-ink/80 leading-relaxed">{item.metric}</span>
                </div>
                <div className="text-sm space-y-4">
                  <div>
                    <span className="text-olive font-black tracking-wider block mb-1">訓練對策</span>
                    <span className="text-ink/70 leading-relaxed">{item.remedy}</span>
                  </div>
                  <button 
                    onClick={() => scrollToId('training-plan')}
                    className="btn-pill-olive"
                  >
                    長期訓練計劃 <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Relaxation Section */}
        <section className="mb-24">
          <h3 className="text-2xl font-serif font-bold text-olive mb-4 uppercase tracking-widest flex items-center gap-4">
            行走中的修復之道
            <div className="flex-grow h-[1px] bg-olive/20" />
          </h3>
          <p className="text-ink/50 mb-12 font-serif">如何在行腳隨香過程中即時釋放壓力，由地基至肩頸全面恢復</p>

          <div className="space-y-24">
            {/* Part 1: Steps & Curb */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-[2fr_3fr] gap-12 items-start">
              <div className="space-y-4 md:sticky md:top-24">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative group bg-stone-100 ring-1 ring-gold/10">
                  <img 
                    src="/step.png" 
                    alt="Step stretch" 
                    className="w-full h-full object-cover grayscale brightness-110 sepia-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599058917233-35805f115ee3?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-red/40 to-transparent p-4">
                    <p className="text-[0.6rem] text-white/90 uppercase tracking-[0.3em] font-black">核心實踐：小腿掛筋</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-2xl font-serif font-bold text-deep-red">1. 階梯與路緣石：小腿與足底的「解藥」</h4>
                  <div className="p-6 bg-white rounded-lg border-l-4 border-olive shadow-sm">
                    <h5 className="font-bold mb-2">台階掛跟法（小腿拉筋）</h5>
                    <p className="text-sm text-ink/70 leading-relaxed">
                      <strong className="text-olive">動作：</strong> 前腳掌踩在台階邊緣，後腳跟懸空並自然下墜。<br/>
                      <strong className="text-olive">作用：</strong> 利用體重深度拉展腓腸肌，帶走酸性物質。
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border-l-4 border-gold shadow-sm">
                    <h5 className="font-bold mb-2">台階足弓按壓</h5>
                    <p className="text-sm text-ink/70 leading-relaxed">
                      <strong className="text-olive">動作：</strong> 踩在階梯邊緣稜角處，將足弓痠痛點對準稜角，重心左右移動。<br/>
                      <strong className="text-olive">作用：</strong> 物理性鬆解足底筋膜，緩解足底劇痛。
                    </p>
                  </div>
                </div>

                {/* Supplementary Massage Tools */}
                <div className="pt-4 border-t border-stone-200">
                  <p className="text-[0.65rem] text-olive font-black uppercase tracking-widest mb-4">日常修復：足底壓力鬆解</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                      <div className="aspect-square rounded-xl overflow-hidden bg-stone-100 mb-2 ring-1 ring-stone-200">
                        <img 
                          src="/ball.png" 
                          alt="Massage Ball" 
                          className="w-full h-full object-cover grayscale brightness-110 sepia-[0.2] group-hover:grayscale-0 group-hover:sepia-0 transition-all"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-[10px] text-ink font-bold text-center">足底按摩球</p>
                    </div>
                    <div className="group">
                      <div className="aspect-square rounded-xl overflow-hidden bg-stone-100 mb-2 ring-1 ring-stone-200">
                        <img 
                          src="/stick.png" 
                          alt="Foot Stick" 
                          className="w-full h-full object-cover grayscale brightness-110 sepia-[0.2] group-hover:grayscale-0 group-hover:sepia-0 transition-all"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-[10px] text-ink font-bold text-center">足底擀麵杖</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Part 2: Full Body Stretching Guide - Single Image Replacement */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-8">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-serif font-bold text-deep-red">2. 十分鐘休息伸展拉筋動作</h4>
                <p className="text-ink/60 font-serif max-w-2xl mx-auto italic">
                  一圖掌握十二組核心伸展：滑鼠懸停即可喚醒細節色彩。
                </p>
              </div>

              <div className="flex justify-center">
                <div className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative group bg-stone-100 ring-1 ring-gold/10 border border-gold/20">
                  <img 
                    src="/stretching-guide.png" 
                    alt="10 Minute Stretching Guide" 
                    className="w-full h-auto grayscale brightness-110 sepia-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1599447421416-3414500d1f35?auto=format&fit=crop&q=80&w=1200";
                    }}
                  />
                  <div className="absolute inset-0 bg-gold/5 mix-blend-multiply pointer-events-none" />
                  
                  {/* Subtle Label Overlay */}
                  <div className="absolute top-4 right-4 bg-deep-red/90 text-white text-[0.6rem] font-black px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                    Full Recovery Guide
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 text-[0.6rem] text-ink/30 italic uppercase tracking-[0.2em]">
                <span>15-30秒 / 動作</span>
                <span className="w-1 h-1 bg-ink/10 rounded-full mt-1.5" />
                <span>不強求角度 ‧ 專注呼吸</span>
              </div>
            </motion.div>

            {/* Part 3: Deep Recovery Rituals */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-12">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-serif font-bold text-deep-red">3. 止息後的深層滋養</h4>
                <p className="text-ink/60 font-serif max-w-2xl mx-auto italic">
                  抵達香燈腳休息站或歸家後的儀式，讓疲憊歸於沈靜。
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Wall Pose */}
                <div className="group space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 ring-1 ring-gold/10 border border-gold/20 shadow-xl relative">
                    <img 
                      src="/wall.png" 
                      alt="Legs up the wall" 
                      className="w-full h-full object-cover grayscale brightness-110 sepia-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[0.5rem] bg-deep-red text-white px-2 py-0.5 rounded font-black uppercase tracking-widest shadow-md">消腫回流</span>
                    </div>
                  </div>
                  <div className="text-center px-2">
                    <h5 className="font-serif font-bold text-deep-red mb-1">靠牆倒腳式</h5>
                    <p className="text-[0.6rem] text-olive font-black tracking-widest uppercase mb-2">場景：路燈桿或牆邊</p>
                    <p className="text-xs text-ink/60 leading-relaxed">將雙膝靠牆垂直向上，釋放整日行走的腿部壓力，消水腫並靜心。</p>
                  </div>
                </div>

                {/* Bend Pose */}
                <div className="group space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 ring-1 ring-gold/10 border border-gold/20 shadow-xl relative">
                    <img 
                      src="/bend.png" 
                      alt="Half forward bend" 
                      className="w-full h-full object-cover grayscale brightness-110 sepia-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[0.5rem] bg-deep-red text-white px-2 py-0.5 rounded font-black uppercase tracking-widest shadow-md">延展腰背</span>
                    </div>
                  </div>
                  <div className="text-center px-2">
                    <h5 className="font-serif font-bold text-deep-red mb-1">立姿半前彎</h5>
                    <p className="text-[0.6rem] text-olive font-black tracking-widest uppercase mb-2">場景：廟柱或圍欄</p>
                    <p className="text-xs text-ink/60 leading-relaxed">雙手扶牆或支撐物，上半身與地面平行，拉開緊繃的腰背與大腿後側。</p>
                  </div>
                </div>

                {/* Ten/Squat Pose */}
                <div className="group space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 ring-1 ring-gold/10 border border-gold/20 shadow-xl relative">
                    <img 
                      src="/ten.png" 
                      alt="Deep Squat Prayer" 
                      className="w-full h-full object-cover grayscale brightness-110 sepia-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[0.5rem] bg-deep-red text-white px-2 py-0.5 rounded font-black uppercase tracking-widest shadow-md">開啟髖部</span>
                    </div>
                  </div>
                  <div className="text-center px-2">
                    <h5 className="font-serif font-bold text-deep-red mb-1">深蹲合十式</h5>
                    <p className="text-[0.6rem] text-olive font-black tracking-widest uppercase mb-2">場景：空地休息</p>
                    <p className="text-xs text-ink/60 leading-relaxed">深度下蹲，雙手合十肘撐膝蓋，徹底打開髖關節，讓負重的腰椎獲得自由。</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Training Master Plan */}
        <section id="training-plan" className="mb-24 bg-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden border-2 border-stone-100 shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="grid grid-cols-12 gap-4 h-full">
               {Array.from({length: 12}).map((_, i) => <div key={i} className="border-r border-ink h-full" />)}
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-serif font-black mb-4 text-deep-red">長常隨香：年度訓練計劃</h2>
                <p className="text-olive text-xl md:text-2xl font-serif italic">「平日保持運動習慣，維持力量、穩定與韌性。」</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Pillar 1: Strength, Core & Foundation */}
              <div className="space-y-8 bg-stone-50 p-10 rounded-2xl border border-stone-200 shadow-sm flex flex-col">
                <div className="flex items-center gap-4 text-deep-red mb-4">
                  <Dumbbell size={32} />
                  <h3 className="text-3xl font-serif font-bold">地基、引擎與核心</h3>
                </div>
                <div className="space-y-8 grow">
                  <div className="space-y-6">
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-stone-100 space-y-4">
                      <div className="aspect-[16/9] rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                        <img 
                          src="/bridge.png" 
                          alt="Bridge Pose" 
                          className="w-full h-full object-cover grayscale brightness-110 sepia-[0.2] hover:grayscale-0 transition-all duration-500" 
                          referrerPolicy="no-referrer" 
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-ink text-lg">橋式 (Bridge)</h4>
                          <a 
                            href="https://fitwill.app/zh-hant/exercise/0941/bridge-pose-setu-bandhasana/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gold hover:text-deep-red transition-colors flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-tighter border border-gold/20 px-3 py-1 rounded"
                          >
                            完整教學 <ExternalLink size={12} />
                          </a>
                        </div>
                        <p className="text-sm text-ink/70 leading-relaxed">喚醒臀大肌，將負擔從膝蓋轉移到身體最強的肌肉。</p>
                      </div>
                    </div>

                    <div className="p-6 bg-gold/10 rounded-xl border-l-[6px] border-gold shadow-sm space-y-8">
                      <h4 className="font-bold text-olive mb-3 text-lg underline decoration-gold/30 underline-offset-4 tracking-wider">核心穩定 (溫和防護版)</h4>
                      
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="aspect-[16/9] rounded-lg overflow-hidden bg-stone-100 border border-gold/20">
                            <img 
                              src="/deadbug.png" 
                              alt="Dead Bug Pose" 
                              className="w-full h-full object-cover grayscale brightness-110 sepia-[0.2] hover:grayscale-0 transition-all duration-500" 
                              referrerPolicy="no-referrer" 
                            />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <p className="text-sm text-ink/80"><strong>死蟲式：</strong></p>
                              <a 
                                href="https://fitwill.app/zh-hant/exercise/0297/dead-bug/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gold hover:text-deep-red transition-colors flex items-center gap-1 text-[0.7rem] font-bold border border-gold/20 px-2 py-0.5 rounded"
                              >
                                完整教學 <ExternalLink size={12} />
                              </a>
                            </div>
                            <p className="text-sm text-ink/80">背部平貼地面，仰臥交替移動手腳。最安全的腰椎保險。</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="aspect-[16/9] rounded-lg overflow-hidden bg-stone-100 border border-gold/20">
                            <img 
                              src="/birddog.png" 
                              alt="Bird Dog Pose" 
                              className="w-full h-full object-cover grayscale brightness-110 sepia-[0.2] hover:grayscale-0 transition-all duration-500" 
                              referrerPolicy="no-referrer" 
                            />
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <p className="text-sm text-ink/80"><strong>鳥狗式：</strong></p>
                              <a 
                                href="https://fitwill.app/zh-hant/exercise/0677/bird-dog/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gold hover:text-deep-red transition-colors flex items-center gap-1 text-[0.7rem] font-bold border border-gold/20 px-2 py-0.5 rounded"
                              >
                                完整教學 <ExternalLink size={12} />
                              </a>
                            </div>
                            <p className="text-sm text-ink/80">爬行位異側手腳延伸。提升平衡感與深層核心穩定。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 2: Daily Stretching & Recovery (Updated) */}
              <div className="space-y-8 bg-stone-50 p-10 rounded-2xl border border-stone-200 shadow-sm flex flex-col">
                <div className="flex items-center gap-4 text-deep-red mb-4">
                  <Activity size={32} />
                  <h3 className="text-3xl font-serif font-bold">每日拉筋與修復</h3>
                </div>
                <div className="space-y-8 grow">
                  <div className="space-y-6">
                    {/* Exercise 1: Lying Stretch */}
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-stone-100 space-y-4">
                      <div className="aspect-video rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                        <img 
                          src="/Lajin1.png" 
                          alt="臥式拉筋" 
                          className="w-full h-full object-contain grayscale brightness-110 sepia-[0.2] hover:grayscale-0 transition-all duration-500" 
                          referrerPolicy="no-referrer" 
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-ink text-lg">臥式拉筋 (椅子與門框)</h4>
                          <a 
                            href="http://www.tunghai74.org/letters/stretch/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gold hover:text-deep-red transition-colors flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-tighter border border-gold/20 px-3 py-1 rounded"
                          >
                            完整教學 <ExternalLink size={12} />
                          </a>
                        </div>
                        <p className="text-sm text-ink/70 leading-relaxed font-serif">
                          兩椅擺近門框，臀移至椅邊仰臥。一腳倚框伸直，一腳落地屈膝，雙手舉起平放。左右互換各做十分鐘。
                        </p>
                      </div>
                    </div>

                    {/* Exercise 2: Standing Stretch - Side-by-Side for vertical image */}
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-stone-100 grid md:grid-cols-[1.5fr_2fr] gap-6 items-start">
                      <div className="aspect-[3/4] rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                        <img 
                          src="/lajin2.png" 
                          alt="立式拉筋" 
                          className="w-full h-full object-cover grayscale brightness-110 sepia-[0.2] hover:grayscale-0 transition-all duration-500" 
                          referrerPolicy="no-referrer" 
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                          <h4 className="font-bold text-ink text-lg">立式拉筋 (門框伸展)</h4>
                          <a 
                            href="http://www.tunghai74.org/letters/stretch/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gold hover:text-deep-red transition-colors flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-tighter border border-gold/20 px-3 py-1 rounded w-fit"
                          >
                            完整教學 <ExternalLink size={12} />
                          </a>
                        </div>
                        <p className="text-sm text-ink/70 leading-relaxed font-serif">
                          雙手舉起扶門框盡量伸展。一腳站弓步在前後腳伸直。以此姿勢站立三分鐘後換腿繼續。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Mobility & Breathing */}
              <div className="space-y-8 bg-stone-50 p-10 rounded-2xl border border-stone-200 shadow-sm flex flex-col">
                <div className="flex items-center gap-4 text-deep-red mb-4">
                  <Wind size={32} />
                  <h3 className="text-3xl font-serif font-bold">呼吸與心跳節律</h3>
                </div>
                <div className="space-y-8 grow">
                  <div className="p-8 bg-white rounded-xl shadow-sm border border-stone-100">
                    <h4 className="text-deep-red font-bold mb-4 text-lg flex items-center gap-2"><Timer size={22} /> 4-7-8 呼吸與減壓</h4>
                    <p className="text-sm text-ink/70 leading-relaxed">
                      吸氣 4 秒、憋氣 7 秒、吐氣 8 秒。適合在練習的核心穩定後，作為收尾，訓練心肺與情緒穩定。
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 4: Road Prep Roadmap */}
              <div className="space-y-8 bg-stone-50 p-10 rounded-2xl border border-stone-200 shadow-sm">
                <div className="flex items-center gap-4 text-deep-red mb-4">
                  <Map size={32} />
                  <h3 className="text-3xl font-serif font-bold">行前 4 月負重攻略</h3>
                </div>
                <div className="space-y-6">
                   {[
                    { m: "Month 1", t: "漸進適應期", d: "2kg 負重，平地 5km 快走。觀察腳底與鞋子適配度。" },
                    { m: "Month 2", t: "壓力模擬期", d: "3kg 負重，加入 50-100 階梯練習。開始每日核心穩定練習。" },
                    { m: "Month 3", t: "重負荷實戰", d: "5kg 負重，嘗試連續行走 3 小時。這時核心力量將支撐你的腰椎。" },
                    { m: "Month 4", t: "減量儲能期", d: "負重減至 1kg，專注呼吸節奏與心態調整。身心合一，靜待出發。" }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6 items-start group relative pb-6 last:pb-0">
                      {i < 3 && <div className="absolute left-[5px] top-6 w-[2px] h-full bg-stone-200" />}
                      <div className="w-3 h-3 rounded-full bg-gold shrink-0 mt-2.5 z-10" />
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="text-gold font-mono text-xs font-black uppercase">{phase.m}</span>
                          <span className="text-ink font-bold text-lg">{phase.t}</span>
                        </div>
                        <p className="text-sm text-ink/60 italic leading-relaxed">{phase.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Life Integration Grid */}
            <div className="mt-20 pt-16 border-t border-stone-200">
              <h3 className="text-center text-2xl md:text-3xl font-serif font-bold text-deep-red mb-12 tracking-[0.2em] uppercase">生活場景：隨手可得的訓練</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { icon: <Coffee size={24} />, scene: "刷牙時", act: "腳趾抓毛巾" },
                  { icon: <Zap size={24} />, scene: "等車候位", act: "核心微收緊" },
                  { icon: <Activity size={24} />, scene: "洗碗時刻", act: "雙腳交替提踵" },
                  { icon: <Timer size={24} />, scene: "看電視時", act: "坐姿撥筋伸展" },
                  { icon: <Heart size={24} />, scene: "睡覺之前", act: "4-7-8 完全呼吸" }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-stone-50 rounded-2xl text-center group hover:bg-gold/10 transition-all border border-stone-100 shadow-sm">
                    <div className="text-gold mb-4 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                    <div className="text-[0.7rem] uppercase tracking-widest text-olive font-black mb-2">{item.scene}</div>
                    <div className="text-sm font-bold text-ink leading-tight">{item.act}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Section */}
        <section className="mb-24">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-[3rem] bg-white border border-stone-200 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
              <Map size={240} />
            </div>
            <div className="max-w-3xl relative z-10">
              <div className="w-16 h-1 bg-deep-red mb-8" />
              <h4 className="text-3xl md:text-4xl font-serif font-black text-deep-red mb-8 leading-tight">共同完善隨香地圖</h4>
              <p className="text-xl text-ink/70 leading-relaxed font-serif italic mb-12">
                「這份指南還在成長，如果您在路上有任何『痛點』或『妙方』，歡迎告訴我們，讓我們一起完善這隨香地圖。」
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="mailto:yemafeng@gmail.com?subject=隨香地圖意見回饋"
                  className="px-10 py-5 bg-deep-red text-white rounded-2xl font-bold hover:bg-red-900 transition-all shadow-lg shadow-deep-red/20 flex items-center justify-center gap-3 active:scale-95"
                >
                  <Mail size={22} /> 直接聯絡作者
                </a>
                <button className="px-10 py-5 border-2 border-stone-100 text-ink rounded-2xl font-bold hover:bg-stone-50 transition-all flex items-center justify-center gap-3 shadow-inner">
                  <MessageSquare size={22} /> 提交路上的痛點
                </button>
              </div>
              
              <div className="space-y-4 p-8 bg-stone-50 rounded-2xl border border-stone-100 shadow-inner">
                <h5 className="font-bold text-xs uppercase tracking-widest text-ink/40 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={12} /> 來自路上的聲音 (預覽)
                </h5>
                <div className="text-sm border-b border-stone-200 pb-3 italic text-ink/60">「分享感動」</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-32 border-t border-black/5 text-center">
          <blockquote className="font-serif italic text-2xl md:text-3xl text-deep-red opacity-80 leading-snug px-8 mb-16 max-w-3xl mx-auto">
            「媽祖的慈悲是心靈的支撐，而健康的身體是行善的工具。懂得愛護身體，也是一種智慧的修行。」
          </blockquote>
          <div className="text-ink/20 font-black tracking-[0.8em] text-[0.6rem] uppercase flex items-center justify-center gap-6">
            <div className="w-12 h-[1px] bg-ink/5" />
            <div className="w-12 h-[1px] bg-ink/5" />
          </div>
        </footer>
      </main>
    </div>
  );
}

// Minimal placeholder icons
function MessageSquare({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}
