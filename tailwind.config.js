/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF6EB',
          100: '#F5ECD3',
          200: '#EBD8A6',
          300: '#DFC07B',
          400: '#D4AA52',
          500: '#C89D4B',
          600: '#A98135',
          700: '#8A6726',
          800: '#644A18',
          900: '#3D2C0C',
        },
        ivory: {
          light: '#FFFDF9',
          DEFAULT: '#FDFBF7',
          warm: '#F7F3EB',
          dark: '#EFE9DC',
        },
        burgundy: {
          light: '#9E3A4B',
          DEFAULT: '#721C2B',
          dark: '#4A0E1A',
        },
        champagne: '#F3E5AB',
        sage: {
          light: '#9BB0A0',
          DEFAULT: '#6B8570',
          dark: '#4A614F',
        },
        noir: {
          900: '#0D0B09',
          800: '#171412',
          700: '#26221E',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(212,170,82,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 35px rgba(212,170,82,0.85))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
