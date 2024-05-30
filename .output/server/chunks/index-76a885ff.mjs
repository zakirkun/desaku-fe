import { _ as __nuxt_component_0 } from './nuxt-link-0d39ff03.mjs';
import { u as useHead, e as useParseJWT, a as useToken } from './server.mjs';
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, createTextVNode, unref, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
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
      modalRemoveNews: false,
      modalRemoveNewsCategory: false,
      removedNewsId: null,
      data: null,
      renderRichEditor: false,
      form: {
        title: null,
        category: null,
        content: null
      },
      headers: [
        { title: "Title", align: "start", sortable: false, key: "title", width: "250" },
        { title: "Category", align: "start", key: "name" },
        { title: "Description", align: "end", key: "description" },
        { title: "Thumbnail", align: "end", key: "thumbnail" },
        { title: "Created By", align: "start", key: "created_by", width: "150" },
        { title: "Actions", align: "center", key: "actions", sortable: false }
      ],
      headersCategory: [
        { title: "Category Name", align: "start", sortable: false, key: "name", width: "200px" },
        { title: "Actions", align: "end", key: "actions", sortable: false }
      ],
      items: [],
      itemsCategory: [],
      loadingData: false
    };
  },
  async mounted() {
    await this.loadData();
    await this.loadNewsCategory();
  },
  methods: {
    async loadData() {
      this.loadingData = true;
      const { data } = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/news", {
        headers: {
          Authorization: "Bearer " + useToken().token
        }
      });
      this.items = data;
      this.renderRichEditor = true;
      this.loadingData = false;
    },
    async loadNewsCategory() {
      const data = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/news-category");
      this.itemsCategory = data;
    },
    async addNews() {
      this.form.content = this.data;
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/news", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: this.form
      });
    },
    contentChange(v) {
      this.data = v;
    },
    openModalRemoveNews(id) {
      this.modalRemoveNews = true;
      this.removedNewsId = id;
    },
    openModalRemoveNewsCategory(id) {
      this.modalRemoveNewsCategory = true;
      this.removedNewsCategoryId = id;
    },
    async removeNews() {
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/news/" + this.removedNewsId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + useToken().token
        }
      });
      this.modalRemoveNews = false;
      await this.loadData();
    },
    async removeNewsCategory() {
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/news-category/" + this.removedNewsCategoryId, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + useToken().token
        }
      });
      this.modalRemoveNewsCategory = false;
      await this.loadNewsCategory();
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Berita"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_v_data_table = resolveComponent("v-data-table");
      const _component_v_img = resolveComponent("v-img");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: _ctx.modalRemoveNews,
        "onUpdate:modelValue": ($event) => _ctx.modalRemoveNews = $event,
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
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="text-xl font-semibold"${_scopeId2}><span${_scopeId2}>Hapus Berita?</span></div><div class="cursor-pointer"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"${_scopeId2}><g fill="none" stroke="black" stroke-width="1.5"${_scopeId2}><circle cx="12" cy="12" r="10"${_scopeId2}></circle><path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"${_scopeId2}></path></g></svg></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-xl font-semibold" }, [
                        createVNode("span", null, "Hapus Berita?")
                      ]),
                      createVNode("div", {
                        onClick: ($event) => _ctx.modalRemoveNews = false,
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
                  _push3(`<div${_scopeId2}><span${_scopeId2}>Berita yang dihapus tidak bisa dikembalikan kembali.</span></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("span", null, "Berita yang dihapus tidak bisa dikembalikan kembali.")
                    ])
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    onClick: _ctx.removeNews,
                    variant: "flat",
                    color: "#FC4100",
                    class: "mt-6 text-white px-3 py-2 text-md"
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
                        onClick: _ctx.removeNews,
                        variant: "flat",
                        color: "#FC4100",
                        class: "mt-6 text-white px-3 py-2 text-md"
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
                      createVNode("span", null, "Hapus Berita?")
                    ]),
                    createVNode("div", {
                      onClick: ($event) => _ctx.modalRemoveNews = false,
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
                    createVNode("span", null, "Berita yang dihapus tidak bisa dikembalikan kembali.")
                  ])
                ]),
                actions: withCtx(() => [
                  createVNode("div", { class: "w-full flex justify-end" }, [
                    createVNode(_component_v_btn, {
                      onClick: _ctx.removeNews,
                      variant: "flat",
                      color: "#FC4100",
                      class: "mt-6 text-white px-3 py-2 text-md"
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
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: _ctx.modalRemoveNewsCategory,
        "onUpdate:modelValue": ($event) => _ctx.modalRemoveNewsCategory = $event,
        width: "auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              height: "auto",
              style: { "scrollbar-width": "none" },
              class: "pa-4 px-4"
            }, {
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    onClick: _ctx.removeNewsCategory,
                    variant: "flat",
                    color: "#FC4100",
                    class: "mt-6 text-white px-3 py-2 text-md"
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
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      onClick: _ctx.removeNewsCategory,
                      variant: "flat",
                      color: "#FC4100",
                      class: "mt-6 text-white px-3 py-2 text-md"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "capitalize" }, "Hapus")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="text-xl font-semibold"${_scopeId2}><span${_scopeId2}>Hapus Kategori Berita?</span></div><div class="cursor-pointer"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"${_scopeId2}><g fill="none" stroke="black" stroke-width="1.5"${_scopeId2}><circle cx="12" cy="12" r="10"${_scopeId2}></circle><path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5"${_scopeId2}></path></g></svg></div></div><div class="mt-3"${_scopeId2}><span${_scopeId2}>Kategori Berita yang dihapus tidak bisa dikembalikan kembali.</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-xl font-semibold" }, [
                        createVNode("span", null, "Hapus Kategori Berita?")
                      ]),
                      createVNode("div", {
                        onClick: ($event) => _ctx.modalRemoveNewsCategory = false,
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
                    ]),
                    createVNode("div", { class: "mt-3" }, [
                      createVNode("span", null, "Kategori Berita yang dihapus tidak bisa dikembalikan kembali.")
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
                style: { "scrollbar-width": "none" },
                class: "pa-4 px-4"
              }, {
                actions: withCtx(() => [
                  createVNode(_component_v_btn, {
                    onClick: _ctx.removeNewsCategory,
                    variant: "flat",
                    color: "#FC4100",
                    class: "mt-6 text-white px-3 py-2 text-md"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "capitalize" }, "Hapus")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-xl font-semibold" }, [
                      createVNode("span", null, "Hapus Kategori Berita?")
                    ]),
                    createVNode("div", {
                      onClick: ($event) => _ctx.modalRemoveNewsCategory = false,
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
                  ]),
                  createVNode("div", { class: "mt-3" }, [
                    createVNode("span", null, "Kategori Berita yang dihapus tidak bisa dikembalikan kembali.")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-between items-center mb-3"><div class="text-2xl font-semibold mb-2">Berita</div><div class="text-md font-semibold mb-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard/news/add" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "#10B981",
              class: "mt-3 text-white px-3 py-2 text-md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="capitalize"${_scopeId2}>Tambah Berita +</span>`);
                } else {
                  return [
                    createVNode("span", { class: "capitalize" }, "Tambah Berita +")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, {
                color: "#10B981",
                class: "mt-3 text-white px-3 py-2 text-md"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "capitalize" }, "Tambah Berita +")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid animate-fade mb-6"><div class="col-12"><div class="card">`);
      _push(ssrRenderComponent(_component_v_data_table, {
        "items-per-page": "-1",
        loading: _ctx.loadingData,
        headers: _ctx.headers,
        items: _ctx.items,
        "item-key": "name"
      }, {
        bottom: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        "item.description": withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${value.slice(0, 60)}</span>... `);
          } else {
            return [
              createVNode("span", {
                innerHTML: value.slice(0, 60)
              }, null, 8, ["innerHTML"]),
              createTextVNode("... ")
            ];
          }
        }),
        "item.thumbnail": withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_img, {
              "lazy-src": value,
              src: value,
              width: "100",
              height: "100"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_img, {
                "lazy-src": value,
                src: value,
                width: "100",
                height: "100"
              }, null, 8, ["lazy-src", "src"])
            ];
          }
        }),
        "item.actions": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end"${_scopeId}><a${ssrRenderAttr("href", `/berita/${item.slug}`)} target="_blank" class="cursor-pointer"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId}><path fill="#212121" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"${_scopeId}></path></svg></a> ${ssrInterpolate()} `);
            if (("useParseJWT" in _ctx ? _ctx.useParseJWT : unref(useParseJWT))().value.is_admin == 1 || ("useParseJWT" in _ctx ? _ctx.useParseJWT : unref(useParseJWT))().value.user == item.user_id) {
              _push2(`<div class="cursor-pointer mx-1"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId}><path fill="#212121" fill-rule="evenodd" d="M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98" clip-rule="evenodd"${_scopeId}></path></svg></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (("useParseJWT" in _ctx ? _ctx.useParseJWT : unref(useParseJWT))().value.is_admin == 1 || ("useParseJWT" in _ctx ? _ctx.useParseJWT : unref(useParseJWT))().value.user == item.user_id) {
              _push2(`<div class="cursor-pointer"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId}><path fill="#212121" d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"${_scopeId}></path></svg></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end" }, [
                createVNode("a", {
                  href: `/berita/${item.slug}`,
                  target: "_blank",
                  class: "cursor-pointer"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1.5em",
                    height: "1.5em",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "#212121",
                      d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                    })
                  ]))
                ], 8, ["href"]),
                createTextVNode(" " + toDisplayString() + " ", 1),
                ("useParseJWT" in _ctx ? _ctx.useParseJWT : unref(useParseJWT))().value.is_admin == 1 || ("useParseJWT" in _ctx ? _ctx.useParseJWT : unref(useParseJWT))().value.user == item.user_id ? (openBlock(), createBlock("div", {
                  key: 0,
                  onClick: ($event) => _ctx.$router.push("/dashboard/news/edit?id=" + item.uuid),
                  class: "cursor-pointer mx-1"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1.5em",
                    height: "1.5em",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "#212121",
                      "fill-rule": "evenodd",
                      d: "M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ], 8, ["onClick"])) : createCommentVNode("", true),
                ("useParseJWT" in _ctx ? _ctx.useParseJWT : unref(useParseJWT))().value.is_admin == 1 || ("useParseJWT" in _ctx ? _ctx.useParseJWT : unref(useParseJWT))().value.user == item.user_id ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "cursor-pointer",
                  onClick: ($event) => _ctx.openModalRemoveNews(item.uuid)
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1.5em",
                    height: "1.5em",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "#212121",
                      d: "M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"
                    })
                  ]))
                ], 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex justify-between items-center mb-3"><div class="text-2xl font-semibold mb-2">Kategori Berita</div><div class="text-md font-semibold mb-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard/news/category/add" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "#10B981",
              class: "mt-3 text-white px-3 py-2 text-md"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="capitalize"${_scopeId2}>Tambah Kategori +</span>`);
                } else {
                  return [
                    createVNode("span", { class: "capitalize" }, "Tambah Kategori +")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, {
                color: "#10B981",
                class: "mt-3 text-white px-3 py-2 text-md"
              }, {
                default: withCtx(() => [
                  createVNode("span", { class: "capitalize" }, "Tambah Kategori +")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid animate-fade mb-6"><div class="col-12"><div class="card">`);
      _push(ssrRenderComponent(_component_v_data_table, {
        "items-per-page": "-1",
        headers: _ctx.headersCategory,
        items: _ctx.itemsCategory,
        "item-key": "name"
      }, {
        bottom: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        "item.content": withCtx(({ value }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${value.slice(0, 100)}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: value.slice(0, 100)
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        "item.actions": withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex float-right"${_scopeId}><div class="cursor-pointer mx-1"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId}><path fill="#212121" fill-rule="evenodd" d="M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98" clip-rule="evenodd"${_scopeId}></path></svg></div><div class="cursor-pointer"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId}><path fill="#212121" d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"${_scopeId}></path></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex float-right" }, [
                createVNode("div", {
                  onClick: ($event) => _ctx.$router.push("/dashboard/news/category/edit?id=" + item.uuid),
                  class: "cursor-pointer mx-1"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1.5em",
                    height: "1.5em",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "#212121",
                      "fill-rule": "evenodd",
                      d: "M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ], 8, ["onClick"]),
                createVNode("div", {
                  class: "cursor-pointer",
                  onClick: ($event) => _ctx.openModalRemoveNewsCategory(item.uuid)
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1.5em",
                    height: "1.5em",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "#212121",
                      d: "M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z"
                    })
                  ]))
                ], 8, ["onClick"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/News/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-76a885ff.mjs.map
