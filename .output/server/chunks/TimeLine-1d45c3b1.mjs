import script from './timeline.esm-92c37ed6.mjs';
import script$1 from './card.esm-6e1b5f4f.mjs';
import script$2 from './button.esm-b6fde1a6.mjs';
import { ref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { h as _export_sfc } from './server.mjs';
import './basecomponent.esm-75555909.mjs';
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
import './badge.esm-9b923ea6.mjs';
import './index.esm-7cc890d4.mjs';
import './baseicon.esm-961b188b.mjs';

const _sfc_main = {
  __name: "TimeLine",
  __ssrInlineRender: true,
  setup(__props) {
    const customEvents = ref([
      {
        status: "Ordered",
        date: "15/10/2020 10:30",
        icon: "pi pi-shopping-cart",
        color: "#9C27B0",
        image: "game-controller.jpg"
      },
      {
        status: "Processing",
        date: "15/10/2020 14:00",
        icon: "pi pi-cog",
        color: "#673AB7"
      },
      {
        status: "Shipped",
        date: "15/10/2020 16:15",
        icon: "pi pi-envelope",
        color: "#FF9800"
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",
        icon: "pi pi-check",
        color: "#607D8B"
      }
    ]);
    const horizontalEvents = ref(["2020", "2021", "2022", "2023"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Timeline = script;
      const _component_Card = script$1;
      const _component_Button = script$2;
      _push(`<!--[--><div class="grid" data-v-87c1ca82><div class="col-6" data-v-87c1ca82><div class="card" data-v-87c1ca82><h5 data-v-87c1ca82>Left Align</h5>`);
      _push(ssrRenderComponent(_component_Timeline, { value: customEvents.value }, {
        content: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(slotProps.item.status)}`);
          } else {
            return [
              createTextVNode(toDisplayString(slotProps.item.status), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-6" data-v-87c1ca82><div class="card" data-v-87c1ca82><h5 data-v-87c1ca82>Right Align</h5>`);
      _push(ssrRenderComponent(_component_Timeline, {
        value: customEvents.value,
        align: "right"
      }, {
        content: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(slotProps.item.status)}`);
          } else {
            return [
              createTextVNode(toDisplayString(slotProps.item.status), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-6" data-v-87c1ca82><div class="card" data-v-87c1ca82><h5 data-v-87c1ca82>Alternate Align</h5>`);
      _push(ssrRenderComponent(_component_Timeline, {
        value: customEvents.value,
        align: "alternate"
      }, {
        content: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(slotProps.item.status)}`);
          } else {
            return [
              createTextVNode(toDisplayString(slotProps.item.status), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-6" data-v-87c1ca82><div class="card" data-v-87c1ca82><h5 data-v-87c1ca82>Opposite Content</h5>`);
      _push(ssrRenderComponent(_component_Timeline, { value: customEvents.value }, {
        opposite: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<small class="p-text-secondary" data-v-87c1ca82${_scopeId}>${ssrInterpolate(slotProps.item.date)}</small>`);
          } else {
            return [
              createVNode("small", { class: "p-text-secondary" }, toDisplayString(slotProps.item.date), 1)
            ];
          }
        }),
        content: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(slotProps.item.status)}`);
          } else {
            return [
              createTextVNode(toDisplayString(slotProps.item.status), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="card" data-v-87c1ca82><h5 data-v-87c1ca82>Custom Timeline</h5>`);
      _push(ssrRenderComponent(_component_Timeline, {
        value: customEvents.value,
        align: "alternate",
        class: "customized-timeline"
      }, {
        marker: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-2" style="${ssrRenderStyle({ backgroundColor: slotProps.item.color })}" data-v-87c1ca82${_scopeId}><i class="${ssrRenderClass(slotProps.item.icon)}" data-v-87c1ca82${_scopeId}></i></span>`);
          } else {
            return [
              createVNode("span", {
                class: "flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-2",
                style: { backgroundColor: slotProps.item.color }
              }, [
                createVNode("i", {
                  class: slotProps.item.icon
                }, null, 2)
              ], 4)
            ];
          }
        }),
        content: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Card, null, {
              title: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(slotProps.item.status)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(slotProps.item.status), 1)
                  ];
                }
              }),
              subtitle: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(slotProps.item.date)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(slotProps.item.date), 1)
                  ];
                }
              }),
              content: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (slotProps.item.image) {
                    _push3(`<img${ssrRenderAttr("src", "/demo/images/product/" + slotProps.item.image)}${ssrRenderAttr("alt", slotProps.item.name)} width="200" class="shadow-2 mb-3" data-v-87c1ca82${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<p data-v-87c1ca82${_scopeId2}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! </p>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    label: "Read more",
                    class: "p-button-text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    slotProps.item.image ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: "/demo/images/product/" + slotProps.item.image,
                      alt: slotProps.item.name,
                      width: "200",
                      class: "shadow-2 mb-3"
                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                    createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),
                    createVNode(_component_Button, {
                      label: "Read more",
                      class: "p-button-text"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Card, null, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(slotProps.item.status), 1)
                ]),
                subtitle: withCtx(() => [
                  createTextVNode(toDisplayString(slotProps.item.date), 1)
                ]),
                content: withCtx(() => [
                  slotProps.item.image ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: "/demo/images/product/" + slotProps.item.image,
                    alt: slotProps.item.name,
                    width: "200",
                    class: "shadow-2 mb-3"
                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                  createVNode("p", null, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),
                  createVNode(_component_Button, {
                    label: "Read more",
                    class: "p-button-text"
                  })
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card mt-3" data-v-87c1ca82><h5 data-v-87c1ca82>Horizontal</h5><h6 data-v-87c1ca82>Top Align</h6>`);
      _push(ssrRenderComponent(_component_Timeline, {
        value: horizontalEvents.value,
        layout: "horizontal",
        align: "top"
      }, {
        content: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(slotProps.item)}`);
          } else {
            return [
              createTextVNode(toDisplayString(slotProps.item), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h6 data-v-87c1ca82>Bottom Align</h6>`);
      _push(ssrRenderComponent(_component_Timeline, {
        value: horizontalEvents.value,
        layout: "horizontal",
        align: "bottom"
      }, {
        content: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(slotProps.item)}`);
          } else {
            return [
              createTextVNode(toDisplayString(slotProps.item), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h6 data-v-87c1ca82>Alternate Align</h6>`);
      _push(ssrRenderComponent(_component_Timeline, {
        value: horizontalEvents.value,
        layout: "horizontal",
        align: "alternate"
      }, {
        opposite: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \xA0 `);
          } else {
            return [
              createTextVNode(" \xA0 ")
            ];
          }
        }),
        content: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(slotProps.item)}`);
          } else {
            return [
              createTextVNode(toDisplayString(slotProps.item), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/TimeLine.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TimeLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87c1ca82"]]);

export { TimeLine as default };
//# sourceMappingURL=TimeLine-1d45c3b1.mjs.map
