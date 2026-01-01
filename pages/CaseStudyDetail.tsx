import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Clock, Calendar, Briefcase, AlertTriangle, CheckCircle2, Quote, GripVertical, TrendingUp, Eye, Heart, Sparkles, Target, BarChart3, Users, Zap } from 'lucide-react';
import { CASE_STUDIES } from '../constants';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { PageHeader } from '../components/ui/PageHeader';
import { CaseStudyExtendedData, CaseStudyMetric, CaseStudyContentPillar, CaseStudyTopPost, CaseStudyChartData, CaseStudyStrategicWin } from '../types';

// Animated Counter Component
const AnimatedCounter: React.FC<{ value: string; label: string; delay?: number }> = ({ value, label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9-]/g, '')) || 0;
      const prefix = value.startsWith('+') ? '+' : value.startsWith('-') ? '-' : '';
      const suffix = value.includes('%') ? '%' : '';

      let start = 0;
      const duration = 2000;
      const startTime = Date.now() + delay;

      const animate = () => {
        const now = Date.now();
        if (now < startTime) {
          requestAnimationFrame(animate);
          return;
        }

        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * Math.abs(numericValue));

        setDisplayValue(`${prefix}${current}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-azure mb-2 tracking-tight">
        {displayValue}
      </div>
      <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 uppercase tracking-widest font-medium">
        {label}
      </div>
    </motion.div>
  );
};

// Before/After Slider Component
const BeforeAfterSlider: React.FC<{ beforeImage: string; afterImage: string }> = ({ beforeImage, afterImage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Labels */}
      <div className="flex justify-between mb-4">
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          BEFORE
        </motion.span>
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          AFTER
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        </motion.span>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-brand-oxford/10 dark:border-white/10"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => !isDragging && setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt="After transformation"
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Subtle green overlay for "after" effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before transformation"
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Subtle red/sepia overlay for "before" effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 backdrop-sepia-[.1] pointer-events-none"></div>
        </div>

        {/* Slider Line & Handle */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          animate={{
            boxShadow: isDragging
              ? '0 0 30px rgba(0, 125, 235, 0.8)'
              : '0 4px 20px rgba(0,0,0,0.3)'
          }}
        >
          {/* Handle */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-brand-azure"
            animate={{
              scale: isDragging ? 1.2 : isHovered ? 1.1 : 1,
              rotate: isDragging ? 90 : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <GripVertical className="w-5 h-5 text-brand-azure" />
          </motion.div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-brand-azure/20 blur-md"></div>
        </motion.div>

        {/* Instruction Overlay */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-sm rounded-full pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered && !isDragging ? 1 : 0, y: isHovered && !isDragging ? 0 : 20 }}
        >
          Drag to compare
        </motion.div>
      </div>
    </motion.div>
  );
};

// Pain Point Card Component
const PainPointCard: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl border border-red-200/50 dark:border-red-800/30 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300"
  >
    <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
      {index + 1}
    </div>
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
        <AlertTriangle className="w-5 h-5 text-red-500" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-brand-oxford dark:text-white mb-2">{title}</h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

// Solution Highlight Component
const SolutionHighlight: React.FC<{ text: string; index: number }> = ({ text, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-start gap-4 p-4 bg-gradient-to-r from-brand-azure/5 to-transparent rounded-xl hover:from-brand-azure/10 transition-colors duration-300"
  >
    <div className="flex-shrink-0 w-8 h-8 bg-brand-azure rounded-lg flex items-center justify-center">
      <CheckCircle2 className="w-4 h-4 text-white" />
    </div>
    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{text}</p>
  </motion.div>
);

// ============================================
// EXTENDED DATA COMPONENTS - Premium Analytics Editorial Design
// ============================================

// Animated Metric Value with counting animation
const AnimatedMetricValue: React.FC<{ value: string; delay?: number }> = ({ value, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
      const suffix = value.replace(/[0-9,]/g, '');
      const duration = 1500;
      const startTime = Date.now() + delay;

      const animate = () => {
        const now = Date.now();
        if (now < startTime) {
          requestAnimationFrame(animate);
          return;
        }
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOut * numericValue);
        setDisplayValue(current.toLocaleString() + suffix);
        if (progress < 1) requestAnimationFrame(animate);
        else setDisplayValue(value);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, delay]);

  return <span ref={ref}>{displayValue}</span>;
};

// Overview Metric Card - Dramatic glass morphism with accent glow
const OverviewMetricCard: React.FC<{ metric: CaseStudyMetric; index: number }> = ({ metric, index }) => {
  const iconColors = ['#007DEB', '#10B981', '#F59E0B', '#8B5CF6'];
  const glowColors = ['rgba(0,125,235,0.3)', 'rgba(16,185,129,0.3)', 'rgba(245,158,11,0.3)', 'rgba(139,92,246,0.3)'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div
        className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: glowColors[index % 4] }}
      />

      {/* Card */}
      <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        {/* Decorative corner accent */}
        <div
          className="absolute top-0 right-0 w-24 h-24 opacity-10"
          style={{
            background: `radial-gradient(circle at 100% 0%, ${iconColors[index % 4]} 0%, transparent 70%)`
          }}
        />

        {/* Floating index badge */}
        <motion.div
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
          style={{ background: iconColors[index % 4] }}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.3, type: "spring", stiffness: 200 }}
        >
          0{index + 1}
        </motion.div>

        {/* Value - Large dramatic typography */}
        <div className="mb-3">
          <span
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
            style={{
              background: `linear-gradient(135deg, ${iconColors[index % 4]}, ${iconColors[(index + 1) % 4]})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <AnimatedMetricValue value={metric.value} delay={index * 100} />
          </span>
        </div>

        {/* Label */}
        <h4 className="text-sm font-bold text-brand-oxford dark:text-white uppercase tracking-[0.2em] mb-1">
          {metric.label}
        </h4>

        {/* Sublabel with animated underline */}
        <div className="relative inline-block">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {metric.sublabel}
          </span>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 rounded-full"
            style={{ background: iconColors[index % 4] }}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 + 0.5, duration: 0.6 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// Content Pillar - Radial progress with hover interaction
const ContentPillarCard: React.FC<{ pillar: CaseStudyContentPillar; index: number; total: number }> = ({ pillar, index, total }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  // Calculate radial progress
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (pillar.percentage / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] p-6 md:p-8 border-2 border-slate-100 dark:border-slate-800 hover:border-transparent transition-colors duration-300 overflow-hidden">
        {/* Hover gradient border effect */}
        <motion.div
          className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${pillar.color}20, transparent, ${pillar.color}10)`,
          }}
        />

        <div className="relative flex items-start gap-6">
          {/* Radial Progress Chart */}
          <div className="relative flex-shrink-0">
            <svg width="100" height="100" className="transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-slate-100 dark:text-slate-800"
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r={radius}
                stroke={pillar.color}
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
                style={{ strokeDasharray: circumference }}
              />
            </svg>
            {/* Center percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-xl font-black"
                style={{ color: pillar.color }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.15 + 0.8, type: "spring", stiffness: 200 }}
              >
                {pillar.percentage}%
              </motion.span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                className="w-3 h-3 rounded-full"
                style={{ background: pillar.color }}
                animate={isHovered ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.4 }}
              />
              <h4 className="text-lg font-bold text-brand-oxford dark:text-white truncate">
                {pillar.title}
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
              {pillar.description}
            </p>
          </div>
        </div>

        {/* Bottom accent bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-b-[2rem]"
          style={{ background: pillar.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${pillar.percentage}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

// Top Post Card - Instagram-inspired with engagement visualization
const TopPostCard: React.FC<{ post: CaseStudyTopPost; index: number; maxViews: number }> = ({ post, index, maxViews }) => {
  const engagementRate = ((post.likes / post.views) * 100).toFixed(1);
  const viewsPercentage = (post.views / maxViews) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ y: -12, rotateY: 5 }}
      className="group relative"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Shadow layer for 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4" />

      <div className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
        {/* Instagram-style gradient header */}
        <div className="h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600" />

        <div className="p-6">
          {/* Format & Theme badges */}
          <div className="flex items-center gap-2 mb-4">
            <motion.span
              className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg shadow-pink-500/25"
              whileHover={{ scale: 1.05 }}
            >
              {post.format}
            </motion.span>
            <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-full">
              {post.theme}
            </span>
          </div>

          {/* Post title */}
          <h4 className="text-lg font-bold text-brand-oxford dark:text-white mb-5 leading-snug min-h-[3.5rem]">
            "{post.title}"
          </h4>

          {/* Engagement metrics */}
          <div className="space-y-4">
            {/* Views bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">Views</span>
                </div>
                <span className="text-lg font-bold text-brand-oxford dark:text-white">
                  {post.views.toLocaleString()}
                </span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-azure to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${viewsPercentage}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                />
              </div>
            </div>

            {/* Likes and engagement rate */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="cursor-pointer"
                >
                  <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                </motion.div>
                <span className="font-bold text-brand-oxford dark:text-white">{post.likes}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 rounded-full">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  {engagementRate}% ER
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Rank badge */}
        <motion.div
          className="absolute top-6 right-6 w-10 h-10 bg-brand-oxford dark:bg-white rounded-xl flex items-center justify-center shadow-lg"
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.5, type: "spring", stiffness: 200 }}
        >
          <span className="text-sm font-black text-white dark:text-brand-oxford">#{index + 1}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Area Chart Component - Elegant line chart with gradient fill
const AreaChart: React.FC<{ data: CaseStudyChartData[]; title: string; color: string; icon: React.ReactNode }> = ({ data, title, color, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  // Generate SVG path
  const width = 300;
  const height = 120;
  const padding = 10;
  const points = data.map((d, i) => ({
    x: padding + (i / (data.length - 1)) * (width - padding * 2),
    y: height - padding - ((d.value - minValue) / range) * (height - padding * 2)
  }));

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${padding} ${height - padding} Z`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ background: `linear-gradient(135deg, ${color}, transparent)` }}
      />

      {/* Header */}
      <div className="relative flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${color}15` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        <h4 className="text-lg font-bold text-brand-oxford dark:text-white">{title}</h4>
      </div>

      {/* Chart */}
      <div className="relative">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-32">
          <defs>
            <linearGradient id={`gradient-${title.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1={padding}
              y1={padding + (i * (height - padding * 2)) / 3}
              x2={width - padding}
              y2={padding + (i * (height - padding * 2)) / 3}
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeDasharray="4 4"
              className="text-slate-400"
            />
          ))}

          {/* Area fill */}
          <motion.path
            d={areaPath}
            fill={`url(#gradient-${title.replace(/\s/g, '')})`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Data points */}
          {points.map((point, i) => (
            <motion.circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="white"
              stroke={color}
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
              className="cursor-pointer"
            />
          ))}
        </svg>

        {/* X-axis labels */}
        <div className="flex justify-between mt-2 px-2">
          {data.map((d, i) => (
            <span key={i} className="text-xs text-slate-500 dark:text-slate-400">
              {d.name}
            </span>
          ))}
        </div>
      </div>

      {/* Summary stat */}
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-sm text-slate-500 dark:text-slate-400">Peak</span>
        <span className="text-xl font-bold" style={{ color }}>
          {maxValue.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
};

// Strategic Win Card - Trophy-style with dramatic reveal
const StrategicWinCard: React.FC<{ win: CaseStudyStrategicWin; index: number }> = ({ win, index }) => {
  const icons = [Zap, Target];
  const Icon = icons[index % 2];

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotateY: index % 2 === 0 ? -15 : 15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-amber-950/40 dark:via-slate-900 dark:to-yellow-950/40 rounded-3xl p-8 border-2 border-amber-200/50 dark:border-amber-700/30 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-300/20 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-300/20 to-transparent rounded-tr-full" />

        <div className="relative flex items-start gap-5">
          {/* Trophy-style icon container */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/30 transform rotate-3">
                <Icon className="w-8 h-8 text-white" />
              </div>
              {/* Sparkle decoration */}
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-full h-full text-amber-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.h4
              className="text-xl font-bold text-brand-oxford dark:text-white mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.2 }}
            >
              {win.title}
            </motion.h4>
            <motion.p
              className="text-slate-600 dark:text-slate-400 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {win.description}
            </motion.p>
          </div>
        </div>

        {/* Win number badge */}
        <motion.div
          className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.4, type: "spring" }}
        >
          WIN #{index + 1}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Extended Data Section Component - Premium Analytics Editorial Design
const ExtendedDataSection: React.FC<{ extendedData: CaseStudyExtendedData }> = ({ extendedData }) => {
  const maxViews = extendedData.topPosts ? Math.max(...extendedData.topPosts.map(p => p.views)) : 0;

  return (
    <>
      {/* Handle/Profile Section - Floating glass card with Instagram gradient */}
      {extendedData.handle && (
        <section className="py-16 relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`
            }} />
          </div>

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-lg mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center">
                {/* Instagram icon placeholder */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.div>

                <span className="text-white/60 text-sm font-medium uppercase tracking-[0.3em]">Instagram</span>
                <motion.p
                  className="text-3xl md:text-4xl font-black text-white mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {extendedData.handle}
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  className="h-1 w-16 mx-auto mt-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Overview Metrics Section - Dramatic 4-column grid with glass cards */}
      {extendedData.overviewMetrics && extendedData.overviewMetrics.length > 0 && (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-brand-oxford">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, #007DEB 1px, transparent 1px),
                               linear-gradient(to bottom, #007DEB 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block px-4 py-1.5 bg-brand-azure/10 text-brand-azure text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                30-Day Performance
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-oxford dark:text-white tracking-tight">
                Overview <span className="text-brand-azure">Metrics</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {extendedData.overviewMetrics.map((metric, idx) => (
                <OverviewMetricCard key={idx} metric={metric} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Pillars Section - Radial progress cards */}
      {extendedData.contentPillars && extendedData.contentPillars.length > 0 && (
        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block px-4 py-1.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Strategy Breakdown
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-oxford dark:text-white tracking-tight mb-4">
                Content <span className="text-purple-600 dark:text-purple-400">Pillars</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Strategic content distribution engineered to maximize engagement and organic reach
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {extendedData.contentPillars.map((pillar, idx) => (
                <ContentPillarCard key={idx} pillar={pillar} index={idx} total={extendedData.contentPillars!.length} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Top Posts Section - Instagram-inspired cards */}
      {extendedData.topPosts && extendedData.topPosts.length > 0 && (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-brand-oxford">
          {/* Decorative blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block px-4 py-1.5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Best Performers
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-oxford dark:text-white tracking-tight mb-4">
                Top <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Posts</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Content that resonated most with the audience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
              {extendedData.topPosts.map((post, idx) => (
                <TopPostCard key={idx} post={post} index={idx} maxViews={maxViews} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Charts Section - Elegant area charts */}
      {(extendedData.growthChart || extendedData.impressionsChart) && (
        <section className="py-24 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Analytics
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-oxford dark:text-white tracking-tight mb-4">
                Growth <span className="text-emerald-600 dark:text-emerald-400">Trajectory</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {extendedData.growthChart && (
                <AreaChart
                  data={extendedData.growthChart}
                  title="Follower Growth"
                  color="#007DEB"
                  icon={<Users className="w-5 h-5" />}
                />
              )}
              {extendedData.impressionsChart && (
                <AreaChart
                  data={extendedData.impressionsChart}
                  title="Weekly Impressions"
                  color="#10B981"
                  icon={<Eye className="w-5 h-5" />}
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Strategic Wins Section - Trophy-style cards */}
      {extendedData.strategicWins && extendedData.strategicWins.length > 0 && (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-amber-50/50 to-white dark:from-amber-950/20 dark:to-brand-oxford">
          {/* Gold accent decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-amber-400 to-transparent" />

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Key Insights
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-oxford dark:text-white tracking-tight mb-4">
                Strategic <span className="text-amber-600 dark:text-amber-400">Wins</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {extendedData.strategicWins.map((win, idx) => (
                <StrategicWinCard key={idx} win={win} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Report Summary Section - Futuristic dashboard style */}
      {extendedData.reportSummary && (
        <section className="py-24 relative overflow-hidden">
          {/* Dynamic gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-oxford via-brand-marian to-indigo-900" />

          {/* Animated grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Floating orbs */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-brand-azure/20 rounded-full blur-2xl"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-6 backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                30-Day Report
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                Campaign <span className="text-brand-azure">Summary</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Follower Growth */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-azure/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-azure to-cyan-400 flex items-center justify-center shadow-lg shadow-brand-azure/30"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Users className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="text-xs text-white/50 uppercase tracking-[0.2em] mb-2 font-medium">Follower Growth</div>
                  <div className="text-2xl md:text-3xl font-black text-white">{extendedData.reportSummary.followerGrowth}</div>
                </div>
              </motion.div>

              {/* Avg Engagement */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Target className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="text-xs text-white/50 uppercase tracking-[0.2em] mb-2 font-medium">Avg Engagement</div>
                  <div className="text-2xl md:text-3xl font-black text-white">{extendedData.reportSummary.avgEngagement}</div>
                </div>
              </motion.div>

              {/* Discovery Rate */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Sparkles className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="text-xs text-white/50 uppercase tracking-[0.2em] mb-2 font-medium">Discovery Rate</div>
                  <div className="text-2xl md:text-3xl font-black text-white">{extendedData.reportSummary.discoveryRate}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export const CaseStudyDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const caseStudy = CASE_STUDIES.find(cs => cs.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => navigate('/case-studies')}>Back to Case Studies</Button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: caseStudy.title },
  ];

  return (
    <div className="min-h-screen bg-brand-ghost dark:bg-brand-oxford">
      {/* Hero Section - Same style as other pages */}
      <PageHeader
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        image={caseStudy.heroImage}
      />

      {/* Meta Info Section */}
      <section className="py-8 bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Badge>{caseStudy.category}</Badge>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Briefcase className="w-5 h-5" />
              <span>{caseStudy.industry}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Clock className="w-5 h-5" />
              <span>{caseStudy.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Calendar className="w-5 h-5" />
              <span>{caseStudy.year}</span>
            </div>
          </div>
          {/* Service Tags */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {caseStudy.services.map((service, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-brand-ghost dark:bg-slate-800 rounded-full text-sm font-medium text-brand-oxford dark:text-white"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The Struggle Section */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="red" className="mb-6">The Struggle</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford dark:text-white mb-6">
                {caseStudy.struggle.headline}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto italic">
                "{caseStudy.struggle.description}"
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 gap-6">
              {caseStudy.struggle.painPoints.map((point, idx) => (
                <PainPointCard
                  key={idx}
                  title={point.title}
                  description={point.description}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-gradient-to-br from-brand-ghost to-white dark:from-brand-oxford dark:to-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="green" className="mb-6">The Solution</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford dark:text-white mb-6">
                The JXING Tech Intervention
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                {caseStudy.solution.description}
              </p>
            </motion.div>

            <div className="space-y-4">
              {caseStudy.solution.highlights.map((highlight, idx) => (
                <SolutionHighlight key={idx} text={highlight} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-6">Visual Transformation</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-oxford dark:text-white mb-4">
              See the Difference
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Drag the slider to compare the before and after transformation
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage={caseStudy.beforeImage}
              afterImage={caseStudy.afterImage}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-brand-oxford to-brand-marian text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="light" className="mb-6">Results</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Numbers Speak
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {caseStudy.stats.map((stat, idx) => (
              <AnimatedCounter
                key={idx}
                value={stat.value}
                label={stat.label}
                delay={idx * 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Extended Data Sections (for social media case studies) */}
      {caseStudy.extendedData && <ExtendedDataSection extendedData={caseStudy.extendedData} />}

      {/* Verdict Section */}
      <section className="py-24 bg-brand-ghost dark:bg-brand-oxford">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-12">
                <div className="w-12 h-12 bg-brand-azure rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <Badge className="mb-6">The Verdict</Badge>

              <h3 className="text-2xl md:text-3xl font-bold text-brand-oxford dark:text-white mb-6">
                {caseStudy.verdict.analogy}
              </h3>

              <blockquote className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed italic mb-8">
                "{caseStudy.verdict.quote}"
              </blockquote>

              {/* Viral Verdict Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-8 border-t border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-brand-azure to-brand-marian text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Viral Verdict
                  </span>
                </div>
                <p className="text-brand-azure font-semibold text-lg">
                  "{caseStudy.verdict.tagline}"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-oxford dark:text-white mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="primary"
                icon="arrow-right"
                onClick={() => navigate('/contact')}
              >
                {caseStudy.ctaText}
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/case-studies')}
              >
                View More Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
