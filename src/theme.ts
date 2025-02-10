"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    primary: {
      main: "#ffffff", // تم استبدال اللون الأساسي مع لون العناصر القابلة للنقر
    },
    secondary: {
      main: "#4b5e4b", // اللون الثانوي
    },
    background: {
      default: "#000000", // خلفية التطبيق
      paper: "#4b5e4b", // لون الـ Navbar (كان primary.main في السابق)
    },
    text: {
      primary: "#ffffff", // لون النصوص الأساسية
      secondary: "#4b5e4b", // لون النصوص الثانوية
    },
  },
});

export default theme;

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#ffffff" }, // تم استبداله مع background.paper
          secondary: { main: "#4b5e4b" },
          background: { default: "#eeede9", paper: "#4b5e4b" }, // تم تبادل الألوان
          text: { primary: "#000000", secondary: "#4b5e4b" },
        }
      : {
          primary: { main: "#ffffff" }, // تم استبداله مع background.paper
          secondary: { main: "#4b5e4b" },
          background: { default: "#000000", paper: "#4b5e4b" }, // تم تبادل الألوان
          text: { primary: "#eeede9", secondary: "#4b5e4b" },
        }),
  },
});





// "use client";
// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   typography: {
//     fontFamily: "var(--font-roboto)",
//   },
// });

// export default theme;

// export const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // palette values for light mode
//         }
//       : {
//           // palette values for dark mode
//         }),
//   },
// });
