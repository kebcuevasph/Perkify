import { e as createComponent, f as createAstro, h as addAttribute, r as renderTemplate } from './astro/server_B8E05pQD.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Head;
  const { title, isRtl } = Astro2.props;
  const cssPath = isRtl ? ".rtl" : "";
  const pathname = Astro2.url.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const depth = pathSegments.length > 0 ? pathSegments.length - 1 : 0;
  const deploymentPath = depth === 0 ? "./" : "../".repeat(depth);
  return renderTemplate`<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>${title}</title>

<!--begin::Accessibility Meta Tags-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#007bff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)">
<!--end::Accessibility Meta Tags-->

<!--begin::Primary Meta Tags-->
<meta name="title"${addAttribute(title, "content")}>
<meta name="author" content="ColorlibHQ">
<meta name="description" content="AdminLTE is a Free Bootstrap 5 Admin Dashboard, 30 example pages using Vanilla JS. Fully accessible with WCAG 2.1 AA compliance.">
<meta name="keywords" content="bootstrap 5, bootstrap, bootstrap 5 admin dashboard, bootstrap 5 dashboard, bootstrap 5 charts, bootstrap 5 calendar, bootstrap 5 datepicker, bootstrap 5 tables, bootstrap 5 datatable, vanilla js datatable, colorlibhq, colorlibhq dashboard, colorlibhq admin dashboard, accessible admin panel, WCAG compliant">
<!--end::Primary Meta Tags-->

<!--begin::Accessibility Features-->
<!-- Skip links will be dynamically added by accessibility.js -->
<meta name="supported-color-schemes" content="light dark">
<link rel="preload"${addAttribute(deploymentPath + "css/adminlte" + cssPath + ".css", "href")} as="style">
<!--end::Accessibility Features-->

<!--begin::Fonts-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css" integrity="sha256-tXJfXfp6Ewt1ilPzLDtQnJV4hclT9XuaZUKyUvmyr+Q=" crossorigin="anonymous" media="print" onload="this.media='all'">
<!--end::Fonts-->

<!--begin::Third Party Plugin(OverlayScrollbars)-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/styles/overlayscrollbars.min.css" crossorigin="anonymous">
<!--end::Third Party Plugin(OverlayScrollbars)-->

<!--begin::Third Party Plugin(Bootstrap Icons)-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css" crossorigin="anonymous">
<!--end::Third Party Plugin(Bootstrap Icons)-->

<!--begin::Required Plugin(AdminLTE)-->
<link rel="stylesheet"${addAttribute(deploymentPath + "css/adminlte" + cssPath + ".css", "href")}>
<!--end::Required Plugin(AdminLTE)-->`;
}, "/workspaces/Perkify/src/html/components/_head.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Scripts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Scripts;
  const pathname = Astro2.url.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const depth = pathSegments.length > 0 ? pathSegments.length - 1 : 0;
  const deploymentPath = depth === 0 ? "./" : "../".repeat(depth);
  const adminlteJsUrl = deploymentPath + "js/adminlte.js";
  return renderTemplate(_a || (_a = __template(['<!--begin::Third Party Plugin(OverlayScrollbars)--><script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.11.0/browser/overlayscrollbars.browser.es6.min.js" crossorigin="anonymous"><\/script>\n<!--end::Third Party Plugin(OverlayScrollbars)--><!--begin::Required Plugin(popperjs for Bootstrap 5)--><script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" crossorigin="anonymous"><\/script>\n<!--end::Required Plugin(popperjs for Bootstrap 5)--><!--begin::Required Plugin(Bootstrap 5)--><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js" crossorigin="anonymous"><\/script>\n<!--end::Required Plugin(Bootstrap 5)--><!--begin::Required Plugin(AdminLTE)--><script', '><\/script>\n<!--end::Required Plugin(AdminLTE)--><!--begin::OverlayScrollbars Configure--><script>\nconst SELECTOR_SIDEBAR_WRAPPER = ".sidebar-wrapper"\nconst Default = {\n  scrollbarTheme: "os-theme-light",\n  scrollbarAutoHide: "leave",\n  scrollbarClickScroll: true\n}\ndocument.addEventListener("DOMContentLoaded", function () {\n  const sidebarWrapper = document.querySelector(SELECTOR_SIDEBAR_WRAPPER)\n  \n  // Disable OverlayScrollbars on mobile devices to prevent touch interference\n  const isMobile = window.innerWidth <= 992\n  \n  if (\n    sidebarWrapper &&\n    OverlayScrollbarsGlobal?.OverlayScrollbars !== undefined &&\n    !isMobile\n  ) {\n    OverlayScrollbarsGlobal.OverlayScrollbars(sidebarWrapper, {\n      scrollbars: {\n        theme: Default.scrollbarTheme,\n        autoHide: Default.scrollbarAutoHide,\n        clickScroll: Default.scrollbarClickScroll\n      }\n    })\n  }\n})\n<\/script>\n<!--end::OverlayScrollbars Configure-->'])), addAttribute(adminlteJsUrl, "src"));
}, "/workspaces/Perkify/src/html/components/_scripts.astro", void 0);

export { $$Head as $, $$Scripts as a };
