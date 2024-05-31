import { H as Head, T as Title } from './components-b178fbaf.mjs';
import { _ as __nuxt_component_0 } from './BreadCrumb-b48c836d.mjs';
import { ref, reactive, withAsyncContext, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { _ as _export_sfc, b as useRouter$1, n as navigateTo } from './server.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
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
    const perangkatDesa = ref([]);
    const data = reactive({
      name: null,
      job: null,
      image: null,
      nip: null,
      visi: null
    });
    const dataPerangkatDesa = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/perangkat-desa/slug/" + route.params.id)), __temp = await __temp, __restore(), __temp);
    data.name = dataPerangkatDesa.name;
    data.job = dataPerangkatDesa.job;
    data.image = dataPerangkatDesa.image;
    data.visi = dataPerangkatDesa.visi;
    data.nip = dataPerangkatDesa.nip;
    perangkatDesa.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/perangkat-desa?limit=5")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_v_img = resolveComponent("v-img");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(data).name)} Perangkat Desa`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(data).name) + " Perangkat Desa", 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(data).name) + " Perangkat Desa", 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="animate-fade flex-1 pb-8 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6 min-h-[30rem]" data-v-75b69fb5>`);
      _push(ssrRenderComponent(_component_BreadCrumb, {
        child: unref(data).name
      }, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-75b69fb5${_scopeId}>Perangkat Desa</span>`);
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
      _push(`<div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12 gap-y-6" data-v-75b69fb5><div class="block col-span-1 md:col-span-4" data-v-75b69fb5><div class="text-[#0088CC] mb-6 text-2xl md:text-2xl font-semibold py-3" data-v-75b69fb5><span data-v-75b69fb5>${ssrInterpolate(unref(data).name)}</span></div><div class="block md:flex" data-v-75b69fb5><div class="w-full md:w-[240px]" data-v-75b69fb5>`);
      _push(ssrRenderComponent(_component_v_img, {
        class: "w-full rounded-lg flex-none mx-auto mb-6 md:mb-0",
        width: "100%",
        "aspect-ratio": "1",
        "lazy-src": unref(data).image,
        src: unref(data).image,
        alt: ""
      }, null, _parent));
      _push(`</div><div class="md:ml-6 flex-1 py-5 md:pl-4 md:pr-10 md:border rounded-md text-base sm:text-lg h-fit border-slate-300" data-v-75b69fb5><div class="flex border-b border-slate-300 pb-3 mb-2" data-v-75b69fb5><div class="font-semibold w-[140px]" data-v-75b69fb5><span data-v-75b69fb5>Nama Lengkap</span></div><div data-v-75b69fb5><span data-v-75b69fb5>: \xA0 ${ssrInterpolate(unref(data).name)}</span></div></div><div class="flex border-b border-slate-300 pb-3 mb-2" data-v-75b69fb5><div class="font-semibold w-[140px]" data-v-75b69fb5><span data-v-75b69fb5>Jabatan</span></div><div data-v-75b69fb5><span data-v-75b69fb5>: \xA0 ${ssrInterpolate(unref(data).job)}</span></div></div><div class="flex border-b border-slate-300 pb-3 mb-2" data-v-75b69fb5><div class="font-semibold w-[140px]" data-v-75b69fb5><span data-v-75b69fb5>NIP</span></div><div data-v-75b69fb5><span data-v-75b69fb5>: \xA0 ${ssrInterpolate((_a = unref(data).nip) != null ? _a : "-")}</span></div></div><div data-v-75b69fb5><p class="font-semibold text-base sm:text-lg mb-4 mt-3" data-v-75b69fb5>Visi &amp; Misi</p><div class="quill-content" data-v-75b69fb5>${(_b = unref(data).visi) != null ? _b : "-"}</div></div></div></div></div><div class="col-span-2" data-v-75b69fb5><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" data-v-75b69fb5><span data-v-75b69fb5>Perangkat Desa Lainya</span></div><div class="mb-3 px-5 pt-3 rounded-md border border-slate-300" data-v-75b69fb5><!--[-->`);
      ssrRenderList(unref(perangkatDesa), (perangkat, index) => {
        _push(`<div class="${ssrRenderClass([index != unref(perangkatDesa).length - 1 ? "border-b" : "", "border-slate-300 pb-5 cursor-pointer mb-1 py-2 flex"])}" data-v-75b69fb5><div class="flex-none mr-4" data-v-75b69fb5>`);
        _push(ssrRenderComponent(_component_v_img, {
          class: "rounded-md",
          width: "60",
          "aspect-ratio": "1",
          "lazy-src": perangkat.image,
          src: perangkat.image,
          alt: ""
        }, null, _parent));
        _push(`</div><div class="block" data-v-75b69fb5><div class="font-medium text-[#0088CC] text-base md:text-lg" data-v-75b69fb5><span data-v-75b69fb5>${ssrInterpolate(perangkat.name)}</span></div><div class="font-medium text-sm md:text-base" data-v-75b69fb5><span data-v-75b69fb5>${ssrInterpolate(perangkat.job)}</span></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Perangkat-Desa/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-75b69fb5"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-54f17968.mjs.map
