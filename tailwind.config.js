module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            purple: '#6100C2',
            lightPurple: '#7900C2',
            dark: '#1c1b1a',
            gray: '#969696',
            lightGray: '#afafaf',
            white: '#FFFFFF',
        },
        fontSize: {
            base: ['16px', '18px'],
            sm: ['14px', '16px'],
            md: ['16px', '18px'],
            lg: ['18px', '20px'],
            xl: ['20px', '24px'],
            '2xl': ['22px', '28px'],
            '3xl': ['32px', '40px'],
            '4xl': ['48px', '48px'],
        },
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [require('tailwindcss'), require('autoprefixer')],
};
