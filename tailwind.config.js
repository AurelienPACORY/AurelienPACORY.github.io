/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        luxury: {
          accent: '#6366f1',
          accent2: '#ec4899',
          accent3: '#f59e0b',
        }
      },
      fontFamily: {
        display: ['Clash Display', 'SF Pro Display', 'system-ui', 'sans-serif'],
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 2s linear infinite',
        'aurora': 'aurora 20s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '33%': {
            transform: 'translateY(-30px) rotate(5deg)',
          },
          '66%': {
            transform: 'translateY(-15px) rotate(-5deg)',
          },
        },
        glow: {
          '0%, 100%': {
            opacity: '0.5',
            filter: 'blur(60px)',
          },
          '50%': {
            opacity: '0.8',
            filter: 'blur(80px)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        shimmer: {
          '0%': {
            'background-position': '-1000px 0',
          },
          '100%': {
            'background-position': '1000px 0',
          },
        },
        aurora: {
          '0%, 100%': {
            transform: 'rotate(0deg) scale(1)',
          },
          '33%': {
            transform: 'rotate(5deg) scale(1.1)',
          },
          '66%': {
            transform: 'rotate(-5deg) scale(0.95)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #f59e0b 100%)',
      },
    },
  },
  plugins: [],
}
