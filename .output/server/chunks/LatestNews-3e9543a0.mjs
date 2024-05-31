import { useSSRContext, ref, withAsyncContext, unref, resolveComponent } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import moment from 'moment';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  __name: "NewsCategory",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const newsCategory = ref(null);
    newsCategory.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/news-category?allow_empty=false")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-4 text-xl sm:text-2xl font-semibold py-3"><span>Kategori</span></div><div class="flex flex-wrap"><!--[-->`);
      ssrRenderList(unref(newsCategory), (category) => {
        _push(`<div class="bg-[#0088CC] cursor-pointer font-medium text-white pa-2 mr-2 mt-2 text-sm w-fit rounded-full"><span>${ssrInterpolate(category.name)}</span></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partials/NewsCategory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  __name: "LatestNews",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const news = ref(null);
    news.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/berita?limit=5")), __temp = await __temp, __restore(), __temp).data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_img = resolveComponent("v-img");
      _push(`<!--[--><div class="text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-xl sm:text-2xl font-semibold py-3" data-v-8a262197><span data-v-8a262197>Berita Terbaru</span></div><div class="mb-10" data-v-8a262197><!--[-->`);
      ssrRenderList(unref(news), (news2) => {
        _push(`<div class="cursor-pointer px-0 py-3 flex" data-v-8a262197><div class="w-[140px] flex-none" data-v-8a262197>`);
        _push(ssrRenderComponent(_component_v_img, {
          "lazy-src": news2.thumbnail,
          class: "w-full",
          height: "80",
          src: news2.thumbnail,
          alt: ""
        }, null, _parent));
        _push(`</div><div class="block ml-3" data-v-8a262197><div class="text-[#0088CC] text-base font-medium" data-v-8a262197><span class="line-clamp-2" data-v-8a262197>${ssrInterpolate(news2.title)}</span></div><div class="mt-1" data-v-8a262197><span data-v-8a262197>${ssrInterpolate(unref(moment)(news2.created_at).format("LL"))}</span></div></div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partials/LatestNews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8a262197"]]);

export { __nuxt_component_3 as _, __nuxt_component_4 as a };
//# sourceMappingURL=LatestNews-3e9543a0.mjs.map
