import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.3em",
    height: "1.3em",
    viewBox: "0 0 24 24"
  }, _attrs))}><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M10.238 4.827a3 3 0 0 1 2.122.878l6.485 6.486a3 3 0 0 1 0 4.242l-4.243 4.243a3 3 0 0 1-4.242 0l-6.486-6.485a3 3 0 0 1-.878-2.122V7.327a2.5 2.5 0 0 1 2.5-2.5zm0 2H5.496a.5.5 0 0 0-.5.5v4.742a1 1 0 0 0 .292.707l6.486 6.486a1 1 0 0 0 1.414 0l4.243-4.243a1 1 0 0 0 0-1.414L10.945 7.12a1 1 0 0 0-.707-.293M7.531 9.362a1.5 1.5 0 1 1 2.121 2.122a1.5 1.5 0 0 1-2.121-2.122M11.652 2a3 3 0 0 1 2.122.878l7.192 7.193a1 1 0 0 1-1.414 1.414L12.36 4.29a1 1 0 0 0-.708-.29H7a1 1 0 0 1 0-2z"></path></g></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Tag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Tag-bfbd6b92.mjs.map
