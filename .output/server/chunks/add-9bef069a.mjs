import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { u as useHead, a as useToken } from './server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
      data: null,
      loading: false,
      renderRichEditor: false,
      form: {
        name: null,
        slug: null
      }
    };
  },
  async mounted() {
    const data = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/news-category");
    this.items = data;
    this.renderRichEditor = true;
  },
  methods: {
    async addNews() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      this.form.slug = createSlug(this.form.name);
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/news-category", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: this.form
      });
      this.loading = false;
      this.$router.push("/dashboard/news");
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
      title: "Tambah Kategori Berita"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_Loader = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid animate-fade" }, _attrs))}><div class="col-12"><div class="card"><h3 class="text-2xl font-medium mb-5">Tambah Kategori Berita</h3>`);
      _push(ssrRenderComponent(_component_v_form, { ref: "form" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              modelValue: _ctx.form.name,
              "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "Kategori Berita"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_v_text_field, {
                  rules: [(v) => !!v || "Field is required"],
                  modelValue: _ctx.form.name,
                  "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
                  variant: "outlined",
                  "hide-details": "auto",
                  label: "Kategori Berita"
                }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: _ctx.addNews,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/News/category/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-9bef069a.mjs.map
