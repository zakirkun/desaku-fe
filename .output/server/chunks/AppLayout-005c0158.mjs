import script from './toast.esm-6d569320.mjs';
import { ref, watch, computed, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './AppTopbar-239e0810.mjs';
import _sfc_main$2 from './AppSidebar-c414e9a8.mjs';
import { u as useLayout } from './layout-83f1b94f.mjs';
import './portal.esm-e4a6f08c.mjs';
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
import './basecomponent.esm-75555909.mjs';
import './index.esm-7661e672.mjs';
import './baseicon.esm-961b188b.mjs';
import './index.esm-affb65ed.mjs';
import './index.esm-10db9b13.mjs';
import './index.esm-ed1c6cc7.mjs';
import './button.esm-b6fde1a6.mjs';
import './badge.esm-9b923ea6.mjs';
import './index.esm-7cc890d4.mjs';
import './AppMenuItem-4b562e00.mjs';

const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { layoutConfig, layoutState, isSidebarActive } = useLayout();
    const outsideClickListener = ref(null);
    watch(isSidebarActive, (newVal) => {
      if (newVal) {
        bindOutsideClickListener();
      } else {
        unbindOutsideClickListener();
      }
    });
    const containerClass = computed(() => {
      return {
        "layout-theme-light": layoutConfig.darkTheme.value === "light",
        "layout-theme-dark": layoutConfig.darkTheme.value === "dark",
        "layout-overlay": layoutConfig.menuMode.value === "overlay",
        "layout-static": layoutConfig.menuMode.value === "static",
        "layout-static-inactive": layoutState.staticMenuDesktopInactive.value && layoutConfig.menuMode.value === "static",
        "layout-overlay-active": layoutState.overlayMenuActive.value,
        "layout-mobile-active": layoutState.staticMenuMobileActive.value,
        "p-ripple-disabled": layoutConfig.ripple.value === false
      };
    });
    const bindOutsideClickListener = () => {
      if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
          if (isOutsideClicked(event)) {
            layoutState.overlayMenuActive.value = false;
            layoutState.staticMenuMobileActive.value = false;
            layoutState.menuHoverActive.value = false;
          }
        };
        document.addEventListener("click", outsideClickListener.value);
      }
    };
    const unbindOutsideClickListener = () => {
      if (outsideClickListener.value) {
        document.removeEventListener("click", outsideClickListener);
        outsideClickListener.value = null;
      }
    };
    const isOutsideClicked = (event) => {
      const sidebarEl = document.querySelector(".layout-sidebar");
      const topbarEl = document.querySelector(".layout-menu-button");
      return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      const _component_app_footer = resolveComponent("app-footer");
      const _component_app_config = resolveComponent("app-config");
      const _component_Toast = script;
      _push(`<!--[--><div class="${ssrRenderClass([containerClass.value, "layout-wrapper"])}">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="layout-sidebar">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div><div class="layout-main-container"><div class="layout-main">`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_app_footer, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_app_config, null, null, _parent));
      _push(`<div class="layout-mask"></div></div>`);
      _push(ssrRenderComponent(_component_Toast, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppLayout-005c0158.mjs.map
