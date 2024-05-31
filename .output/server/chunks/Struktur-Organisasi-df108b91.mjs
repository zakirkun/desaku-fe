import { _ as __nuxt_component_0 } from './server-placeholder-da4405da.mjs';
import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { u as useHead, a as useToken } from './server.mjs';
import { resolveComponent, withCtx, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
      renderRichEditor: false,
      loading: false
    };
  },
  async mounted() {
    const data = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/struktur-organisasi");
    this.data = data.content;
    this.renderRichEditor = true;
  },
  methods: {
    async updateContent() {
      this.loading = true;
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/struktur-organisasi", {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: {
          content: this.data
        }
      });
      this.loading = false;
    },
    contentChange(v) {
      this.data = v;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Struktur-Organisasi",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Struktur Organisasi"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RichEditor = __nuxt_component_0;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_Loader = __nuxt_component_1;
      _push(`<!--[--><div class="text-2xl font-semibold mb-2">Struktur Organisasi</div><div class="grid animate-fade"><div class="col-12"><div class="card"><h3 class="mb-3 text-xl font-medium">Konten</h3>`);
      if (_ctx.renderRichEditor) {
        _push(ssrRenderComponent(_component_RichEditor, {
          data: _ctx.data,
          onContentChange: _ctx.contentChange
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: _ctx.updateContent,
        color: "#10B981",
        class: "mt-3 text-white px-3 py-2"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Struktur-Organisasi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Struktur-Organisasi-df108b91.mjs.map
