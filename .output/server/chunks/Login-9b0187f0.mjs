import { _ as __nuxt_component_1 } from './Loader-17ea2c2e.mjs';
import { useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { h as _export_sfc, i as useHead } from './server.mjs';
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
  methods: {
    async login() {
      this.loading = true;
      this.form.content = this.data;
      try {
        const resp = await $fetch("http://api.desaku.muhichsan.com/api/auth/login", {
          method: "POST",
          body: this.form
        });
        this.$router.push("/dashboard/news");
      } catch (err) {
        this.toastUnauthorized = true;
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
      title: "Login"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_snackbar = resolveComponent("v-snackbar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_Loader = __nuxt_component_1;
      const _component_AppConfig = resolveComponent("AppConfig");
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
      _push(`<div class="bg-[#F8FAFC] flex items-center justify-center min-h-screen min-w-screen overflow-hidden" data-v-eed93bc0><div class="flex flex-column align-items-center justify-center" data-v-eed93bc0><img class="w-[100px] mb-6 mx-auto" src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png" alt="App logo" data-v-eed93bc0><div class="bg-white w-[360px]" style="${ssrRenderStyle({ "border-radius": "36px", "padding": "0.3rem", "background": "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)" })}" data-v-eed93bc0><div class="w-full surface-card py-8 px-5 sm:px-8" style="${ssrRenderStyle({ "border-radius": "53px" })}" data-v-eed93bc0><div class="text-center mb-5 text-white" data-v-eed93bc0><div class="text-900 text-3xl font-medium mb-3" data-v-eed93bc0>Welcome Back!</div><span class="text-600 font-medium" data-v-eed93bc0>Sign in to continue</span></div><div class="mt-12" data-v-eed93bc0><label for="password1" class="block text-900 font-medium text-lg mb-4" data-v-eed93bc0>Email</label>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        type: "email",
        modelValue: _ctx.form.email,
        "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
        dense: "",
        variant: "outlined",
        "hide-details": "auto",
        label: "Alamat Email"
      }, null, _parent));
      _push(`<label for="password1" class="block text-900 font-medium text-lg my-4" data-v-eed93bc0>Password</label>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        type: _ctx.showPassword ? "text" : "password",
        modelValue: _ctx.form.password,
        "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
        dense: "",
        variant: "outlined",
        "hide-details": "auto",
        label: "Kata Sandi"
      }, {
        "append-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.showPassword) {
              _push2(`<svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" data-v-eed93bc0${_scopeId}><path fill="black" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" data-v-eed93bc0${_scopeId}></path></svg>`);
            } else {
              _push2(`<svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" data-v-eed93bc0${_scopeId}><path fill="black" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7" data-v-eed93bc0${_scopeId}></path></svg>`);
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
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: _ctx.login,
        color: "#10B981",
        "text-color": "white",
        class: "w-full mt-8 bg-[#10B981] text-white px-3 py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.loading) {
              _push2(`<span data-v-eed93bc0${_scopeId}>Login</span>`);
            } else {
              _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              !_ctx.loading ? (openBlock(), createBlock("span", { key: 0 }, "Login")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_AppConfig, { simple: "" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eed93bc0"]]);

export { Login as default };
//# sourceMappingURL=Login-9b0187f0.mjs.map
