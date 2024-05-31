import { _ as __nuxt_component_0 } from './BreadCrumb-b48c836d.mjs';
import { _ as __nuxt_component_0$1 } from './Date-c0091c75.mjs';
import { _ as __nuxt_component_2 } from './LatestAnnouncement-2cea0606.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createVNode, unref, isRef, useSSRContext } from 'vue';
import { u as useHead, n as navigateTo } from './server.mjs';
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
      title: "Pengumuman"
    });
    const page = ref(1);
    const pageLength = ref(0);
    const announcements = ref(null);
    const { data, total } = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/pengumuman?limit=5&page=1")), __temp = await __temp, __restore(), __temp);
    announcements.value = data;
    pageLength.value = Math.ceil(total / 5);
    async function changePage() {
      const { data: data2 } = await $fetch(`/api/pengumuman?limit=5&page=${page.value}`);
      announcements.value = data2;
      document.getElementById("list_pengumuman").scrollIntoView({ behavior: "smooth" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_IconsDate = __nuxt_component_0$1;
      const _component_v_pagination = resolveComponent("v-pagination");
      const _component_PartialsLatestAnnouncement = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "list_pengumuman",
        class: "animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadCrumb, null, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Pengumuman</span>`);
          } else {
            return [
              createVNode("span", {
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/pengumuman")
              }, "Pengumuman", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12"><div class="block col-span-1 md:col-span-4 pb-6"><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"><span>Pengumuman</span></div><!--[-->`);
      ssrRenderList(unref(announcements), (announcement) => {
        _push(`<div class="cursor-pointer flex mb-7"><div class="block"><div class="text-xl font-semibold"><span class="line-clamp-2">${ssrInterpolate(announcement.title)}</span></div><div class="text-md flex items-center font-medium mt-2">`);
        _push(ssrRenderComponent(_component_IconsDate, null, null, _parent));
        _push(`<span class="ml-1">${ssrInterpolate(unref(moment)(announcement.created_at).format("LL"))}</span></div><div class="mt-3"><span class="line-clamp-2 sm:line-clamp-3">${ssrInterpolate(announcement.description)}</span></div></div></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_v_pagination, {
        size: _ctx.$vuetify.display.mobile ? "small" : "default",
        class: "mt-4 mb-14",
        modelValue: unref(page),
        "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, changePage],
        "total-visible": 5,
        length: unref(pageLength)
      }, null, _parent));
      _push(`</div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_PartialsLatestAnnouncement, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Pengumuman/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-eb99f79f.mjs.map
