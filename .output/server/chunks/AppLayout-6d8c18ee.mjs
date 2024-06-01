import { ref, watch, computed, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './AppTopbar-efa624dc.mjs';
import _sfc_main$2 from './AppSidebar-eaed5dc7.mjs';
import { u as useLayout } from './layout-83f1b94f.mjs';
import './server.mjs';
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
import './AppMenuItem-66160126.mjs';

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
      const _component_Toast = resolveComponent("Toast");
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
//# sourceMappingURL=AppLayout-6d8c18ee.mjs.map
