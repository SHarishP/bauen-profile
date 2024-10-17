import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white": "#F7F7F5",
        "secondary-grey": "#ddd9dc",
        "third-grey": "#515659",
        "fourth-black": "#292929",
      },
    },
  },
  plugins: [],
};
export default config;
