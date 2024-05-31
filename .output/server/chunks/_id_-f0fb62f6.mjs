import { H as Head, T as Title } from './components-b178fbaf.mjs';
import { _ as __nuxt_component_0 } from './BreadCrumb-b48c836d.mjs';
import { ref, withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttrs } from 'vue/server-renderer';
import { b as useRouter$1, n as navigateTo, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './Date-c0091c75.mjs';
import { _ as __nuxt_component_2 } from './Tag-bfbd6b92.mjs';
import { _ as __nuxt_component_3$1, a as __nuxt_component_4 } from './LatestNews-3e9543a0.mjs';
import moment from 'moment';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.25em",
    height: "1em",
    viewBox: "0 0 640 512"
  }, _attrs))}><path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h293.1c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4l71 71l29.4-29.4c15.6-15.6 15.6-40.9 0-56.6zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3l-71-71z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icons/Author.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const post = ref(null);
    const route = useRouter$1().currentRoute.value;
    post.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/berita/slug/" + route.params.id)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_IconsAuthor = __nuxt_component_3;
      const _component_IconsDate = __nuxt_component_0$1;
      const _component_IconsTag = __nuxt_component_2;
      const _component_PartialsNewsCategory = __nuxt_component_3$1;
      const _component_PartialsLatestNews = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(post).title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(post).title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(post).title), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">`);
      _push(ssrRenderComponent(_component_BreadCrumb, {
        child: unref(post).title
      }, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Berita</span>`);
          } else {
            return [
              createVNode("span", {
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/berita")
              }, "Berita", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([_ctx.$vuetify.display.mobile ? "pb-12" : "pb-4", "grid grid-cols-1 md:grid-cols-6 gap-y-8 md:gap-x-12"])}"><div class="block col-span-1 md:col-span-4"><div class="text-[#0088CC] text-2xl mb-2 md:text-2xl font-semibold py-3"><span>${ssrInterpolate(unref(post).title)}</span></div><div class="text-md flex items-center font-medium mt-2 mb-1">`);
      _push(ssrRenderComponent(_component_IconsAuthor, null, null, _parent));
      _push(`<div class="ml-2"><span class="font-normal">Ditulis oleh</span><span class="ml-1 font-normal">${ssrInterpolate(unref(post).created_by)}</span></div></div><div class="text-md flex items-center font-normal my-4"><div class="flex">`);
      _push(ssrRenderComponent(_component_IconsDate, null, null, _parent));
      _push(`<span class="ml-1">${ssrInterpolate(unref(moment)(unref(post).created_at).format("LL"))}</span></div><div class="flex ml-2 items-center">`);
      _push(ssrRenderComponent(_component_IconsTag, null, null, _parent));
      _push(`<span class="ml-1">${ssrInterpolate(unref(post).category_name)}</span></div></div><div class="w-full font-normal quill-content">${unref(post).content}</div></div><div class="col-span-2">`);
      _push(ssrRenderComponent(_component_PartialsNewsCategory, null, null, _parent));
      _push(ssrRenderComponent(_component_PartialsLatestNews, null, null, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Berita/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-f0fb62f6.mjs.map
