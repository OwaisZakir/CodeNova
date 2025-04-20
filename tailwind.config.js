/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral Colors
        'gray-100': '#F7FAFC', // Light mode background
        'gray-200': '#EDF2F7',
        'gray-300': '#E2E8F0',
        'gray-400': '#CBD5E0',
        'gray-500': '#A0AEC0',
        'gray-600': '#718096',
        'gray-700': '#4A5568',
        'gray-800': '#2D3748',
        'gray-900': '#1A202C', // Dark mode background

        // Accent Colors
        'cyan-400': '#00B5D8', // Links & Highlights
        'cyan-500': '#0BC5D2', // Button hover
        'blue-500': '#3182CE', // Link hover
        'yellow-400': '#F6E05E', // Code highlighting

        // Brand Colors
        'primary': '#4C51BF', // Main brand color
        'secondary': '#2D3748', // Secondary dark tone

        // Buttons and UI Elements
        'button-bg': '#4A5568', // Dark button background
        'button-hover': '#2B2D37', // Dark button hover
        'button-text': '#E2E8F0', // Light button text color

        // Error, Success, Warning
        'red-500': '#F56565',
        'green-500': '#48BB78',
        'yellow-500': '#ECC94B',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // For body text
        code: ['Source Code Pro', 'monospace'], // For code snippets
      },
    },
  },
  plugins: [],
}
