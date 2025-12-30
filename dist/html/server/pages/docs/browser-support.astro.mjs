import { _ as __astro_tag_component__, k as createVNode, l as Fragment, e as createComponent, n as renderComponent, o as renderHead, r as renderTemplate } from '../../chunks/astro/server_B8E05pQD.mjs';
import 'piccolore';
import { $ as $$Head, a as $$Scripts } from '../../chunks/_scripts_DGS33WeZ.mjs';
import { $ as $$Topbar, a as $$Footer } from '../../chunks/index_Cg-ZASur.mjs';
import 'clsx';
import { $ as $$Sidenav } from '../../chunks/_sidenav_DO9-T62-.mjs';
export { renderers } from '../../renderers.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h5: "h5",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "AdminLTE comes with the same browser support as Bootstrap 5."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.h5, {
        id: "excerpt-from-bootstraps-official-documentation",
        children: "Excerpt from Bootstrap’s official Documentation!"
      }), "\n", createVNode(_components.p, {
        children: ["Bootstrap supports the ", createVNode(_components.strong, {
          children: "latest, stable releases"
        }), " of all major browsers and platforms."]
      }), "\n", createVNode(_components.p, {
        children: ["For more details ", createVNode(_components.a, {
          href: "https://getbootstrap.com/docs/5.0/getting-started/browsers-devices/#supported-browsers",
          children: "look here"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["You can find our supported range of browsers and their versions in ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/blob/master/.browserslistrc",
        children: "our .browserslistrc file"
      }), ":"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dark-plus",
      style: {
        backgroundColor: "#1E1E1E",
        color: "#D4D4D4",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# https://github.com/browserslist/browserslist#readme"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: ">= 0.5%"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "last 2 major versions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "not dead"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Chrome >= 60"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Firefox >= 60"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Firefox ESR"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "iOS >= 12"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Safari >= 12"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "not Explorer <= 11"
          })
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/Perkify/src/html/components/docs/browser-support.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$BrowserSupport = createComponent(($$result, $$props, $$slots) => {
  const title = "Browser Support | AdminLTE 4";
  const path = "../../../dist";
  const mainPage = "docs";
  const page = "browser-support";
  return renderTemplate`<html lang="en">
  <!--begin::Head-->
  <head>
    ${renderComponent($$result, "Head", $$Head, { "title": title, "path": path })}
  ${renderHead()}</head>
  <!--end::Head-->
  <!--begin::Body-->
  <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">
    <!--begin::App Wrapper-->
    <div class="app-wrapper">
      ${renderComponent($$result, "Topbar", $$Topbar, { "path": path })}
      ${renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page })}
      <!--begin::App Main-->
      <main class="app-main">
        <!--begin::App Content Header-->
        <div class="app-content-header">
          <!--begin::Container-->
          <div class="container-fluid">
            <!--begin::Row-->
            <div class="row">
              <div class="col-sm-6">
                <h3 class="mb-0">Browser Support</h3>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-end">
                  <li class="breadcrumb-item"><a href="#">Docs</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Browser Support
                  </li>
                </ol>
              </div>
            </div>
            <!--end::Row-->
          </div>
          <!--end::Container-->
        </div>
        <!--end::App Content Header-->
        <!--begin::App Content-->
        <div class="app-content">
          <!--begin::Container-->
          <div class="container-fluid">
            ${renderComponent($$result, "BrowserSupport", Content, {})}
          </div>
          <!--end::Container-->
        </div>
        <!--end::App Content-->
      </main>
      <!--end::App Main-->
      ${renderComponent($$result, "Footer", $$Footer, {})}
    </div>
    <!--end::App Wrapper-->
    <!--begin::Script-->
    ${renderComponent($$result, "Scripts", $$Scripts, { "path": path })}
    <!--end::Script-->
  </body><!--end::Body--></html>`;
}, "/workspaces/Perkify/src/html/pages/docs/browser-support.astro", void 0);

const $$file = "/workspaces/Perkify/src/html/pages/docs/browser-support.astro";
const $$url = "/docs/browser-support.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BrowserSupport,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
