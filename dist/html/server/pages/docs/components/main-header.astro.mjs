import { _ as __astro_tag_component__, k as createVNode, l as Fragment, e as createComponent, f as createAstro, n as renderComponent, o as renderHead, h as addAttribute, r as renderTemplate } from '../../../chunks/astro/server_B8E05pQD.mjs';
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
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(_components.pre, {
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
          children: "<!-- Navbar -->"
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
          children: "\"app-header navbar navbar-expand bg-body\""
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
          children: "    <!-- Start navbar links -->"
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
          children: "    <!-- End navbar links -->"
        })
      }), "\n", createVNode(_components.span, {
        class: "line"
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
        children: createVNode(_components.span, {
          style: {
            color: "#6A9955"
          },
          children: "      <!-- Navbar Search -->"
        })
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
          children: " data-widget"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"navbar-search\""
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
          children: "\"bi bi-search\""
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
          children: "        </"
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
        class: "line"
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: createVNode(_components.span, {
          style: {
            color: "#6A9955"
          },
          children: "      <!-- Messages Dropdown Menu -->"
        })
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
          children: " data-bs-toggle"
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
          children: "\"bi bi-chat-text\""
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
          children: "\"navbar-badge badge text-bg-danger\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "3"
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
          children: "        <"
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
          children: "\"dropdown-menu dropdown-menu-lg dropdown-menu-end\""
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
          children: "\"dropdown-item\""
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
          children: "            <!-- Message Start -->"
        })
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
          children: "\"d-flex\""
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
          children: "              <"
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
          children: "\"flex-shrink-0\""
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "img"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "                  src"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"../../../dist/assets/img/user1-128x128.jpg\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "                  alt"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"User Avatar\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "                  class"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"img-size-50 rounded-circle me-3\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "                />"
        })
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "              </"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "              <"
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
          children: "\"flex-grow-1\""
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "h3"
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
          children: "\"dropdown-item-title\""
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
          children: "                  Brad Diesel"
        })
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "                  <"
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
          children: "\"float-end fs-7 text-danger\""
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
          children: "                    <"
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
          children: "\"bi bi-star-fill\""
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
          children: "                  </"
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
          children: "                </"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "h3"
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "\"fs-7\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "Call me whenever you can..."
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "</"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "\"fs-7 text-secondary\""
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
          children: "                  <"
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
          children: "\"bi bi-clock-fill me-1\""
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
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: " 4 Hours Ago"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "                </"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "              </"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "            </"
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
          children: "            <!-- Message End -->"
        })
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
          children: "          <"
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
          children: "\"dropdown-divider\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "></"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "          <"
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
          children: "\"dropdown-item\""
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
          children: "            <!-- Message Start -->"
        })
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
          children: "\"d-flex\""
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
          children: "              <"
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
          children: "\"flex-shrink-0\""
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "img"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "                  src"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"../../../dist/assets/img/user8-128x128.jpg\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "                  alt"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"User Avatar\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "                  class"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"img-size-50 rounded-circle me-3\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "                />"
        })
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "              </"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "              <"
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
          children: "\"flex-grow-1\""
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "h3"
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
          children: "\"dropdown-item-title\""
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
          children: "                  John Pierce"
        })
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "                  <"
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
          children: "\"float-end fs-7 text-secondary\""
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
          children: "                    <"
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
          children: "\"bi bi-star-fill\""
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
          children: "                  </"
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
          children: "                </"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "h3"
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "\"fs-7\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "I got your message bro"
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "</"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "\"fs-7 text-secondary\""
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
          children: "                  <"
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
          children: "\"bi bi-clock-fill me-1\""
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
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: " 4 Hours Ago"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "                </"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "              </"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "            </"
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
          children: "            <!-- Message End -->"
        })
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
          children: "          <"
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
          children: "\"dropdown-divider\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "></"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "          <"
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
          children: "\"dropdown-item\""
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
          children: "            <!-- Message Start -->"
        })
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
          children: "\"d-flex\""
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
          children: "              <"
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
          children: "\"flex-shrink-0\""
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "img"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "                  src"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"../../../dist/assets/img/user3-128x128.jpg\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "                  alt"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"User Avatar\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "                  class"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"img-size-50 rounded-circle me-3\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "                />"
        })
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "              </"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "              <"
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
          children: "\"flex-grow-1\""
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "h3"
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
          children: "\"dropdown-item-title\""
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
          children: "                  Nora Silvester"
        })
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "                  <"
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
          children: "\"float-end fs-7 text-warning\""
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
          children: "                    <"
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
          children: "\"bi bi-star-fill\""
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
          children: "                  </"
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
          children: "                </"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "h3"
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "\"fs-7\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "The subject goes here"
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "</"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "                <"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "\"fs-7 text-secondary\""
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
          children: "                  <"
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
          children: "\"bi bi-clock-fill me-1\""
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
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: " 4 Hours Ago"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "                </"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "p"
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
          children: "              </"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "            </"
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
          children: "            <!-- Message End -->"
        })
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
          children: "          <"
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
          children: "\"dropdown-divider\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "></"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "          <"
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
          children: "\"dropdown-item dropdown-footer\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "See All Messages"
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
          children: "        </"
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
        children: createVNode(_components.span, {
          style: {
            color: "#6A9955"
          },
          children: "      <!-- Notifications Dropdown Menu -->"
        })
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
          children: " data-bs-toggle"
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
          children: "\"bi bi-bell-fill\""
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
          children: "\"navbar-badge badge text-bg-warning\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "15"
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
          children: "        <"
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
          children: "\"dropdown-menu dropdown-menu-lg dropdown-menu-end\""
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
          children: "\"dropdown-item dropdown-header\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "15 Notifications"
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
          children: "          <"
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
          children: "\"dropdown-divider\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "></"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "          <"
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
          children: "\"dropdown-item\""
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
          children: "\"bi bi-envelope me-2\""
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
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: " 4 new messages"
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
          children: "\"float-end text-secondary fs-7\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "3 mins"
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
          children: "          </"
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
          children: "          <"
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
          children: "\"dropdown-divider\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "></"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "          <"
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
          children: "\"dropdown-item\""
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
          children: "\"bi bi-people-fill me-2\""
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
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: " 8 friend requests"
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
          children: "\"float-end text-secondary fs-7\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "12 hours"
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
          children: "          </"
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
          children: "          <"
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
          children: "\"dropdown-divider\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "></"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "          <"
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
          children: "\"dropdown-item\""
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
          children: "\"bi bi-file-earmark-fill me-2\""
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
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: " 3 new reports"
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
          children: "\"float-end text-secondary fs-7\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "2 days"
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
          children: "          </"
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
          children: "          <"
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
          children: "\"dropdown-divider\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "></"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "          <"
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
          children: "\"dropdown-item dropdown-footer\""
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
          children: "            See All Notifications"
        })
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
          children: "        </"
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
          children: "\"nav-item dropdown user-menu\""
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
          children: "\"nav-link dropdown-toggle\""
        }), createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: " data-bs-toggle"
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
          children: "img"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "            src"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"../../../dist/assets/img/user2-160x160.jpg\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "            class"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"user-image rounded-circle shadow\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "            alt"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"User Image\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "          />"
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
          children: "\"d-none d-md-inline\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "Alexander Pierce"
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
          children: "        <"
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
          children: "\"dropdown-menu dropdown-menu-lg dropdown-menu-end\""
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
          children: "          <!-- User image -->"
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
          children: "\"user-header text-bg-primary\""
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
          children: "img"
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "              src"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"../../../dist/assets/img/user2-160x160.jpg\""
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
          children: "\"rounded-circle shadow\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: [createVNode(_components.span, {
          style: {
            color: "#9CDCFE"
          },
          children: "              alt"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "="
        }), createVNode(_components.span, {
          style: {
            color: "#CE9178"
          },
          children: "\"User Image\""
        })]
      }), "\n", createVNode(_components.span, {
        class: "line",
        children: createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "            />"
        })
      }), "\n", createVNode(_components.span, {
        class: "line"
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
          children: "p"
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
          children: "              Alexander Pierce - Web Developer"
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
          children: "small"
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "Member since Nov. 2023"
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "</"
        }), createVNode(_components.span, {
          style: {
            color: "#569CD6"
          },
          children: "small"
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
          children: "p"
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
        children: createVNode(_components.span, {
          style: {
            color: "#6A9955"
          },
          children: "          <!-- Menu Body -->"
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
          children: "\"user-body\""
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
          children: "            <!--begin::Row-->"
        })
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
          children: "\"row\""
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
          children: "              <"
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
          children: "\"col-4 text-center\""
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
          children: "                <"
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
          children: "Followers"
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
          children: "              </"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "              <"
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
          children: "\"col-4 text-center\""
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
          children: "                <"
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
          children: "Sales"
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
          children: "              </"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "              <"
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
          children: "\"col-4 text-center\""
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
          children: "                <"
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
          children: "Friends"
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
          children: "              </"
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
        children: [createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: "            </"
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
          children: "            <!--end::Row-->"
        })
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
        children: createVNode(_components.span, {
          style: {
            color: "#6A9955"
          },
          children: "          <!-- Menu Footer-->"
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
          children: "\"user-footer\""
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
          children: "\"btn btn-outline-secondary\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "Profile"
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
          children: "            <"
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
          children: "\"btn btn-outline-danger float-end\""
        }), createVNode(_components.span, {
          style: {
            color: "#808080"
          },
          children: ">"
        }), createVNode(_components.span, {
          style: {
            color: "#D4D4D4"
          },
          children: "Sign out"
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
          children: "<!-- /.navbar -->"
        })
      })]
    })
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
Content.moduleId = "/workspaces/Perkify/src/html/components/docs/components/main-header.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const $$Astro = createAstro();
const $$MainHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainHeader;
  const title = "Main Header Component | AdminLTE 4";
  const path = "../../../../dist";
  const mainPage = "components";
  const page = "main-header";
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
                <h3 class="mb-0">Main Header Component</h3>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-end">
                  <li class="breadcrumb-item"><a href="#">Docs</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Main Header Component
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
            <div class="callout callout-warning mb-4">
              <h5 class="fw-bold">Reminder!</h5>
              <p>
                AdminLTE uses all of Bootstrap 5 components. It's a good start
                to review the <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" class="callout-link">
                  Bootstrap documentation
                </a> to get an idea of the
                various components that this documentation <b>does not</b> cover.
              </p>
            </div>

            <div class="callout callout-info mb-4">
              <h5 class="fw-bold">Tips!</h5>
              <p>
                If you go through the example pages and would like to copy a
                component, right-click on the component and choose “inspect
                element” to get to the HTML quicker than scanning the HTML page.
              </p>
            </div>

            <!-- Navbar -->
            <nav class="navbar navbar-expand bg-body">
              <!--begin::Container-->
              <div class="container-fluid">
                <!-- Start navbar links -->
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" data-lte-toggle="sidebar" href="#" role="button">
                      <i class="bi bi-list"></i>
                    </a>
                  </li>
                  <li class="nav-item d-none d-md-block">
                    <a href="#" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item d-none d-md-block">
                    <a href="#" class="nav-link">Contact</a>
                  </li>
                </ul>
                <!-- End navbar links -->

                <ul class="navbar-nav ms-auto">
                  <!-- Navbar Search -->
                  <li class="nav-item">
                    <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                      <i class="bi bi-search"></i>
                    </a>
                  </li>

                  <!-- Messages Dropdown Menu -->
                  <li class="nav-item dropdown">
                    <a class="nav-link" data-bs-toggle="dropdown" href="#">
                      <i class="bi bi-chat-text"></i>
                      <span class="navbar-badge badge text-bg-danger">3</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                      <a href="#" class="dropdown-item">
                        <!-- Message Start -->
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <img${addAttribute(deploymentPath + "assets/img/user1-128x128.jpg", "src")} alt="User Avatar" class="img-size-50 rounded-circle me-3">
                          </div>
                          <div class="flex-grow-1">
                            <h3 class="dropdown-item-title">
                              Brad Diesel
                              <span class="float-end fs-7 text-danger">
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </h3>
                            <p class="fs-7">Call me whenever you can...</p>
                            <p class="fs-7 text-secondary">
                              <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
                            </p>
                          </div>
                        </div>
                        <!-- Message End -->
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <!-- Message Start -->
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <img${addAttribute(deploymentPath + "assets/img/user8-128x128.jpg", "src")} alt="User Avatar" class="img-size-50 rounded-circle me-3">
                          </div>
                          <div class="flex-grow-1">
                            <h3 class="dropdown-item-title">
                              John Pierce
                              <span class="float-end fs-7 text-secondary">
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </h3>
                            <p class="fs-7">I got your message bro</p>
                            <p class="fs-7 text-secondary">
                              <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
                            </p>
                          </div>
                        </div>
                        <!-- Message End -->
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <!-- Message Start -->
                        <div class="d-flex">
                          <div class="flex-shrink-0">
                            <img${addAttribute(deploymentPath + "assets/img/user3-128x128.jpg", "src")} alt="User Avatar" class="img-size-50 rounded-circle me-3">
                          </div>
                          <div class="flex-grow-1">
                            <h3 class="dropdown-item-title">
                              Nora Silvester
                              <span class="float-end fs-7 text-warning">
                                <i class="bi bi-star-fill"></i>
                              </span>
                            </h3>
                            <p class="fs-7">The subject goes here</p>
                            <p class="fs-7 text-secondary">
                              <i class="bi bi-clock-fill me-1"></i> 4 Hours Ago
                            </p>
                          </div>
                        </div>
                        <!-- Message End -->
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item dropdown-footer">
                        See All Messages
                      </a>
                    </div>
                  </li>
                  <!-- Notifications Dropdown Menu -->
                  <li class="nav-item dropdown">
                    <a class="nav-link" data-bs-toggle="dropdown" href="#">
                      <i class="bi bi-bell-fill"></i>
                      <span class="navbar-badge badge text-bg-warning">15</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                      <span class="dropdown-item dropdown-header">15 Notifications</span>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <i class="bi bi-envelope me-2"></i> 4 new messages
                        <span class="float-end text-secondary fs-7">3 mins</span>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <i class="bi bi-people-fill me-2"></i> 8 friend requests
                        <span class="float-end text-secondary fs-7">
                          12 hours
                        </span>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <i class="bi bi-file-earmark-fill me-2"></i> 3 new reports
                        <span class="float-end text-secondary fs-7">
                          2 days
                        </span>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item dropdown-footer">
                        See All Notifications
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown user-menu">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                      <img${addAttribute(deploymentPath + "assets/img/user2-160x160.jpg", "src")} class="user-image rounded-circle shadow" alt="User Image">
                      <span class="d-none d-md-inline">Alexander Pierce</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                      <!-- User image -->
                      <li class="user-header text-bg-primary">
                        <img${addAttribute(deploymentPath + "assets/img/user2-160x160.jpg", "src")} class="rounded-circle shadow" alt="User Image">

                        <p>
                          Alexander Pierce - Web Developer
                          <small>Member since Nov. 2023</small>
                        </p>
                      </li>
                      <!-- Menu Body -->
                      <li class="user-body">
                        <!--begin::Row-->
                        <div class="row">
                          <div class="col-4 text-center">
                            <a href="#">Followers</a>
                          </div>
                          <div class="col-4 text-center">
                            <a href="#">Sales</a>
                          </div>
                          <div class="col-4 text-center">
                            <a href="#">Friends</a>
                          </div>
                        </div>
                        <!--end::Row-->
                      </li>
                      <!-- Menu Footer-->
                      <li class="user-footer">
                        <a href="#" class="btn btn-default btn-flat">Profile</a>
                        <a href="#" class="btn btn-default btn-flat float-end">
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <!--end::Container-->
            </nav>
            <!-- /.navbar -->

            ${renderComponent($$result, "MainHeader", Content, {})}
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
}, "/workspaces/Perkify/src/html/pages/docs/components/main-header.astro", void 0);

const $$file = "/workspaces/Perkify/src/html/pages/docs/components/main-header.astro";
const $$url = "/docs/components/main-header.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MainHeader,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
