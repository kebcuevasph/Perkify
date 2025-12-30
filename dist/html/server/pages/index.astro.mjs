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
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "AdminLTE v4 | Dashboard";
  const path = "../../dist";
  const mainPage = "dashboard";
  const page = "index";
  const pathname = Astro2.url.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const depth = pathSegments.length > 0 ? pathSegments.length - 1 : 0;
  const deploymentPath = depth === 0 ? "./" : "../".repeat(depth);
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <!--begin::Head-->\n  <head>\n    ', '\n\n    <!-- apexcharts -->\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.css" integrity="sha256-4MX+61mt9NVvvuPjUWdUdyfZfxSB1/Rf9WtqRHgG5S0=" crossorigin="anonymous">\n\n    <!-- jsvectormap -->\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/css/jsvectormap.min.css" integrity="sha256-+uGLJmmTKOqBr+2E6KDYs/NRsHxSkONXFHUL0fy2O/4=" crossorigin="anonymous">\n  ', '</head>\n  <!--end::Head-->\n  <!--begin::Body-->\n  <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">\n    <!--begin::App Wrapper-->\n    <div class="app-wrapper">\n      ', "\n      ", '\n      <!--begin::App Main-->\n      <main class="app-main">\n        <!--begin::App Content Header-->\n        <div class="app-content-header">\n          <!--begin::Container-->\n          <div class="container-fluid">\n            <!--begin::Row-->\n            <div class="row">\n              <div class="col-sm-6">\n                <h3 class="mb-0">Dashboard</h3>\n              </div>\n              <div class="col-sm-6">\n                <ol class="breadcrumb float-sm-end">\n                  <li class="breadcrumb-item"><a href="#">Home</a></li>\n                  <li class="breadcrumb-item active" aria-current="page">\n                    Dashboard\n                  </li>\n                </ol>\n              </div>\n            </div>\n            <!--end::Row-->\n          </div>\n          <!--end::Container-->\n        </div>\n        <!--end::App Content Header-->\n        <!--begin::App Content-->\n        <div class="app-content">\n          <!--begin::Container-->\n          <div class="container-fluid">\n            <!--begin::Row-->\n            <div class="row">\n              <!--begin::Col-->\n              <div class="col-lg-3 col-6">\n                <!--begin::Small Box Widget 1-->\n                <div class="small-box text-bg-primary">\n                  <div class="inner">\n                    <h3>150</h3>\n\n                    <p>New Orders</p>\n                  </div>\n                  <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>\n                  </svg>\n                  <a href="#" class="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover">\n                    More info <i class="bi bi-link-45deg"></i>\n                  </a>\n                </div>\n                <!--end::Small Box Widget 1-->\n              </div>\n              <!--end::Col-->\n              <div class="col-lg-3 col-6">\n                <!--begin::Small Box Widget 2-->\n                <div class="small-box text-bg-success">\n                  <div class="inner">\n                    <h3>53<sup class="fs-5">%</sup></h3>\n\n                    <p>Bounce Rate</p>\n                  </div>\n                  <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>\n                  </svg>\n                  <a href="#" class="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover">\n                    More info <i class="bi bi-link-45deg"></i>\n                  </a>\n                </div>\n                <!--end::Small Box Widget 2-->\n              </div>\n              <!--end::Col-->\n              <div class="col-lg-3 col-6">\n                <!--begin::Small Box Widget 3-->\n                <div class="small-box text-bg-warning">\n                  <div class="inner">\n                    <h3>44</h3>\n\n                    <p>User Registrations</p>\n                  </div>\n                  <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>\n                  </svg>\n                  <a href="#" class="small-box-footer link-dark link-underline-opacity-0 link-underline-opacity-50-hover">\n                    More info <i class="bi bi-link-45deg"></i>\n                  </a>\n                </div>\n                <!--end::Small Box Widget 3-->\n              </div>\n              <!--end::Col-->\n              <div class="col-lg-3 col-6">\n                <!--begin::Small Box Widget 4-->\n                <div class="small-box text-bg-danger">\n                  <div class="inner">\n                    <h3>65</h3>\n\n                    <p>Unique Visitors</p>\n                  </div>\n                  <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"></path>\n                    <path clip-rule="evenodd" fill-rule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"></path>\n                  </svg>\n                  <a href="#" class="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover">\n                    More info <i class="bi bi-link-45deg"></i>\n                  </a>\n                </div>\n                <!--end::Small Box Widget 4-->\n              </div>\n              <!--end::Col-->\n            </div>\n            <!--end::Row-->\n            <!--begin::Row-->\n            <div class="row">\n              <!-- Start col -->\n              <div class="col-lg-7 connectedSortable">\n                <div class="card mb-4">\n                  <div class="card-header">\n                    <h3 class="card-title">Sales Value</h3>\n                  </div>\n\n                  <div class="card-body">\n                    <div id="revenue-chart"></div>\n                  </div>\n                </div>\n                <!-- /.card -->\n\n                <!-- DIRECT CHAT -->\n                <div class="card direct-chat direct-chat-primary mb-4">\n                  <div class="card-header">\n                    <h3 class="card-title">Direct Chat</h3>\n\n                    <div class="card-tools">\n                      <span title="3 New Messages" class="badge text-bg-primary">\n                        3\n                      </span>\n                      <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">\n                        <i data-lte-icon="expand" class="bi bi-plus-lg"></i>\n                        <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>\n                      </button>\n                      <button type="button" class="btn btn-tool" title="Contacts" data-lte-toggle="chat-pane">\n                        <i class="bi bi-chat-text-fill"></i>\n                      </button>\n                      <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">\n                        <i class="bi bi-x-lg"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <!-- /.card-header -->\n                  <div class="card-body">\n                    <!-- Conversations are loaded here -->\n                    <div class="direct-chat-messages">\n                      <!-- Message. Default to the start -->\n                      <div class="direct-chat-msg">\n                        <div class="direct-chat-infos clearfix">\n                          <span class="direct-chat-name float-start">\n                            Alexander Pierce\n                          </span>\n                          <span class="direct-chat-timestamp float-end">\n                            23 Jan 2:00 pm\n                          </span>\n                        </div>\n                        <!-- /.direct-chat-infos -->\n                        <img class="direct-chat-img"', ` alt="message user image">
                        <!-- /.direct-chat-img -->
                        <div class="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        <!-- /.direct-chat-text -->
                      </div>
                      <!-- /.direct-chat-msg -->

                      <!-- Message to the end -->
                      <div class="direct-chat-msg end">
                        <div class="direct-chat-infos clearfix">
                          <span class="direct-chat-name float-end">
                            Sarah Bullock
                          </span>
                          <span class="direct-chat-timestamp float-start">
                            23 Jan 2:05 pm
                          </span>
                        </div>
                        <!-- /.direct-chat-infos -->
                        <img class="direct-chat-img"`, ' alt="message user image">\n                        <!-- /.direct-chat-img -->\n                        <div class="direct-chat-text">\n                          You better believe it!\n                        </div>\n                        <!-- /.direct-chat-text -->\n                      </div>\n                      <!-- /.direct-chat-msg -->\n\n                      <!-- Message. Default to the start -->\n                      <div class="direct-chat-msg">\n                        <div class="direct-chat-infos clearfix">\n                          <span class="direct-chat-name float-start">\n                            Alexander Pierce\n                          </span>\n                          <span class="direct-chat-timestamp float-end">\n                            23 Jan 5:37 pm\n                          </span>\n                        </div>\n                        <!-- /.direct-chat-infos -->\n                        <img class="direct-chat-img"', ' alt="message user image">\n                        <!-- /.direct-chat-img -->\n                        <div class="direct-chat-text">\n                          Working with AdminLTE on a great new app! Wanna join?\n                        </div>\n                        <!-- /.direct-chat-text -->\n                      </div>\n                      <!-- /.direct-chat-msg -->\n\n                      <!-- Message to the end -->\n                      <div class="direct-chat-msg end">\n                        <div class="direct-chat-infos clearfix">\n                          <span class="direct-chat-name float-end">\n                            Sarah Bullock\n                          </span>\n                          <span class="direct-chat-timestamp float-start">\n                            23 Jan 6:10 pm\n                          </span>\n                        </div>\n                        <!-- /.direct-chat-infos -->\n                        <img class="direct-chat-img"', ' alt="message user image">\n                        <!-- /.direct-chat-img -->\n                        <div class="direct-chat-text">I would love to.</div>\n                        <!-- /.direct-chat-text -->\n                      </div>\n                      <!-- /.direct-chat-msg -->\n                    </div>\n                    <!-- /.direct-chat-messages-->\n\n                    <!-- Contacts are loaded here -->\n                    <div class="direct-chat-contacts">\n                      <ul class="contacts-list">\n                        <li>\n                          <a href="#">\n                            <img class="contacts-list-img"', ' alt="User Avatar">\n\n                            <div class="contacts-list-info">\n                              <span class="contacts-list-name">\n                                Count Dracula\n                                <small class="contacts-list-date float-end">\n                                  2/28/2023\n                                </small>\n                              </span>\n                              <span class="contacts-list-msg">\n                                How have you been? I was...\n                              </span>\n                            </div>\n                            <!-- /.contacts-list-info -->\n                          </a>\n                        </li>\n                        <!-- End Contact Item -->\n                        <li>\n                          <a href="#">\n                            <img class="contacts-list-img"', ' alt="User Avatar">\n\n                            <div class="contacts-list-info">\n                              <span class="contacts-list-name">\n                                Sarah Doe\n                                <small class="contacts-list-date float-end">\n                                  2/23/2023\n                                </small>\n                              </span>\n                              <span class="contacts-list-msg">\n                                I will be waiting for...\n                              </span>\n                            </div>\n                            <!-- /.contacts-list-info -->\n                          </a>\n                        </li>\n                        <!-- End Contact Item -->\n                        <li>\n                          <a href="#">\n                            <img class="contacts-list-img"', ` alt="User Avatar">

                            <div class="contacts-list-info">
                              <span class="contacts-list-name">
                                Nadia Jolie
                                <small class="contacts-list-date float-end">
                                  2/20/2023
                                </small>
                              </span>
                              <span class="contacts-list-msg">
                                I'll call you back at...
                              </span>
                            </div>
                            <!-- /.contacts-list-info -->
                          </a>
                        </li>
                        <!-- End Contact Item -->
                        <li>
                          <a href="#">
                            <img class="contacts-list-img"`, ' alt="User Avatar">\n\n                            <div class="contacts-list-info">\n                              <span class="contacts-list-name">\n                                Nora S. Vans\n                                <small class="contacts-list-date float-end">\n                                  2/10/2023\n                                </small>\n                              </span>\n                              <span class="contacts-list-msg">\n                                Where is your new...\n                              </span>\n                            </div>\n                            <!-- /.contacts-list-info -->\n                          </a>\n                        </li>\n                        <!-- End Contact Item -->\n                        <li>\n                          <a href="#">\n                            <img class="contacts-list-img"', ' alt="User Avatar">\n\n                            <div class="contacts-list-info">\n                              <span class="contacts-list-name">\n                                John K.\n                                <small class="contacts-list-date float-end">\n                                  1/27/2023\n                                </small>\n                              </span>\n                              <span class="contacts-list-msg">\n                                Can I take a look at...\n                              </span>\n                            </div>\n                            <!-- /.contacts-list-info -->\n                          </a>\n                        </li>\n                        <!-- End Contact Item -->\n                        <li>\n                          <a href="#">\n                            <img class="contacts-list-img"', ' alt="User Avatar">\n\n                            <div class="contacts-list-info">\n                              <span class="contacts-list-name">\n                                Kenneth M.\n                                <small class="contacts-list-date float-end">\n                                  1/4/2023\n                                </small>\n                              </span>\n                              <span class="contacts-list-msg">\n                                Never mind I found...\n                              </span>\n                            </div>\n                            <!-- /.contacts-list-info -->\n                          </a>\n                        </li>\n                        <!-- End Contact Item -->\n                      </ul>\n                      <!-- /.contacts-list -->\n                    </div>\n                    <!-- /.direct-chat-pane -->\n                  </div>\n                  <!-- /.card-body -->\n                  <div class="card-footer">\n                    <form action="#" method="post">\n                      <div class="input-group">\n                        <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n                        <span class="input-group-append">\n                          <button type="button" class="btn btn-primary">\n                            Send\n                          </button>\n                        </span>\n                      </div>\n                    </form>\n                  </div>\n                  <!-- /.card-footer-->\n                </div>\n                <!-- /.direct-chat -->\n              </div>\n              <!-- /.Start col -->\n\n              <!-- Start col -->\n              <div class="col-lg-5 connectedSortable">\n                <div class="card text-white bg-primary bg-gradient border-primary mb-4">\n                  <div class="card-header border-0">\n                    <h3 class="card-title">Sales Value</h3>\n                    <div class="card-tools">\n                      <button type="button" class="btn btn-primary btn-sm" data-lte-toggle="card-collapse">\n                        <i data-lte-icon="expand" class="bi bi-plus-lg"></i>\n                        <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <div class="card-body">\n                    <div id="world-map" style="height: 220px"></div>\n                  </div>\n                  <div class="card-footer border-0">\n                    <!--begin::Row-->\n                    <div class="row">\n                      <div class="col-4 text-center">\n                        <div id="sparkline-1" class="text-dark"></div>\n                        <div class="text-white">Visitors</div>\n                      </div>\n                      <div class="col-4 text-center">\n                        <div id="sparkline-2" class="text-dark"></div>\n                        <div class="text-white">Online</div>\n                      </div>\n                      <div class="col-4 text-center">\n                        <div id="sparkline-3" class="text-dark"></div>\n                        <div class="text-white">Sales</div>\n                      </div>\n                    </div>\n                    <!--end::Row-->\n                  </div>\n                </div>\n              </div>\n              <!-- /.Start col -->\n            </div>\n            <!-- /.row (main row) -->\n          </div>\n          <!--end::Container-->\n        </div>\n        <!--end::App Content-->\n      </main>\n      <!--end::App Main-->\n      ', "\n    </div>\n    <!--end::App Wrapper-->\n    <!--begin::Script-->\n    ", `

    <!-- OPTIONAL SCRIPTS -->

    <!-- sortablejs -->
    <script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js" crossorigin="anonymous"><\/script>

    <!-- sortablejs -->
    <script>
