import { _ as __nuxt_component_0 } from './server-placeholder-da4405da.mjs';
import script from './button.esm-b6fde1a6.mjs';
import { useSSRContext } from 'vue';
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
      data: null,
      renderRichEditor: false
    };
  },
  async mounted() {
    const data = await $fetch("http://api.desaku.muhichsan.com/api/sejarah");
    this.data = data.sejarah;
    this.renderRichEditor = true;
  },
  methods: {
    async updateContent() {
      await $fetch("http://api.desaku.muhichsan.com/api/sejarah", {
        method: "POST",
        body: {
          content: this.data
        }
      });
    },
    contentChange(v) {
      this.data = v;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "History",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "History"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RichEditor = __nuxt_component_0;
      const _component_Button = script;
      _push(`<!--[--><div class="text-2xl font-semibold mb-2">Sejarah Desa</div><div class="grid"><div class="col-12"><div class="card"><h3 class="mb-3 text-xl font-medium">Konten</h3>`);
      if (_ctx.renderRichEditor) {
        _push(ssrRenderComponent(_component_RichEditor, {
          data: _ctx.data,
          onContentChange: _ctx.contentChange
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Button, {
        onClick: _ctx.updateContent,
        class: "mt-3 bg-[#10B981] text-white px-3 py-2",
        label: "Submit"
      }, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Profile/History.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=History-79b1c5ae.mjs.map
