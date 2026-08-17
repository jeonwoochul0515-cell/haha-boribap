// 히어로 섹션 - 풀스크린 한상 사진 배경 위에 만원 한상 컨셉을 부각
import { motion } from 'framer-motion'
import { brand, stats } from '../data/site.js'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden text-boribap-ivory"
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: 'url(/images/hero-spread.webp)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-boribap-ink/85 via-boribap-ink/45 to-boribap-ink/95" aria-hidden />
      <div className="absolute inset-0 grain opacity-50" aria-hidden />

      <div className="container-edge relative z-10 pb-16 sm:pb-24 pt-32 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="eyebrow text-boribap-barley">{brand.tagline}</span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] mt-4">
            만원에
            <br />
            <span className="text-boribap-barley">가장 푸짐하고</span>
            <br />
            행복한 한상.
          </h1>
          <p className="mt-7 text-base sm:text-xl text-boribap-cream/90 max-w-2xl leading-relaxed">
            갈치구이, 불고기, 청국장, 나물찬 다섯 가지, 그리고 한가득 쌈채소까지.
            <br className="hidden sm:block" />
            보리밥 한 공기에 진심을 담아 차려냅니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#menu" className="btn-primary">
              <span>정식 한상 보기</span>
              <span aria-hidden>→</span>
            </a>
            <a href="#franchise" className="btn-ghost">
              가맹문의
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-boribap-cream/80">
            <span className="pill bg-boribap-ivory/10 text-boribap-ivory ring-boribap-ivory/30">
              ⭐ {stats.rating} · 방문자 리뷰 {stats.visitorReviews.toLocaleString()}건
            </span>
            <span className="pill bg-boribap-ivory/10 text-boribap-ivory ring-boribap-ivory/30">위생등급 우수·매우우수</span>
            <span className="pill bg-boribap-ivory/10 text-boribap-ivory ring-boribap-ivory/30">본점·별관·가맹 1호점</span>
          </div>

          <p className="mt-6 text-sm sm:text-base text-boribap-barley italic">
            “{brand.aiSummary}” <span className="text-boribap-cream/60 not-italic">— 네이버 AI 요약</span>
          </p>
        </motion.div>
      </div>

      <a
        href="#concept"
        className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 z-10 text-boribap-cream/70 text-xs tracking-[0.4em] uppercase hover:text-boribap-ivory transition"
        aria-label="스크롤 다운"
      >
        <span className="animate-float-slow inline-block">scroll ↓</span>
      </a>
    </section>
  )
}
