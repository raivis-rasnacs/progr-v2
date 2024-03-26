import { sidebar } from "vuepress-theme-hope";

export default sidebar(
  [
    {
     text:"Programmēšana",
     prefix: "/programmesana/",
     children: "structure"
    },
    {
      text:"Git classroom",
      prefix: "/classroom/",
      children: "structure"
     },
    {
      text:"Datubāzes",
      prefix: "/db/",
      children: "structure"
      },
      {
      text:"Versiju vadība",
      prefix: "/versiju_vadiba/",
      children: "structure"
      }
]);
