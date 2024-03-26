import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xxs:{'raw': '(min-width: 320px) and (max-width: 380px)'},
        xs:{'raw': '(min-width: 380px) and (max-width: 514px)'},
        s:{'raw': '(min-width: 514px) and (max-width: 640px)'},
        sm:{'raw': '(min-width: 640px) and (max-width: 768px)'},
        // '1.5xl':{'raw': '(min-width: 1377px) and (max-width: 1535px)'},
      },
      backgroundImage: {
        'dashed-white-transparent': 'repeating-linear-gradient(90deg, white 1%, white 6%, transparent 6%, transparent 11%)',
        'dashed-grey-transparent': 'repeating-linear-gradient(90deg, #A9ACB2 1%, #A9ACB2 6%, transparent 6%, transparent 11%)'
,
        
      },
      spacing: {
        '98': '26rem',
        '100':'28rem',
        '102':'30rem',
        '104':'35rem',
      },
      
      fontSize:{
        a1:'2px',
        a2:'4px',
        a3:'7px',
        a4:'8px',
        a5:'10px',
        a6:'12px',
        a7:"14px",
        a8:'16px',
        a9:'20px',
        a10:'24px',
        a11:'26px',
      },
      fontFamily:{
        poppins:"Poppins",
      },
      backgroundColor:{
        bgwhite:'#F7F7F8',
        bgdark:'rgba(41, 43, 50, 1)',
        boxColorDark:'#3B3E47',
        blue:'#2C9CF0',
        
      },
      textColor:{
        ad:'#DFDFDF',
        blue:'#2C9CF0',
        greyLight:'#525965',
      },
      
      colors:{
        regal:'#738FFF',
        blue:'#2C9CF0'
      },
      inset:{
        leftcustom:'8%',
      },
      lineHeight:{
        a3:'8.5px',
        a4:'10px',
        a5:'12px',
        a6:'14px',
        a7:'16px',
        a8:'18px',
      }
    },
    
  },
  plugins: [],
};

export default config;
