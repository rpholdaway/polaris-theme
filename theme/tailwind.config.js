/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.json'
  ],
  theme: {
    extend: {
      colors: {
        forest: '#323C32',
        primary: '#323C32',
        night: '#1A1A1A',
        slate: '#7D786E',
        earth: '#B43C32',
        sand: '#E7E6DD',
        snow: '#F7F7F7',
        white: '#FFFFFF',
        teal: '#2D4650',
        sage: '#C3D6AE',
        'on-forest': '#FFFFFF',
        'on-earth': '#FFFFFF',
        'on-night': '#FFFFFF',
        'on-teal': '#FFFFFF',
        'on-sand': '#1A1A1A',
        'on-snow': '#1A1A1A',
        'on-sage': '#1A1A1A'
      },
      fontFamily: {
        display: ['"Special Gothic Condensed One"', 'Impact', 'sans-serif'],
        body: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: '400' }],
        'display-lg': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '400' }],
        'display-md': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.005em', fontWeight: '400' }],
        h1: ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.005em', fontWeight: '700' }],
        h2: ['1.75rem', { lineHeight: '1.2', letterSpacing: '0em', fontWeight: '600' }],
        h3: ['1.25rem', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        body: ['1rem', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
        nav: ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
        label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600' }],
        'label-sm': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '500' }]
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px'
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        section: '80px'
      },
      maxWidth: {
        container: '1440px',
        prose: '68ch'
      },
      transitionTimingFunction: {
        polaris: 'cubic-bezier(0.23, 1, 0.32, 1)'
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms'
      },
      aspectRatio: {
        card: '4 / 5',
        wide: '16 / 9'
      },
      zIndex: {
        header: '50',
        drawer: '60',
        overlay: '55'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      // Section background rhythm: forest -> snow -> sand -> snow -> white -> forest.
      // Each utility pairs a surface with its guaranteed-contrast foreground.
      addUtilities({
        '.surface-forest': { backgroundColor: '#323C32', color: '#FFFFFF' },
        '.surface-night': { backgroundColor: '#1A1A1A', color: '#FFFFFF' },
        '.surface-teal': { backgroundColor: '#2D4650', color: '#FFFFFF' },
        '.surface-earth': { backgroundColor: '#B43C32', color: '#FFFFFF' },
        '.surface-sand': { backgroundColor: '#E7E6DD', color: '#1A1A1A' },
        '.surface-snow': { backgroundColor: '#F7F7F7', color: '#1A1A1A' },
        '.surface-white': { backgroundColor: '#FFFFFF', color: '#1A1A1A' },
        '.surface-sage': { backgroundColor: '#C3D6AE', color: '#1A1A1A' }
      });
    })
  ]
};
