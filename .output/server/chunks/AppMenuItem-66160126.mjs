import { ref, watch, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { u as useLayout } from './layout-83f1b94f.mjs';
import { useRoute } from 'vue-router';

const _sfc_main = {
  __name: "AppMenuItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    },
    root: {
      type: Boolean,
      default: true
    },
    parentItemKey: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const route = useRoute();
    const { layoutConfig, layoutState, setActiveMenuItem, onMenuToggle } = useLayout();
    const props = __props;
    const isActiveMenu = ref(false);
    const itemKey = ref(null);
    watch(
      () => layoutConfig.activeMenuItem.value,
      (newVal) => {
        isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + "-");
      }
    );
    const itemClick = (event, item) => {
      if (item.disabled) {
        event.preventDefault();
        return;
      }
      const { overlayMenuActive, staticMenuMobileActive } = layoutState;
      if ((item.to || item.url) && (staticMenuMobileActive.value || overlayMenuActive.value)) {
        onMenuToggle();
      }
      if (item.command) {
        item.command({ originalEvent: event, item });
      }
      const foundItemKey = item.items ? isActiveMenu.value ? props.parentItemKey : itemKey : itemKey.value;
      setActiveMenuItem(foundItemKey);
    };
    const checkActiveRoute = (item) => {
      return route.path === item.to;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_app_menu_item = resolveComponent("app-menu-item", true);
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["cursor-pointer", { "layout-root-menuitem": __props.root, "active-menuitem": isActiveMenu.value }]
      }, _attrs))}>`);
      if (__props.root && __props.item.visible !== false) {
        _push(`<div class="layout-menuitem-root-text">${ssrInterpolate(__props.item.label)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((!__props.item.to || __props.item.items) && __props.item.visible !== false) {
        _push(`<a${ssrRenderAttr("href", __props.item.url)} class="${ssrRenderClass(__props.item.class)}"${ssrRenderAttr("target", __props.item.target)} tabindex="0"><i class="${ssrRenderClass([__props.item.icon, "text-sm sm:text-base layout-menuitem-icon"])}"></i><span class="layout-menuitem-texttext-sm sm:text-base">${ssrInterpolate(__props.item.label)}</span>`);
        if (__props.item.items) {
          _push(`<i class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.item.to && !__props.item.items && __props.item.visible !== false) {
        _push(ssrRenderComponent(_component_router_link, {
          onClick: ($event) => itemClick($event, __props.item, __props.index),
          class: [__props.item.class, { "active-route": checkActiveRoute(__props.item) }],
          tabindex: "0",
          to: __props.item.to
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="${ssrRenderClass([__props.item.icon, "text-sm sm:text-base layout-menuitem-icon"])}"${_scopeId}></i><span class="layout-menuitem-texttext-sm sm:text-base"${_scopeId}>${ssrInterpolate(__props.item.label)}</span>`);
              if (__props.item.items) {
                _push2(`<i class="pi pi-fw pi-angle-down layout-submenu-toggler"${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("i", {
                  class: [__props.item.icon, "text-sm sm:text-base layout-menuitem-icon"]
                }, null, 2),
                createVNode("span", { class: "layout-menuitem-texttext-sm sm:text-base" }, toDisplayString(__props.item.label), 1),
                __props.item.items ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: "pi pi-fw pi-angle-down layout-submenu-toggler"
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.item.items && __props.item.visible !== false) {
        _push(`<ul style="${ssrRenderStyle((__props.root ? true : isActiveMenu.value) ? null : { display: "none" })}" class="layout-submenu"><!--[-->`);
        ssrRenderList(__props.item.items, (child, i) => {
          _push(ssrRenderComponent(_component_app_menu_item, {
            key: child,
            index: i,
            item: child,
            parentItemKey: itemKey.value,
            root: false
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/AppMenuItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppMenuItem-66160126.mjs.map
