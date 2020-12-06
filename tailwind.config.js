module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  purge: {
    enabled: false
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ],
}
