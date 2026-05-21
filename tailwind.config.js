// 하하보리밥 브랜드 컬러 팔레트와 타이포그래피 설정
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        boribap: {
          ivory: '#FBF6EC',
          cream: '#F3E9D2',
          barley: '#D9B26A',
          ember: '#B8722E',
          earth: '#5A3A1B',
          ink: '#221912',
          leaf: '#4A6B2E',
          accent: '#C8402E',
        },
      },
      fontFamily: {
        display: ['"Gowun Batang"', 'serif'],
        body: ['"Pretendard"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-grain':
          "radial-gradient(rgba(90,58,27,0.04) 1px, transparent 1px)",
      },
      animation: {
        'float-slow': 'float 9s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
