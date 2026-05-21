// 푸터 - 브랜드 로고, 빠른 링크, 연락처, 카피라이트
import Logo from '../components/Logo.jsx'
import { stores } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-boribap-ink text-boribap-cream/80 pt-16 pb-10">
      <div className="container-edge">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo light withTagline />
            <p className="mt-5 text-sm text-boribap-cream/65 leading-relaxed">
              자연에서 온 신선한 한상.
              <br />
              만원의 행복을 매일 차립니다.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-boribap-ivory text-base mb-4">
              빠른 이동
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="hover:text-boribap-ivory">메뉴</a></li>
              <li><a href="#why" className="hover:text-boribap-ivory">왜 하하보리밥</a></li>
              <li><a href="#gallery" className="hover:text-boribap-ivory">갤러리</a></li>
              <li><a href="#franchise" className="hover:text-boribap-ivory">가맹문의</a></li>
            </ul>
          </div>

          {stores.map((s) => (
            <div key={s.id}>
              <h4 className="font-display font-bold text-boribap-ivory text-base mb-4">
                {s.badge} · {s.name.replace('하하보리밥 ', '')}
              </h4>
              <ul className="space-y-1.5 text-sm text-boribap-cream/65">
                <li>{s.address}</li>
                <li>
                  <a href={s.phoneLink} className="hover:text-boribap-ivory">
                    {s.phone}
                  </a>
                </li>
                <li>{s.hours[0].label} {s.hours[0].time}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-boribap-cream/15 text-xs text-boribap-cream/55 flex flex-col sm:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} 하하보리밥. All rights reserved.</p>
          <p>엄마의 손길 그대로 · 만원의 행복.</p>
        </div>
      </div>
    </footer>
  )
}
