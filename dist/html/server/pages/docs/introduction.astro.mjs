import { _ as __astro_tag_component__, k as createVNode, l as Fragment, e as createComponent, n as renderComponent, o as renderHead, r as renderTemplate } from '../../chunks/astro/server_B8E05pQD.mjs';
import 'piccolore';
import { $ as $$Head, a as $$Scripts } from '../../chunks/_scripts_DGS33WeZ.mjs';
import { $ as $$Topbar, a as $$Footer } from '../../chunks/index_Cg-ZASur.mjs';
import { $ as $$Sidenav } from '../../chunks/_sidenav_DO9-T62-.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "quick-start",
      children: "Quick start"
    }), "\n", createVNode(_components.p, {
      children: "There are multiple ways to install AdminLTE."
    }), "\n", createVNode(_components.h3, {
      id: "download--changelog",
      children: "Download & Changelog:"
    }), "\n", createVNode(_components.p, {
      children: ["Always Recommended to download from GitHub latest release ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/releases/latest",
        children: "AdminLTE 4"
      }), " for bug free and latest features.", createVNode(_components.br, {}), "\nVisit the ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/releases",
        children: "releases"
      }), " page to view the changelog.", createVNode(_components.br, {}), "\nLegacy Releases are ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/releases/tag/v3.2.0",
        children: "AdminLTE 3"
      }), " / ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/releases/tag/v2.4.18",
        children: "AdminLTE 2"
      }), " / ", createVNode(_components.a, {
        href: "https://github.com/ColorlibHQ/AdminLTE/releases/tag/1.3.1",
        children: "AdminLTE 1"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "stable-release",
      children: "Stable release"
    }), "\n", createVNode(_components.h3, {
      id: "grab-from-jsdelivr-cdn",
      children: ["Grab from ", createVNode(_components.a, {
        href: "https://www.jsdelivr.com/package/npm/admin-lte",
        children: "jsdelivr"
      }), " CDN:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: [createVNode(_components.strong, {
          children: "Important Note"
        }), ": You needed to add separately cdn links for plugins in your project."]
      })
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
            children: "script"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "  src"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"https://cdn.jsdelivr.net/npm/admin-lte@4.0.0-rc3/dist/js/adminlte.min.js\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "  crossorigin"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"anonymous\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "script"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        })]
      })
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
            children: "link"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "  rel"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"stylesheet\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "  href"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"https://cdn.jsdelivr.net/npm/admin-lte@4.0.0-rc3/dist/css/adminlte.min.css\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "  crossorigin"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"anonymous\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "/>"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "using-the-command-line",
      children: "Using The Command Line:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: [createVNode(_components.strong, {
          children: "Important Note"
        }), ": To install it via npm/Yarn, you need at least Node.js 14 or higher."]
      })
    }), "\n", createVNode(_components.h4, {
      id: "via-npm",
      children: "Via npm"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dark-plus",
      style: {
        backgroundColor: "#1E1E1E",
        color: "#D4D4D4",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "npm"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: " install"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: " admin-lte@4.0.0-rc3"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: " --save"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "via-yarn",
      children: "Via Yarn"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dark-plus",
      style: {
        backgroundColor: "#1E1E1E",
        color: "#D4D4D4",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "yarn"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: " admin-lte@4.0.0-rc3"
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "via-composer",
      children: "Via Composer"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dark-plus",
      style: {
        backgroundColor: "#1E1E1E",
        color: "#D4D4D4",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "composer"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: " require"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: " \"almasaeed2010/adminlte=4.0.0-rc3\""
          })]
        })
      })
    }), "\n", createVNode(_components.h4, {
      id: "via-git",
      children: "Via Git"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code dark-plus",
      style: {
        backgroundColor: "#1E1E1E",
        color: "#D4D4D4",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: " https://github.com/ColorlibHQ/AdminLTE.git"
          })]
        })
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
Content.moduleId = "/workspaces/Perkify/src/html/components/docs/introduction.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$Introduction = createComponent(($$result, $$props, $$slots) => {
  const title = "Introduction | AdminLTE 4";
  const path = "../../../dist";
  const mainPage = "docs";
  const page = "introduction";
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
                <h3 class="mb-0">Introduction</h3>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-end">
                  <li class="breadcrumb-item"><a href="#">Docs</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Introduction
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
            ${renderComponent($$result, "Introduction", Content, {})}
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
}, "/workspaces/Perkify/src/html/pages/docs/introduction.astro", void 0);

const $$file = "/workspaces/Perkify/src/html/pages/docs/introduction.astro";
const $$url = "/docs/introduction.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Introduction,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
