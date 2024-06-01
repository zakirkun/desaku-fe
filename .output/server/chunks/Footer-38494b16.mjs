import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { u as useHead, a as useToken } from './server.mjs';
import { resolveComponent, withCtx, openBlock, createBlock, createVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
      form: {
        profile_desa: null,
        address: null,
        copyright: null
      },
      formSocialMedia: [
        {
          name: "Instagram",
          link: null
        }
      ],
      social_media: ["Instagram", "Facebook", "Whatsapp", "Twitter", "Youtube"],
      loading: false
    };
  },
  async mounted() {
    await this.loadData();
    await this.loadSocialMedia();
  },
  methods: {
    async loadData() {
      const data = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/footer");
      this.form = data;
    },
    async loadSocialMedia() {
      const data = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/social-media");
      this.formSocialMedia = data;
    },
    async updateFooter() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      await this.updateSocialMedia();
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/footer", {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: this.form
      });
      this.loading = false;
    },
    async updateSocialMedia() {
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/social-media", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: {
          social_media: this.formSocialMedia
        }
      });
    },
    addSocialMedia() {
      this.formSocialMedia.push({
        name: null,
        link: null
      });
    },
    removeSocialMedia(index) {
      this.formSocialMedia = this.formSocialMedia.filter((v, i) => {
        return i != index;
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Pengaturan Footer"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_Loader = __nuxt_component_1;
      _push(`<!--[--><div class="flex justify-between items-center mb-3"><div class="text-2xl font-semibold mb-2">Pengaturan Footer</div></div><div class="grid animate-fade mb-6"><div class="col-12"><div class="card">`);
      _push(ssrRenderComponent(_component_v_form, { ref: "form" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_textarea, {
              rules: [(v) => !!v || "Field is required"],
              rows: "3",
              variant: "outlined",
              label: "Profil Desa",
              clearable: "",
              modelValue: _ctx.form.profile,
              "onUpdate:modelValue": ($event) => _ctx.form.profile = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_textarea, {
              rules: [(v) => !!v || "Field is required"],
              rows: "2",
              variant: "outlined",
              label: "Alamat Lengkap",
              clearable: "",
              modelValue: _ctx.form.address,
              "onUpdate:modelValue": ($event) => _ctx.form.address = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_textarea, {
              rules: [(v) => !!v || "Field is required"],
              rows: "2",
              variant: "outlined",
              label: "Copyright",
              clearable: "",
              modelValue: _ctx.form.copyright,
              "onUpdate:modelValue": ($event) => _ctx.form.copyright = $event
            }, null, _parent2, _scopeId));
            _push2(`<div class="mb-5 text-lg font-medium my-1"${_scopeId}>Sosial Media</div><div class="block"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.formSocialMedia, (sosmed, index) => {
              _push2(`<div class="mb-6 flex w-full"${_scopeId}><div class="w-1/3 flex-none"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_select, {
                items: _ctx.social_media,
                rules: [(v) => !!v || "Field is required"],
                modelValue: sosmed.name,
                "onUpdate:modelValue": ($event) => sosmed.name = $event,
                variant: "outlined",
                "hide-details": "auto",
                label: "Nama Sosial Media"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_v_text_field, {
                rules: [(v) => !!v || "Field is required"],
                class: "mx-3",
                modelValue: sosmed.link,
                "onUpdate:modelValue": ($event) => sosmed.link = $event,
                variant: "outlined",
                "hide-details": "auto",
                label: "Link"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex-none flex pt-3"${_scopeId}>`);
              if (index == _ctx.formSocialMedia.length - 1) {
                _push2(ssrRenderComponent(_component_v_btn, {
                  onClick: ($event) => _ctx.addSocialMedia(),
                  color: "#10B981",
                  style: { "height": "40px !important", "width": "20px !important", "padding": "0 0px !important" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"${_scopeId2}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1.8em",
                          height: "1.8em",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M12 5v14m-7-7h14"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_v_btn, {
                  onClick: ($event) => _ctx.removeSocialMedia(index),
                  color: "#FC4100",
                  style: { "height": "40px !important", "width": "20px !important", "padding": "0 0px !important" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"${_scopeId2}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1.7em",
                          height: "1.7em",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(_component_v_textarea, {
                rules: [(v) => !!v || "Field is required"],
                rows: "3",
                variant: "outlined",
                label: "Profil Desa",
                clearable: "",
                modelValue: _ctx.form.profile,
                "onUpdate:modelValue": ($event) => _ctx.form.profile = $event
              }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_textarea, {
                rules: [(v) => !!v || "Field is required"],
                rows: "2",
                variant: "outlined",
                label: "Alamat Lengkap",
                clearable: "",
                modelValue: _ctx.form.address,
                "onUpdate:modelValue": ($event) => _ctx.form.address = $event
              }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_textarea, {
                rules: [(v) => !!v || "Field is required"],
                rows: "2",
                variant: "outlined",
                label: "Copyright",
                clearable: "",
                modelValue: _ctx.form.copyright,
                "onUpdate:modelValue": ($event) => _ctx.form.copyright = $event
              }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "mb-5 text-lg font-medium my-1" }, "Sosial Media"),
              createVNode("div", { class: "block" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.formSocialMedia, (sosmed, index) => {
                  return openBlock(), createBlock("div", { class: "mb-6 flex w-full" }, [
                    createVNode("div", { class: "w-1/3 flex-none" }, [
                      createVNode(_component_v_select, {
                        items: _ctx.social_media,
                        rules: [(v) => !!v || "Field is required"],
                        modelValue: sosmed.name,
                        "onUpdate:modelValue": ($event) => sosmed.name = $event,
                        variant: "outlined",
                        "hide-details": "auto",
                        label: "Nama Sosial Media"
                      }, null, 8, ["items", "rules", "modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_v_text_field, {
                      rules: [(v) => !!v || "Field is required"],
                      class: "mx-3",
                      modelValue: sosmed.link,
                      "onUpdate:modelValue": ($event) => sosmed.link = $event,
                      variant: "outlined",
                      "hide-details": "auto",
                      label: "Link"
                    }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex-none flex pt-3" }, [
                      index == _ctx.formSocialMedia.length - 1 ? (openBlock(), createBlock(_component_v_btn, {
                        key: 0,
                        onClick: ($event) => _ctx.addSocialMedia(),
                        color: "#10B981",
                        style: { "height": "40px !important", "width": "20px !important", "padding": "0 0px !important" }
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1.8em",
                            height: "1.8em",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M12 5v14m-7-7h14"
                            })
                          ]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : (openBlock(), createBlock(_component_v_btn, {
                        key: 1,
                        onClick: ($event) => _ctx.removeSocialMedia(index),
                        color: "#FC4100",
                        style: { "height": "40px !important", "width": "20px !important", "padding": "0 0px !important" }
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1.7em",
                            height: "1.7em",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                            })
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["onClick"]))
                    ])
                  ]);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: _ctx.updateFooter,
        color: "#10B981",
        class: "mt-1 text-white px-3 py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.loading) {
              _push2(`<span class="capitalize"${_scopeId}>Update</span>`);
            } else {
              _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              !_ctx.loading ? (openBlock(), createBlock("span", {
                key: 0,
                class: "capitalize"
              }, "Update")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Setting/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Footer-38494b16.mjs.map
