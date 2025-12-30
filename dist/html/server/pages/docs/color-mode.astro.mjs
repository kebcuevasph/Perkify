import { _ as __astro_tag_component__, k as createVNode, l as Fragment, e as createComponent, r as renderTemplate, n as renderComponent, o as renderHead } from '../../chunks/astro/server_B8E05pQD.mjs';
import 'piccolore';
import { a as $$Scripts, $ as $$Head } from '../../chunks/_scripts_DGS33WeZ.mjs';
import { a as $$Footer, $ as $$Topbar } from '../../chunks/index_Cg-ZASur.mjs';
import { $ as $$Sidenav } from '../../chunks/_sidenav_DO9-T62-.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const frontmatter = {};
function _createMdxContent(props) {
  const _components = {
    code: "code",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.pre, {
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A9955"
            },
            children: "<!--begin::Header-->"
          })
        }), "\n", createVNode(_components.span, {
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
            children: "nav"
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
            children: "\"navbar navbar-expand bg-body\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A9955"
            },
            children: "  <!--begin::Container-->"
          })
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
            children: "div"
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
            children: "\"container-fluid\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A9955"
            },
            children: "    <!--begin::Start Navbar links-->"
          })
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
            children: "\"navbar-nav\""
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
            children: "\"nav-item\""
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
            children: "        <"
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
            children: "\"sidebar\""
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
              color: "#9CDCFE"
            },
            children: " role"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"button\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "          ><"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "\"bi bi-list\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "        ></"
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
            children: "      </"
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
            children: "      <"
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
            children: "\"nav-item d-none d-md-block\""
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
            children: "        <"
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
              color: "#808080"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "Home"
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
            children: "      </"
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
            children: "      <"
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
            children: "\"nav-item d-none d-md-block\""
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
            children: "        <"
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
              color: "#808080"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "Contact"
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
            children: "      </"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A9955"
            },
            children: "    <!--end::Start Navbar links-->"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A9955"
            },
            children: "    <!--begin::End Navbar links-->"
          })
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
            children: "\"navbar-nav ms-auto\""
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
            children: "\"nav-item dropdown\""
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
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "button"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "          class"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "          id"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"bd-theme\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "          type"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"button\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "          aria-expanded"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"false\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "          data-bs-toggle"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"dropdown\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "          data-bs-display"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"static\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "        >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "          <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "span"
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
            children: "\"theme-icon-active\""
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
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "\"my-1\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "          </"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "span"
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
            children: "          <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "span"
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
            children: "\"d-lg-none ms-2\""
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " id"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"bd-theme-text\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "Toggle theme"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "</"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "span"
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
            children: "        </"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "button"
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
            children: "        <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "ul"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "          class"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"dropdown-menu dropdown-menu-end\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "          aria-labelledby"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"bd-theme-text\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "          style"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"--bs-dropdown-min-width: 8rem;\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "        >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "          <"
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
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "button"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              type"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"button\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              class"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"dropdown-item d-flex align-items-center active\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              data-bs-theme-value"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"light\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              aria-pressed"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"false\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "            >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "              <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "\"bi bi-sun-fill me-2\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "              Light"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "              <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "\"bi bi-check-lg ms-auto d-none\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "            </"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "button"
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
            children: "          </"
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
            children: "          <"
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
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "button"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              type"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"button\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              class"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"dropdown-item d-flex align-items-center\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              data-bs-theme-value"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"dark\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              aria-pressed"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"false\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "            >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "              <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "\"bi bi-moon-fill me-2\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "              Dark"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "              <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "\"bi bi-check-lg ms-auto d-none\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "            </"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "button"
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
            children: "          </"
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
            children: "          <"
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
            children: "            <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "button"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              type"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"button\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              class"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"dropdown-item d-flex align-items-center\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              data-bs-theme-value"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"auto\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "              aria-pressed"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"true\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "            >"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "              <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "\"bi bi-circle-fill-half-stroke me-2\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "              Auto"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "              <"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "\"bi bi-check-lg ms-auto d-none\""
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: "></"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "i"
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
            children: "            </"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "button"
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
            children: "          </"
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
            children: "        </"
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
            children: "      </"
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
          children: createVNode(_components.span, {
            style: {
              color: "#6A9955"
            },
            children: "    <!--end::End Navbar links-->"
          })
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
            children: "div"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A9955"
            },
            children: "  <!--end::Container-->"
          })
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
            children: "nav"
          }), createVNode(_components.span, {
            style: {
              color: "#808080"
            },
            children: ">"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A9955"
            },
            children: "<!--end::Header-->"
          })
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
      "data-language": "js",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A9955"
            },
            children: "// Color Mode Toggler"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "(() "
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "  \"use strict\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#4FC1FF"
            },
            children: " storedTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "localStorage"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "getItem"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"theme\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: " getPreferredTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = () "
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "storedTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "      return"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " storedTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " window"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "matchMedia"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"(prefers-color-scheme: dark)\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "matches"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "      ? "
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"dark\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "      : "
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"light\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: " setTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "theme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " ("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "      theme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " === "
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"auto\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " &&"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "      window"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "matchMedia"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"(prefers-color-scheme: dark)\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "matches"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    ) {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "      document"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "documentElement"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "setAttribute"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"data-bs-theme\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"dark\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    } "
          }), createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "else"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "      document"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "documentElement"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "setAttribute"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"data-bs-theme\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "theme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "  setTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "getPreferredTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "  const"
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: " showActiveTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = ("
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "theme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "focus"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "false"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#4FC1FF"
            },
            children: " themeSwitcher"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "document"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "querySelector"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"#bd-theme\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " (!"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "themeSwitcher"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "      return"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#4FC1FF"
            },
            children: " themeSwitcherText"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "document"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "querySelector"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"#bd-theme-text\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#4FC1FF"
            },
            children: " activeThemeIcon"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "document"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "querySelector"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\".theme-icon-active i\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#4FC1FF"
            },
            children: " btnToActive"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "document"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "querySelector"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "      `[data-bs-theme-value=\""
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "theme"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"]`"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    );"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#4FC1FF"
            },
            children: " svgOfActiveBtn"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "btnToActive"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "querySelector"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"i\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ")."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "getAttribute"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"class\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "    for"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#4FC1FF"
            },
            children: " element"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " document"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "querySelectorAll"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"[data-bs-theme-value]\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ")) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "      element"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "classList"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "remove"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"active\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "      element"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "setAttribute"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"aria-pressed\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"false\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "    btnToActive"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "classList"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "add"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"active\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "    btnToActive"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "setAttribute"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"aria-pressed\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"true\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "    activeThemeIcon"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "setAttribute"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"class\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "svgOfActiveBtn"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "    const"
          }), createVNode(_components.span, {
            style: {
              color: "#4FC1FF"
            },
            children: " themeSwitcherLabel"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "`"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "themeSwitcherText"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "textContent"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "${"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "btnToActive"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "dataset"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "bsThemeValue"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "}"
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: ")`"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "    themeSwitcher"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "setAttribute"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"aria-label\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "themeSwitcherLabel"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "    if"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "focus"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "      themeSwitcher"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "focus"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "  };"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "  window"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "matchMedia"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"(prefers-color-scheme: dark)\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    ."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"change\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "      if"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "storedTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " !== "
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"light\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " || "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "storedTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " !== "
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"dark\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "        setTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "getPreferredTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "      }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "  window"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"DOMContentLoaded\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "    showActiveTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "getPreferredTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "());"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CE92A4"
            },
            children: "    for"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              color: "#4FC1FF"
            },
            children: " toggle"
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: " of"
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: " document"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "querySelectorAll"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"[data-bs-theme-value]\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ")) {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "      toggle"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "addEventListener"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"click\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", () "
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "=>"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "        const"
          }), createVNode(_components.span, {
            style: {
              color: "#4FC1FF"
            },
            children: " theme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "toggle"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "getAttribute"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"data-bs-theme-value\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "        localStorage"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "setItem"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#CE9178"
            },
            children: "\"theme\""
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "theme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "        setTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "theme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#DCDCAA"
            },
            children: "        showActiveTheme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#9CDCFE"
            },
            children: "theme"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#569CD6"
            },
            children: "true"
          }), createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "      });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "  });"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#D4D4D4"
            },
            children: "})();"
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
Content.moduleId = "/workspaces/Perkify/src/html/components/docs/color-mode.mdx";
__astro_tag_component__(Content, 'astro:jsx');

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ColorMode = createComponent(($$result, $$props, $$slots) => {
  const title = "Color Mode | AdminLTE 4";
  const path = "../../../dist";
  const mainPage = "docs";
  const page = "color-mode";
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <!--begin::Head-->\n  <head>\n    ', "\n  ", '</head>\n  <!--end::Head-->\n  <!--begin::Body-->\n  <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">\n    <!--begin::App Wrapper-->\n    <div class="app-wrapper">\n      ', "\n      ", '\n      <!--begin::App Main-->\n      <main class="app-main">\n        <!--begin::App Content Header-->\n        <div class="app-content-header">\n          <!--begin::Container-->\n          <div class="container-fluid">\n            <!--begin::Row-->\n            <div class="row">\n              <div class="col-sm-6">\n                <h3 class="mb-0">Color Mode Toggle</h3>\n              </div>\n              <div class="col-sm-6">\n                <ol class="breadcrumb float-sm-end">\n                  <li class="breadcrumb-item"><a href="#">Docs</a></li>\n                  <li class="breadcrumb-item active" aria-current="page">\n                    Color Mode\n                  </li>\n                </ol>\n              </div>\n            </div>\n            <!--end::Row-->\n          </div>\n          <!--end::Container-->\n        </div>\n        <!--end::App Content Header-->\n        <!--begin::App Content-->\n        <div class="app-content">\n          <!--begin::Container-->\n          <div class="container-fluid">\n            <!--begin::Row-->\n            <div class="row g-4">\n              <div class="col-12">\n                <div class="callout callout-info">\n                  <h5 class="fw-bold">Tips</h5>\n                  <p>\n                    <a href="https://getbootstrap.com/docs/5.3/customize/color-modes/" target="_blank" rel="noopener noreferrer" class="callout-link">\n                      Color modes in Bootstrap\n                    </a> allow you to switch between light and dark modes. You can do this using the data-bs-theme attribute. You can also create your own custom color modes.\n\n                  </p>\n                </div>\n              </div>\n              <!-- Start column -->\n              <div class="col-12">\n                <!--begin::Header-->\n                <nav class="navbar navbar-expand bg-body">\n                  <!--begin::Container-->\n                  <div class="container-fluid">\n                    <!--begin::Start Navbar links-->\n                    <ul class="navbar-nav">\n                      <li class="nav-item">\n                        <a class="nav-link" data-lte-toggle="sidebar" href="#" role="button"><i class="bi bi-list"></i></a>\n                      </li>\n                      <li class="nav-item d-none d-md-block">\n                        <a href="#" class="nav-link">Home</a>\n                      </li>\n                      <li class="nav-item d-none d-md-block">\n                        <a href="#" class="nav-link">Contact</a>\n                      </li>\n                    </ul>\n                    <!--end::Start Navbar links-->\n                    <!--begin::End Navbar links-->\n                    <ul class="navbar-nav ms-auto">\n                      <li class="nav-item dropdown">\n                        <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">\n                          <span class="theme-icon-active">\n                            <i class="my-1"></i>\n                          </span>\n                          <span class="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>\n                        </button>\n                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text" style="--bs-dropdown-min-width: 8rem;">\n                          <li>\n                            <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="light" aria-pressed="false">\n                              <i class="bi bi-sun-fill me-2"></i>\n                              Light\n                              <i class="bi bi-check-lg ms-auto d-none"></i>\n                            </button>\n                          </li>\n                          <li>\n                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">\n                              <i class="bi bi-moon-fill me-2"></i>\n                              Dark\n                              <i class="bi bi-check-lg ms-auto d-none"></i>\n                            </button>\n                          </li>\n                          <li>\n                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="true">\n                              <i class="bi bi-circle-fill-half-stroke me-2"></i>\n                              Auto\n                              <i class="bi bi-check-lg ms-auto d-none"></i>\n                            </button>\n                          </li>\n                        </ul>\n                      </li>\n                    </ul>\n                    <!--end::End Navbar links-->\n                  </div>\n                  <!--end::Container-->\n                </nav>\n                <!--end::Header-->\n              </div>\n              <!-- Start column -->\n              <div class="col-12">\n                ', "\n              </div>\n            </div>\n            <!--end::Row-->\n          </div>\n          <!--end::Container-->\n        </div>\n        <!--end::App Content-->\n      </main>\n      <!--end::App Main-->\n      ", "\n    </div>\n    <!--end::App Wrapper-->\n\n    ", '\n\n    <script>\n// Color Mode Toggler\n(() => {\n  "use strict"\n\n  const storedTheme = localStorage.getItem("theme")\n\n  const getPreferredTheme = () => {\n    if (storedTheme) {\n      return storedTheme\n    }\n\n    return globalThis.matchMedia("(prefers-color-scheme: dark)").matches ?\n      "dark" :\n      "light"\n  }\n\n  const setTheme = function (theme) {\n    if (\n      theme === "auto" &&\n            globalThis.matchMedia("(prefers-color-scheme: dark)").matches\n    ) {\n      document.documentElement.setAttribute("data-bs-theme", "dark")\n    } else {\n      document.documentElement.setAttribute("data-bs-theme", theme)\n    }\n  }\n\n  setTheme(getPreferredTheme())\n\n  const showActiveTheme = (theme, focus = false) => {\n    const themeSwitcher = document.querySelector("#bd-theme")\n\n    if (!themeSwitcher) {\n      return\n    }\n\n    const themeSwitcherText = document.querySelector("#bd-theme-text")\n    const activeThemeIcon = document.querySelector(\n      ".theme-icon-active i"\n    )\n    const btnToActive = document.querySelector(\n      `[data-bs-theme-value="${theme}"]`\n    )\n    const svgOfActiveBtn = btnToActive\n            .querySelector("i")\n            .getAttribute("class")\n\n    for (const element of document.querySelectorAll(\n      "[data-bs-theme-value]"\n    )) {\n      element.classList.remove("active")\n      element.setAttribute("aria-pressed", "false")\n    }\n\n    btnToActive.classList.add("active")\n    btnToActive.setAttribute("aria-pressed", "true")\n    activeThemeIcon.setAttribute("class", svgOfActiveBtn)\n    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`\n    themeSwitcher.setAttribute("aria-label", themeSwitcherLabel)\n\n    if (focus) {\n      themeSwitcher.focus()\n    }\n  }\n\n  globalThis\n          .matchMedia("(prefers-color-scheme: dark)")\n          .addEventListener("change", () => {\n            if (storedTheme !== "light" || storedTheme !== "dark") {\n              setTheme(getPreferredTheme())\n            }\n          })\n\n  globalThis.addEventListener("DOMContentLoaded", () => {\n    showActiveTheme(getPreferredTheme())\n\n    for (const toggle of document.querySelectorAll(\n      "[data-bs-theme-value]"\n    )) {\n      toggle.addEventListener("click", () => {\n        const theme = toggle.getAttribute("data-bs-theme-value")\n        localStorage.setItem("theme", theme)\n        setTheme(theme)\n        showActiveTheme(theme, true)\n      })\n    }\n  })\n})()\n    <\/script>\n    <!--end::Script-->\n  </body><!--end::Body--></html>'], ['<html lang="en">\n  <!--begin::Head-->\n  <head>\n    ', "\n  ", '</head>\n  <!--end::Head-->\n  <!--begin::Body-->\n  <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">\n    <!--begin::App Wrapper-->\n    <div class="app-wrapper">\n      ', "\n      ", '\n      <!--begin::App Main-->\n      <main class="app-main">\n        <!--begin::App Content Header-->\n        <div class="app-content-header">\n          <!--begin::Container-->\n          <div class="container-fluid">\n            <!--begin::Row-->\n            <div class="row">\n              <div class="col-sm-6">\n                <h3 class="mb-0">Color Mode Toggle</h3>\n              </div>\n              <div class="col-sm-6">\n                <ol class="breadcrumb float-sm-end">\n                  <li class="breadcrumb-item"><a href="#">Docs</a></li>\n                  <li class="breadcrumb-item active" aria-current="page">\n                    Color Mode\n                  </li>\n                </ol>\n              </div>\n            </div>\n            <!--end::Row-->\n          </div>\n          <!--end::Container-->\n        </div>\n        <!--end::App Content Header-->\n        <!--begin::App Content-->\n        <div class="app-content">\n          <!--begin::Container-->\n          <div class="container-fluid">\n            <!--begin::Row-->\n            <div class="row g-4">\n              <div class="col-12">\n                <div class="callout callout-info">\n                  <h5 class="fw-bold">Tips</h5>\n                  <p>\n                    <a href="https://getbootstrap.com/docs/5.3/customize/color-modes/" target="_blank" rel="noopener noreferrer" class="callout-link">\n                      Color modes in Bootstrap\n                    </a> allow you to switch between light and dark modes. You can do this using the data-bs-theme attribute. You can also create your own custom color modes.\n\n                  </p>\n                </div>\n              </div>\n              <!-- Start column -->\n              <div class="col-12">\n                <!--begin::Header-->\n                <nav class="navbar navbar-expand bg-body">\n                  <!--begin::Container-->\n                  <div class="container-fluid">\n                    <!--begin::Start Navbar links-->\n                    <ul class="navbar-nav">\n                      <li class="nav-item">\n                        <a class="nav-link" data-lte-toggle="sidebar" href="#" role="button"><i class="bi bi-list"></i></a>\n                      </li>\n                      <li class="nav-item d-none d-md-block">\n                        <a href="#" class="nav-link">Home</a>\n                      </li>\n                      <li class="nav-item d-none d-md-block">\n                        <a href="#" class="nav-link">Contact</a>\n                      </li>\n                    </ul>\n                    <!--end::Start Navbar links-->\n                    <!--begin::End Navbar links-->\n                    <ul class="navbar-nav ms-auto">\n                      <li class="nav-item dropdown">\n                        <button class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">\n                          <span class="theme-icon-active">\n                            <i class="my-1"></i>\n                          </span>\n                          <span class="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>\n                        </button>\n                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text" style="--bs-dropdown-min-width: 8rem;">\n                          <li>\n                            <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="light" aria-pressed="false">\n                              <i class="bi bi-sun-fill me-2"></i>\n                              Light\n                              <i class="bi bi-check-lg ms-auto d-none"></i>\n                            </button>\n                          </li>\n                          <li>\n                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">\n                              <i class="bi bi-moon-fill me-2"></i>\n                              Dark\n                              <i class="bi bi-check-lg ms-auto d-none"></i>\n                            </button>\n                          </li>\n                          <li>\n                            <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="true">\n                              <i class="bi bi-circle-fill-half-stroke me-2"></i>\n                              Auto\n                              <i class="bi bi-check-lg ms-auto d-none"></i>\n                            </button>\n                          </li>\n                        </ul>\n                      </li>\n                    </ul>\n                    <!--end::End Navbar links-->\n                  </div>\n                  <!--end::Container-->\n                </nav>\n                <!--end::Header-->\n              </div>\n              <!-- Start column -->\n              <div class="col-12">\n                ', "\n              </div>\n            </div>\n            <!--end::Row-->\n          </div>\n          <!--end::Container-->\n        </div>\n        <!--end::App Content-->\n      </main>\n      <!--end::App Main-->\n      ", "\n    </div>\n    <!--end::App Wrapper-->\n\n    ", '\n\n    <script>\n// Color Mode Toggler\n(() => {\n  "use strict"\n\n  const storedTheme = localStorage.getItem("theme")\n\n  const getPreferredTheme = () => {\n    if (storedTheme) {\n      return storedTheme\n    }\n\n    return globalThis.matchMedia("(prefers-color-scheme: dark)").matches ?\n      "dark" :\n      "light"\n  }\n\n  const setTheme = function (theme) {\n    if (\n      theme === "auto" &&\n            globalThis.matchMedia("(prefers-color-scheme: dark)").matches\n    ) {\n      document.documentElement.setAttribute("data-bs-theme", "dark")\n    } else {\n      document.documentElement.setAttribute("data-bs-theme", theme)\n    }\n  }\n\n  setTheme(getPreferredTheme())\n\n  const showActiveTheme = (theme, focus = false) => {\n    const themeSwitcher = document.querySelector("#bd-theme")\n\n    if (!themeSwitcher) {\n      return\n    }\n\n    const themeSwitcherText = document.querySelector("#bd-theme-text")\n    const activeThemeIcon = document.querySelector(\n      ".theme-icon-active i"\n    )\n    const btnToActive = document.querySelector(\n      \\`[data-bs-theme-value="\\${theme}"]\\`\n    )\n    const svgOfActiveBtn = btnToActive\n            .querySelector("i")\n            .getAttribute("class")\n\n    for (const element of document.querySelectorAll(\n      "[data-bs-theme-value]"\n    )) {\n      element.classList.remove("active")\n      element.setAttribute("aria-pressed", "false")\n    }\n\n    btnToActive.classList.add("active")\n    btnToActive.setAttribute("aria-pressed", "true")\n    activeThemeIcon.setAttribute("class", svgOfActiveBtn)\n    const themeSwitcherLabel = \\`\\${themeSwitcherText.textContent} (\\${btnToActive.dataset.bsThemeValue})\\`\n    themeSwitcher.setAttribute("aria-label", themeSwitcherLabel)\n\n    if (focus) {\n      themeSwitcher.focus()\n    }\n  }\n\n  globalThis\n          .matchMedia("(prefers-color-scheme: dark)")\n          .addEventListener("change", () => {\n            if (storedTheme !== "light" || storedTheme !== "dark") {\n              setTheme(getPreferredTheme())\n            }\n          })\n\n  globalThis.addEventListener("DOMContentLoaded", () => {\n    showActiveTheme(getPreferredTheme())\n\n    for (const toggle of document.querySelectorAll(\n      "[data-bs-theme-value]"\n    )) {\n      toggle.addEventListener("click", () => {\n        const theme = toggle.getAttribute("data-bs-theme-value")\n        localStorage.setItem("theme", theme)\n        setTheme(theme)\n        showActiveTheme(theme, true)\n      })\n    }\n  })\n})()\n    <\/script>\n    <!--end::Script-->\n  </body><!--end::Body--></html>'])), renderComponent($$result, "Head", $$Head, { "title": title, "path": path }), renderHead(), renderComponent($$result, "Topbar", $$Topbar, { "path": path }), renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page }), renderComponent($$result, "ColorMode", Content, {}), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Scripts", $$Scripts, { "path": path }));
}, "/workspaces/Perkify/src/html/pages/docs/color-mode.astro", void 0);

const $$file = "/workspaces/Perkify/src/html/pages/docs/color-mode.astro";
const $$url = "/docs/color-mode.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ColorMode,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
