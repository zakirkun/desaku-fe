import { _ as __nuxt_component_0 } from './BreadCrumb-b48c836d.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { u as useHead, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
      title: "Lembaga Desa"
    });
    const data = ref(null);
    data.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/lembaga")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_v_img = resolveComponent("v-img");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadCrumb, null, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Lembaga Desa</span>`);
          } else {
            return [
              createVNode("span", {
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/lembaga-desa")
              }, "Lembaga Desa", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pb-8"><h1 class="mb-8 font-semibold text-[#0088CC] text-2xl">Lembaga Desa</h1><div class="w-full"><div class="shadow overflow-hidden rounded border-b border-gray-200"><table class="min-w-full bg-white overflow-x-auto"><thead class="bg-gray-700 text-white"><tr><th class="w-1/3 text-left py-3 px-4 uppercase font-medium text-sm">Nama Lembaga</th><th class="w-1/3 text-left py-3 px-4 uppercase font-medium text-sm">Alamat Kantor</th><th class="text-left py-3 px-4 uppercase font-medium text-sm">Logo</th></tr></thead><tbody class="text-gray-700"><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<tr class="${ssrRenderClass([index % 2 == 0 ? "bg-gray-100" : "", "cursor-pointer"])}"><td class="text-[#0088CC] font-normal tw-1/3 text-left text-base md:text-xl py-3 px-4"><div>${ssrInterpolate(item.name)}</div><div class="bg-[#0088CC] text-white w-fit px-2 text-sm md:text-base rounded-md py-1 mt-2">${ssrInterpolate(item.surname)}</div></td><td class="w-1/3 text-left py-3 px-4 text-base md:text-xl">${ssrInterpolate(item.address)}</td><td class="text-left py-3 px-4">`);
        _push(ssrRenderComponent(_component_v_img, {
          "lazy-src": item.image,
          src: item.image,
          class: "rounded-md",
          cover: "",
          width: "160",
          "aspect-ratio": "16/9"
        }, null, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Lembaga-Desa/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-173a2998.mjs.map
