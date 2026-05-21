# 하하보리밥 홈페이지 컨텍스트 노트

이 문서는 작업 중 내린 결정과 배경 정보를 기록합니다. 다음 세션이 매끄럽게 이어가도록.

## 브랜드 정수
- 슬로건: **"엄마의 손길 그대로"** (매장 외관 간판에서 확인)
- 핵심 컨셉: **"만원에 가장 푸짐하고 행복한 한상"** (사용자 요구)
- 보리밥 정식 2인 이상 10,000원 — 1인 9,000원에서 인상된 가격 안내가 매장 메뉴판에 부착되어 있음
- 보리밥 정식 = 보리밥 + 쌈 + 청국장 + 갈치구이 + 불고기 + 나물찬 5종

## 매장 현황
- **본점**: 경상남도 양산시 물금읍 버들3길 8-1, ☎ 055-381-0316
  - 영업 11:00-20:00, 평일 브레이크 15:00-17:00
  - 황산공원 인접, 전용 주차장
  - 다이닝코드 평점 4.3
- **가맹 1호점**: 울산광역시 중구 함월22길 8 (성안동), ☎ 0507-1444-2283
  - 영업 11:00-20:00, 수요일 11:00-15:00만 영업
  - 다이닝코드 평점 4.7
  - "지역 주민이 사랑하는 단골 맛집"
- 위생등급: 우수·매우우수

## 사진 자산 매핑
| 원본 파일명 | 변경된 파일명 | 사용 위치 |
|---|---|---|
| 하하보리밥.png | hero-spread.png | Hero 배경 |
| 하하보리밥2.jpg | storefront.jpg | Stores 양산점 카드 |
| 하하보리밥 내부.jpg | interior.jpg | Stores 울산점 카드 |
| 하하1.jpg | signature-set.jpg | Menu 시그니처 + Franchise 배경 |
| 4.jpg | galchi.jpg | Gallery |
| 12.jpg | bulgogi.jpg | Gallery |
| 2.jpg | banchan-1.jpg | Gallery + WhyHaha 배경 |
| 3.jpg | banchan-2.jpg | Gallery |
| 1232131.jpg | ssam.jpg | Gallery (쌈채소·묵) |
| 123.jpg | menu-board.jpg | Gallery (메뉴판) |

## 기술 결정
- **Vite + React (JS)** 선택. TypeScript는 사용자 요청 외라 단순함 우선.
- **TailwindCSS** — 빠른 디자인 시스템 구축. `boribap-*` 컬러 토큰화.
- **Framer Motion** — Hero 인트로 모션. 다른 섹션은 IntersectionObserver 훅으로 직접 처리해 번들 절약.
- **단일 페이지**(SPA 라우팅 X) — anchor 스크롤만 사용. Cloudflare Pages에 SPA fallback 불필요.
- **카카오톡 채널 CTA** — 사용자 요청에 따라 가맹문의 폼 대신 카카오 채널로 연결. placeholder URL이라 실제 채널 URL로 교체 필요.

## 컬러 팔레트
- `boribap-ivory #FBF6EC` — 배경
- `boribap-cream #F3E9D2` — 보조 배경
- `boribap-barley #D9B26A` — 강조 (보리/황금)
- `boribap-ember #B8722E` — 강조 텍스트
- `boribap-earth #5A3A1B` — 메인 다크 (흙)
- `boribap-ink #221912` — 본문 텍스트
- `boribap-leaf #4A6B2E` — 보조 (쌈채소)
- `boribap-accent #C8402E` — 평점 별

## 안 한 것 / 안 하기로 한 것
- **Instagram / TikTok 스크래핑** — API 없이 불가, Naver Place도 차단. 사용자가 직접 제공한 사진만 사용.
- **가맹문의 폼** — 사용자가 카카오톡 채널로 처리하기로 결정. Cloudflare Functions 추가 작업 안 함.
- **TypeScript** — 단순성 우선, 변환 부담 회피.
- **다국어** — 향후 확장 가능.
- **백엔드** — 없음. 100% 정적.

## 빌드 검증 결과
- `npm run build` 통과, 1.64초
- dist/index.html 1.51 KB
- dist/assets/index-*.css 27.93 KB (gzip 5.23 KB)
- dist/assets/index-*.js 280.06 KB (gzip 91.24 KB)
