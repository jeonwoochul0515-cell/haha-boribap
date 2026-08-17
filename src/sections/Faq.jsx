// 자주 묻는 질문 섹션 - 가격·영업시간·주차·포장·가맹 문의를 아코디언으로 답변 (index.html의 FAQPage JSON-LD와 1:1 동기화)
import SectionTitle from '../components/SectionTitle.jsx'
import { faq } from '../data/site.js'
import useReveal from '../lib/useReveal.js'

export default function Faq() {
  const [ref, visible] = useReveal()
  return (
    <section id="faq" className="relative py-24 sm:py-36 bg-boribap-cream">
      <div className="container-edge">
        <SectionTitle
          eyebrow="FAQ"
          title="자주 묻는 질문"
          sub="방문 전 가장 많이 물어보시는 것들만 모았습니다."
        />
        <div
          ref={ref}
          className={`mt-14 max-w-3xl mx-auto grid gap-3 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {faq.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-boribap-ivory ring-1 ring-boribap-barley/30 open:shadow-lg transition"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6">
                <h3 className="font-display font-bold text-base sm:text-lg text-boribap-earth">
                  {f.q}
                </h3>
                <span
                  className="shrink-0 text-boribap-ember transition-transform group-open:rotate-45 text-xl leading-none"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-sm sm:text-base leading-relaxed text-boribap-ink/80">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
