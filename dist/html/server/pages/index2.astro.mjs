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
const $$Index2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index2;
  const title = "AdminLTE | Dashboard v2";
  const path = "../../dist";
  const mainPage = "dashboard";
  const page = "index2";
  const pathname = Astro2.url.pathname;
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const depth = pathSegments.length > 0 ? pathSegments.length - 1 : 0;
  const deploymentPath = depth === 0 ? "./" : "../".repeat(depth);
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <!--begin::Head-->\n  <head>\n    ', '\n\n    <!-- apexcharts -->\n    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.css" integrity="sha256-4MX+61mt9NVvvuPjUWdUdyfZfxSB1/Rf9WtqRHgG5S0=" crossorigin="anonymous">\n  ', '</head>\n\n  <body class="layout-fixed sidebar-expand-lg bg-body-tertiary">\n    <!--begin::App Wrapper-->\n    <div class="app-wrapper">\n      ', "\n      ", '\n      <!--begin::App Main-->\n      <main class="app-main">\n        <!--begin::App Content Header-->\n        <div class="app-content-header">\n          <!--begin::Container-->\n          <div class="container-fluid">\n            <!--begin::Row-->\n            <div class="row">\n              <div class="col-sm-6">\n                <h3 class="mb-0">Dashboard v2</h3>\n              </div>\n              <div class="col-sm-6">\n                <ol class="breadcrumb float-sm-end">\n                  <li class="breadcrumb-item"><a href="#">Home</a></li>\n                  <li class="breadcrumb-item active" aria-current="page">\n                    Dashboard v2\n                  </li>\n                </ol>\n              </div>\n            </div>\n            <!--end::Row-->\n          </div>\n          <!--end::Container-->\n        </div>\n        <div class="app-content">\n          <!--begin::Container-->\n          <div class="container-fluid">\n            <!-- Info boxes -->\n            <div class="row">\n              <div class="col-12 col-sm-6 col-md-3">\n                <div class="info-box">\n                  <span class="info-box-icon text-bg-primary shadow-sm">\n                    <i class="bi bi-gear-fill"></i>\n                  </span>\n\n                  <div class="info-box-content">\n                    <span class="info-box-text">CPU Traffic</span>\n                    <span class="info-box-number">\n                      10\n                      <small>%</small>\n                    </span>\n                  </div>\n                  <!-- /.info-box-content -->\n                </div>\n                <!-- /.info-box -->\n              </div>\n              <!-- /.col -->\n              <div class="col-12 col-sm-6 col-md-3">\n                <div class="info-box">\n                  <span class="info-box-icon text-bg-danger shadow-sm">\n                    <i class="bi bi-hand-thumbs-up-fill"></i>\n                  </span>\n\n                  <div class="info-box-content">\n                    <span class="info-box-text">Likes</span>\n                    <span class="info-box-number">41,410</span>\n                  </div>\n                  <!-- /.info-box-content -->\n                </div>\n                <!-- /.info-box -->\n              </div>\n              <!-- /.col -->\n\n              <!-- fix for small devices only -->\n              <!-- <div class="clearfix hidden-md-up"></div> -->\n\n              <div class="col-12 col-sm-6 col-md-3">\n                <div class="info-box">\n                  <span class="info-box-icon text-bg-success shadow-sm">\n                    <i class="bi bi-cart-fill"></i>\n                  </span>\n\n                  <div class="info-box-content">\n                    <span class="info-box-text">Sales</span>\n                    <span class="info-box-number">760</span>\n                  </div>\n                  <!-- /.info-box-content -->\n                </div>\n                <!-- /.info-box -->\n              </div>\n              <!-- /.col -->\n              <div class="col-12 col-sm-6 col-md-3">\n                <div class="info-box">\n                  <span class="info-box-icon text-bg-warning shadow-sm">\n                    <i class="bi bi-people-fill"></i>\n                  </span>\n\n                  <div class="info-box-content">\n                    <span class="info-box-text">New Members</span>\n                    <span class="info-box-number">2,000</span>\n                  </div>\n                  <!-- /.info-box-content -->\n                </div>\n                <!-- /.info-box -->\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n\n            <!--begin::Row-->\n            <div class="row">\n              <div class="col-md-12">\n                <div class="card mb-4">\n                  <div class="card-header">\n                    <h5 class="card-title">Monthly Recap Report</h5>\n\n                    <div class="card-tools">\n                      <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">\n                        <i data-lte-icon="expand" class="bi bi-plus-lg"></i>\n                        <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>\n                      </button>\n                      <div class="btn-group">\n                        <button type="button" class="btn btn-tool dropdown-toggle" data-bs-toggle="dropdown">\n                          <i class="bi bi-wrench"></i>\n                        </button>\n                        <div class="dropdown-menu dropdown-menu-end" role="menu">\n                          <a href="#" class="dropdown-item">Action</a>\n                          <a href="#" class="dropdown-item">Another action</a>\n                          <a href="#" class="dropdown-item">\n                            Something else here\n                          </a>\n                          <a class="dropdown-divider"></a>\n                          <a href="#" class="dropdown-item">Separated link</a>\n                        </div>\n                      </div>\n                      <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">\n                        <i class="bi bi-x-lg"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <!-- /.card-header -->\n                  <div class="card-body">\n                    <!--begin::Row-->\n                    <div class="row">\n                      <div class="col-md-8">\n                        <p class="text-center">\n                          <strong>Sales: 1 Jan, 2023 - 30 Jul, 2023</strong>\n                        </p>\n\n                        <div id="sales-chart"></div>\n                      </div>\n                      <!-- /.col -->\n                      <div class="col-md-4">\n                        <p class="text-center">\n                          <strong>Goal Completion</strong>\n                        </p>\n\n                        <div class="progress-group">\n                          Add Products to Cart\n                          <span class="float-end"><b>160</b>/200</span>\n                          <div class="progress progress-sm">\n                            <div class="progress-bar text-bg-primary" style="width: 80%">\n                            </div>\n                          </div>\n                        </div>\n                        <!-- /.progress-group -->\n\n                        <div class="progress-group">\n                          Complete Purchase\n                          <span class="float-end"><b>310</b>/400</span>\n                          <div class="progress progress-sm">\n                            <div class="progress-bar text-bg-danger" style="width: 75%">\n                            </div>\n                          </div>\n                        </div>\n\n                        <!-- /.progress-group -->\n                        <div class="progress-group">\n                          <span class="progress-text">Visit Premium Page</span>\n                          <span class="float-end"><b>480</b>/800</span>\n                          <div class="progress progress-sm">\n                            <div class="progress-bar text-bg-success" style="width: 60%">\n                            </div>\n                          </div>\n                        </div>\n\n                        <!-- /.progress-group -->\n                        <div class="progress-group">\n                          Send Inquiries\n                          <span class="float-end"><b>250</b>/500</span>\n                          <div class="progress progress-sm">\n                            <div class="progress-bar text-bg-warning" style="width: 50%">\n                            </div>\n                          </div>\n                        </div>\n                        <!-- /.progress-group -->\n                      </div>\n                      <!-- /.col -->\n                    </div>\n                    <!--end::Row-->\n                  </div>\n                  <!-- ./card-body -->\n                  <div class="card-footer">\n                    <!--begin::Row-->\n                    <div class="row">\n                      <div class="col-md-3 col-6">\n                        <div class="text-center border-end">\n                          <span class="text-success">\n                            <i class="bi bi-caret-up-fill"></i> 17%\n                          </span>\n                          <h5 class="fw-bold mb-0">$35,210.43</h5>\n                          <span class="text-uppercase">TOTAL REVENUE</span>\n                        </div>\n                      </div>\n\n                      <!-- /.col -->\n                      <div class="col-md-3 col-6">\n                        <div class="text-center border-end">\n                          <span class="text-info">\n                            <i class="bi bi-caret-left-fill"></i> 0%\n                          </span>\n                          <h5 class="fw-bold mb-0">$10,390.90</h5>\n                          <span class="text-uppercase">TOTAL COST</span>\n                        </div>\n                      </div>\n                      <!-- /.col -->\n                      <div class="col-md-3 col-6">\n                        <div class="text-center border-end">\n                          <span class="text-success">\n                            <i class="bi bi-caret-up-fill"></i> 20%\n                          </span>\n                          <h5 class="fw-bold mb-0">$24,813.53</h5>\n                          <span class="text-uppercase">TOTAL PROFIT</span>\n                        </div>\n                      </div>\n                      <!-- /.col -->\n                      <div class="col-md-3 col-6">\n                        <div class="text-center">\n                          <span class="text-danger">\n                            <i class="bi bi-caret-down-fill"></i> 18%\n                          </span>\n                          <h5 class="fw-bold mb-0">1200</h5>\n                          <span class="text-uppercase">GOAL COMPLETIONS</span>\n                        </div>\n                      </div>\n                    </div>\n                    <!--end::Row-->\n                  </div>\n                  <!-- /.card-footer -->\n                </div>\n                <!-- /.card -->\n              </div>\n              <!-- /.col -->\n            </div>\n            <!--end::Row-->\n\n            <!--begin::Row-->\n            <div class="row">\n              <!-- Start col -->\n              <div class="col-md-8">\n                <!--begin::Row-->\n                <div class="row g-4 mb-4">\n                  <div class="col-md-6">\n                    <!-- DIRECT CHAT -->\n                    <div class="card direct-chat direct-chat-warning">\n                      <div class="card-header">\n                        <h3 class="card-title">Direct Chat</h3>\n\n                        <div class="card-tools">\n                          <span title="3 New Messages" class="badge text-bg-warning">\n                            3\n                          </span>\n                          <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">\n                            <i data-lte-icon="expand" class="bi bi-plus-lg"></i>\n                            <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>\n                          </button>\n                          <button type="button" class="btn btn-tool" title="Contacts" data-lte-toggle="chat-pane">\n                            <i class="bi bi-chat-text-fill"></i>\n                          </button>\n                          <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">\n                            <i class="bi bi-x-lg"></i>\n                          </button>\n                        </div>\n                      </div>\n                      <!-- /.card-header -->\n                      <div class="card-body">\n                        <!-- Conversations are loaded here -->\n                        <div class="direct-chat-messages">\n                          <!-- Message. Default to the start -->\n                          <div class="direct-chat-msg">\n                            <div class="direct-chat-infos clearfix">\n                              <span class="direct-chat-name float-start">\n                                Alexander Pierce\n                              </span>\n                              <span class="direct-chat-timestamp float-end">\n                                23 Jan 2:00 pm\n                              </span>\n                            </div>\n                            <!-- /.direct-chat-infos -->\n                            <img class="direct-chat-img"', ` alt="message user image">
                            <!-- /.direct-chat-img -->
                            <div class="direct-chat-text">
                              Is this template really for free? That's
                              unbelievable!
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
                            <img class="direct-chat-img"`, ' alt="message user image">\n                            <!-- /.direct-chat-img -->\n                            <div class="direct-chat-text">\n                              You better believe it!\n                            </div>\n                            <!-- /.direct-chat-text -->\n                          </div>\n                          <!-- /.direct-chat-msg -->\n\n                          <!-- Message. Default to the start -->\n                          <div class="direct-chat-msg">\n                            <div class="direct-chat-infos clearfix">\n                              <span class="direct-chat-name float-start">\n                                Alexander Pierce\n                              </span>\n                              <span class="direct-chat-timestamp float-end">\n                                23 Jan 5:37 pm\n                              </span>\n                            </div>\n                            <!-- /.direct-chat-infos -->\n                            <img class="direct-chat-img"', ' alt="message user image">\n                            <!-- /.direct-chat-img -->\n                            <div class="direct-chat-text">\n                              Working with AdminLTE on a great new app! Wanna\n                              join?\n                            </div>\n                            <!-- /.direct-chat-text -->\n                          </div>\n                          <!-- /.direct-chat-msg -->\n\n                          <!-- Message to the end -->\n                          <div class="direct-chat-msg end">\n                            <div class="direct-chat-infos clearfix">\n                              <span class="direct-chat-name float-end">\n                                Sarah Bullock\n                              </span>\n                              <span class="direct-chat-timestamp float-start">\n                                23 Jan 6:10 pm\n                              </span>\n                            </div>\n                            <!-- /.direct-chat-infos -->\n                            <img class="direct-chat-img"', ' alt="message user image">\n                            <!-- /.direct-chat-img -->\n                            <div class="direct-chat-text">I would love to.</div>\n                            <!-- /.direct-chat-text -->\n                          </div>\n                          <!-- /.direct-chat-msg -->\n                        </div>\n                        <!-- /.direct-chat-messages-->\n\n                        <!-- Contacts are loaded here -->\n                        <div class="direct-chat-contacts">\n                          <ul class="contacts-list">\n                            <li>\n                              <a href="#">\n                                <img class="contacts-list-img"', ' alt="User Avatar">\n\n                                <div class="contacts-list-info">\n                                  <span class="contacts-list-name">\n                                    Count Dracula\n                                    <small class="contacts-list-date float-end">\n                                      2/28/2023\n                                    </small>\n                                  </span>\n                                  <span class="contacts-list-msg">\n                                    How have you been? I was...\n                                  </span>\n                                </div>\n                                <!-- /.contacts-list-info -->\n                              </a>\n                            </li>\n                            <!-- End Contact Item -->\n                            <li>\n                              <a href="#">\n                                <img class="contacts-list-img"', ' alt="User Avatar">\n\n                                <div class="contacts-list-info">\n                                  <span class="contacts-list-name">\n                                    Sarah Doe\n                                    <small class="contacts-list-date float-end">\n                                      2/23/2023\n                                    </small>\n                                  </span>\n                                  <span class="contacts-list-msg">\n                                    I will be waiting for...\n                                  </span>\n                                </div>\n                                <!-- /.contacts-list-info -->\n                              </a>\n                            </li>\n                            <!-- End Contact Item -->\n                            <li>\n                              <a href="#">\n                                <img class="contacts-list-img"', ` alt="User Avatar">

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
                                <img class="contacts-list-img"`, ' alt="User Avatar">\n\n                                <div class="contacts-list-info">\n                                  <span class="contacts-list-name">\n                                    Nora S. Vans\n                                    <small class="contacts-list-date float-end">\n                                      2/10/2023\n                                    </small>\n                                  </span>\n                                  <span class="contacts-list-msg">\n                                    Where is your new...\n                                  </span>\n                                </div>\n                                <!-- /.contacts-list-info -->\n                              </a>\n                            </li>\n                            <!-- End Contact Item -->\n                            <li>\n                              <a href="#">\n                                <img class="contacts-list-img"', ' alt="User Avatar">\n\n                                <div class="contacts-list-info">\n                                  <span class="contacts-list-name">\n                                    John K.\n                                    <small class="contacts-list-date float-end">\n                                      1/27/2023\n                                    </small>\n                                  </span>\n                                  <span class="contacts-list-msg">\n                                    Can I take a look at...\n                                  </span>\n                                </div>\n                                <!-- /.contacts-list-info -->\n                              </a>\n                            </li>\n                            <!-- End Contact Item -->\n                            <li>\n                              <a href="#">\n                                <img class="contacts-list-img"', ' alt="User Avatar">\n\n                                <div class="contacts-list-info">\n                                  <span class="contacts-list-name">\n                                    Kenneth M.\n                                    <small class="contacts-list-date float-end">\n                                      1/4/2023\n                                    </small>\n                                  </span>\n                                  <span class="contacts-list-msg">\n                                    Never mind I found...\n                                  </span>\n                                </div>\n                                <!-- /.contacts-list-info -->\n                              </a>\n                            </li>\n                            <!-- End Contact Item -->\n                          </ul>\n                          <!-- /.contacts-list -->\n                        </div>\n                        <!-- /.direct-chat-pane -->\n                      </div>\n                      <!-- /.card-body -->\n                      <div class="card-footer">\n                        <form action="#" method="post">\n                          <div class="input-group">\n                            <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n                            <span class="input-group-append">\n                              <button type="button" class="btn btn-warning">\n                                Send\n                              </button>\n                            </span>\n                          </div>\n                        </form>\n                      </div>\n                      <!-- /.card-footer-->\n                    </div>\n                    <!-- /.direct-chat -->\n                  </div>\n                  <!-- /.col -->\n\n                  <div class="col-md-6">\n                    <!-- USERS LIST -->\n                    <div class="card">\n                      <div class="card-header">\n                        <h3 class="card-title">Latest Members</h3>\n\n                        <div class="card-tools">\n                          <span class="badge text-bg-danger">\n                            8 New Members\n                          </span>\n                          <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">\n                            <i data-lte-icon="expand" class="bi bi-plus-lg"></i>\n                            <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>\n                          </button>\n                          <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">\n                            <i class="bi bi-x-lg"></i>\n                          </button>\n                        </div>\n                      </div>\n                      <!-- /.card-header -->\n                      <div class="card-body p-0">\n                        <div class="row text-center m-1">\n                          <div class="col-3 p-2">\n                            <img class="img-fluid rounded-circle"', ' alt="User Image">\n                            <a class="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">\n                              Alexander Pierce\n                            </a>\n                            <div class="fs-8">Today</div>\n                          </div>\n                          <div class="col-3 p-2">\n                            <img class="img-fluid rounded-circle"', ' alt="User Image">\n                            <a class="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">\n                              Norman\n                            </a>\n                            <div class="fs-8">Yesterday</div>\n                          </div>\n                          <div class="col-3 p-2">\n                            <img class="img-fluid rounded-circle"', ' alt="User Image">\n                            <a class="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">\n                              Jane\n                            </a>\n                            <div class="fs-8">12 Jan</div>\n                          </div>\n                          <div class="col-3 p-2">\n                            <img class="img-fluid rounded-circle"', ' alt="User Image">\n                            <a class="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">\n                              John\n                            </a>\n                            <div class="fs-8">12 Jan</div>\n                          </div>\n                          <div class="col-3 p-2">\n                            <img class="img-fluid rounded-circle"', ' alt="User Image">\n                            <a class="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">\n                              Alexander\n                            </a>\n                            <div class="fs-8">13 Jan</div>\n                          </div>\n                          <div class="col-3 p-2">\n                            <img class="img-fluid rounded-circle"', ' alt="User Image">\n                            <a class="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">\n                              Sarah\n                            </a>\n                            <div class="fs-8">14 Jan</div>\n                          </div>\n                          <div class="col-3 p-2">\n                            <img class="img-fluid rounded-circle"', ' alt="User Image">\n                            <a class="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">\n                              Nora\n                            </a>\n                            <div class="fs-8">15 Jan</div>\n                          </div>\n                          <div class="col-3 p-2">\n                            <img class="img-fluid rounded-circle"', ' alt="User Image">\n                            <a class="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0" href="#">\n                              Nadia\n                            </a>\n                            <div class="fs-8">15 Jan</div>\n                          </div>\n                        </div>\n                        <!-- /.users-list -->\n                      </div>\n                      <!-- /.card-body -->\n                      <div class="card-footer text-center">\n                        <a href="javascript:" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">View All Users</a>\n                      </div>\n                      <!-- /.card-footer -->\n                    </div>\n                    <!-- /.card -->\n                  </div>\n                  <!-- /.col -->\n                </div>\n                <!--end::Row-->\n\n                <!--begin::Latest Order Widget-->\n                <div class="card">\n                  <div class="card-header">\n                    <h3 class="card-title">Latest Orders</h3>\n\n                    <div class="card-tools">\n                      <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">\n                        <i data-lte-icon="expand" class="bi bi-plus-lg"></i>\n                        <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>\n                      </button>\n                      <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">\n                        <i class="bi bi-x-lg"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <!-- /.card-header -->\n                  <div class="card-body p-0">\n                    <div class="table-responsive">\n                      <table class="table m-0">\n                        <thead>\n                          <tr>\n                            <th>Order ID</th>\n                            <th>Item</th>\n                            <th>Status</th>\n                            <th>Popularity</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td>\n                              <a href="pages/examples/invoice.html" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR9842</a>\n                            </td>\n                            <td>Call of Duty IV</td>\n                            <td>\n                              <span class="badge text-bg-success">\n                                Shipped\n                              </span>\n                            </td>\n                            <td>\n                              <div id="table-sparkline-1"></div>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <a href="pages/examples/invoice.html" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR1848</a>\n                            </td>\n                            <td>Samsung Smart TV</td>\n                            <td>\n                              <span class="badge text-bg-warning">Pending</span>\n                            </td>\n                            <td>\n                              <div id="table-sparkline-2"></div>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <a href="pages/examples/invoice.html" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR7429</a>\n                            </td>\n                            <td>iPhone 6 Plus</td>\n                            <td>\n                              <span class="badge text-bg-danger">\n                                Delivered\n                              </span>\n                            </td>\n                            <td>\n                              <div id="table-sparkline-3"></div>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <a href="pages/examples/invoice.html" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR7429</a>\n                            </td>\n                            <td>Samsung Smart TV</td>\n                            <td>\n                              <span class="badge text-bg-info">Processing</span>\n                            </td>\n                            <td>\n                              <div id="table-sparkline-4"></div>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <a href="pages/examples/invoice.html" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR1848</a>\n                            </td>\n                            <td>Samsung Smart TV</td>\n                            <td>\n                              <span class="badge text-bg-warning">Pending</span>\n                            </td>\n                            <td>\n                              <div id="table-sparkline-5"></div>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <a href="pages/examples/invoice.html" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR7429</a>\n                            </td>\n                            <td>iPhone 6 Plus</td>\n                            <td>\n                              <span class="badge text-bg-danger">\n                                Delivered\n                              </span>\n                            </td>\n                            <td>\n                              <div id="table-sparkline-6"></div>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <a href="pages/examples/invoice.html" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">OR9842</a>\n                            </td>\n                            <td>Call of Duty IV</td>\n                            <td>\n                              <span class="badge text-bg-success">Shipped</span>\n                            </td>\n                            <td>\n                              <div id="table-sparkline-7"></div>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                    <!-- /.table-responsive -->\n                  </div>\n                  <!-- /.card-body -->\n                  <div class="card-footer clearfix">\n                    <a href="javascript:void(0)" class="btn btn-sm btn-primary float-start">\n                      Place New Order\n                    </a>\n                    <a href="javascript:void(0)" class="btn btn-sm btn-secondary float-end">\n                      View All Orders\n                    </a>\n                  </div>\n                  <!-- /.card-footer -->\n                </div>\n                <!-- /.card -->\n              </div>\n              <!-- /.col -->\n\n              <div class="col-md-4">\n                <!-- Info Boxes Style 2 -->\n                <div class="info-box mb-3 text-bg-warning">\n                  <span class="info-box-icon">\n                    <i class="bi bi-tag-fill"></i>\n                  </span>\n\n                  <div class="info-box-content">\n                    <span class="info-box-text">Inventory</span>\n                    <span class="info-box-number">5,200</span>\n                  </div>\n                  <!-- /.info-box-content -->\n                </div>\n                <!-- /.info-box -->\n                <div class="info-box mb-3 text-bg-success">\n                  <span class="info-box-icon">\n                    <i class="bi bi-heart-fill"></i>\n                  </span>\n\n                  <div class="info-box-content">\n                    <span class="info-box-text">Mentions</span>\n                    <span class="info-box-number">92,050</span>\n                  </div>\n                  <!-- /.info-box-content -->\n                </div>\n                <!-- /.info-box -->\n                <div class="info-box mb-3 text-bg-danger">\n                  <span class="info-box-icon">\n                    <i class="bi bi-cloud-download"></i>\n                  </span>\n\n                  <div class="info-box-content">\n                    <span class="info-box-text">Downloads</span>\n                    <span class="info-box-number">114,381</span>\n                  </div>\n                  <!-- /.info-box-content -->\n                </div>\n                <!-- /.info-box -->\n                <div class="info-box mb-3 text-bg-info">\n                  <span class="info-box-icon">\n                    <i class="bi bi-chat-fill"></i>\n                  </span>\n\n                  <div class="info-box-content">\n                    <span class="info-box-text">Direct Messages</span>\n                    <span class="info-box-number">163,921</span>\n                  </div>\n                  <!-- /.info-box-content -->\n                </div>\n                <!-- /.info-box -->\n\n                <div class="card mb-4">\n                  <div class="card-header">\n                    <h3 class="card-title">Browser Usage</h3>\n\n                    <div class="card-tools">\n                      <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">\n                        <i data-lte-icon="expand" class="bi bi-plus-lg"></i>\n                        <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>\n                      </button>\n                      <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">\n                        <i class="bi bi-x-lg"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <!-- /.card-header -->\n                  <div class="card-body">\n                    <!--begin::Row-->\n                    <div class="row">\n                      <div class="col-12">\n                        <div id="pie-chart"></div>\n                      </div>\n                      <!-- /.col -->\n                    </div>\n                    <!--end::Row-->\n                  </div>\n                  <!-- /.card-body -->\n                  <div class="card-footer p-0">\n                    <ul class="nav nav-pills flex-column">\n                      <li class="nav-item">\n                        <a href="#" class="nav-link">\n                          United States of America\n                          <span class="float-end text-danger">\n                            <i class="bi bi-arrow-down fs-7"></i>\n                             12%\n                          </span>\n                        </a>\n                      </li>\n                      <li class="nav-item">\n                        <a href="#" class="nav-link">\n                          India\n                          <span class="float-end text-success">\n                            <i class="bi bi-arrow-up fs-7"></i> 4%\n                          </span>\n                        </a>\n                      </li>\n                      <li class="nav-item">\n                        <a href="#" class="nav-link">\n                          China\n                          <span class="float-end text-info">\n                            <i class="bi bi-arrow-left fs-7"></i> 0%\n                          </span>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                  <!-- /.footer -->\n                </div>\n                <!-- /.card -->\n\n                <!-- PRODUCT LIST -->\n                <div class="card">\n                  <div class="card-header">\n                    <h3 class="card-title">Recently Added Products</h3>\n\n                    <div class="card-tools">\n                      <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse">\n                        <i data-lte-icon="expand" class="bi bi-plus-lg"></i>\n                        <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>\n                      </button>\n                      <button type="button" class="btn btn-tool" data-lte-toggle="card-remove">\n                        <i class="bi bi-x-lg"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <!-- /.card-header -->\n                  <div class="card-body p-0">\n                    <div class="px-2">\n                      <div class="d-flex border-top py-2 px-1">\n                        <div class="col-2">\n                          <img', ' alt="Product Image" class="img-size-50">\n                        </div>\n                        <div class="col-10">\n                          <a href="javascript:void(0)" class="fw-bold">\n                            Samsung TV\n                            <span class="badge text-bg-warning float-end">\n                              $1800\n                            </span>\n                          </a>\n                          <div class="text-truncate">\n                            Samsung 32" 1080p 60Hz LED Smart HDTV.\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /.item -->\n                      <div class="d-flex border-top py-2 px-1">\n                        <div class="col-2">\n                          <img', ` alt="Product Image" class="img-size-50">
                        </div>
                        <div class="col-10">
                          <a href="javascript:void(0)" class="fw-bold">
                            Bicycle
                            <span class="badge text-bg-info float-end">
                              $700
                            </span>
                          </a>
                          <div class="text-truncate">
                            26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                          </div>
                        </div>
                      </div>
                      <!-- /.item -->
                      <div class="d-flex border-top py-2 px-1">
                        <div class="col-2">
                          <img`, ' alt="Product Image" class="img-size-50">\n                        </div>\n                        <div class="col-10">\n                          <a href="javascript:void(0)" class="fw-bold">\n                            Xbox One\n                            <span class="badge text-bg-danger float-end">\n                              $350\n                            </span>\n                          </a>\n                          <div class="text-truncate">\n                            Xbox One Console Bundle with Halo Master Chief\n                            Collection.\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /.item -->\n                      <div class="d-flex border-top py-2 px-1">\n                        <div class="col-2">\n                          <img', ' alt="Product Image" class="img-size-50">\n                        </div>\n                        <div class="col-10">\n                          <a href="javascript:void(0)" class="fw-bold">\n                            PlayStation 4\n                            <span class="badge text-bg-success float-end">\n                              $399\n                            </span>\n                          </a>\n                          <div class="text-truncate">\n                            PlayStation 4 500GB Console (PS4)\n                          </div>\n                        </div>\n                      </div>\n                      <!-- /.item -->\n                    </div>\n                  </div>\n                  <!-- /.card-body -->\n                  <div class="card-footer text-center">\n                    <a href="javascript:void(0)" class="uppercase">\n                      View All Products\n                    </a>\n                  </div>\n                  <!-- /.card-footer -->\n                </div>\n                <!-- /.card -->\n              </div>\n              <!-- /.col -->\n            </div>\n            <!--end::Row-->\n          </div>\n          <!--end::Container-->\n        </div>\n        <!--end::App Content-->\n      </main>\n      <!--end::App Main-->\n      ', "\n    </div>\n    <!--end::App Wrapper-->\n    <!--begin::Script-->\n    ", `

    <!-- OPTIONAL SCRIPTS -->

    <!-- apexcharts -->
    <script src="https://cdn.jsdelivr.net/npm/apexcharts@3.37.1/dist/apexcharts.min.js" integrity="sha256-+vh8GkaU7C9/wbSLIcwq82tQ2wTf44aOHA8HlBMwRI8=" crossorigin="anonymous"><\/script>

    <script>
// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR DEMO
// ++++++++++++++++++++++++++++++++++++++++++

/* apexcharts
       * -------
       * Here we will create a few charts using apexcharts
       */

//-----------------------
// - MONTHLY SALES CHART -
//-----------------------

const sales_chart_options = {
  series: [
    {
      name: "Digital Goods",
      data: [28, 48, 40, 19, 86, 27, 90]
    },
    {
      name: "Electronics",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ],
  chart: {
    height: 180,
    type: "area",
    toolbar: {
      show: false
    }
  },
  legend: {
    show: false
  },
  colors: ["#0d6efd", "#20c997"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth"
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2023-01-01",
      "2023-02-01",
      "2023-03-01",
      "2023-04-01",
      "2023-05-01",
      "2023-06-01",
      "2023-07-01"
    ]
  },
  tooltip: {
    x: {
      format: "MMMM yyyy"
    }
  }
}

const sales_chart = new ApexCharts(
  document.querySelector("#sales-chart"),
  sales_chart_options
)
sales_chart.render()

//---------------------------
// - END MONTHLY SALES CHART -
//---------------------------

function createSparklineChart(selector, data) {
  const options = {
    series: [{ data }],
    chart: {
      type: "line",
      width: 150,
      height: 30,
      sparkline: {
        enabled: true
      }
    },
    colors: ["var(--bs-primary)"],
    stroke: {
      width: 2
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter() {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    }
  }

  const chart = new ApexCharts(document.querySelector(selector), options)
  chart.render()
}

const table_sparkline_1_data = [
  25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54
]
const table_sparkline_2_data = [
  12, 56, 21, 39, 73, 45, 64, 52, 36, 59, 44
]
const table_sparkline_3_data = [
  15, 46, 21, 59, 33, 15, 34, 42, 56, 19, 64
]
const table_sparkline_4_data = [
  30, 56, 31, 69, 43, 35, 24, 32, 46, 29, 64
]
const table_sparkline_5_data = [
  20, 76, 51, 79, 53, 35, 54, 22, 36, 49, 64
]
const table_sparkline_6_data = [
  5, 36, 11, 69, 23, 15, 14, 42, 26, 19, 44
]
const table_sparkline_7_data = [
  12, 56, 21, 39, 73, 45, 64, 52, 36, 59, 74
]

createSparklineChart("#table-sparkline-1", table_sparkline_1_data)
createSparklineChart("#table-sparkline-2", table_sparkline_2_data)
createSparklineChart("#table-sparkline-3", table_sparkline_3_data)
createSparklineChart("#table-sparkline-4", table_sparkline_4_data)
createSparklineChart("#table-sparkline-5", table_sparkline_5_data)
createSparklineChart("#table-sparkline-6", table_sparkline_6_data)
createSparklineChart("#table-sparkline-7", table_sparkline_7_data)

//-------------
// - PIE CHART -
//-------------

const pie_chart_options = {
  series: [700, 500, 400, 600, 300, 100],
  chart: {
    type: "donut"
  },
  labels: ["Chrome", "Edge", "FireFox", "Safari", "Opera", "IE"],
  dataLabels: {
    enabled: false
  },
  colors: [
    "#0d6efd",
    "#20c997",
    "#ffc107",
    "#d63384",
    "#6f42c1",
    "#adb5bd"
  ]
}

const pie_chart = new ApexCharts(
  document.querySelector("#pie-chart"),
  pie_chart_options
)
pie_chart.render()

//-----------------
// - END PIE CHART -
//-----------------
    <\/script>
    <!--end::Script-->
  </body><!--end::Body--></html>`])), renderComponent($$result, "Head", $$Head, { "title": title, "path": path }), renderHead(), renderComponent($$result, "Topbar", $$Topbar, { "path": path }), renderComponent($$result, "Sidenav", $$Sidenav, { "path": path, "mainPage": mainPage, "page": page }), addAttribute(deploymentPath + "assets/img/user1-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user3-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user1-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user3-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user1-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user7-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user3-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user5-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user6-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user8-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user1-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user1-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user7-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user6-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user2-160x160.jpg", "src"), addAttribute(deploymentPath + "assets/img/user5-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user4-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/user3-128x128.jpg", "src"), addAttribute(deploymentPath + "assets/img/default-150x150.png", "src"), addAttribute(deploymentPath + "assets/img/default-150x150.png", "src"), addAttribute(deploymentPath + "assets/img/default-150x150.png", "src"), addAttribute(deploymentPath + "assets/img/default-150x150.png", "src"), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Scripts", $$Scripts, { "path": path }));
}, "/workspaces/Perkify/src/html/pages/index2.astro", void 0);

const $$file = "/workspaces/Perkify/src/html/pages/index2.astro";
const $$url = "/index2.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