new Sortable(document.querySelector('.connectedSortable'), {
  group: 'shared',
  handle: '.card-header'
})

const cardHeaders = document.querySelectorAll(
  '.connectedSortable .card-header'
)
cardHeaders.forEach(cardHeader => {
  cardHeader.style.cursor = 'move'
})
    <\/script>

    <!-- apexcharts -->
    <script src="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.min.js" integrity="sha256-+vh8GkaU7C9/wbSLIcwq82tQ2wTf44aOHA8HlBMwRI8=" crossorigin="anonymous"><\/script>

    <!-- ChartJS -->
    <script>
// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR DEMO
// ++++++++++++++++++++++++++++++++++++++++++

const sales_chart_options = {
  series: [
    {
      name: 'Digital Goods',
      data: [28, 48, 40, 19, 86, 27, 90]
    },
    {
      name: 'Electronics',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ],
  chart: {
    height: 300,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  legend: {
    show: false
  },
  colors: ['#0d6efd', '#20c997'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2023-01-01',
      '2023-02-01',
      '2023-03-01',
      '2023-04-01',
      '2023-05-01',
      '2023-06-01',
      '2023-07-01'
    ]
  },
  tooltip: {
    x: {
      format: 'MMMM yyyy'
    }
  }
}

const sales_chart = new ApexCharts(
  document.querySelector('#revenue-chart'),
  sales_chart_options
)
sales_chart.render()
    <\/script>

    <!-- jsvectormap -->
    <script src="https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/js/jsvectormap.min.js" integrity="sha256-/t1nN2956BT869E6H4V1dnt0X5pAQHPytli+1nTZm2Y=" crossorigin="anonymous"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/jsvectormap@1.5.3/dist/maps/world.js" integrity="sha256-XPpPaZlU8S/HWf7FZLAncLg2SAkP8ScUTII89x9D3lY=" crossorigin="anonymous"><\/script>

    <!-- jsvectormap -->
    <script>
      // World map by jsVectorMap
      new jsVectorMap({
        selector: '#world-map',
        map: 'world'
      });

      // Sparkline charts
      const option_sparkline1 = {
        series: [
          {
            data: [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]
          }
        ],
        chart: {
          type: 'area',
          height: 50,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        yaxis: {
          min: 0
        },
        colors: ['#DCE6EC']
      }

      const sparkline1 = new ApexCharts(
        document.querySelector('#sparkline-1'),
        option_sparkline1
      )
      sparkline1.render()

      const option_sparkline2 = {
        series: [
          {
            data: [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]
          }
        ],
        chart: {
          type: 'area',
          height: 50,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        yaxis: {
          min: 0
        },
        colors: ['#DCE6EC']
      }

      const sparkline2 = new ApexCharts(
        document.querySelector('#sparkline-2'),
        option_sparkline2
      )
      sparkline2.render()

      const option_sparkline3 = {
        series: [
          {
            data: [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]
          }
        ],
        chart: {
          type: 'area',
          height: 50,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        yaxis: {
          min: 0
        },
        colors: ['#DCE6EC']
      }

      const sparkline3 = new ApexCharts(
        document.querySelector('#sparkline-3'),
        option_sparkline3
      )
      sparkline3.render()
    <\/script>
    <!--end::Script-->
  </body><!--end::Body--></html>`])), renderComponent($$result, "Head", $$Head, { "title": title, "path": path }), renderHead(), renderComponent($$result, "Topbar", $$Topbar, { "path": path }), renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page }), addAttribute(deploymentPath + "assets/img/user1-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user3-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user1-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user3-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user1-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user7-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user3-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user5-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user6-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user8-128x128.jpg", "src"), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Scripts", $$Scripts, { "path": path }));
}, "/workspaces/Perkify/src/html/pages/index.astro", void 0);

const $$file = "/workspaces/Perkify/src/html/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
