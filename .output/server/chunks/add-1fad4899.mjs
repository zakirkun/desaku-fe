import { _ as __nuxt_component_0 } from './server-placeholder-da4405da.mjs';
import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { u as useHead, a as useToken } from './server.mjs';
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { c as createSlug } from './createSlug-702a15de.mjs';
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
      modalRemoveThumbnail: false,
      image: null,
      categories: [],
      renderRichEditor: false,
      thumbnailDeleted: false,
      thumbnailUploaded: false,
      data: null,
      form: {
        title: null,
        description: null,
        content: null,
        thumbnail: null
      },
      headers: [
        { title: "Title", align: "start", sortable: false, key: "title" },
        { title: "Content", align: "end", key: "content" }
      ],
      items: [],
      loading: false
    };
  },
  async mounted() {
    this.renderRichEditor = true;
  },
  methods: {
    async addAnnouncement() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      this.form.content = this.data;
      this.form.slug = createSlug(this.form.title);
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/announcement", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: this.form
      });
      this.loading = false;
      this.$router.push("/dashboard/announcement");
    },
    contentChange(v) {
      this.data = v;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Tambah Pengumuman"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_RichEditor = __nuxt_component_0;
      const _component_Loader = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: _ctx.modalRemoveThumbnail,
        "onUpdate:modelValue": ($event) => _ctx.modalRemoveThumbnail = $event,
        width: "auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              height: "auto",
              style: { "scrollbar-width": "none" }
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="text-xl font-semibold"${_scopeId2}><span${_scopeId2}>Hapus Thumbnail?</span></div><div class="cursor-pointer"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"${_scopeId2}><g fill="none" stroke="black" stroke-width="1.5"${_scopeId2}><circle cx="12" cy="12" r="10"${_scopeId2}></circle><path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"${_scopeId2}></path></g></svg></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-xl font-semibold" }, [
                        createVNode("span", null, "Hapus Thumbnail?")
                      ]),
                      createVNode("div", {
                        onClick: ($event) => _ctx.modalRemoveThumbnail = false,
                        class: "cursor-pointer"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "2em",
                          height: "2em",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("g", {
                            fill: "none",
                            stroke: "black",
                            "stroke-width": "1.5"
                          }, [
                            createVNode("circle", {
                              cx: "12",
                              cy: "12",
                              r: "10"
                            }),
                            createVNode("path", {
                              "stroke-linecap": "round",
                              d: "m14.5 9.5l-5 5m0-5l5 5"
                            })
                          ])
                        ]))
                      ], 8, ["onClick"])
                    ])
                  ];
                }
              }),
              text: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><span${_scopeId2}>Thumbnail akan dihapus dari server, apakah anda yakin untuk menghapusnya?</span></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("span", null, "Thumbnail akan dihapus dari server, apakah anda yakin untuk menghapusnya?")
                    ])
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    onClick: _ctx.removeThumbnailNews,
                    color: "#FC4100",
                    class: "mt-3 text-white px-3 py-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="capitalize"${_scopeId3}>Hapus</span>`);
                      } else {
                        return [
                          createVNode("span", { class: "capitalize" }, "Hapus")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full flex justify-end" }, [
                      createVNode(_component_v_btn, {
                        onClick: _ctx.removeThumbnailNews,
                        color: "#FC4100",
                        class: "mt-3 text-white px-3 py-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "capitalize" }, "Hapus")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, {
                height: "auto",
                style: { "scrollbar-width": "none" }
              }, {
                title: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-xl font-semibold" }, [
                      createVNode("span", null, "Hapus Thumbnail?")
                    ]),
                    createVNode("div", {
                      onClick: ($event) => _ctx.modalRemoveThumbnail = false,
                      class: "cursor-pointer"
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "2em",
                        height: "2em",
                        viewBox: "0 0 24 24"
                      }, [
                        createVNode("g", {
                          fill: "none",
                          stroke: "black",
                          "stroke-width": "1.5"
                        }, [
                          createVNode("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                          }),
                          createVNode("path", {
                            "stroke-linecap": "round",
                            d: "m14.5 9.5l-5 5m0-5l5 5"
                          })
                        ])
                      ]))
                    ], 8, ["onClick"])
                  ])
                ]),
                text: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("span", null, "Thumbnail akan dihapus dari server, apakah anda yakin untuk menghapusnya?")
                  ])
                ]),
                actions: withCtx(() => [
                  createVNode("div", { class: "w-full flex justify-end" }, [
                    createVNode(_component_v_btn, {
                      onClick: _ctx.removeThumbnailNews,
                      color: "#FC4100",
                      class: "mt-3 text-white px-3 py-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "capitalize" }, "Hapus")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid animate-fade"><div class="col-12"><div class="card"><h3 class="text-2xl font-medium mb-5">Tambah Pengumuman</h3>`);
      _push(ssrRenderComponent(_component_v_form, { ref: "form" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-3"${_scopeId}><div class="col-span-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              modelValue: _ctx.form.title,
              "onUpdate:modelValue": ($event) => _ctx.form.title = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "Judul Pengumuman"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_textarea, {
              rules: [(v) => !!v || "Field is required"],
              rows: "3",
              variant: "outlined",
              label: "Deskripsi Pengumuman",
              clearable: "",
              modelValue: _ctx.form.description,
              "onUpdate:modelValue": ($event) => _ctx.form.description = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 gap-3" }, [
                createVNode("div", { class: "col-span-1" }, [
                  createVNode(_component_v_text_field, {
                    rules: [(v) => !!v || "Field is required"],
                    modelValue: _ctx.form.title,
                    "onUpdate:modelValue": ($event) => _ctx.form.title = $event,
                    variant: "outlined",
                    "hide-details": "auto",
                    label: "Judul Pengumuman"
                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "mt-3" }, [
                  createVNode(_component_v_textarea, {
                    rules: [(v) => !!v || "Field is required"],
                    rows: "3",
                    variant: "outlined",
                    label: "Deskripsi Pengumuman",
                    clearable: "",
                    modelValue: _ctx.form.description,
                    "onUpdate:modelValue": ($event) => _ctx.form.description = $event
                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mb-3 text-lg font-medium my-1">Konten</div>`);
      if (_ctx.renderRichEditor) {
        _push(ssrRenderComponent(_component_RichEditor, {
          data: _ctx.data,
          onContentChange: _ctx.contentChange
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: _ctx.addAnnouncement,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Announcement/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-1fad4899.mjs.map
