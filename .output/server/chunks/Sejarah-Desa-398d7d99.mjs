import { _ as __nuxt_component_0 } from './BreadCrumb-b48c836d.mjs';
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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

const _sfc_main = {
  __name: "Sejarah-Desa",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Sejarah Desa"
    });
    const data = ref(null);
    const { sejarah } = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/sejarah")), __temp = await __temp, __restore(), __temp);
    data.value = sejarah;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadCrumb, null, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Sejarah Desa</span>`);
          } else {
            return [
              createVNode("span", null, "Sejarah Desa")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pb-8"><h1 class="mb-4 font-semibold text-[#0088CC] text-2xl">Sejarah Desa</h1>`);
      if (unref(data)) {
        _push(`<div class="quill-content">${unref(data)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Sejarah-Desa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Sejarah-Desa-398d7d99.mjs.map
