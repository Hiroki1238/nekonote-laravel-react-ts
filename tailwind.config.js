const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans], zenmaru: ["Zen Maru Gothic"], kosugimaru: ["Kosugi Maru"],
            },
            height: {
                neko: '120px',
              },
            width: {
                '1/9': '0.11111111%',
                '1/8': '12.5%',
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/8': '62.5%',
                '5/7': '71.4285714%',
                '7/9': '77.7777777%',
                '6/7': '85.7142857%',
              },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};