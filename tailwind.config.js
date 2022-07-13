module.exports = {
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.js',
    './src/**/*.vue',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      colors:{
        'lime-green':'hsl(163, 72%, 41%)',
        'bright-red':'hsl(356, 69%, 56%)',
        'facebook':'hsl(208, 92%, 53%)',
        'twitter':'hsl(203, 89%, 53%)',
        'youtube':'hsl(348, 97%, 39%)',
        'instagram': { 0:'hsl(37, 97%, 70%)', 1:'hsl(329, 70%, 58%)' },
        'dark': { 0:'hsl(210, 78%, 56%)', 1:'hsl(146, 68%, 55%)' },
        'light':'hsl(230, 22%, 74%)',
        'very-dark-blue':{ 0:'hsl(230, 17%, 14%)', 1:'hsl(232, 19%, 15%)' },
        'dark-desaturated-blue':'hsl(228, 28%, 20%)',
        'desaturated-blue':'hsl(228, 34%, 66%)',
        'very-pale-blue':'hsl(225, 100%, 98%)',
        'light-grayish-blue':'hsl(227, 47%, 96%)',
        'dark-grayish-blue':'hsl(228, 12%, 44%)'
      },
      fontFamily:
      {
        'inter':['inter']
      },
      fontSize:
      {
        '2.5xl':'1.7rem'
      }
    },
  },
  plugins: [],
}
