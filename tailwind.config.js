module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        10: "10px",
        14: "14px",
        16: "16px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        32: "32px",
        36: "36px",
        40: "40px",
        45: "45px",
        48: "48px",
      },
      fontFamily: {
        sans: "	font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        serif:
          "	font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
        mono: "	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New','monospace'",
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
