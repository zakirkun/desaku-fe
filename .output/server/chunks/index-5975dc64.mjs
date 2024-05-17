import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Footer-8ad1daf1.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import moment from 'moment';
import '@vueuse/core';
import './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const __default__ = {
  data: () => ({
    news: [],
    newsCategory: [],
    moment
  }),
  async mounted() {
    await this.loadData();
    await this.loadNewsCategory();
  },
  methods: {
    async loadData() {
      const data = await $fetch("http://api.desaku.muhichsan.com/api/news");
      this.news = data;
      this.latestNews = data;
    },
    async loadNewsCategory() {
      const data = await $fetch("http://api.desaku.muhichsan.com/api/news-category");
      this.newsCategory = data;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="block px-[2rem] md:px-[14rem] bg-[#F8F9FC] pt-6"><div class="flex mb-6 items-center bg-[#f0f0f0] pa-3 rounded-lg"><div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024"><path fill="#0088CC" d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5"></path></svg></div><div><span>/ Berita</span></div></div><div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12"><div class="block col-span-1 md:col-span-4"><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"><span>Berita</span></div><!--[-->`);
      ssrRenderList(_ctx.news, (news) => {
        _push(`<div class="cursor-pointer flex mb-2 h-[200px]"><div class="w-[500px] h-full"><img class="rounded-md h-[160px] w-full object-cover"${ssrRenderAttr("src", news.thumbnail)} alt=""></div><div class="block pl-4"><div class="text-xl font-semibold"><span>${ssrInterpolate(news.title)}</span></div><div class="text-md flex items-center font-medium mt-2"><svg xmlns="http://www.w3.org/2000/svg" class="mr-1" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><rect width="18" height="15" x="3" y="6" stroke="#A3A3A3" rx="2"></rect><path fill="black" d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"></path><path stroke="#A3A3A3" stroke-linecap="round" d="M7 3v3m10-3v3"></path><rect width="4" height="2" x="7" y="12" fill="#A3A3A3" rx=".5"></rect><rect width="4" height="2" x="7" y="16" fill="#A3A3A3" rx=".5"></rect><rect width="4" height="2" x="13" y="12" fill="#A3A3A3" rx=".5"></rect><rect width="4" height="2" x="13" y="16" fill="#A3A3A3" rx=".5"></rect></g></svg><span>${ssrInterpolate(unref(moment)(news.created_at).format("LL"))}</span></div><div class="mt-3"><span>${ssrInterpolate(news.description)}</span></div></div></div>`);
      });
      _push(`<!--]--></div><div class="col-span-2"><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"><span>Kategori</span></div><div class="flex flex-wrap"><!--[-->`);
      ssrRenderList(_ctx.newsCategory, (category) => {
        _push(`<div class="bg-[#0088CC] font-semibold text-white pa-2 mr-2 mt-2 text-sm w-fit rounded-full"><span>${ssrInterpolate(category.name)}</span></div>`);
      });
      _push(`<!--]--></div><div class="text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-2xl font-semibold py-3"><span>Berita Terbaru</span></div><!--[-->`);
      ssrRenderList(_ctx.latestNews, (news) => {
        _push(`<div class="cursor-pointer mb-2 px-2 py-3 flex items-center"><div class="w-[300px] h-full"><img class="rounded-md"${ssrRenderAttr("src", news.thumbnail)} alt=""></div><div class="block ml-3"><div class="text-[#0088CC] text-md"><span>${ssrInterpolate(news.title)}</span></div><div class="mt-1"><span>${ssrInterpolate(unref(moment)(news.created_at).format("LL"))}</span></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Berita/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-5975dc64.mjs.map
