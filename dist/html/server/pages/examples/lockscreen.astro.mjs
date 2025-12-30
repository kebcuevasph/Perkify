import { e as createComponent, f as createAstro, n as renderComponent, o as renderHead, h as addAttribute, r as renderTemplate } from '../../chunks/astro/server_B8E05pQD.mjs';
import 'piccolore';
import { $ as $$Head, a as $$Scripts } from '../../chunks/_scripts_DGS33WeZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Lockscreen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Lockscreen;
  const title = "AdminLTE 4 | Lockscreen";
  const path = "../../../dist";
  const htmlPath = "..";
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const pathname = Astro2.url.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const depth = pathSegments.length > 0 ? pathSegments.length - 1 : 0;
  const deploymentPath = depth === 0 ? "./" : "../".repeat(depth);
  return renderTemplate`<html lang="en">
  <!--begin::Head-->
  <head>
    ${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}
  ${renderHead()}</head>
  <!--end::Head-->
  <!--begin::Body-->
  <body class="lockscreen bg-body-secondary">
    <div class="lockscreen-wrapper">
      <div class="lockscreen-logo">
        <a${addAttribute(htmlPath + "/index2.html", "href")}><b>Admin</b>LTE</a>
      </div>

      <div class="lockscreen-name">John Doe</div>

      <div class="lockscreen-item">
        <div class="lockscreen-image">
          <img${addAttribute(deploymentPath + "assets/img/user1-128x128.jpg", "src")} alt="User Image">
        </div>

        <form class="lockscreen-credentials">
          <div class="input-group">
            <input type="password" class="form-control shadow-none" placeholder="password">
            <div class="input-group-text border-0 bg-transparent px-1">
              <button type="button" class="btn shadow-none">
                <i class="bi bi-box-arrow-right text-body-secondary"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="help-block text-center">
        Enter your password to retrieve your session
      </div>
      <div class="text-center">
        <a href="login.html" class="text-decoration-none">Or sign in as a different user</a>
      </div>
      <div class="lockscreen-footer text-center">
        Copyright © 2014-${year} &nbsp;
        <b><a href="https://adminlte.io" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">AdminLTE.io</a></b> <br>
        All rights reserved
      </div>
    </div>

    ${renderComponent($$result, "Scripts", $$Scripts, {})}
  </body><!--end::Body--></html>`;
}, "/workspaces/Perkify/src/html/pages/examples/lockscreen.astro", void 0);

const $$file = "/workspaces/Perkify/src/html/pages/examples/lockscreen.astro";
const $$url = "/examples/lockscreen.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Lockscreen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
