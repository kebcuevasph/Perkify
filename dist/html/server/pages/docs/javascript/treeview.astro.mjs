import { _ as __astro_tag_component__, k as createVNode, l as Fragment, e as createComponent, n as renderComponent, o as renderHead, r as renderTemplate } from '../../../chunks/astro/server_B8E05pQD.mjs';
import 'piccolore';
import { $ as $$Head, a as $$Scripts } from '../../../chunks/_scripts_DGS33WeZ.mjs';
import { $ as $$Topbar, a as $$Footer } from '../../../chunks/index_Cg-ZASur.mjs';
import 'clsx';
import { $ as $$Sidenav } from '../../../chunks/_sidenav_DO9-T62-.mjs';
export { renderers } from '../../../renderers.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
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
      children: "The Treeview plugin converts a nested list into a tree view where sub menus can be expanded."
    }), "\n", createVNode(_components.h5, {
      id: "usage",
      children: "Usage"
    }), "\n", createVNode(_components.p, {
      children: "This plugin can be used as the data api."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Data API"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Add ", createVNode(_components.code, {
        children: "data-lte-toggle=\"treeview\""
      }), " to any ul or ol element to activate the plugin."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dark-plus",
      style: {
        backgroundColor: "#1E1E1E",
        color: "#D4D4D4",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "html",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " data-lte-toggle"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"treeview\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "><"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"#\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "One Level"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "  <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"nav-item menu-open\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"nav-link\""
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"#\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "Multilevel"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "    <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"nav-treeview\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "      <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "><"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " href"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"#\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "Level 2"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "a"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "    </"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "  </"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "li"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "ul"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        })]
      })
    }), "\n", createVNode(_components.h5, {
      id: "example",
      children: "Example"
    }), "\n", createVNode("ul", {
      "data-lte-toggle": "treeview",
      children: [createVNode("li", {
        children: createVNode("a", {
          href: "#",
          children: "One Level"
        })
      }), createVNode("li", {
        class: "nav-item menu-open",
        children: [createVNode("a", {
          class: "nav-link",
          href: "#",
          children: createVNode(_components.p, {
            children: "Multilevel"
          })
        }), createVNode("ul", {
          class: "nav-treeview",
          children: createVNode("li", {
            children: createVNode("a", {
              href: "#",
              children: "Level 2"
            })
          })
        })]
      })]
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
Content.moduleId = "/workspaces/Perkify/src/html/components/javascript/treeview.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$Treeview = createComponent(($$result, $$props, $$slots) => {
  const title = "Treeview Plugin | AdminLTE 4";
  const path = "../../../../dist";
  const mainPage = "javascript";
  const page = "treeview";
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
                <h3 class="mb-0">Treeview Plugin</h3>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-end">
                  <li class="breadcrumb-item"><a href="#">Docs</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Treeview Plugin
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
            ${renderComponent($$result, "Treeview", Content, {})}
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
}, "/workspaces/Perkify/src/html/pages/docs/javascript/treeview.astro", void 0);

const $$file = "/workspaces/Perkify/src/html/pages/docs/javascript/treeview.astro";
const $$url = "/docs/javascript/treeview.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Treeview,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
