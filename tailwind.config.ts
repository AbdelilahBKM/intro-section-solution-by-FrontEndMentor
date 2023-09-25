import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        mobile: '375px',
        desktop: '1440px'
      },
      colors: {
        background: 'hsl(0, 0%, 98%)',
        primary: 'hsl(0, 0%, 41%)',
        secondary: 'hsl(0, 0%, 8%)'
      },
      fontSize: {
        paragraph: '18'
      },
      fontWeight: {
        normal: '500',
        heavy: '700'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
