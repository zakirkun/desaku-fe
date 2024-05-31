import { _ as __nuxt_component_0 } from './BreadCrumb-b48c836d.mjs';
import { _ as __nuxt_component_0$1 } from './Date-c0091c75.mjs';
import { _ as __nuxt_component_2 } from './Tag-bfbd6b92.mjs';
import { _ as __nuxt_component_3 } from './EmptyData-033aa9c0.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './LatestPotensi-b76c850a.mjs';
import { ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { b as useRouter$1, u as useHead, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import moment from 'moment';
import './asyncData-47d2e483.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRouter$1().currentRoute.value;
    const potensi = ref(null);
    const categoryName = ref(null);
    const { data, category_name } = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/potensi-desa?category=" + route.params.id)), __temp = await __temp, __restore(), __temp);
    potensi.value = data;
    categoryName.value = category_name;
    useHead({
      title: "Potensi Desa: " + category_name
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_IconsDate = __nuxt_component_0$1;
      const _component_IconsTag = __nuxt_component_2;
      const _component_EmptyData = __nuxt_component_3;
      const _component_PartialsPotensiCategory = __nuxt_component_4;
      const _component_PartialsLatestPotensi = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 animate-fade block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadCrumb, { child: unref(category_name) }, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Potensi Desa</span>`);
          } else {
            return [
              createVNode("span", {
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/potensi-desa")
              }, "Potensi Desa", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12"><div class="block col-span-1 md:col-span-4"><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"><span>Potensi Desa: ${ssrInterpolate(unref(category_name))}</span></div>`);
      if (unref(potensi).length > 0) {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(potensi), (potensi2) => {
          _push(`<div class="cursor-pointer flex mb-[0.5rem] md:mb-2 h-[160px] md:h-[200px]"><div class="w-[160px] md:w-[240px] h-full flex-none"><img class="rounded-md h-[120px] md:h-[160px] w-full object-cover"${ssrRenderAttr("src", potensi2.thumbnail)} alt=""></div><div class="block pl-4"><div class="tetx-base md:text-xl font-semibold"><span class="hidden md:flex">${ssrInterpolate(potensi2.title)}</span><span class="flex md:hidden">${ssrInterpolate(potensi2.title.slice(0, 30))}...</span></div><div class="block md:flex"><div class="text-xs md:text-base flex items-center font-medium mt-2">`);
          _push(ssrRenderComponent(_component_IconsDate, null, null, _parent));
          _push(`<span class="ml-1">${ssrInterpolate(unref(moment)(potensi2.created_at).format("LL"))}</span></div><div class="text-xs md:text-base flex items-center font-medium mt-2 ml-2">`);
          _push(ssrRenderComponent(_component_IconsTag, null, null, _parent));
          _push(`<span class="ml-1">${ssrInterpolate(potensi2.category_name)}</span></div></div><div class="mt-2 text-sm md:text-base"><span class="hidden md:flex">${ssrInterpolate(potensi2.description)}</span><span class="flex md:hidden">${ssrInterpolate(potensi2.description.slice(0, 40))}...</span></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(ssrRenderComponent(_component_EmptyData, null, null, _parent));
      }
      _push(`</div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_PartialsPotensiCategory, null, null, _parent));
      _push(ssrRenderComponent(_component_PartialsLatestPotensi, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Potensi-Desa/Category/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-bdba19f0.mjs.map
