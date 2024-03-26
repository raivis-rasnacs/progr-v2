import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Proghelp",
  description: "Vietne palīdzībai programmēšanā",

  theme,
 
});
