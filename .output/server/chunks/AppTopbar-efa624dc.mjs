import { ref, computed, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useLayout } from './layout-83f1b94f.mjs';
import { b as useRouter$1, a as useToken } from './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import '@vueuse/integrations/useJwt';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const __default__ = {
  data() {
    return {
      data: {},
      logo: null
    };
  },
  async mounted() {
    await this.loadHeader();
    await this.loadData();
  },
  methods: {
    async loadData() {
      const data = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/admin", {
        headers: {
          Authorization: "Bearer " + useToken().token
        }
      });
      this.data.name = data.name;
      this.data.email = data.email;
    },
    async loadHeader() {
      const { logo } = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/header");
      this.logo = logo;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "AppTopbar",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter$1();
    useLayout();
    const topbarMenuActive = ref(false);
    const topbarMenuClasses = computed(() => {
      return {
        "layout-topbar-menu-mobile-active": topbarMenuActive.value
      };
    });
    function logout() {
      useToken().token = null;
      router.push("/auth/login");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-topbar" }, _attrs))}><button class="p-link layout-menu-button layout-topbar-button"><i class="pi pi-bars"></i></button>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/dashboard",
        class: "flex layout-topbar-logo items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_img, {
              width: "50",
              height: "35",
              src: _ctx.logo,
              alt: "logo"
            }, null, _parent2, _scopeId));
            _push2(`</div><span class="font-medium"${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_v_img, {
                  width: "50",
                  height: "35",
                  src: _ctx.logo,
                  alt: "logo"
                }, null, 8, ["src"])
              ]),
              createVNode("span", { class: "font-medium" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_menu, null, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, mergeProps(props, { class: "p-link layout-topbar-menu-button layout-topbar-button" }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-ellipsis-v"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-ellipsis-v" })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, mergeProps(props, { class: "p-link layout-topbar-menu-button layout-topbar-button" }), {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-ellipsis-v" })
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block rounded-lg cursor-pointer mt-2 bg-white border border-slate-200 pt-2"${_scopeId}><div class="mb-2 pt-4 flex px-7 border-b hover:bg-[#EDEDED] border-slate-300 pb-3"${_scopeId}><div class="bg-[#DBEAFE] rounded-lg flex items-center justify-center w-[40px] h-[40px]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId}><path fill="#3267E3" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z"${_scopeId}></path></svg></div><div class="block ml-3"${_scopeId}><div class="font-semibold"${_scopeId}>${ssrInterpolate(_ctx.data.name)}</div><div${_scopeId}>${ssrInterpolate(_ctx.data.email)}</div></div></div><div class="mb-2 mt-2 px-7 pt-3 hover:bg-[#EDEDED] flex pb-3"${_scopeId}><div class="bg-[#FFF4F2] rounded-lg flex items-center justify-center w-[40px] h-[40px]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId}><path fill="none" stroke="#CB3A31" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9l-4-4m4 4l-4 4m4-4H9"${_scopeId}></path></svg></div><div class="block ml-3"${_scopeId}><div class="font-semibold"${_scopeId}>Logout</div><div${_scopeId}>Keluar dari Dashboard</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "block rounded-lg cursor-pointer mt-2 bg-white border border-slate-200 pt-2" }, [
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/dashboard/admin-profile"),
                  class: "mb-2 pt-4 flex px-7 border-b hover:bg-[#EDEDED] border-slate-300 pb-3"
                }, [
                  createVNode("div", { class: "bg-[#DBEAFE] rounded-lg flex items-center justify-center w-[40px] h-[40px]" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.5em",
                      height: "1.5em",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "#3267E3",
                        d: "M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "block ml-3" }, [
                    createVNode("div", { class: "font-semibold" }, toDisplayString(_ctx.data.name), 1),
                    createVNode("div", null, toDisplayString(_ctx.data.email), 1)
                  ])
                ], 8, ["onClick"]),
                createVNode("div", {
                  onClick: logout,
                  class: "mb-2 mt-2 px-7 pt-3 hover:bg-[#EDEDED] flex pb-3"
                }, [
                  createVNode("div", { class: "bg-[#FFF4F2] rounded-lg flex items-center justify-center w-[40px] h-[40px]" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.5em",
                      height: "1.5em",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "none",
                        stroke: "#CB3A31",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9l-4-4m4 4l-4 4m4-4H9"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "block ml-3" }, [
                    createVNode("div", { class: "font-semibold" }, "Logout"),
                    createVNode("div", null, "Keluar dari Dashboard")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([topbarMenuClasses.value, "layout-topbar-menu"])}">`);
      _push(ssrRenderComponent(_component_v_menu, { "open-on-hover": "" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${ssrRenderAttrs(mergeProps(props, { class: "p-link layout-topbar-button" }))}${_scopeId}><i class="pi pi-user"${_scopeId}></i><span${_scopeId}>Profile</span></button>`);
          } else {
            return [
              createVNode("button", mergeProps({
                onClick: ($event) => _ctx.onTopBarMenuButton()
              }, props, { class: "p-link layout-topbar-button" }), [
                createVNode("i", { class: "pi pi-user" }),
                createVNode("span", null, "Profile")
              ], 16, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block rounded-lg cursor-pointer mt-2 bg-white border border-slate-200 pt-2"${_scopeId}><div class="mb-2 pt-4 flex px-7 border-b hover:bg-[#EDEDED] border-slate-300 pb-3"${_scopeId}><div class="bg-[#DBEAFE] rounded-lg flex items-center justify-center w-[40px] h-[40px]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId}><path fill="#3267E3" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z"${_scopeId}></path></svg></div><div class="block ml-3"${_scopeId}><div class="font-semibold"${_scopeId}>${ssrInterpolate(_ctx.data.name)}</div><div${_scopeId}>${ssrInterpolate(_ctx.data.email)}</div></div></div><div class="mb-2 mt-2 px-7 pt-3 hover:bg-[#EDEDED] flex pb-3"${_scopeId}><div class="bg-[#FFF4F2] rounded-lg flex items-center justify-center w-[40px] h-[40px]"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId}><path fill="none" stroke="#CB3A31" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9l-4-4m4 4l-4 4m4-4H9"${_scopeId}></path></svg></div><div class="block ml-3"${_scopeId}><div class="font-semibold"${_scopeId}>Logout</div><div${_scopeId}>Keluar dari Dashboard</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "block rounded-lg cursor-pointer mt-2 bg-white border border-slate-200 pt-2" }, [
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/dashboard/admin-profile"),
                  class: "mb-2 pt-4 flex px-7 border-b hover:bg-[#EDEDED] border-slate-300 pb-3"
                }, [
                  createVNode("div", { class: "bg-[#DBEAFE] rounded-lg flex items-center justify-center w-[40px] h-[40px]" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.5em",
                      height: "1.5em",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "#3267E3",
                        d: "M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "block ml-3" }, [
                    createVNode("div", { class: "font-semibold" }, toDisplayString(_ctx.data.name), 1),
                    createVNode("div", null, toDisplayString(_ctx.data.email), 1)
                  ])
                ], 8, ["onClick"]),
                createVNode("div", {
                  onClick: logout,
                  class: "mb-2 mt-2 px-7 pt-3 hover:bg-[#EDEDED] flex pb-3"
                }, [
                  createVNode("div", { class: "bg-[#FFF4F2] rounded-lg flex items-center justify-center w-[40px] h-[40px]" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.5em",
                      height: "1.5em",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "none",
                        stroke: "#CB3A31",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9l-4-4m4 4l-4 4m4-4H9"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "block ml-3" }, [
                    createVNode("div", { class: "font-semibold" }, "Logout"),
                    createVNode("div", null, "Keluar dari Dashboard")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/AppTopbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppTopbar-efa624dc.mjs.map
