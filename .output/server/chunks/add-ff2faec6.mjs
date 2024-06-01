import { _ as __nuxt_component_0 } from './MediaLibrary-15312a30.mjs';
import { _ as __nuxt_component_0$1 } from './server-placeholder-da4405da.mjs';
import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { u as useHead, a as useToken } from './server.mjs';
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as createSlug } from './createSlug-702a15de.mjs';
import 'file-selector';
import 'attr-accept';
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
      openMediaLibrary: false,
      image: null,
      renderRichEditor: false,
      data: null,
      form: {
        name: null,
        surname: null,
        image: null,
        visi: null,
        tugas: null,
        profile: null,
        address: null,
        slug: null
      },
      loading: false
    };
  },
  async mounted() {
    this.renderRichEditor = true;
  },
  methods: {
    async addLembaga() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      this.form.slug = createSlug(this.form.name);
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/lembaga", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: this.form
      });
      this.loading = false;
      this.$router.push("/dashboard/lembaga");
    },
    contentChangeVisi(v) {
      this.form.visi = v;
    },
    contentChangeProfile(v) {
      this.form.profile = v;
    },
    contentChangeTugas(v) {
      this.form.tugas = v;
    },
    onImageSelected(val) {
      this.form.image = val;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Tambah Lembaga"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaLibrary = __nuxt_component_0;
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_RichEditor = __nuxt_component_0$1;
      const _component_Loader = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_MediaLibrary, {
        onOnImageSelected: _ctx.onImageSelected,
        onOnCloseModal: ($event) => _ctx.openMediaLibrary = false,
        open: _ctx.openMediaLibrary
      }, null, _parent));
      _push(`<div class="grid animate-fade"><div class="col-12"><div class="card"><h3 class="text-2xl font-medium mb-5">Tambah Perangkat Desa</h3>`);
      _push(ssrRenderComponent(_component_v_form, { ref: "form" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-3"${_scopeId}><div class="col-span-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              modelValue: _ctx.form.name,
              "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "Nama Lembaga"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-1 my-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              modelValue: _ctx.form.surname,
              "onUpdate:modelValue": ($event) => _ctx.form.surname = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "Singkatan Lembaga"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-1 mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              modelValue: _ctx.form.address,
              "onUpdate:modelValue": ($event) => _ctx.form.address = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "Alamat Kantor"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><span class="font-medium text-xl"${_scopeId}>Gambar Lembaga</span></div>`);
            if (_ctx.form.image) {
              _push2(`<div class="relative w-fit mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_img, {
                src: _ctx.form.image,
                width: "300"
              }, null, _parent2, _scopeId));
              _push2(`<div class="absolute cursor-pointer right-3 top-3 z-50"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"${_scopeId}><defs${_scopeId}><mask id="ipSCloseOne0"${_scopeId}><g fill="none" stroke-linejoin="round" stroke-width="4"${_scopeId}><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"${_scopeId}></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"${_scopeId}></path></g></mask></defs><path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"${_scopeId}></path></svg></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="my-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              onClick: ($event) => _ctx.openMediaLibrary = true,
              color: "#10B981",
              class: "flex-none text-white px-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 20 20"${_scopeId2}><path fill="white" d="M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"${_scopeId2}></path></svg><div class="ml-1 font-semibold"${_scopeId2}>Media Library</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1.3em",
                        height: "1.3em",
                        viewBox: "0 0 20 20"
                      }, [
                        createVNode("path", {
                          fill: "white",
                          d: "M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"
                        })
                      ])),
                      createVNode("div", { class: "ml-1 font-semibold" }, "Media Library")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-3" }, [
                createVNode("div", { class: "col-span-1" }, [
                  createVNode(_component_v_text_field, {
                    rules: [(v) => !!v || "Field is required"],
                    modelValue: _ctx.form.name,
                    "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
                    variant: "outlined",
                    "hide-details": "auto",
                    label: "Nama Lembaga"
                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-1 my-3" }, [
                  createVNode(_component_v_text_field, {
                    rules: [(v) => !!v || "Field is required"],
                    modelValue: _ctx.form.surname,
                    "onUpdate:modelValue": ($event) => _ctx.form.surname = $event,
                    variant: "outlined",
                    "hide-details": "auto",
                    label: "Singkatan Lembaga"
                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-1 mb-3" }, [
                  createVNode(_component_v_text_field, {
                    rules: [(v) => !!v || "Field is required"],
                    modelValue: _ctx.form.address,
                    "onUpdate:modelValue": ($event) => _ctx.form.address = $event,
                    variant: "outlined",
                    "hide-details": "auto",
                    label: "Alamat Kantor"
                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-medium text-xl" }, "Gambar Lembaga")
                ]),
                _ctx.form.image ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "relative w-fit mt-4"
                }, [
                  createVNode(_component_v_img, {
                    src: _ctx.form.image,
                    width: "300"
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    onClick: ($event) => _ctx.form.image = null,
                    class: "absolute cursor-pointer right-3 top-3 z-50"
                  }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.5em",
                      height: "1.5em",
                      viewBox: "0 0 48 48"
                    }, [
                      createVNode("defs", null, [
                        createVNode("mask", { id: "ipSCloseOne0" }, [
                          createVNode("g", {
                            fill: "none",
                            "stroke-linejoin": "round",
                            "stroke-width": "4"
                          }, [
                            createVNode("path", {
                              fill: "#fff",
                              stroke: "#fff",
                              d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                            }),
                            createVNode("path", {
                              stroke: "#000",
                              "stroke-linecap": "round",
                              d: "M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"
                            })
                          ])
                        ])
                      ]),
                      createVNode("path", {
                        fill: "#10B981",
                        d: "M0 0h48v48H0z",
                        mask: "url(#ipSCloseOne0)"
                      })
                    ]))
                  ], 8, ["onClick"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "my-1" }, [
                  createVNode(_component_v_btn, {
                    onClick: ($event) => _ctx.openMediaLibrary = true,
                    color: "#10B981",
                    class: "flex-none text-white px-3"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1.3em",
                          height: "1.3em",
                          viewBox: "0 0 20 20"
                        }, [
                          createVNode("path", {
                            fill: "white",
                            d: "M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"
                          })
                        ])),
                        createVNode("div", { class: "ml-1 font-semibold" }, "Media Library")
                      ])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-5"><div class="mb-5"><span class="font-medium text-xl">Profil Lembaga</span></div>`);
      if (_ctx.renderRichEditor) {
        _push(ssrRenderComponent(_component_RichEditor, {
          data: _ctx.data,
          onContentChange: _ctx.contentChangeProfile
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-5"><div class="mb-5"><span class="font-medium text-xl">Visi &amp; Misi</span></div>`);
      if (_ctx.renderRichEditor) {
        _push(ssrRenderComponent(_component_RichEditor, {
          data: _ctx.data,
          onContentChange: _ctx.contentChangeVisi
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-5"><div class="mb-5"><span class="font-medium text-xl">Tugas</span></div>`);
      if (_ctx.renderRichEditor) {
        _push(ssrRenderComponent(_component_RichEditor, {
          data: _ctx.data,
          onContentChange: _ctx.contentChangeTugas
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: _ctx.addLembaga,
        color: "#10B981",
        class: "mt-5 text-white px-3 py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.loading) {
              _push2(`<span class="capitalize"${_scopeId}>Submit</span>`);
            } else {
              _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              !_ctx.loading ? (openBlock(), createBlock("span", {
                key: 0,
                class: "capitalize"
              }, "Submit")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Lembaga/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-ff2faec6.mjs.map
