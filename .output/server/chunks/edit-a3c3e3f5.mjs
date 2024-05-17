import { _ as __nuxt_component_0 } from './MediaLibrary-6fcd5121.mjs';
import script from './button.esm-b6fde1a6.mjs';
import { _ as __nuxt_component_0$1 } from './server-placeholder-da4405da.mjs';
import { _ as __nuxt_component_1 } from './Loader-17ea2c2e.mjs';
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { i as useHead } from './server.mjs';
import 'file-selector';
import 'attr-accept';
import './badge.esm-9b923ea6.mjs';
import './basecomponent.esm-75555909.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import './index.esm-7cc890d4.mjs';
import './baseicon.esm-961b188b.mjs';

const __default__ = {
  data() {
    return {
      modalRemoveThumbnail: false,
      data: null,
      image: null,
      loading: null,
      categories: [],
      renderRichEditor: false,
      thumbnailDeleted: false,
      form: {
        title: null,
        category: null,
        content: null,
        thumbnail: ""
      },
      openMediaLibrary: false
    };
  },
  async mounted() {
    await this.loadCategories();
    const data = await $fetch("http://api.desaku.muhichsan.com/api/news/" + this.$route.query.id);
    this.form = data;
    this.data = data.content;
    this.renderRichEditor = true;
  },
  methods: {
    async loadCategories() {
      const data = await $fetch("http://api.desaku.muhichsan.com/api/news-category/");
      this.categories = data.map((v) => v.name);
    },
    async updateNews() {
      this.loading = true;
      this.form.content = this.data;
      await $fetch("http://api.desaku.muhichsan.com/api/news/" + this.$route.query.id, {
        method: "PATCH",
        body: this.form
      });
      this.loading = false;
      this.$router.push("/dashboard/news");
    },
    contentChange(v) {
      this.data = v;
    },
    onImageSelected(val) {
      this.form.thumbnail = val;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Edit Berita"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MediaLibrary = __nuxt_component_0;
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_Button = script;
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
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
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: _ctx.removeThumbnailNews,
                    class: "w-fit mt-6 bg-[#FC4100] text-white px-3 mx-1 mb-2 py-2 text-md",
                    label: "Hapus"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full flex justify-end" }, [
                      createVNode(_component_Button, {
                        onClick: _ctx.removeThumbnailNews,
                        class: "w-fit mt-6 bg-[#FC4100] text-white px-3 mx-1 mb-2 py-2 text-md",
                        label: "Hapus"
                      }, null, 8, ["onClick"])
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
                    createVNode(_component_Button, {
                      onClick: _ctx.removeThumbnailNews,
                      class: "w-fit mt-6 bg-[#FC4100] text-white px-3 mx-1 mb-2 py-2 text-md",
                      label: "Hapus"
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid"><div class="col-12"><div class="card"><h3 class="text-2xl font-medium mb-5">Ubah Berita</h3><div class="mb-8">`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.title,
        "onUpdate:modelValue": ($event) => _ctx.form.title = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Judul Berita"
      }, null, _parent));
      _push(`</div><div class="mb-2">`);
      _push(ssrRenderComponent(_component_v_select, {
        "item-value": "name",
        "item-text": "name",
        modelValue: _ctx.form.category,
        "onUpdate:modelValue": ($event) => _ctx.form.category = $event,
        label: "Kategori Berita",
        items: _ctx.categories,
        variant: "outlined"
      }, null, _parent));
      _push(`</div><div class="mb-3 text-lg font-medium my-1">Thumbnail Berita</div>`);
      if (_ctx.form.thumbnail) {
        _push(`<div class="relative w-fit">`);
        _push(ssrRenderComponent(_component_v_img, {
          src: _ctx.form.thumbnail,
          width: "300"
        }, null, _parent));
        _push(`<div class="absolute cursor-pointer right-3 top-3 z-50"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"></path></g></mask></defs><path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"></path></svg></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-6 mt-6">`);
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: ($event) => _ctx.openMediaLibrary = true,
        color: "#10B981",
        class: "flex-none text-white px-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 20 20"${_scopeId}><path fill="white" d="M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"${_scopeId}></path></svg><div class="ml-1 font-semibold"${_scopeId}>Media Library</div></div>`);
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
      }, _parent));
      _push(`</div><div class="mb-3 text-lg font-medium my-1">Konten</div>`);
      if (_ctx.renderRichEditor) {
        _push(ssrRenderComponent(_component_RichEditor, {
          data: _ctx.data,
          onContentChange: _ctx.contentChange
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Button, {
        onClick: _ctx.updateNews,
        class: "mt-5 bg-[#10B981] text-white px-3 py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.loading) {
              _push2(`<span${_scopeId}>Ubah</span>`);
            } else {
              _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              !_ctx.loading ? (openBlock(), createBlock("span", { key: 0 }, "Ubah")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/News/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-a3c3e3f5.mjs.map
