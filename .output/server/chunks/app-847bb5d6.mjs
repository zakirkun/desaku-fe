import { useSSRContext, defineComponent, resolveComponent, withCtx, createVNode, openBlock, createBlock, ref, reactive, withAsyncContext, unref, isRef, mergeProps } from 'vue';
import { u as useHead, b as useRouter$1, _ as _export_sfc } from './server.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { onClickOutside } from '@vueuse/core';
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
  data: () => ({
    open: ["Users"],
    admins: [
      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"]
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"]
    ],
    items: [
      { type: "header", title: "Beranda", value: "/" },
      { type: "subheader", title: "Profil Desa" },
      {
        title: "Tentang Desa",
        value: "tentang-desa"
      },
      {
        title: "Visi & Misi",
        value: "visi-misi"
      },
      {
        title: "Sejarah Desa",
        value: "sejarah-desa"
      },
      { type: "divider" },
      { type: "subheader", title: "Pemerintahan" },
      {
        title: "Struktur Organisasi",
        value: "struktur-organisasi"
      },
      {
        title: "Perangkat Desa",
        value: "perangkat-desa"
      },
      {
        title: "Lembaga Desa",
        value: "lembaga-desa"
      },
      { type: "divider" },
      { type: "subheader", title: "Informasi Publik" },
      {
        title: "Galeri",
        value: "galeri"
      },
      {
        title: "Berita",
        value: "berita"
      },
      {
        title: "Pengumuman",
        value: "pengumuman"
      },
      {
        title: "Kegiatan",
        value: "kegiatan"
      },
      {
        title: "Potensi Desa",
        value: "potensi-desa"
      }
    ]
  })
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Header",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const headerActive = ref(false);
    ref(null);
    const navMobile = ref(false);
    const target = ref(null);
    const navSelected = ref(null);
    const headerData = reactive({
      no_telp: null,
      email: null,
      logo: null,
      site_name: null,
      description: null
    });
    const data = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/header")), __temp = await __temp, __restore(), __temp);
    headerData.no_telp = data.no_telp;
    headerData.email = data.email;
    headerData.site_name = data.site_name;
    headerData.description = data.description;
    headerData.logo = data.logo;
    function changePage() {
      navMobile.value = false;
      document.documentElement.classList.remove("overflow-hidden");
      setTimeout(() => {
        if (navSelected.value == "/") {
          useRouter$1().push("/");
          return;
        }
        useRouter$1().push(`/${navSelected.value}`);
      }, 500);
    }
    onClickOutside(target, (event) => {
      navMobile.value = false;
      document.documentElement.classList.remove("overflow-hidden");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_v_list = resolveComponent("v-list");
      const _component_v_menu = resolveComponent("v-menu");
      _push(`<!--[-->`);
      if (unref(navMobile)) {
        _push(`<div class="bg-white shadow-lg min-h-screen fixed w-3/4 right-0" style="${ssrRenderStyle({ "z-index": "9999" })}"><div class="block min-h-screen pb-10 px-3 py-4"><div class="flex justify-between cursor-pointer border-b border-slate-200 pb-4"><div class="flex-none flex"><img width="40"${ssrRenderAttr("src", headerData.logo)} alt=""><div class="ml-3 block font-semibold"><div><span>${ssrInterpolate(headerData.site_name)}</span></div><div class="text-sm"><span>${ssrInterpolate(headerData.description)}</span></div></div></div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 28 28"><path fill="black" d="M20.48 3.512a11.966 11.966 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.966 11.966 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.789 9.789 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.789 9.789 0 0 1 2.876-6.943a9.786 9.786 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.785 9.785 0 0 1-2.876 6.942z"></path><path fill="black" d="m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"></path></svg></div></div><div class="overflow-y-scroll pb-7" style="${ssrRenderStyle({ "height": "calc(100vh - 60px)" })}">`);
        _push(ssrRenderComponent(_component_v_list, {
          selectable: "",
          selected: unref(navSelected),
          "onUpdate:selected": [($event) => isRef(navSelected) ? navSelected.value = $event : null, changePage],
          items: _ctx.items
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="header" class="surface-0 flex justify-content-center"><div id="home" class="w-100 overflow-hidden justify-between"><div class="flex w-full px-[1rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] bg-[#0088CC] py-2"><div class="flex items-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 24 24"><path fill="white" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"></path></svg><div class="ml-1 text-sm md:text-base text-white">${ssrInterpolate((_a = headerData.no_telp) != null ? _a : "-")}</div></div><div class="flex text-sm md:text-base items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg><div class="text-white ml-2">${ssrInterpolate((_b = headerData.email) != null ? _b : "-")}</div></div></div><div class="${ssrRenderClass([{ "fixed top-0 z-50 animation": unref(headerActive) }, "py-4 px-[1rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] w-full flex items-center bg-white/80 backdrop-blur-sm justify-between top-8"])}"><div class="flex cursor-pointer"><img width="40"${ssrRenderAttr("src", headerData.logo)} alt=""><div class="ml-3 block font-semibold"><div><span>${ssrInterpolate(headerData.site_name)}</span></div><div class="text-sm"><span>${ssrInterpolate(headerData.description)}</span></div></div></div><div class="items-center justify-between flex px-0 md:px-6 lg:px-0 z-2"><ul class="list-none p-0 m-0 items-center select-none md:flex hidden cursor-pointer"><div class="font-semibold text-[#0088CC] mr-5 border-slate-300"> Beranda</div><div class="mr-3">`);
      _push(ssrRenderComponent(_component_v_menu, { "open-on-hover": "" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps(props, { class: "flex font-semibold text-[#0088CC] items-center" }))}${_scopeId}><span${_scopeId}>Profil Desa</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><path fill="#0088CC" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", mergeProps(props, { class: "flex font-semibold text-[#0088CC] items-center" }), [
                createVNode("span", null, "Profil Desa"),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1em",
                  height: "1em",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    fill: "#0088CC",
                    "fill-rule": "evenodd",
                    d: "M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ], 16)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5"${_scopeId}><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Tentang Desa</div><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Visi &amp; Misi</div><div${_scopeId}>Sejarah Desa</div></div>`);
          } else {
            return [
              createVNode("div", { class: "block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5" }, [
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/tentang-desa"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Tentang Desa", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/visi-misi"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Visi & Misi", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/sejarah-desa")
                }, "Sejarah Desa", 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mr-3">`);
      _push(ssrRenderComponent(_component_v_menu, { "open-on-hover": "" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps(props, { class: "flex font-semibold text-[#0088CC] items-center" }))}${_scopeId}><span${_scopeId}>Pemerintahan</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><path fill="#0088CC" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", mergeProps(props, { class: "flex font-semibold text-[#0088CC] items-center" }), [
                createVNode("span", null, "Pemerintahan"),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1em",
                  height: "1em",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    fill: "#0088CC",
                    "fill-rule": "evenodd",
                    d: "M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ], 16)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5"${_scopeId}><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Struktur Organisasi</div><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Lembaga Desa</div><div${_scopeId}>Perangkat Desa</div></div>`);
          } else {
            return [
              createVNode("div", { class: "block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5" }, [
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/struktur-organisasi"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Struktur Organisasi", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/lembaga-desa"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Lembaga Desa", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/perangkat-desa")
                }, "Perangkat Desa", 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mr-3">`);
      _push(ssrRenderComponent(_component_v_menu, { "open-on-hover": "" }, {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps(props, { class: "flex font-semibold text-[#0088CC] items-center" }))}${_scopeId}><span${_scopeId}>Informasi Publik</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><path fill="#0088CC" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", mergeProps(props, { class: "flex font-semibold text-[#0088CC] items-center" }), [
                createVNode("span", null, "Informasi Publik"),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1em",
                  height: "1em",
                  viewBox: "0 0 24 24"
                }, [
                  createVNode("path", {
                    fill: "#0088CC",
                    "fill-rule": "evenodd",
                    d: "M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ], 16)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5"${_scopeId}><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Galeri</div><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Berita</div><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Pengumuman</div><div${_scopeId}> Kegiatan</div></div>`);
          } else {
            return [
              createVNode("div", { class: "block border-t-4 border-[#0088CC] shadow-md rounded-md cursor-pointer mt-4 bg-white px-4 py-5" }, [
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/galeri"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Galeri", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/berita"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Berita", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/pengumuman"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Pengumuman", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/kegiatan")
                }, " Kegiatan", 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="font-semibold text-[#0088CC] mr-5 border-slate-300"> Potensi Desa</div></ul><div class="md:hidden cursor-pointer bg-[#0088CC] pa-2 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 0 1 0-1.99h8.01c.55 0 .995.445.995.995M22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 1 1 0-1.99h18.01c.55 0 .995.446.995.995m-.995-5.01a.995.995 0 0 0 0-1.99H8.995a.995.995 0 1 0 0 1.99z"></path></svg></div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$7;
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.3em",
    height: "1.3em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="white" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a78.831 78.831 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465a72.11 72.11 0 0 1-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78.43 78.43 0 0 1-2.189-.023l-.194-.006a63.036 63.036 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.889 4.889 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428a74.1 74.1 0 0 1-.03-.712l-.005-.194A79.047 79.047 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.678a4.897 4.897 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Instagram.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "mr-1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.3em",
    height: "1.3em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="white" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Facebook.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "mr-1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.3em",
    height: "1.3em",
    viewBox: "0 0 14 14"
  }, _attrs))}><g fill="none"><g clip-path="url(#primeTwitter0)"><path fill="white" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"></path></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"></path></clipPath></defs></g></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Twitter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "mr-1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.3em",
    height: "1.3em",
    viewBox: "0 0 16 16"
  }, _attrs))}><path fill="white" d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Whatsapp.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "mr-1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.3em",
    height: "1.3em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="white" fill-rule="evenodd" d="M6.989 4.89a64.248 64.248 0 0 1 10.022 0l2.24.176a2.725 2.725 0 0 1 2.476 2.268c.517 3.09.517 6.243 0 9.332a2.725 2.725 0 0 1-2.475 2.268l-2.24.175a64.24 64.24 0 0 1-10.023 0l-2.24-.175a2.725 2.725 0 0 1-2.476-2.268a28.315 28.315 0 0 1 0-9.332a2.725 2.725 0 0 1 2.475-2.268zM10 14.47V9.53a.3.3 0 0 1 .454-.257l4.117 2.47a.3.3 0 0 1 0 .514l-4.117 2.47A.3.3 0 0 1 10 14.47" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Youtube.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const data = ref([]);
    const socialMedia = ref([]);
    socialMedia.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/social-media")), __temp = await __temp, __restore(), __temp);
    data.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/footer")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsInstagram = __nuxt_component_0;
      const _component_IconsFacebook = __nuxt_component_1$1;
      const _component_IconsTwitter = __nuxt_component_2;
      const _component_IconsWhatsapp = __nuxt_component_3;
      const _component_IconsYoutube = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-none" }, _attrs))} data-v-b1a9cbed><div class="grid grid-cols-1 md:grid-cols-3 gap-x-[6rem] gap-y-8 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] bg-[#0088CC] text-white py-8" data-v-b1a9cbed><div class="block" data-v-b1a9cbed><div class="text-xl md:text-2xl font-semibold" data-v-b1a9cbed><span data-v-b1a9cbed>Profil</span></div><div class="text-sm mt-3 leading-6" data-v-b1a9cbed><span data-v-b1a9cbed>${ssrInterpolate(unref(data).profile)}</span></div></div><div class="block" data-v-b1a9cbed><div class="text-xl md:text-2xl font-semibold" data-v-b1a9cbed><span data-v-b1a9cbed>Sosial Media</span></div><div class="text-sm mt-3" data-v-b1a9cbed><ul class="text-base" data-v-b1a9cbed><!--[-->`);
      ssrRenderList(unref(socialMedia), (item) => {
        _push(`<li class="flex items-center" data-v-b1a9cbed>`);
        if (item.name == "Instagram") {
          _push(ssrRenderComponent(_component_IconsInstagram, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item.name == "Facebook") {
          _push(ssrRenderComponent(_component_IconsFacebook, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item.name == "Twitter") {
          _push(ssrRenderComponent(_component_IconsTwitter, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item.name == "Whatsapp") {
          _push(ssrRenderComponent(_component_IconsWhatsapp, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (item.name == "Youtube") {
          _push(ssrRenderComponent(_component_IconsYoutube, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<a class="ml-1 text-white" target="_blank"${ssrRenderAttr("href", item.link)} data-v-b1a9cbed>${ssrInterpolate(item.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="block" data-v-b1a9cbed><div class="text-xl md:text-2xl font-semibold" data-v-b1a9cbed><span data-v-b1a9cbed>Alamat Lengkap</span></div><div class="text-sm mt-3" data-v-b1a9cbed><span data-v-b1a9cbed>${ssrInterpolate(unref(data).address)}</span></div></div></div><div class="bg-[#0077B3] px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] text-white py-5" data-v-b1a9cbed><p class="text-base" data-v-b1a9cbed>${ssrInterpolate(unref(data).copyright)}</p></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b1a9cbed"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: "%s - Desaku"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_layout = resolveComponent("v-layout");
      const _component_v_app = resolveComponent("v-app");
      const _component_Header = __nuxt_component_0$1;
      const _component_router_view = resolveComponent("router-view");
      const _component_Footer = __nuxt_component_1;
      _push(ssrRenderComponent(_component_v_layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="min-h-screen flex flex-col bg-[#F8F9FC]"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Header, null, null, _parent3, _scopeId2));
                  _push3(`<div class="min-h-screen"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_router_view, {
                    key: _ctx.$route.fullPath
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_Footer, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "min-h-screen flex flex-col bg-[#F8F9FC]" }, [
                      createVNode(_component_Header),
                      createVNode("div", { class: "min-h-screen" }, [
                        (openBlock(), createBlock(_component_router_view, {
                          key: _ctx.$route.fullPath
                        }))
                      ]),
                      createVNode(_component_Footer)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "min-h-screen flex flex-col bg-[#F8F9FC]" }, [
                    createVNode(_component_Header),
                    createVNode("div", { class: "min-h-screen" }, [
                      (openBlock(), createBlock(_component_router_view, {
                        key: _ctx.$route.fullPath
                      }))
                    ]),
                    createVNode(_component_Footer)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=app-847bb5d6.mjs.map
