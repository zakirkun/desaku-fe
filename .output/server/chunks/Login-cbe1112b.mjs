import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead, a as useToken } from './server.mjs';
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
      loading: false,
      showPassword: false,
      form: {
        email: null,
        password: null
      },
      toastUnauthorized: false
    };
  },
  mounted() {
    document.addEventListener("keydown", async (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        await this.login();
      }
    });
  },
  methods: {
    async login() {
      this.loading = true;
      this.form.content = this.data;
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        try {
          const resp = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/auth/login", {
            method: "POST",
            body: this.form
          });
          useToken().token = resp.token;
          location.href = "/dashboard/news";
        } catch (err) {
          this.toastUnauthorized = true;
        }
      }
      this.loading = false;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Login - Desaku"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_snackbar = resolveComponent("v-snackbar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_Loader = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_snackbar, {
        modelValue: _ctx.toastUnauthorized,
        "onUpdate:modelValue": ($event) => _ctx.toastUnauthorized = $event,
        color: "red",
        timeout: 3e3
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "white",
              variant: "text",
              onClick: ($event) => _ctx.toastUnauthorized = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tutup `);
                } else {
                  return [
                    createTextVNode(" Tutup ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, {
                color: "white",
                variant: "text",
                onClick: ($event) => _ctx.toastUnauthorized = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Tutup ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` User tidak ditemukan! `);
          } else {
            return [
              createTextVNode(" User tidak ditemukan! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-[#F8FAFC] flex items-center justify-center min-h-screen min-w-screen overflow-hidden" data-v-03140a18><div class="w-[85%] md:w-[400px] flex flex-column align-items-center justify-center" data-v-03140a18><img class="cursor-pointer w-[100px] mb-6 mx-auto" src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png" alt="App logo" data-v-03140a18><div class="bg-white px-8" style="${ssrRenderStyle({ "border-radius": "36px", "padding": "0.3rem", "background": "linear-gradient(180deg, #0088CC 10%, rgba(33, 150, 243, 0) 30%)" })}" data-v-03140a18><div class="w-full surface-card py-8 px-5 sm:px-8" style="${ssrRenderStyle({ "border-radius": "53px" })}" data-v-03140a18><div class="text-center mb-5 text-white" data-v-03140a18><div class="text-900 text-2xl font-medium mb-3" data-v-03140a18>Welcome Back!</div><span class="text-600 font-medium" data-v-03140a18>Sign in to continue</span></div>`);
      _push(ssrRenderComponent(_component_v_form, { ref: "form" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mt-12" data-v-03140a18${_scopeId}><label for="password1" class="block text-900 font-medium text-lg mb-4" data-v-03140a18${_scopeId}>Email</label>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              type: "email",
              modelValue: _ctx.form.email,
              "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
              dense: "",
              variant: "outlined",
              "hide-details": "auto",
              label: "Alamat Email"
            }, null, _parent2, _scopeId));
            _push2(`<label for="password1" class="block text-900 font-medium text-lg my-4" data-v-03140a18${_scopeId}>Password</label>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              type: _ctx.showPassword ? "text" : "password",
              modelValue: _ctx.form.password,
              "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
              dense: "",
              variant: "outlined",
              "hide-details": "auto",
              label: "Kata Sandi"
            }, {
              "append-inner": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!_ctx.showPassword) {
                    _push3(`<svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" data-v-03140a18${_scopeId2}><path fill="black" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" data-v-03140a18${_scopeId2}></path></svg>`);
                  } else {
                    _push3(`<svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" data-v-03140a18${_scopeId2}><path fill="black" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7" data-v-03140a18${_scopeId2}></path></svg>`);
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
            _push2(ssrRenderComponent(_component_v_btn, {
              elevation: "0",
              onClick: _ctx.login,
              color: "#0088CC",
              "text-color": "white",
              class: "w-full mt-8 text-white px-3 py-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!_ctx.loading) {
                    _push3(`<span data-v-03140a18${_scopeId2}>Login</span>`);
                  } else {
                    _push3(ssrRenderComponent(_component_Loader, null, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    !_ctx.loading ? (openBlock(), createBlock("span", { key: 0 }, "Login")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "mt-12" }, [
                createVNode("label", {
                  for: "password1",
                  class: "block text-900 font-medium text-lg mb-4"
                }, "Email"),
                createVNode(_component_v_text_field, {
                  rules: [(v) => !!v || "Field is required"],
                  type: "email",
                  modelValue: _ctx.form.email,
                  "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                  dense: "",
                  variant: "outlined",
                  "hide-details": "auto",
                  label: "Alamat Email"
                }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                createVNode("label", {
                  for: "password1",
                  class: "block text-900 font-medium text-lg my-4"
                }, "Password"),
                createVNode(_component_v_text_field, {
                  rules: [(v) => !!v || "Field is required"],
                  type: _ctx.showPassword ? "text" : "password",
                  modelValue: _ctx.form.password,
                  "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
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
                }, 8, ["rules", "type", "modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_btn, {
                  elevation: "0",
                  onClick: _ctx.login,
                  color: "#0088CC",
                  "text-color": "white",
                  class: "w-full mt-8 text-white px-3 py-2"
                }, {
                  default: withCtx(() => [
                    !_ctx.loading ? (openBlock(), createBlock("span", { key: 0 }, "Login")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03140a18"]]);

export { Login as default };
//# sourceMappingURL=Login-cbe1112b.mjs.map
