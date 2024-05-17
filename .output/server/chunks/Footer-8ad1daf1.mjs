import { useSSRContext, ref, reactive, resolveComponent, unref, withCtx, mergeProps, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { onClickOutside } from '@vueuse/core';
import { h as _export_sfc } from './server.mjs';

const __default__ = {
  data: () => ({
    navSelected: null,
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
      { type: "subheader", title: "Profil Desa" },
      {
        title: "Tentang Kami",
        value: "tentang-kami"
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
        value: 4
      },
      {
        title: "Perangkat Desa",
        value: 5
      },
      {
        title: "Lembaga Desa",
        value: 6
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
      }
    ]
  }),
  watch: {
    navSelected() {
      this.$router.push(`/${this.navSelected}`);
    }
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const headerActive = ref(false);
    ref(null);
    const navMobile = ref(false);
    const target = ref(null);
    const headerData = reactive({
      no_telp: null,
      email: null
    });
    onClickOutside(target, (event) => navMobile.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_list = resolveComponent("v-list");
      const _component_v_menu = resolveComponent("v-menu");
      _push(`<!--[-->`);
      if (unref(navMobile)) {
        _push(`<div class="bg-white shadow-lg h-screen fixed w-3/4 right-0" style="${ssrRenderStyle({ "z-index": "9999" })}"><div class="block h-screen px-3 py-4"><div class="flex justify-between cursor-pointer border-b border-slate-200 pb-4"><div class="flex-none flex"><img width="40" src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png" alt=""><div class="ml-3 block font-semibold"><div><span>Desa Kertamulya</span></div><div class="text-sm"><span>Kabupaten Kulon Progo</span></div></div></div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 28 28"><path fill="black" d="M20.48 3.512a11.966 11.966 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.966 11.966 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.789 9.789 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.789 9.789 0 0 1 2.876-6.943a9.786 9.786 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.785 9.785 0 0 1-2.876 6.942z"></path><path fill="black" d="m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"></path></svg></div></div>`);
        _push(ssrRenderComponent(_component_v_list, {
          selectable: "",
          selected: _ctx.navSelected,
          "onUpdate:selected": ($event) => _ctx.navSelected = $event,
          items: _ctx.items
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="surface-0 flex justify-content-center"><div id="home" class="w-100 overflow-hidden justify-between"><div class="flex w-full px-[1rem] md:px-[12rem] bg-[#0088CC] py-2"><div class="flex items-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 24 24"><path fill="white" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"></path></svg><div class="ml-2 text-white">${ssrInterpolate(headerData.no_telp)}</div></div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg><div class="text-white ml-2">${ssrInterpolate(headerData.email)}</div></div></div><div class="${ssrRenderClass([{ "fixed top-0 z-50 animation": unref(headerActive) }, "py-4 px-[2rem] md:px-[12rem] w-full flex items-center bg-white/80 backdrop-blur-sm justify-between top-8"])}"><div class="flex cursor-pointer"><img width="40" src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png" alt=""><div class="ml-3 block font-semibold"><div><span>Desa Kertamulya</span></div><div class="text-sm"><span>Kabupaten Kulon Progo</span></div></div></div><div class="items-center justify-between flex px-0 md:px-6 lg:px-0 z-2"><ul class="list-none p-0 m-0 items-center select-none md:flex hidden cursor-pointer"><div class="mr-3">`);
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
            _push2(`<div class="block border-t-4 border-[#0088CC] rounded-md cursor-pointer mt-4 bg-white px-4 py-5"${_scopeId}><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Tentang Kami</div><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Visi &amp; Misi</div><div${_scopeId}>Sejarah Desa</div></div>`);
          } else {
            return [
              createVNode("div", { class: "block border-t-4 border-[#0088CC] rounded-md cursor-pointer mt-4 bg-white px-4 py-5" }, [
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/tentang-kami"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Tentang Kami", 8, ["onClick"]),
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
            _push2(`<div class="block border-t-4 border-[#0088CC] rounded-md cursor-pointer mt-4 bg-white px-4 py-5"${_scopeId}><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Struktur Organisasi</div><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Perangkat Desa</div><div${_scopeId}>Lembaga Desa</div></div>`);
          } else {
            return [
              createVNode("div", { class: "block border-t-4 border-[#0088CC] rounded-md cursor-pointer mt-4 bg-white px-4 py-5" }, [
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/struktur-organisasi"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Struktur Organisasi", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/perangkat-desa"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Perangkat Desa", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/lembaga-desa")
                }, "Lembaga Desa", 8, ["onClick"])
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
            _push2(`<div class="block border-t-4 border-[#0088CC] rounded-md cursor-pointer mt-4 bg-white px-4 py-5"${_scopeId}><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Galeri</div><div class="mb-2 border-b border-slate-300 pb-3"${_scopeId}> Berita</div><div${_scopeId}> Pengumuman</div></div>`);
          } else {
            return [
              createVNode("div", { class: "block border-t-4 border-[#0088CC] rounded-md cursor-pointer mt-4 bg-white px-4 py-5" }, [
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/galeri"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Galeri", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/berita"),
                  class: "mb-2 border-b border-slate-300 pb-3"
                }, " Berita", 8, ["onClick"]),
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/pengumuman")
                }, " Pengumuman", 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></ul><div class="md:hidden cursor-pointer bg-[#0088CC] pa-2 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 0 1 0-1.99h8.01c.55 0 .995.445.995.995M22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 1 1 0-1.99h18.01c.55 0 .995.446.995.995m-.995-5.01a.995.995 0 0 0 0-1.99H8.995a.995.995 0 1 0 0 1.99z"></path></svg></div></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  data: () => ({
    data: []
  }),
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.data = await $fetch("http://api.desaku.muhichsan.com/api/footer");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-3 gap-x-[6rem] gap-y-8 px-[2rem] md:px-[14rem] bg-[#0088CC] text-white py-8" }, _attrs))} data-v-ea22146a><div class="block" data-v-ea22146a><div class="text-2xl font-semibold" data-v-ea22146a><span data-v-ea22146a>Profil</span></div><div class="text-sm mt-3 leading-6" data-v-ea22146a><span data-v-ea22146a>${ssrInterpolate(_ctx.data.profile)}</span></div></div><div class="block" data-v-ea22146a><div class="text-2xl font-semibold" data-v-ea22146a><span data-v-ea22146a>Sosial Media</span></div><div class="text-sm mt-3" data-v-ea22146a><ul class="ml-4 list-disc" data-v-ea22146a>`);
  if (_ctx.data.instagram) {
    _push(`<li data-v-ea22146a><a target="_blank"${ssrRenderAttr("href", _ctx.data.instagram)} data-v-ea22146a>Instagram</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.data.facebook) {
    _push(`<li data-v-ea22146a><a target="_blank"${ssrRenderAttr("href", _ctx.data.facebook)} data-v-ea22146a>Facebook</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.data.whatsapp) {
    _push(`<li data-v-ea22146a><a target="_blank"${ssrRenderAttr("href", _ctx.data.whatsapp)} data-v-ea22146a>Whatsapp</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.data.twitter) {
    _push(`<li data-v-ea22146a><a target="_blank"${ssrRenderAttr("href", _ctx.data.twitter)} data-v-ea22146a>Twitter</a></li>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.data.youtube) {
    _push(`<li data-v-ea22146a><a target="_blank"${ssrRenderAttr("href", _ctx.data.youtube)} data-v-ea22146a>Channel Youtube</a></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul></div></div><div class="block" data-v-ea22146a><div class="text-2xl font-semibold" data-v-ea22146a><span data-v-ea22146a>Alamat Lengkap</span></div><div class="text-sm mt-3" data-v-ea22146a><span data-v-ea22146a>${ssrInterpolate(_ctx.data.address)}</span></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ea22146a"]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=Footer-8ad1daf1.mjs.map
