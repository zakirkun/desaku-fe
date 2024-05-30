import { useSSRContext, ref, withAsyncContext, unref } from 'vue';
import { d as useRuntimeConfig } from './server.mjs';
import { u as useAsyncData } from './asyncData-47d2e483.mjs';
import { ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import moment from 'moment';

const _sfc_main = {
  __name: "LatestActivities",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const activities = ref(null);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => $fetch(useRuntimeConfig().public.API_BASE_URL + "/api/activities?limit=5"),
      "$OYgXcJrrfI"
    )), __temp = await __temp, __restore(), __temp);
    activities.value = data.value;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-4 text-2xl font-semibold py-3"><span>Kegiatan Terbaru</span></div><div class="mb-3"><!--[-->`);
      ssrRenderList(unref(activities), (activity) => {
        _push(`<div class="cursor-pointer mb-1 py-3 flex"><div class="block"><div class="text-[#0088CC] text-md"><span>${ssrInterpolate(activity.title)}</span></div><div class="mt-1"><span>${ssrInterpolate(unref(moment)(activity.created_at).format("LL"))}</span></div></div></div>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Partials/LatestActivities.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _ };
//# sourceMappingURL=LatestActivities-59b1778c.mjs.map
