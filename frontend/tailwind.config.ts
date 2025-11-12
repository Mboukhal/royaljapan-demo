import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,js}",
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/auth/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'rubik': '"Black Ops One"'
      },
      container: {
        center: true,
        padding: '40px',
      },

    },

  },
  plugins: [],
};
export default config
