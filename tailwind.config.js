/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html", // add your HTML
    "./src/**/*.{js,ts,jsx,tsx}", // add your source files
];
export const theme = {
    extend: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
    },
};
export const plugins = [];