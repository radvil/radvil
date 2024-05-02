/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {},
  fontFamily: {
    sans: ["Roboto"],
    serif: ["ui-serif", "Georgia"],
    mono: ["JetBrains Mono", "ui-monospace"],
  },
};
export const plugins = [require("@tailwindcss/container-queries")];
