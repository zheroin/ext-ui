module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./.plasmo/**/*.{js,jsx,ts,tsx,mdx}"],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark"
  },
  plugins: [require("daisyui")]
}
