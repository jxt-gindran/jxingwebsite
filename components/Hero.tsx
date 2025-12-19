
import React, { useEffect, useRef, useState } from 'react';
import { Play, Check, Zap, BarChart, Trophy, TrendingUp, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CountUp } from './ui/CountUp';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t, i18n } = useTranslation();

  // Typewriter State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Retrieve dynamic data
  const dynamicContent = t('hero.dynamic', { returnObjects: true }) as Array<{ word: string, badges: string[] }>;
  const safeContent = Array.isArray(dynamicContent) && dynamicContent.length > 0 ? dynamicContent : [{ word: 'Dominance', badges: [] }];

  const index = loopNum % safeContent.length;
  const currentBadges = safeContent[index].badges;
  const currentWordStr = safeContent[index].word;

  // Theme configuration based on keyword
  const getTheme = (word: string) => {
    const w = word.toLowerCase();
    if (w.includes('dominance')) {
      return {
        container: 'bg-white dark:bg-slate-900 border-brand-azure/20 dark:border-brand-azure/30 shadow-brand-azure/5',
        iconBox: 'bg-brand-azure text-white',
        text: 'text-slate-700 dark:text-slate-200'
      };
    }
    if (w.includes('performance')) {
      return {
        container: 'bg-white dark:bg-slate-900 border-brand-robin/30 dark:border-brand-robin/30 shadow-brand-robin/5',
        iconBox: 'bg-brand-robin text-white',
        text: 'text-slate-700 dark:text-slate-200'
      };
    }
    if (w.includes('revenue')) {
      return {
        container: 'bg-white dark:bg-slate-900 border-orange-200 dark:border-orange-500/30 shadow-orange-500/5',
        iconBox: 'bg-orange-500 text-white',
        text: 'text-slate-700 dark:text-slate-200'
      };
    }
    return {
      container: 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700',
      iconBox: 'bg-slate-500 text-white',
      text: 'text-slate-700 dark:text-slate-200'
    };
  };

  const theme = getTheme(currentWordStr);

  // Icons mapping
  const getIcon = (word: string, index: number) => {
    const w = word.toLowerCase();
    if (w.includes('dominance')) {
      return index === 0 ? <Trophy size={14} strokeWidth={2.5} /> : index === 1 ? <Check size={14} strokeWidth={2.5} /> : <Shield size={14} strokeWidth={2.5} />;
    }
    if (w.includes('performance')) {
      return index === 0 ? <Zap size={14} strokeWidth={2.5} /> : index === 1 ? <Check size={14} strokeWidth={2.5} /> : <Shield size={14} strokeWidth={2.5} />;
    }
    if (w.includes('revenue')) {
      return index === 0 ? <TrendingUp size={14} strokeWidth={2.5} /> : index === 1 ? <BarChart size={14} strokeWidth={2.5} /> : <Check size={14} strokeWidth={2.5} />;
    }
    return <Check size={14} strokeWidth={2.5} />;
  };

  // Typing Effect Logic
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % safeContent.length;
      const fullText = safeContent[i].word;

      // Check if word is complete (and not deleting)
      if (!isDeleting && text === fullText) {
        // Pause at end of word before deleting
        setIsDeleting(true);
        setTypingSpeed(3000); // Hold the word longer
        return;
      }

      // Check if word is fully deleted
      if (isDeleting && text === '') {
        // Move to next word
        setIsDeleting(false);
        setLoopNum(l => l + 1);
        setTypingSpeed(500); // Pause before typing next word
        return;
      }

      // Type or Delete character
      const nextText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(nextText);
      setTypingSpeed(isDeleting ? 50 : 100);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, safeContent, typingSpeed]);

  // Video Autoplay
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.defaultMuted = true;
      videoElement.muted = true;

      const playVideo = async () => {
        try {
          if (videoElement.paused) {
            await videoElement.play();
          }
        } catch (error) {
          console.warn("Auto-play was prevented:", error);
        }
      };

      playVideo();
    }
  }, []);

  return (
    <section className="relative pt-32 pb-10 lg:pt-48 lg:pb-16 bg-brand-ghost dark:bg-brand-oxford transition-colors duration-300">

      {/* Background Gradients - Wrapped in absolute div to clip without clipping the whole section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-azure/10 dark:bg-brand-azure/5 rounded-3xl blur-3xl -z-10"></div>
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-brand-robin/20 dark:bg-brand-robin/5 rounded-3xl blur-3xl -z-10 rtl:right-auto rtl:left-0"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.1] text-brand-oxford dark:text-white tracking-tight mb-8">
            {t('hero.title_static')} <br />
            {t('hero.title_prefix')}{" "}
            {/* Typewriter Container */}
            <span className="inline-flex items-center text-brand-azure dark:text-brand-robin align-bottom min-h-[1.1em]">
              {text}
              {/* Cursor */}
              <span className="w-[3px] h-[0.8em] bg-brand-azure dark:bg-brand-robin animate-pulse ms-1"></span>
            </span>{" "}
            {t('hero.title_suffix')}
          </h1>


          {/* Dynamic Badges Area */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 min-h-[60px]" key={loopNum}>
            {currentBadges?.slice(0, 3).map((badge, i) => (
              <div
                key={i}
                className={`
                    flex items-center gap-2.5 px-3 py-2 rounded-xl border shadow-sm backdrop-blur-md animate-fade-in-up transition-colors duration-300
                    ${theme.container}
                  `}
                style={{
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${theme.iconBox}`}>
                  {getIcon(currentWordStr, i)}
                </div>
                <span className={`text-xs font-bold tracking-wide ${theme.text}`}>
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image Card - Elevated Z-index for overlap */}
        <div className="relative max-w-6xl mx-auto mt-12 z-30">
          <div className="hover-box rounded-3xl overflow-hidden shadow-2xl shadow-brand-oxford/5 dark:shadow-none relative group bg-brand-timberwolf dark:bg-slate-800 border border-brand-oxford/10 dark:border-white/10">
            <video
              ref={videoRef}
              src="/videos/jxing_home.mp4"
              poster="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
              autoPlay
              loop
              muted
              playsInline
              width="1920"
              height="600"
              className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-oxford/40 to-transparent pointer-events-none"></div>

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl flex items-center justify-center text-white hover:bg-white hover:text-brand-azure hover:scale-110 transition-all duration-300">
                <Play fill="currentColor" className="ml-1 rtl:mr-1 rtl:ml-0 rtl:rotate-180" />
              </button>
            </div>

          </div>

          {/* Floating Badge - Moved outside overflow-hidden container */}
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 rtl:right-6 rtl:left-auto md:rtl:right-12 flex items-center gap-4 bg-white dark:bg-brand-oxford p-3 pr-8 rtl:pr-3 rtl:pl-8 rounded-3xl border border-brand-oxford/5 dark:border-white/10 shadow-xl scale-75 md:scale-100 origin-bottom-left z-50">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100" width="48" height="48" className="w-12 h-12 rounded-xl border-[3px] border-white dark:border-brand-oxford object-cover" alt="user" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100" width="48" height="48" className="w-12 h-12 rounded-xl border-[3px] border-white dark:border-brand-oxford object-cover" alt="user" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100" width="48" height="48" className="w-12 h-12 rounded-xl border-[3px] border-white dark:border-brand-oxford object-cover" alt="user" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-bold text-brand-oxford dark:text-white leading-none mb-1">
                <CountUp end={180} suffix="+" duration={2500} />
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('hero.satisfied_customers')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
