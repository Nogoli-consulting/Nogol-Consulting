import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Lato', 'Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        blog: {
          css: {
            '--tw-prose-body': 'var(--muted)',
            '--tw-prose-headings': 'var(--text)',
            '--tw-prose-lead': 'var(--muted)',
            '--tw-prose-links': 'var(--accent2)',
            '--tw-prose-bold': 'var(--text)',
            '--tw-prose-counters': 'var(--accent)',
            '--tw-prose-bullets': 'var(--accent)',
            '--tw-prose-hr': 'var(--line)',
            '--tw-prose-quotes': 'var(--text)',
            '--tw-prose-quote-borders': 'var(--accent)',
            '--tw-prose-captions': 'var(--muted)',
            '--tw-prose-code': 'var(--accent2)',
            '--tw-prose-pre-code': 'var(--text)',
            '--tw-prose-pre-bg': 'var(--bg2)',
            '--tw-prose-th-borders': 'var(--line)',
            '--tw-prose-td-borders': 'var(--line)',

            blockquote: {
              backgroundColor: 'var(--bg2)',
              borderLeftColor: 'var(--accent)',
              borderLeftWidth: '2px',
              fontStyle: 'normal',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              paddingRight: '1rem',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
