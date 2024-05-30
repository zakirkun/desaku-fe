import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { u as useHead, a as useToken } from './server.mjs';
import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
      data: null,
      form: {
        name: null,
        email: null,
        password: null
      },
      showPassword: false,
      loading: false
    };
  },
  methods: {
    async addAdmin() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/admin", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: this.form
      });
      this.loading = false;
      this.$router.push("/dashboard/admin");
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
      title: "Tambah Admin"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_Loader = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid animate-fade" }, _attrs))}><div class="col-12"><div class="card"><h3 class="text-2xl font-medium mb-5">Tambah Admin</h3>`);
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
              label: "Nama"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 mt-5 gap-3"${_scopeId}><div class="col-span-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required", (v) => /.+@.+/.test(v) || "Invalid Email address"],
              modelValue: _ctx.form.email,
              "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "Email"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              type: _ctx.showPassword ? "text" : "password",
              modelValue: _ctx.form.password,
              "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
              class: "mt-5",
              dense: "",
              variant: "outlined",
              "hide-details": "auto",
              label: "Kata Sandi"
            }, {
              "append-inner": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!_ctx.showPassword) {
                    _push3(`<svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId2}><path fill="black" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"${_scopeId2}></path></svg>`);
                  } else {
                    _push3(`<svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId2}><path fill="black" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"${_scopeId2}></path></svg>`);
                  }
                } else {
                  return [
                    !_ctx.showPassword ? (openBlock(), createBlock("svg", {
                      key: 0,
                      class: "cursor-pointer",
                      onClick: ($event) => _ctx.showPassword = true,
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.5em",
                      height: "1.5em",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "black",
                        d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                      })
                    ], 8, ["onClick"])) : (openBlock(), createBlock("svg", {
                      key: 1,
                      class: "cursor-pointer",
                      onClick: ($event) => _ctx.showPassword = false,
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.5em",
                      height: "1.5em",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        fill: "black",
                        d: "M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
                      })
                    ], 8, ["onClick"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
                    label: "Nama"
                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-1 mt-5 gap-3" }, [
                createVNode("div", { class: "col-span-1" }, [
                  createVNode(_component_v_text_field, {
                    rules: [(v) => !!v || "Field is required", (v) => /.+@.+/.test(v) || "Invalid Email address"],
                    modelValue: _ctx.form.email,
                    "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                    variant: "outlined",
                    "hide-details": "auto",
                    label: "Email"
                  }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode(_component_v_text_field, {
                type: _ctx.showPassword ? "text" : "password",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                class: "mt-5",
                dense: "",
                variant: "outlined",
                "hide-details": "auto",
                label: "Kata Sandi"
              }, {
                "append-inner": withCtx(() => [
                  !_ctx.showPassword ? (openBlock(), createBlock("svg", {
                    key: 0,
                    class: "cursor-pointer",
                    onClick: ($event) => _ctx.showPassword = true,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1.5em",
                    height: "1.5em",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "black",
                      d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                    })
                  ], 8, ["onClick"])) : (openBlock(), createBlock("svg", {
                    key: 1,
                    class: "cursor-pointer",
                    onClick: ($event) => _ctx.showPassword = false,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "1.5em",
                    height: "1.5em",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      fill: "black",
                      d: "M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
                    })
                  ], 8, ["onClick"]))
                ]),
                _: 1
              }, 8, ["type", "modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: _ctx.addAdmin,
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
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Admin/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-5704c644.mjs.map
