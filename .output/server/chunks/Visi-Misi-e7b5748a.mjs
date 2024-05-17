import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Footer-8ad1daf1.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { i as useHead } from './server.mjs';
import '@vueuse/core';
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
  data: () => ({
    data: null,
    headerActive: false
  }),
  async mounted() {
    const data = await $fetch("http://api.desaku.muhichsan.com/api/visi");
    this.data = data.visi;
    window.addEventListener("scroll", function() {
      if (window.scrollY > 20) {
        headerActive.value = true;
      } else {
        headerActive.value = false;
      }
    });
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Visi-Misi",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Visi Misi"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="px-[2rem] md:px-[14rem] pt-[2.5rem] min-h-[26rem]"><div class="flex mb-6 items-center bg-[#f0f0f0] px-3 py-3 rounded-lg"><div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024"><path fill="#0088CC" d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5"></path></svg></div><div><span>/ Visi Misi</span></div></div><div class="pb-8"><h1 class="mb-4 font-semibold text-[#0088CC] text-3xl">Visi &amp; Misi</h1>`);
      if (_ctx.data) {
        _push(`<div>${_ctx.data}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Visi-Misi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Visi-Misi-e7b5748a.mjs.map
