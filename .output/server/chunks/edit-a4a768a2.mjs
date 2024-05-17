import script from './button.esm-b6fde1a6.mjs';
import { _ as __nuxt_component_0 } from './server-placeholder-da4405da.mjs';
import { _ as __nuxt_component_1 } from './Loader-17ea2c2e.mjs';
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { i as useHead } from './server.mjs';
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
      renderRichEditor: false,
      thumbnailDeleted: false,
      loading: false,
      form: {
        title: null,
        category: null,
        description: null,
        content: null,
        thumbnail: ""
      }
    };
  },
  async mounted() {
    const data = await $fetch("http://api.desaku.muhichsan.com/api/announcement/" + this.$route.query.id);
    this.form = data;
    this.data = data.content;
    this.renderRichEditor = true;
  },
  methods: {
    async updateAnnouncement() {
      this.loading = true;
      if (this.thumbnailDeleted) {
        let urlImage = await this.uploadThumbnail();
        this.form.thumbnail = urlImage;
      }
      this.form.content = this.data;
      await $fetch("http://api.desaku.muhichsan.com/api/announcement/" + this.$route.query.id, {
        method: "PATCH",
        body: this.form
      });
      this.loading = false;
      this.$router.push("/dashboard/announcement");
    },
    contentChange(v) {
      this.data = v;
    },
    async uploadThumbnail() {
      const formData = new FormData();
      formData.append("image", this.form.thumbnail);
      const resp = await $fetch("http://api.desaku.muhichsan.com/api/image", {
        body: formData,
        method: "POST"
      });
      return resp.data;
    },
    async removeThumbnailNews() {
      let thumbnail = this.form.thumbnail.replace("http://api.desaku.muhichsan.com/storage/", "");
      await $fetch("http://api.desaku.muhichsan.com/api/image/" + thumbnail, {
        method: "DELETE"
      });
      this.thumbnailDeleted = true;
      this.modalRemoveThumbnail = false;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Edit Announcement"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_Button = script;
      const _component_v_text_field = resolveComponent("v-text-field");
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
      _push(`<div class="grid"><div class="col-12"><div class="card"><h3 class="text-2xl font-medium mb-5">Ubah Pengumuman</h3><div class="mb-8">`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.title,
        "onUpdate:modelValue": ($event) => _ctx.form.title = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Judul Pengumuman"
      }, null, _parent));
      _push(`</div><div class="mb-8">`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.description,
        "onUpdate:modelValue": ($event) => _ctx.form.description = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Deksripsi Pengumuman"
      }, null, _parent));
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
        onClick: _ctx.updateAnnouncement,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Announcement/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-a4a768a2.mjs.map
