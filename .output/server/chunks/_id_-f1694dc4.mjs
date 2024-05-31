import { _ as __nuxt_component_0 } from './BreadCrumb-b48c836d.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { b as useRouter$1, u as useHead, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    const data = ref(null);
    data.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/lembaga/slug/" + route.params.id)), __temp = await __temp, __restore(), __temp);
    useHead({
      title: data.value.name + " Lembaga Desa"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_v_img = resolveComponent("v-img");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadCrumb, {
        child: unref(data).name
      }, {
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
      _push(`<div class="pb-8"><h1 class="mb-8 font-semibold text-[#0088CC] text-2xl">${ssrInterpolate(unref(data).name)}</h1><div class="block md:flex items-center"><div clas="flex-none w-full">`);
      _push(ssrRenderComponent(_component_v_img, {
        "lazy-src": unref(data).image,
        src: unref(data).image,
        class: "rounded-md mx-auto",
        cover: "",
        width: "240",
        "aspect-ratio": "16/9"
      }, null, _parent));
      _push(`</div><div class="block text-base md:text-lg font-medium description-lembaga"><div class="flex py-3 border-b border-slate-300"><div class="flex-none w-[140px] sm:w-[200px]"> Nama Lembaga </div><div> : ${ssrInterpolate(unref(data).name)}</div></div><div class="flex py-3 border-b border-slate-300"><div class="flex-none w-[140px] sm:w-[200px]"> Singkatan </div><div> : ${ssrInterpolate(unref(data).surname)}</div></div><div class="flex py-3 border-b border-slate-300"><div class="flex-none w-[140px] sm:w-[200px]"> Alamat Lengkap </div><div> : ${ssrInterpolate(unref(data).address)}</div></div></div></div><div class="mt-8 text-lg sm:text-xl"><div class="border border-[#0088CC] rounded-md"><div class="bg-[#0088CC] text-white px-2 py-3 font-medium rounded-t-md"> Profil Lembaga </div>`);
      if (unref(data).profile) {
        _push(`<div class="px-3 py-5 text-[14px] quill-content">${unref(data).profile}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="border border-[#0088CC] rounded-md mt-8"><div class="bg-[#0088CC] text-white px-2 py-3 font-medium rounded-t-md"> Visi &amp; Misi </div>`);
      if (unref(data).visi) {
        _push(`<div class="px-3 py-5 text-[14px] quill-content">${unref(data).visi}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="border border-[#0088CC] rounded-md mt-8"><div class="bg-[#0088CC] text-white px-2 py-3 font-medium rounded-t-md"> Tugas </div>`);
      if (unref(data).tugas) {
        _push(`<div class="px-3 py-5 text-[14px] quill-content">${unref(data).tugas}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Lembaga-Desa/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-f1694dc4.mjs.map
