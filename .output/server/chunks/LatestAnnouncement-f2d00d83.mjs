import { useSSRContext, ref, withAsyncContext, unref } from 'vue';
import { ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import moment from 'moment';

const _sfc_main = {
  __name: "LatestAnnouncement",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const announcements = ref(null);
    announcements.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/pengumuman?limit=5")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-4 text-2xl font-semibold py-3"><span>Pengumuman Terbaru</span></div><div class="mb-3"><!--[-->`);
      ssrRenderList(unref(announcements), (announcement) => {
        _push(`<div class="cursor-pointer mb-1 py-3 flex"><div class="block"><div class="text-[#0088CC] text-md"><span>${ssrInterpolate(announcement.title)}</span></div><div class="mt-1"><span>${ssrInterpolate(unref(moment)(announcement.created_at).format("LL"))}</span></div></div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partials/LatestAnnouncement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=LatestAnnouncement-f2d00d83.mjs.map
