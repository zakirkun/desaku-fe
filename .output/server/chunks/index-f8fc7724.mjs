import { _ as __nuxt_component_0 } from './BreadCrumb-b48c836d.mjs';
import { _ as __nuxt_component_0$1 } from './Date-c0091c75.mjs';
import { _ as __nuxt_component_2 } from './LatestActivities-59b1778c.mjs';
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { u as useHead, d as useRuntimeConfig } from './server.mjs';
import { u as useAsyncData } from './asyncData-47d2e483.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import moment from 'moment';
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
      title: "Kegiatan"
    });
    const activities = ref(null);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => $fetch(useRuntimeConfig().public.API_BASE_URL + "/api/activities"),
      "$lczjrWlVcJ"
    )), __temp = await __temp, __restore(), __temp);
    activities.value = data.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_IconsDate = __nuxt_component_0$1;
      const _component_PartialsLatestActivities = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadCrumb, null, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Kegiatan</span>`);
          } else {
            return [
              createVNode("span", null, "Kegiatan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12"><div class="block col-span-1 md:col-span-4 pb-6"><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"><span>Kegiatan</span></div><!--[-->`);
      ssrRenderList(unref(activities), (activity) => {
        _push(`<div class="cursor-pointer flex mb-7"><div class="block"><div class="text-xl font-semibold"><span>${ssrInterpolate(activity.title)}</span></div><div class="text-md flex items-center font-medium mt-2">`);
        _push(ssrRenderComponent(_component_IconsDate, null, null, _parent));
        _push(`<span>${ssrInterpolate(unref(moment)(activity.created_at).format("LL"))}</span></div><div class="mt-3"><span>${ssrInterpolate(activity.description)}</span></div></div></div>`);
      });
      _push(`<!--]--></div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_PartialsLatestActivities, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kegiatan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-f8fc7724.mjs.map
