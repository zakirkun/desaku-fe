import { _ as __nuxt_component_0 } from './BreadCrumb-b48c836d.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead } from './server.mjs';
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
  __name: "Galeri",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref(null);
    const images = ref([]);
    const data = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/image-gallery")), __temp = await __temp, __restore(), __temp);
    images.value = data;
    useHead({
      title: "Galeri Desa"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_v_img = resolveComponent("v-img");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem]" }, _attrs))} data-v-bbc65c0e>`);
      _push(ssrRenderComponent(_component_BreadCrumb, null, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-bbc65c0e${_scopeId}>Galeri</span>`);
          } else {
            return [
              createVNode("span", null, "Galeri")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pb-[6rem]" data-v-bbc65c0e><h1 class="mb-4 font-semibold text-[#0088CC] text-2xl" data-v-bbc65c0e>Galeri Desa</h1><div id="gallery" class="grid grid-cols-1 md:grid-cols-3 gap-[5rem] md:gap-y-[6rem]" data-v-bbc65c0e><!--[-->`);
      ssrRenderList(unref(images), (image, key) => {
        _push(`<a class="w-full rounded-lg"${ssrRenderAttr("href", image.url)} data-pswp-width="600" data-pswp-height="400" target="_blank" rel="noreferrer" data-v-bbc65c0e>`);
        _push(ssrRenderComponent(_component_v_img, {
          "lazy-src": image.url,
          class: "w-full rounded-t-lg",
          height: "300",
          src: image.url,
          alt: ""
        }, null, _parent));
        _push(`<div class="rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100" data-v-bbc65c0e>`);
        if (image.description.length > 40 && _ctx.$vuetify.display.mobile) {
          _push(`<span data-v-bbc65c0e>${ssrInterpolate(image.description.slice(0, 40))}...</span>`);
        } else {
          _push(`<span data-v-bbc65c0e>${ssrInterpolate(image.description)}</span>`);
        }
        _push(`</div></a>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Galeri.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Galeri = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bbc65c0e"]]);

export { Galeri as default };
//# sourceMappingURL=Galeri-5fe315cd.mjs.map
