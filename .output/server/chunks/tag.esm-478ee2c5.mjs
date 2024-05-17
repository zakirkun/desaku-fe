import { s as script$2 } from './basecomponent.esm-75555909.mjs';
import { B as BaseStyle } from './server.mjs';
import { openBlock, createElementBlock, mergeProps, createBlock, resolveDynamicComponent, createCommentVNode, renderSlot, createElementVNode, toDisplayString } from 'vue';
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
    var props = _ref.props;
    return ["p-tag p-component", {
      "p-tag-info": props.severity === "info",
      "p-tag-success": props.severity === "success",
      "p-tag-warning": props.severity === "warning",
      "p-tag-danger": props.severity === "danger",
      "p-tag-secondary": props.severity === "secondary",
      "p-tag-contrast": props.severity === "contrast",
      "p-tag-rounded": props.rounded
    }];
  },
  icon: "p-tag-icon",
  value: "p-tag-value"
};
var TagStyle = BaseStyle.extend({
  name: "tag",
  classes
});
var script$1 = {
  name: "BaseTag",
  "extends": script$2,
  props: {
    value: null,
    severity: null,
    rounded: Boolean,
    icon: String
  },
  style: TagStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Tag",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), mergeProps({
    key: 0,
    "class": _ctx.cx("icon")
  }, _ctx.ptm("icon")), null, 16, ["class"])) : _ctx.icon ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": [_ctx.cx("icon"), _ctx.icon]
  }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true), _ctx.value || _ctx.$slots["default"] ? renderSlot(_ctx.$slots, "default", {
    key: 2
  }, function() {
    return [createElementVNode("span", mergeProps({
      "class": _ctx.cx("value")
    }, _ctx.ptm("value")), toDisplayString(_ctx.value), 17)];
  }) : createCommentVNode("", true)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=tag.esm-478ee2c5.mjs.map
