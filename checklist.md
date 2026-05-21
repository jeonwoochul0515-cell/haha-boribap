# 하하보리밥 홈페이지 체크리스트

## 완료
- [x] Naver/다이닝코드/식신/한국관광공사 데이터 수집
- [x] 본점(양산) + 가맹 1호점(울산) 정보 정리
- [x] React + Vite + Tailwind + Framer Motion 셋업
- [x] 사진 10장을 public/images 의미있는 이름으로 정리
- [x] Hero (풀스크린 한상 + "만원의 행복" 헤드라인)
- [x] Concept (만원 약속, 큰 가격 카드)
- [x] Menu (시그니처 정식 + 사이드 6종)
- [x] Why 하하보리밥 (4기둥 카드, 배경 사진)
- [x] Gallery (9장 매소너리 그리드)
- [x] Reviews (4건, 네이버/다이닝코드/식신 출처)
- [x] Stores (본점 + 울산 가맹점 카드)
- [x] Franchise (카카오톡 CTA + 4가지 강점)
- [x] Footer (빠른 링크, 매장 요약)
- [x] 반응형 (모바일 햄버거 메뉴, 스마트폰 1열 → 데스크탑 4열)
- [x] SEO 메타태그, OG 이미지, favicon, theme-color
- [x] `_headers` (보안 + 캐시), `robots.txt`
- [x] `npm run build` 통과 (280KB JS, 28KB CSS, 1.64s)
- [x] 배포 가이드 README

## 사용자가 배포 전에 해야 할 일
- [ ] `src/data/site.js`의 `kakaoChannel` / `franchise.cta.href` → 실제 카카오톡 채널 URL
- [ ] (선택) `index.html`의 `og:image`를 도메인 절대 URL로
- [ ] (선택) 실제 사진 추가/교체 시 `public/images/` 같은 파일명으로 덮어쓰기
- [ ] GitHub 저장소 생성 후 push
- [ ] Cloudflare Pages 프로젝트 생성 (build=`npm run build`, output=`dist`)
- [ ] 커스텀 도메인 연결 (선택)

## 향후 확장 아이디어
- 가맹 신청 폼 (Cloudflare Pages Functions로 이메일 전송)
- 매장 위치 임베드 지도 (네이버 지도 API)
- 인스타그램 피드 위젯 (브랜드 인스타 계정 생성 후)
- 다국어 (영어/일본어/중국어) — 황산공원 관광객 유입
