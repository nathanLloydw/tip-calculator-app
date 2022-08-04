module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      colors:
        {
          'strong-cyan': 'hsl(172, 67%, 45%)',
          'tiber':'#194e54',
          'very-dark-cyan': 'hsl(186, 14%, 43%)',
          'grayish-cyan': 'hsl(184, 14%, 56%)',
          'light-grayish-cyan': 'hsl(185, 41%, 84%)',
          'very-light-grayish-cyan': 'hsl(189, 41%, 97%)'
        },
        fontFamily:
        {
            'space-mono':['Space Mono']
        }
    }
  },
  plugins: [],
}
