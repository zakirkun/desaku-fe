import { _ as __nuxt_component_0 } from './BreadCrumb-b48c836d.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createVNode, unref, isRef, useSSRContext } from 'vue';
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
    const videos = ref([]);
    const page = ref(1);
    const pageLength = ref(0);
    ref(false);
    images.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/image-gallery")), __temp = await __temp, __restore(), __temp);
    const { data, total } = ([__temp, __restore] = withAsyncContext(() => $fetch(`/api/video-gallery?limit=3&page=${page.value}`)), __temp = await __temp, __restore(), __temp);
    videos.value = data;
    pageLength.value = Math.ceil(total / 3);
    async function changePage() {
      const { data: data2 } = await $fetch(`/api/video-gallery?limit=3&page=${page.value}`);
      videos.value = data2;
    }
    useHead({
      title: "Galeri Desa"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_v_pagination = resolveComponent("v-pagination");
      const _component_v_img = resolveComponent("v-img");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6" }, _attrs))} data-v-88697545>`);
      _push(ssrRenderComponent(_component_BreadCrumb, null, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-88697545${_scopeId}>Galeri Desa</span>`);
          } else {
            return [
              createVNode("span", null, "Galeri Desa")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pb-[1rem]" data-v-88697545><h1 class="mb-2 font-semibold text-[#0088CC] text-2xl" data-v-88697545>Galeri Video</h1><div class="grid grid-cols-1 md:grid-cols-3 md:gap-[2rem]" data-v-88697545><!--[-->`);
      ssrRenderList(unref(videos), (video, key) => {
        _push(`<a class="w-full rounded-lg animate-fade" target="_blank" rel="noreferrer" data-v-88697545><iframe class="my-6 rounded-lg shadow-sm" width="100%" height="245" loading="lazy"${ssrRenderAttr("src", video.url)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-v-88697545></iframe></a>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_v_pagination, {
        size: _ctx.$vuetify.display.mobile ? "small" : "default",
        class: "mt-4 mb-6 md:mb-10",
        modelValue: unref(page),
        "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, changePage],
        "total-visible": 5,
        length: unref(pageLength)
      }, null, _parent));
      _push(`</div><div class="pb-[6rem]" data-v-88697545><h1 class="mb-8 font-semibold text-[#0088CC] text-2xl" data-v-88697545>Galeri Foto</h1><div id="gallery" class="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-y-[2rem]" data-v-88697545><!--[-->`);
      ssrRenderList(unref(images), (image, key) => {
        _push(`<a class="w-full cursor-pointer rounded-lg"${ssrRenderAttr("href", image.url)} data-pswp-width="600" data-pswp-height="400" target="_blank" rel="noreferrer" data-v-88697545>`);
        _push(ssrRenderComponent(_component_v_img, {
          "lazy-src": image.url,
          class: "w-full rounded-t-lg",
          height: "300",
          src: image.url,
          alt: ""
        }, null, _parent));
        _push(`<div class="rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100" data-v-88697545>`);
        if (image.description.length > 40 && _ctx.$vuetify.display.mobile) {
          _push(`<span data-v-88697545>${ssrInterpolate(image.description.slice(0, 40))}...</span>`);
        } else {
          _push(`<span data-v-88697545>${ssrInterpolate(image.description)}</span>`);
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
const Galeri = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-88697545"]]);

export { Galeri as default };
//# sourceMappingURL=Galeri-62166be2.mjs.map
