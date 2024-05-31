import { _ as __nuxt_component_0 } from './BreadCrumb-6154852b.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "Struktur-Organisasi",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Struktur Organisasi"
    });
    const jabatan = ref([]);
    const selectedJabatan = ref(null);
    const currentPerangkat = ref(null);
    const content = ref(null);
    jabatan.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/jabatan")), __temp = await __temp, __restore(), __temp);
    content.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/struktur-organisasi")), __temp = await __temp, __restore(), __temp).content;
    async function getPerangkat(id) {
      if (!id) {
        id = selectedJabatan.value;
      }
      currentPerangkat.value = await $fetch("/api/jabatan/perangkat/" + id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_v_select = resolveComponent("v-select");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6 min-h-[35rem]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_BreadCrumb, null, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Struktur Organisasi</span>`);
          } else {
            return [
              createVNode("span", null, "Struktur Organisasi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pb-8 block md:flex"><div class="hidden md:block flex-none w-[240px]"><!--[-->`);
      ssrRenderList(unref(jabatan), (item) => {
        _push(`<div class="border-b cursor-pointer border-slate-300 py-2 flex"><svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="#0088CC" d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71"></path></svg><span>${ssrInterpolate(item.name)}</span></div>`);
      });
      _push(`<!--]--></div><div class="flex md:hidden">`);
      _push(ssrRenderComponent(_component_v_select, {
        modelValue: unref(selectedJabatan),
        "onUpdate:modelValue": [($event) => isRef(selectedJabatan) ? selectedJabatan.value = $event : null, ($event) => getPerangkat(null)],
        label: "Pilih Jabatan",
        items: unref(jabatan),
        "item-value": "uuid",
        "item-title": "name"
      }, null, _parent));
      _push(`</div><div class="block flex-1 md:pl-10">`);
      if (!unref(currentPerangkat)) {
        _push(`<div><h1 class="mb-4 font-semibold text-[#0088CC] text-2xl">Struktur Organisasi</h1><div class="quill-content">${unref(content)}</div></div>`);
      } else {
        _push(`<div><p class="text-xl md:text-2xl mb-5 mt-4 font-semibold">${ssrInterpolate((_a2 = (_a = unref(currentPerangkat)[0]) == null ? void 0 : _a.job) != null ? _a2 : "-")}</p><div class="animate-fade grid grid-cols-1 gap-8 md:grid-cols-4"><!--[-->`);
        ssrRenderList(unref(currentPerangkat), (item) => {
          _push(`<div class="cursor-pointer rounded-lg block shadow-lg"><div class="w-full h-[180px]"><img${ssrRenderAttr("src", item.image)} class="w-full h-full object-cover rounded-t-lg"></div><div class="bg-[#0088CC] rounded-b-lg text-white text-base font-medium pa-2"><span>${ssrInterpolate(item.name)}</span><br><span class="text-sm font-normal">${ssrInterpolate(item.job)}</span></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Struktur-Organisasi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Struktur-Organisasi-1b14e377.mjs.map
