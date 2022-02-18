module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        monitrr: {
          100: "#CC8CF0",
          200: "#8E61DB"
        }
      },
      boxShadow: {
        footer: [
          "0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
        ],
        "footer-hover": [
          "0 -10px 15px 6px rgb(0 0 0 / 0.1), 0 4px 9px 4px rgb(0 0 0 / 0.1)"
        ],
        "navbar-hover": [
          "0 10px 15px 6px rgb(0 0 0 / 0.1), 0 4px 9px 4px rgb(0 0 0 / 0.1)"
        ]
      },
    },
  },
  plugins: [],
}