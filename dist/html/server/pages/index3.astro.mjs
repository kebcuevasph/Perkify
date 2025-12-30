import { e as createComponent, f as createAstro, r as renderTemplate, n as renderComponent, h as addAttribute, o as renderHead } from '../chunks/astro/server_B8E05pQD.mjs';
import 'piccolore';
import { a as $$Scripts, $ as $$Head } from '../chunks/_scripts_DGS33WeZ.mjs';
import { a as $$Footer, $ as $$Topbar } from '../chunks/index_Cg-ZASur.mjs';
import { $ as $$Sidenav } from '../chunks/_sidenav_DO9-T62-.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index3;
  const title = "AdminLTE | Dashboard v3";
  const path = "../../dist";
  const mainPage = "dashboard";
  const page = "index3";
  const pathname = Astro2.url.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const depth = pathSegments.length > 0 ? pathSegments.length - 1 : 0;
  const deploymentPath = depth === 0 ? "./" : "../".repeat(depth);
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <!--begin::Head-->\n  <head>\n    ', '\n\n    <!-- apexcharts -->\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.css" integrity="sha256-4MX+61mt9NVvvuPjUWdUdyfZfxSB1/Rf9WtqRHgG5S0=" crossorigin="anonymous">\n  ', '</head>\n\n  <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">\n    <!--begin::App Wrapper-->\n    <div class="app-wrapper">\n      ', "\n      ", '\n      <!--begin::App Main-->\n      <main class="app-main">\n        <!--begin::App Content Header-->\n        <div class="app-content-header">\n          <!--begin::Container-->\n          <div class="container-fluid">\n            <!--begin::Row-->\n            <div class="row">\n              <div class="col-sm-6">\n                <h3 class="mb-0">Dashboard v3</h3>\n              </div>\n              <div class="col-sm-6">\n                <ol class="breadcrumb float-sm-end">\n                  <li class="breadcrumb-item"><a href="#">Home</a></li>\n                  <li class="breadcrumb-item active" aria-current="page">\n                    Dashboard v3\n                  </li>\n                </ol>\n              </div>\n            </div>\n            <!--end::Row-->\n          </div>\n          <!--end::Container-->\n        </div>\n        <div class="app-content">\n          <!--begin::Container-->\n          <div class="container-fluid">\n            <!--begin::Row-->\n            <div class="row">\n              <div class="col-lg-6">\n                <div class="card mb-4">\n                  <div class="card-header border-0">\n                    <div class="d-flex justify-content-between">\n                      <h3 class="card-title">Online Store Visitors</h3>\n                      <a href="javascript:void(0);" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">View Report</a>\n                    </div>\n                  </div>\n                  <div class="card-body">\n                    <div class="d-flex">\n                      <p class="d-flex flex-column">\n                        <span class="fw-bold fs-5">820</span>\n                        <span>Visitors Over Time</span>\n                      </p>\n                      <p class="ms-auto d-flex flex-column text-end">\n                        <span class="text-success">\n                          <i class="bi bi-arrow-up"></i> 12.5%\n                        </span>\n                        <span class="text-secondary">Since last week</span>\n                      </p>\n                    </div>\n                    <!-- /.d-flex -->\n\n                    <div class="position-relative mb-4">\n                      <div id="visitors-chart"></div>\n                    </div>\n\n                    <div class="d-flex flex-row justify-content-end">\n                      <span class="me-2">\n                        <i class="bi bi-square-fill text-primary"></i> This Week\n                      </span>\n\n                      <span>\n                        <i class="bi bi-square-fill text-secondary"></i> Last Week\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <!-- /.card -->\n\n                <div class="card mb-4">\n                  <div class="card-header border-0">\n                    <h3 class="card-title">Products</h3>\n                    <div class="card-tools">\n                      <a href="#" class="btn btn-tool btn-sm">\n                        <i class="bi bi-download"></i>\n                      </a>\n                      <a href="#" class="btn btn-tool btn-sm">\n                        <i class="bi bi-list"></i>\n                      </a>\n                    </div>\n                  </div>\n                  <div class="card-body table-responsive p-0">\n                    <table class="table table-striped align-middle">\n                      <thead>\n                        <tr>\n                          <th>Product</th>\n                          <th>Price</th>\n                          <th>Sales</th>\n                          <th>More</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>\n                            <img', ' alt="Product 1" class="rounded-circle img-size-32 me-2">\n                            Some Product\n                          </td>\n                          <td>$13 USD</td>\n                          <td>\n                            <small class="text-success me-1">\n                              <i class="bi bi-arrow-up"></i>\n                              12%\n                            </small>\n                            12,000 Sold\n                          </td>\n                          <td>\n                            <a href="#" class="text-secondary">\n                              <i class="bi bi-search"></i>\n                            </a>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <img', ' alt="Product 1" class="rounded-circle img-size-32 me-2">\n                            Another Product\n                          </td>\n                          <td>$29 USD</td>\n                          <td>\n                            <small class="text-info me-1">\n                              <i class="bi bi-arrow-down"></i>\n                              0.5%\n                            </small>\n                            123,234 Sold\n                          </td>\n                          <td>\n                            <a href="#" class="text-secondary">\n                              <i class="bi bi-search"></i>\n                            </a>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <img', ' alt="Product 1" class="rounded-circle img-size-32 me-2">\n                            Amazing Product\n                          </td>\n                          <td>$1,230 USD</td>\n                          <td>\n                            <small class="text-danger me-1">\n                              <i class="bi bi-arrow-down"></i>\n                              3%\n                            </small>\n                            198 Sold\n                          </td>\n                          <td>\n                            <a href="#" class="text-secondary">\n                              <i class="bi bi-search"></i>\n                            </a>\n                          </td>\n                        </tr>\n                        <tr>\n                          <td>\n                            <img', ' alt="Product 1" class="rounded-circle img-size-32 me-2">\n                            Perfect Item\n                            <span class="badge text-bg-danger">NEW</span>\n                          </td>\n                          <td>$199 USD</td>\n                          <td>\n                            <small class="text-success me-1">\n                              <i class="bi bi-arrow-up"></i>\n                              63%\n                            </small>\n                            87 Sold\n                          </td>\n                          <td>\n                            <a href="#" class="text-secondary">\n                              <i class="bi bi-search"></i>\n                            </a>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n                <!-- /.card -->\n              </div>\n              <!-- /.col-md-6 -->\n              <div class="col-lg-6">\n                <div class="card mb-4">\n                  <div class="card-header border-0">\n                    <div class="d-flex justify-content-between">\n                      <h3 class="card-title">Sales</h3>\n                      <a href="javascript:void(0);" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">View Report</a>\n                    </div>\n                  </div>\n                  <div class="card-body">\n                    <div class="d-flex">\n                      <p class="d-flex flex-column">\n                        <span class="fw-bold fs-5">$18,230.00</span>\n                        <span>Sales Over Time</span>\n                      </p>\n                      <p class="ms-auto d-flex flex-column text-end">\n                        <span class="text-success">\n                          <i class="bi bi-arrow-up"></i> 33.1%\n                        </span>\n                        <span class="text-secondary">Since Past Year</span>\n                      </p>\n                    </div>\n                    <!-- /.d-flex -->\n\n                    <div class="position-relative mb-4">\n                      <div id="sales-chart"></div>\n                    </div>\n\n                    <div class="d-flex flex-row justify-content-end">\n                      <span class="me-2">\n                        <i class="bi bi-square-fill text-primary"></i> This year\n                      </span>\n\n                      <span>\n                        <i class="bi bi-square-fill text-secondary"></i> Last year\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <!-- /.card -->\n\n                <div class="card">\n                  <div class="card-header border-0">\n                    <h3 class="card-title">Online Store Overview</h3>\n                    <div class="card-tools">\n                      <a href="#" class="btn btn-sm btn-tool">\n                        <i class="bi bi-download"></i>\n                      </a>\n                      <a href="#" class="btn btn-sm btn-tool">\n                        <i class="bi bi-list"></i>\n                      </a>\n                    </div>\n                  </div>\n                  <div class="card-body">\n                    <div class="d-flex justify-content-between align-items-center border-bottom mb-3">\n                      <p class="text-success fs-2">\n                        <svg height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"></path>\n                        </svg>\n                      </p>\n                      <p class="d-flex flex-column text-end">\n                        <span class="fw-bold">\n                          <i class="bi bi-graph-up-arrow text-success"></i> 12%\n                        </span>\n                        <span class="text-secondary">CONVERSION RATE</span>\n                      </p>\n                    </div>\n                    <!-- /.d-flex -->\n                    <div class="d-flex justify-content-between align-items-center border-bottom mb-3">\n                      <p class="text-info fs-2">\n                        <svg height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>\n                        </svg>\n                      </p>\n                      <p class="d-flex flex-column text-end">\n                        <span class="fw-bold">\n                          <i class="bi bi-graph-up-arrow text-info"></i> 0.8%\n                        </span>\n                        <span class="text-secondary">SALES RATE</span>\n                      </p>\n                    </div>\n                    <!-- /.d-flex -->\n                    <div class="d-flex justify-content-between align-items-center mb-0">\n                      <p class="text-danger fs-2">\n                        <svg height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n                          <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>\n                        </svg>\n                      </p>\n                      <p class="d-flex flex-column text-end">\n                        <span class="fw-bold">\n                          <i class="bi bi-graph-down-arrow text-danger"></i>\n                          1%\n                        </span>\n                        <span class="text-secondary">REGISTRATION RATE</span>\n                      </p>\n                    </div>\n                    <!-- /.d-flex -->\n                  </div>\n                </div>\n              </div>\n              <!-- /.col-md-6 -->\n            </div>\n            <!--end::Row-->\n          </div>\n          <!--end::Container-->\n        </div>\n        <!--end::App Content-->\n      </main>\n      <!--end::App Main-->\n      ', "\n    </div>\n    <!--end::App Wrapper-->\n    <!--begin::Script-->\n    ", `

    <!-- OPTIONAL SCRIPTS -->

    <!-- apexcharts -->
    <script src="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.min.js" integrity="sha256-+vh8GkaU7C9/wbSLIcwq82tQ2wTf44aOHA8HlBMwRI8=" crossorigin="anonymous"><\/script>

    <script>
// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR DEMO
// ++++++++++++++++++++++++++++++++++++++++++

const visitors_chart_options = {
  series: [
    {
      name: "High - 2023",
      data: [100, 120, 170, 167, 180, 177, 160]
    },
    {
      name: "Low - 2023",
      data: [60, 80, 70, 67, 80, 77, 100]
    }
  ],
  chart: {
    height: 200,
    type: "line",
    toolbar: {
      show: false
    }
  },
  colors: ["#0d6efd", "#adb5bd"],
  stroke: {
    curve: "smooth"
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  legend: {
    show: false
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ["22th", "23th", "24th", "25th", "26th", "27th", "28th"]
  }
}

const visitors_chart = new ApexCharts(
  document.querySelector("#visitors-chart"),
  visitors_chart_options
)
visitors_chart.render()

const sales_chart_options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ],
  chart: {
    type: "bar",
    height: 200
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded"
    }
  },
  legend: {
    show: false
  },
  colors: ["#0d6efd", "#20c997", "#ffc107"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"]
  },
  xaxis: {
    categories: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ]
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
}

const sales_chart = new ApexCharts(
  document.querySelector("#sales-chart"),
  sales_chart_options
)
sales_chart.render()
    <\/script>
    <!--end::Script-->
  </body><!--end::Body--></html>`])), renderComponent($$result, "Head", $$Head, { "title": title, "path": path }), renderHead(), renderComponent($$result, "Topbar", $$Topbar, { "path": path }), renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page }), addAttribute(deploymentPath + "assets/img/default-150x150.png", "src"), addAttribute(deploymentPath + "assets/img/default-150x150.png", "src"), addAttribute(deploymentPath + "assets/img/default-150x150.png", "src"), addAttribute(deploymentPath + "assets/img/default-150x150.png", "src"), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Scripts", $$Scripts, { "path": path }));
}, "/workspaces/Perkify/src/html/pages/index3.astro", void 0);

const $$file = "/workspaces/Perkify/src/html/pages/index3.astro";
const $$url = "/index3.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index3,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
