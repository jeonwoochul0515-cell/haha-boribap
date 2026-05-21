// 컨셉 섹션 - 만원 한상의 의미를 큰 숫자와 텍스트로 강렬하게 전달
import useReveal from '../lib/useReveal.js'

export default function Concept() {
  const [ref, visible] = useReveal()
  return (
    <section id="concept" className="relative py-24 sm:py-36 bg-boribap-cream overflow-hidden">
      <div className="absolute inset-0 grain opacity-60" aria-hidden />
      <div className="container-edge relative">
        <div
          ref={ref}
          className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="lg:col-span-6">
            <span className="eyebrow">우리의 약속</span>
            <h2 className="h-display mt-3 text-boribap-earth">
              한 끼에 담은
              <br />
              가장 정직한 가성비.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-boribap-ink/80">
              요즘 외식 한 끼에 만 원, 사이드 없이 끝나는 시대입니다.
              하하보리밥은 거꾸로 갑니다. 같은 만 원으로
              <strong className="text-boribap-earth"> 갈치구이·불고기·청국장·쌈·다섯가지 나물찬</strong>까지.
              한상 가득한 푸짐함과 손맛으로 다시 채웁니다.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-boribap-ink/80">
              비싼 식재료도, 정성 가득한 손길도 가격에 양보하지 않습니다.
              <strong className="text-boribap-earth"> "엄마의 손길 그대로."</strong>
              이 한 마디가 우리 모든 상의 기준입니다.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-boribap-ivory shadow-xl ring-1 ring-boribap-barley/30 p-8 sm:p-12 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-boribap-barley/30 rounded-full blur-2xl" aria-hidden />
              <div className="relative">
                <p className="text-sm text-boribap-ember font-semibold tracking-[0.3em] uppercase">
                  Signature Set
                </p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-display font-bold text-7xl sm:text-8xl text-boribap-earth leading-none">
                    10,000
                  </span>
                  <span className="text-2xl font-bold text-boribap-earth mb-2">원</span>
                </div>
                <p className="mt-2 text-boribap-ink/70">보리밥 정식 · 2인 이상 주문</p>

                <ul className="mt-7 grid grid-cols-2 gap-3 text-sm sm:text-base text-boribap-ink/90">
                  {[
                    '갓 지은 보리밥',
                    '튀기듯 구운 갈치구이',
                    '돌판 불고기',
                    '진한 청국장',
                    '나물찬 5종',
                    '제철 쌈채소',
                  ].map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-boribap-ember mt-0.5">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
