import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      primary:'#FF5900',
      dark:'#A63A00',
      secondary:'#FF9000',
      third:'#F60018',
      gray:'#E1E5F7',
      background:'#575A6B',
    white:'#FFFFFF'
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'logo':"url('/logo_txt.png')"
      },
    },
  },
  plugins: [],
}
export default config
