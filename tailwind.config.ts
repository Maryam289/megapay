import type { Config } from "tailwindcss"

const config = {
    darkMode: ["class"],
     content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./constants/**/*.{js,ts,jsx,tsx,mdx}",
        
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",

    theme: {
    extend: {},
    },
    plugins: [],
}

module.exports = {
 
  
}