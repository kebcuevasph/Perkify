import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_B8E05pQD.mjs';
import 'piccolore';
import 'clsx';
import { c as convertPathToHtml } from './index_Cg-ZASur.mjs';

const $$Astro = createAstro();
const $$Sidenav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sidenav;
  const { path, mainPage, page } = Astro2.props;
  const htmlPath = convertPathToHtml(path);
  const pathname = Astro2.url.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const depth = pathSegments.length > 0 ? pathSegments.length - 1 : 0;
  const deploymentPath = depth === 0 ? "./" : "../".repeat(depth);
  return renderTemplate`<!--begin::Sidebar-->${maybeRenderHead()}<aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
  <!--begin::Sidebar Brand-->
  <div class="sidebar-brand">
    <!--begin::Brand Link-->
    <a${addAttribute(htmlPath + "/index.html", "href")} class="brand-link">
      <!--begin::Brand Image-->
      <img${addAttribute(deploymentPath + "assets/img/AdminLTELogo.png", "src")} alt="AdminLTE Logo" class="brand-image opacity-75 shadow">
      <!--end::Brand Image-->
      <!--begin::Brand Text-->
      <span class="brand-text fw-light">AdminLTE 4</span>
      <!--end::Brand Text-->
    </a>
    <!--end::Brand Link-->
  </div>
  <!--end::Sidebar Brand-->
  <!--begin::Sidebar Wrapper-->
  <div class="sidebar-wrapper">
    <nav class="mt-2">
      <!--begin::Sidebar Menu-->
      <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="navigation" aria-label="Main navigation" data-accordion="false" id="navigation">
        <li${addAttribute(["nav-item", mainPage === "dashboard" && "menu-open"], "class:list")}>
          <a href="#"${addAttribute(["nav-link", mainPage === "dashboard" && "active"], "class:list")}>
            <i class="nav-icon bi bi-speedometer"></i>
            <p>
              Dashboard
              <i class="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/index.html", "href")}${addAttribute(["nav-link", page === "index" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Dashboard v1</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/index2.html", "href")}${addAttribute(["nav-link", page === "index2" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Dashboard v2</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/index3.html", "href")}${addAttribute(["nav-link", page === "index3" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a${addAttribute(htmlPath + "/generate/theme.html", "href")}${addAttribute(["nav-link", page === "theme-generate" && "active"], "class:list")}>
            <i class="nav-icon bi bi-palette"></i>
            <p>Theme Generate</p>
          </a>
        </li>
        <li${addAttribute(["nav-item", mainPage === "widgets" && "menu-open"], "class:list")}>
          <a href="#"${addAttribute(["nav-link", mainPage === "widgets" && "active"], "class:list")}>
            <i class="nav-icon bi bi-box-seam-fill"></i>
            <p>
              Widgets
              <i class="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/widgets/small-box.html", "href")}${addAttribute(["nav-link", page === "small-box" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Small Box</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/widgets/info-box.html", "href")}${addAttribute(["nav-link", page === "info-box" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>info Box</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/widgets/cards.html", "href")}${addAttribute(["nav-link", page === "cards" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Cards</p>
              </a>
            </li>
          </ul>
        </li>
        <li${addAttribute(["nav-item", mainPage === "layout" && "menu-open"], "class:list")}>
          <a href="#"${addAttribute(["nav-link", mainPage === "layout" && "active"], "class:list")}>
            <i class="nav-icon bi bi-clipboard-fill"></i>
            <p>
              Layout Options
              <span class="nav-badge badge text-bg-secondary me-3">6</span>
              <i class="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/layout/unfixed-sidebar.html", "href")}${addAttribute([
    "nav-link",
    page === "unfixed-sidebar" && "active"
  ], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Default Sidebar</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/layout/fixed-sidebar.html", "href")}${addAttribute(["nav-link", page === "fixed-sidebar" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Fixed Sidebar</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/layout/fixed-header.html", "href")}${addAttribute(["nav-link", page === "fixed-header" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Fixed Header</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/layout/fixed-footer.html", "href")}${addAttribute(["nav-link", page === "fixed-footer" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Fixed Footer</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/layout/fixed-complete.html", "href")}${addAttribute(["nav-link", page === "fixed-complete" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Fixed Complete</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/layout/layout-custom-area.html", "href")}${addAttribute(["nav-link", page === "layout-custom-area" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Layout <small>+ Custom Area </small></p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/layout/sidebar-mini.html", "href")}${addAttribute(["nav-link", page === "sidebar-mini" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Sidebar Mini</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/layout/collapsed-sidebar.html", "href")}${addAttribute([
    "nav-link",
    page === "collapsed-sidebar" && "active"
  ], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Sidebar Mini <small>+ Collapsed</small></p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/layout/logo-switch.html", "href")}${addAttribute(["nav-link", page === "logo-switch" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Sidebar Mini <small>+ Logo Switch</small></p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/layout/layout-rtl.html", "href")}${addAttribute(["nav-link", page === "layout-rtl" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Layout RTL</p>
              </a>
            </li>
          </ul>
        </li>
        <li${addAttribute(["nav-item", mainPage === "ui-elements" && "menu-open"], "class:list")}>
          <a href="#"${addAttribute(["nav-link", mainPage === "ui-elements" && "active"], "class:list")}>
            <i class="nav-icon bi bi-tree-fill"></i>
            <p>
              UI Elements
              <i class="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/UI/general.html", "href")}${addAttribute(["nav-link", page === "general" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>General</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/UI/icons.html", "href")}${addAttribute(["nav-link", page === "icons" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Icons</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/UI/timeline.html", "href")}${addAttribute(["nav-link", page === "timeline" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Timeline</p>
              </a>
            </li>
          </ul>
        </li>
        <li${addAttribute(["nav-item", mainPage === "forms" && "menu-open"], "class:list")}>
          <a href="#"${addAttribute(["nav-link", mainPage === "forms" && "active"], "class:list")}>
            <i class="nav-icon bi bi-pencil-square"></i>
            <p>
              Forms
              <i class="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/forms/general.html", "href")}${addAttribute(["nav-link", page === "general" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>General Elements</p>
              </a>
            </li>
          </ul>
        </li>
        <li${addAttribute(["nav-item", mainPage === "tables" && "menu-open"], "class:list")}>
          <a href="#"${addAttribute(["nav-link", mainPage === "tables" && "active"], "class:list")}>
            <i class="nav-icon bi bi-table"></i>
            <p>
              Tables
              <i class="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/tables/simple.html", "href")}${addAttribute(["nav-link", page === "simple" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Simple Tables</p>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-header">EXAMPLES</li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon bi bi-box-arrow-in-right"></i>
            <p>
              Auth
              <i class="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon bi bi-box-arrow-in-right"></i>
                <p>
                  Version 1
                  <i class="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a${addAttribute(htmlPath + "/examples/login.html", "href")} class="nav-link">
                    <i class="nav-icon bi bi-circle"></i>
                    <p>Login</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a${addAttribute(htmlPath + "/examples/register.html", "href")} class="nav-link">
                    <i class="nav-icon bi bi-circle"></i>
                    <p>Register</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon bi bi-box-arrow-in-right"></i>
                <p>
                  Version 2
                  <i class="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a${addAttribute(htmlPath + "/examples/login-v2.html", "href")} class="nav-link">
                    <i class="nav-icon bi bi-circle"></i>
                    <p>Login</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a${addAttribute(htmlPath + "/examples/register-v2.html", "href")} class="nav-link">
                    <i class="nav-icon bi bi-circle"></i>
                    <p>Register</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/examples/lockscreen.html", "href")} class="nav-link">
                <i class="nav-icon bi bi-circle"></i>
                <p>Lockscreen</p>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-header">DOCUMENTATIONS</li>
        <li class="nav-item">
          <a${addAttribute(htmlPath + "/docs/introduction.html", "href")}${addAttribute(["nav-link", page === "introduction" && "active"], "class:list")}>
            <i class="nav-icon bi bi-download"></i>
            <p>Installation</p>
          </a>
        </li>
        <li class="nav-item">
          <a${addAttribute(htmlPath + "/docs/layout.html", "href")}${addAttribute(["nav-link", page === "layout" && "active"], "class:list")}>
            <i class="nav-icon bi bi-grip-horizontal"></i>
            <p>Layout</p>
          </a>
        </li>
        <li class="nav-item">
          <a${addAttribute(htmlPath + "/docs/color-mode.html", "href")}${addAttribute(["nav-link", page === "color-mode" && "active"], "class:list")}>
            <i class="nav-icon bi bi-star-half"></i>
            <p>Color Mode</p>
          </a>
        </li>
        <li${addAttribute(["nav-item", mainPage === "components" && "menu-open"], "class:list")}>
          <a href="#"${addAttribute(["nav-link", mainPage === "components" && "active"], "class:list")}>
            <i class="nav-icon bi bi-ui-checks-grid"></i>
            <p>
              Components
              <i class="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/docs/components/main-header.html", "href")}${addAttribute(["nav-link", page === "main-header" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Main Header</p>
              </a>
            </li>
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/docs/components/main-sidebar.html", "href")}${addAttribute(["nav-link", page === "main-sidebar" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Main Sidebar</p>
              </a>
            </li>
          </ul>
        </li>
        <li${addAttribute(["nav-item", mainPage === "javascript" && "menu-open"], "class:list")}>
          <a href="#"${addAttribute(["nav-link", mainPage === "javascript" && "active"], "class:list")}>
            <i class="nav-icon bi bi-filetype-js"></i>
            <p>
              Javascript
              <i class="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a${addAttribute(htmlPath + "/docs/javascript/treeview.html", "href")}${addAttribute(["nav-link", page === "treeview" && "active"], "class:list")}>
                <i class="nav-icon bi bi-circle"></i>
                <p>Treeview</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a${addAttribute(htmlPath + "/docs/browser-support.html", "href")}${addAttribute(["nav-link", page === "browser-support" && "active"], "class:list")}>
            <i class="nav-icon bi bi-browser-edge"></i>
            <p>Browser Support</p>
          </a>
        </li>
        <li class="nav-item">
          <a${addAttribute(htmlPath + "/docs/how-to-contribute.html", "href")}${addAttribute(["nav-link", page === "how-to-contribute" && "active"], "class:list")}>
            <i class="nav-icon bi bi-hand-thumbs-up-fill"></i>
            <p>How To Contribute</p>
          </a>
        </li>
        <li class="nav-item">
          <a${addAttribute(htmlPath + "/docs/faq.html", "href")}${addAttribute(["nav-link", page === "faq" && "active"], "class:list")}>
            <i class="nav-icon bi bi-question-circle-fill"></i>
            <p>FAQ</p>
          </a>
        </li>
        <li class="nav-item">
          <a${addAttribute(htmlPath + "/docs/license.html", "href")}${addAttribute(["nav-link", page === "license" && "active"], "class:list")}>
            <i class="nav-icon bi bi-patch-check-fill"></i>
            <p>License</p>
          </a>
        </li>

        <li class="nav-header">MULTI LEVEL EXAMPLE</li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon bi bi-circle-fill"></i>
            <p>Level 1</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon bi bi-circle-fill"></i>
            <p>
              Level 1
              <i class="nav-arrow bi bi-chevron-right"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon bi bi-circle"></i>
                <p>Level 2</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon bi bi-circle"></i>
                <p>
                  Level 2
                  <i class="nav-arrow bi bi-chevron-right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="nav-icon bi bi-record-circle-fill"></i>
                    <p>Level 3</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="nav-icon bi bi-record-circle-fill"></i>
                    <p>Level 3</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="nav-icon bi bi-record-circle-fill"></i>
                    <p>Level 3</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon bi bi-circle"></i>
                <p>Level 2</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon bi bi-circle-fill"></i>
            <p>Level 1</p>
          </a>
        </li>

        <li class="nav-header">LABELS</li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon bi bi-circle text-danger"></i>
            <p class="text">Important</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon bi bi-circle text-warning"></i>
            <p>Warning</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon bi bi-circle text-info"></i>
            <p>Informational</p>
          </a>
        </li>
      </ul>
      <!--end::Sidebar Menu-->
    </nav>
  </div>
  <!--end::Sidebar Wrapper-->
</aside>
<!--end::Sidebar-->`;
}, "/workspaces/Perkify/src/html/components/dashboard/_sidenav.astro", void 0);

export { $$Sidenav as $ };
