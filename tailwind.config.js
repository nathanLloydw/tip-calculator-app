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
          'light-cyan':'#9be3d9',
          'tiber':'#194e54',
          'very-dark-cyan': 'hsl(186, 14%, 43%)',
          'grayish-cyan': 'hsl(184, 14%, 56%)',
          'light-grayish-cyan': 'hsl(185, 41%, 84%)',
          'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
          'autumn-leaf-orange':'#c78204'
        },
        fontFamily:
        {
            'space-mono':['Space Mono']
        },
        width: {
            '12/25': '48%',
            '31%': '31%'
        }

    }
  },
  plugins: [],
}
