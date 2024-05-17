import { ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './AppLayout-005c0158.mjs';
import { useSSRContext } from 'vue';
import './toast.esm-6d569320.mjs';
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
import './AppTopbar-239e0810.mjs';
import './button.esm-b6fde1a6.mjs';
import './badge.esm-9b923ea6.mjs';
import './index.esm-7cc890d4.mjs';
import './layout-83f1b94f.mjs';
import './AppSidebar-c414e9a8.mjs';
import './AppMenuItem-4b562e00.mjs';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-138ca501.mjs.map
