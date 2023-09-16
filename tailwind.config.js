/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/script.js",
  ],
  theme: {
    extend: {
      maxWidth: {
        160: "240px",
      },

      fontFamily: {
        code: ["Source Code Pro", "monospace"],
      },

      gridTemplateColumns: {
        new1: "250px 1fr",
        new2: "repeat(1, minmax(200px, auto))",
      },

      colors: {
        body: "#0d1117",
        terminal: "#161b22",
        terminalFont: "#6784b7",
        cifrao: "#8f0949",
      },

      keyframes: {
        blink: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },

        typing2: {
          "0%": { width: "0px" },
          "40%": { width: "0px" },
          "100%": { width: "500px" },
        },

        typing: {
          "0%": { width: "0" },
          "25%": { width: "70%" },
          "48%": { width: "100%" },
          "50%": { width: "100%" },
          "55%": { width: "100%" },
          "75%": { width: "70%" },
          "85%": { width: "30%" },
          "100%": { width: "0" },
        },
      },

      animation: {
        blink: "blink 2s infinite",
        typing2: "typing2 4s steps(50, end)",
        typing: "typing 5s steps(20) infinite",
      },
    },
  },
  plugins: [],
};
