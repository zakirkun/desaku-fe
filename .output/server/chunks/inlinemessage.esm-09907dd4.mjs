import { s as script$3 } from './index.esm-7661e672.mjs';
import { s as script$2, a as script$1$1 } from './index.esm-affb65ed.mjs';
import { s as script$4 } from './index.esm-ed1c6cc7.mjs';
import { s as script$5 } from './basecomponent.esm-75555909.mjs';
import { B as BaseStyle } from './server.mjs';
import { openBlock, createElementBlock, mergeProps, renderSlot, createBlock, resolveDynamicComponent, createElementVNode, createTextVNode } from 'vue';
import './baseicon.esm-961b188b.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'vue/server-renderer';
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

var classes = {
  root: function root(_ref) {
    var props = _ref.props, instance = _ref.instance;
    return ["p-inline-message p-component p-inline-message-" + props.severity, {
      "p-inline-message-icon-only": !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ["p-inline-message-icon", props.icon];
  },
  text: "p-inline-message-text"
};
var InlineMessageStyle = BaseStyle.extend({
  name: "inlinemessage",
  classes
});
var script$1 = {
  name: "BaseInlineMessage",
  "extends": script$5,
  props: {
    severity: {
      type: String,
      "default": "error"
    },
    icon: {
      type: String,
      "default": void 0
    }
  },
  style: InlineMessageStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "InlineMessage",
  "extends": script$1,
  inheritAttrs: false,
  timeout: null,
  data: function data() {
    return {
      visible: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (!this.sticky) {
      setTimeout(function() {
        _this.visible = false;
      }, this.life);
    }
  },
  computed: {
    iconComponent: function iconComponent() {
      return {
        info: script$2,
        success: script$3,
        warn: script$1$1,
        error: script$4
      }[this.severity];
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "icon", {}, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? "span" : $options.iconComponent), mergeProps({
      "class": _ctx.cx("icon")
    }, _ctx.ptm("icon")), null, 16, ["class"]))];
  }), createElementVNode("span", mergeProps({
    "class": _ctx.cx("text")
  }, _ctx.ptm("text")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [createTextVNode("\xA0")];
  })], 16)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=inlinemessage.esm-09907dd4.mjs.map
