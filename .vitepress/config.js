import { defineConfig } from "vitepress";
import vue from "@vitejs/plugin-vue";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Power BI Connector",
  description: "Power BI Connector for OrangeHRM",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    // ],

    sidebar: {
      "/": [
        {
          text: "Introduction",
          link: "/",
        },
        { text: "Getting Started", link: "/guide/getting-started" },
        {
          text: "Usage and Best Practices",
          link: "/guide/best-practices",
        },
        {
          text: "API Reference",
          link: "/guide/api-reference",
        },
      ],
    },
  },
  plugins: [vue()],
});
