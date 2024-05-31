import { useSSRContext, ref, withAsyncContext, unref, resolveComponent } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import moment from 'moment';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  __name: "PotensiCategory",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const potensiCategory = ref(null);
    potensiCategory.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/potensi-category?limit=5")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-4 text-xl sm:text-2xl font-semibold py-3"><span>Kategori</span></div><div class="flex flex-wrap"><!--[-->`);
      ssrRenderList(unref(potensiCategory), (category) => {
        _push(`<div class="bg-[#0088CC] cursor-pointer font-medium text-white pa-2 mr-2 mt-2 text-sm w-fit rounded-full"><span>${ssrInterpolate(category.name)}</span></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partials/PotensiCategory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
  __name: "LatestPotensi",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const latestPotensi = ref([]);
    latestPotensi.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/potensi-desa?limit=5")), __temp = await __temp, __restore(), __temp).data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_img = resolveComponent("v-img");
      _push(`<!--[--><div class="text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-xl md:text-2xl font-semibold py-3" data-v-f1c162af><span data-v-f1c162af>Potensi Desa Terbaru</span></div><div class="mb-10" data-v-f1c162af><!--[-->`);
      ssrRenderList(unref(latestPotensi), (potensi) => {
        _push(`<div class="cursor-pointer mb-2 py-3 flex" data-v-f1c162af><div class="w-[140px] flex-none" data-v-f1c162af>`);
        _push(ssrRenderComponent(_component_v_img, {
          "lazy-src": potensi.thumbnail,
          cover: "",
          class: "w-full",
          height: "80",
          src: potensi.thumbnail,
          alt: ""
        }, null, _parent));
        _push(`</div><div class="block ml-3" data-v-f1c162af><div class="text-[#0088CC] text-base font-medium" data-v-f1c162af><span class="line-clamp-2" data-v-f1c162af>${ssrInterpolate(potensi.title)}</span></div><div class="mt-1" data-v-f1c162af><span data-v-f1c162af>${ssrInterpolate(unref(moment)(potensi.created_at).format("LL"))}</span></div></div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partials/LatestPotensi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f1c162af"]]);

export { __nuxt_component_4 as _, __nuxt_component_5 as a };
//# sourceMappingURL=LatestPotensi-40091dc8.mjs.map
