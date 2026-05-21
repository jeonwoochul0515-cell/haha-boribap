// 리뷰 섹션 - 네이버 AI 요약 카드, 키워드 바 차트, 실제 리뷰 8건을 시각적으로 정리
import SectionTitle from '../components/SectionTitle.jsx'
import { reviews, stats, keywordChart, brand } from '../data/site.js'
import useReveal from '../lib/useReveal.js'

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-boribap-accent" aria-label={`${n}점`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>
          {i < n ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}

function KeywordBar({ label, count, max }) {
  const pct = Math.round((count / max) * 100)
  return (
    <div>
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-semibold text-boribap-earth">{label}</span>
        <span className="text-boribap-ember font-bold">{count.toLocaleString()}명</span>
      </div>
      <div className="mt-1.5 h-2.5 rounded-full bg-boribap-cream overflow-hidden ring-1 ring-boribap-barley/30">
        <div
          className="h-full bg-gradient-to-r from-boribap-barley to-boribap-ember rounded-full"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function Reviews() {
  const [ref, visible] = useReveal()
  const max = Math.max(...keywordChart.map((k) => k.count))

  return (
    <section id="reviews" className="relative py-24 sm:py-36 bg-boribap-cream">
      <div className="absolute inset-0 grain opacity-50" aria-hidden />
      <div className="container-edge relative">
        <SectionTitle
          eyebrow="REVIEWS"
          title="손님들의 한 마디."
          sub={`네이버 방문자 리뷰 ${stats.visitorReviews.toLocaleString()}건 · 블로그 리뷰 ${stats.blogReviews}건. 평점 ${stats.rating}점. 매일 더 부지런해지는 이유.`}
        />

        <div
          ref={ref}
          className={`mt-12 grid lg:grid-cols-12 gap-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="lg:col-span-5 rounded-3xl bg-boribap-earth text-boribap-ivory p-7 sm:p-9 shadow-xl">
            <span className="eyebrow text-boribap-barley">네이버 AI 요약</span>
            <p className="mt-4 font-display text-2xl sm:text-3xl leading-snug">
              “{brand.aiSummary}”
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-boribap-ivory/10 ring-1 ring-boribap-ivory/15 p-4">
                <div className="font-display font-bold text-3xl text-boribap-barley">
                  {stats.rating}
                </div>
                <div className="text-[11px] tracking-widest mt-1 text-boribap-cream/75">평점</div>
              </div>
              <div className="rounded-xl bg-boribap-ivory/10 ring-1 ring-boribap-ivory/15 p-4">
                <div className="font-display font-bold text-3xl text-boribap-barley">
                  {stats.visitorReviews.toLocaleString()}
                </div>
                <div className="text-[11px] tracking-widest mt-1 text-boribap-cream/75">방문자</div>
              </div>
              <div className="rounded-xl bg-boribap-ivory/10 ring-1 ring-boribap-ivory/15 p-4">
                <div className="font-display font-bold text-3xl text-boribap-barley">
                  {stats.blogReviews}
                </div>
                <div className="text-[11px] tracking-widest mt-1 text-boribap-cream/75">블로그</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl bg-boribap-ivory ring-1 ring-boribap-barley/30 shadow-md p-7 sm:p-9">
            <span className="eyebrow">방문자가 뽑은 키워드 TOP 5</span>
            <div className="mt-5 space-y-4">
              {keywordChart.map((k) => (
                <KeywordBar key={k.label} {...k} max={max} />
              ))}
            </div>
            <p className="mt-5 text-xs text-boribap-ink/55">
              ※ 네이버 플레이스 누적 키워드 선택 인원 기준
            </p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              className="bg-boribap-ivory rounded-2xl p-6 shadow-md ring-1 ring-boribap-barley/30 flex flex-col"
            >
              <Stars n={r.rating} />
              <p className="mt-4 text-boribap-ink/85 leading-relaxed flex-1 text-sm sm:text-[15px]">
                “{r.text}”
              </p>
              <footer className="mt-5 text-sm">
                <span className="font-semibold text-boribap-earth">{r.author}</span>
                <div className="text-xs text-boribap-ink/55 mt-0.5">
                  {r.where} · {r.date}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-boribap-ink/55">
          ★ 다이닝코드 본점 4.3 · 울산점 4.7 / 식약처 위생등급 우수·매우우수 (2026년 기준)
        </p>
      </div>
    </section>
  )
}
