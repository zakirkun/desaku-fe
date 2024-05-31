import { _ as __nuxt_component_0 } from './BreadCrumb-6154852b.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { _ as _export_sfc, u as useHead, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Perangkat Desa"
    });
    const perangkat = ref([]);
    perangkat.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/perangkat-desa")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_v_img = resolveComponent("v-img");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6 min-h-[30rem]" }, _attrs))} data-v-3a18e103>`);
      _push(ssrRenderComponent(_component_BreadCrumb, null, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-3a18e103${_scopeId}>Perangkat Desa</span>`);
          } else {
            return [
              createVNode("span", {
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/perangkat-desa")
              }, "Perangkat Desa", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="mb-4 font-semibold text-[#0088CC] text-2xl" data-v-3a18e103>Perangkat Desa</h1><div class="mt-8 grid grid-cols-1 md:grid-cols-5 pb-8 gap-x-8 gap-y-10" data-v-3a18e103><!--[-->`);
      ssrRenderList(unref(perangkat), (item) => {
        _push(`<div class="rounded-lg block shadow-lg cursor-pointer" data-v-3a18e103><div class="w-full h-[180px]" data-v-3a18e103>`);
        _push(ssrRenderComponent(_component_v_img, {
          src: item.image,
          class: "w-full h-full rounded-t-lg"
        }, null, _parent));
        _push(`</div><div class="bg-[#0088CC] rounded-b-lg text-white text-base font-medium pa-2" data-v-3a18e103><span data-v-3a18e103>${ssrInterpolate(item.name)}</span><br data-v-3a18e103><span class="text-sm font-normal" data-v-3a18e103>${ssrInterpolate(item.job)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Perangkat-Desa/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a18e103"]]);

export { index as default };
//# sourceMappingURL=index-869a4ae4.mjs.map
