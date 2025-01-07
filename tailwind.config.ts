import type { Config } from "tailwindcss";


const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "radar-spin": "radar-spin 10s linear infinite",
        "aurora": "aurora 60s linear infinite",
      },
      keyframes: {
        "radar-spin": {
          from: {
            transform: "rotate(20deg)",
          },
          to: {
            transform: "rotate(380deg)",
          },
        },
        "aurora":{
          from: {
            backgroundPosition: "100% 0%, 100% 0%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        black: {
          DEFAULT: '#000',
          100: '#000319',
          101: '#111827',
          rick1: '#141a27',
          rick2: '#101928',
          rick3: '#121928',
        },
        cyan: {
          950: '#083344',
        },
        green: {
          midnight: '#254b53',
        }
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}