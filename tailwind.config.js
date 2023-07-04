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
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [require('tailwindcss'), require('autoprefixer')],
};
