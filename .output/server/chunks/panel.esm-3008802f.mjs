import { s as script$3 } from './index.esm-d9271abc.mjs';
import { s as script$2 } from './index.esm-ef0111f5.mjs';
import { B as BaseStyle, U as UniqueComponentId, R as Ripple$1 } from './server.mjs';
import { s as script$4 } from './basecomponent.esm-75555909.mjs';
import { resolveDirective, openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot, normalizeClass, toDisplayString, createCommentVNode, withDirectives, createBlock, resolveDynamicComponent, normalizeProps, guardReactiveProps, createVNode, Transition, withCtx, vShow } from 'vue';
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
    var props = _ref.props;
    return ["p-panel p-component", {
      "p-panel-toggleable": props.toggleable
    }];
  },
  header: "p-panel-header",
  title: "p-panel-title",
  icons: "p-panel-icons",
  toggler: "p-panel-header-icon p-panel-toggler p-link",
  toggleablecontent: "p-toggleable-content",
  content: "p-panel-content",
  footer: "p-panel-footer"
};
var PanelStyle = BaseStyle.extend({
  name: "panel",
  classes
});
var script$1 = {
  name: "BasePanel",
  "extends": script$4,
  props: {
    header: String,
    toggleable: Boolean,
    collapsed: Boolean,
    toggleButtonProps: {
      type: null,
      "default": null
    }
  },
  style: PanelStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Panel",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:collapsed", "toggle"],
  data: function data() {
    return {
      id: this.$attrs.id,
      d_collapsed: this.collapsed
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    collapsed: function collapsed(newValue) {
      this.d_collapsed = newValue;
    }
  },
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
  },
  methods: {
    toggle: function toggle(event) {
      this.d_collapsed = !this.d_collapsed;
      this.$emit("update:collapsed", this.d_collapsed);
      this.$emit("toggle", {
        originalEvent: event,
        value: this.d_collapsed
      });
    },
    onKeyDown: function onKeyDown(event) {
      if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") {
        this.toggle(event);
        event.preventDefault();
      }
    }
  },
  computed: {
    buttonAriaLabel: function buttonAriaLabel() {
      return this.toggleButtonProps && this.toggleButtonProps.ariaLabel ? this.toggleButtonProps.ariaLabel : this.header;
    }
  },
  components: {
    PlusIcon: script$2,
    MinusIcon: script$3
  },
  directives: {
    ripple: Ripple$1
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1 = ["id"];
var _hoisted_2 = ["id", "aria-label", "aria-controls", "aria-expanded"];
var _hoisted_3 = ["id", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header", {
    id: $data.id + "_header",
    "class": normalizeClass(_ctx.cx("title"))
  }, function() {
    return [_ctx.header ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      id: $data.id + "_header",
      "class": _ctx.cx("title")
    }, _ctx.ptm("title")), toDisplayString(_ctx.header), 17, _hoisted_1)) : createCommentVNode("", true)];
  }), createElementVNode("div", mergeProps({
    "class": _ctx.cx("icons")
  }, _ctx.ptm("icons")), [renderSlot(_ctx.$slots, "icons"), _ctx.toggleable ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    id: $data.id + "_header",
    type: "button",
    role: "button",
    "class": _ctx.cx("toggler"),
    "aria-label": $options.buttonAriaLabel,
    "aria-controls": $data.id + "_content",
    "aria-expanded": !$data.d_collapsed,
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.toggle && $options.toggle.apply($options, arguments);
    }),
    onKeydown: _cache[1] || (_cache[1] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.toggleButtonProps), _ctx.ptm("toggler"))), [renderSlot(_ctx.$slots, "togglericon", {
    collapsed: $data.d_collapsed
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent($data.d_collapsed ? "PlusIcon" : "MinusIcon"), normalizeProps(guardReactiveProps(_ctx.ptm("togglericon"))), null, 16))];
  })], 16, _hoisted_2)), [[_directive_ripple]]) : createCommentVNode("", true)], 16)], 16), createVNode(Transition, mergeProps({
    name: "p-toggleable-content"
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [withDirectives(createElementVNode("div", mergeProps({
        id: $data.id + "_content",
        "class": _ctx.cx("toggleablecontent"),
        role: "region",
        "aria-labelledby": $data.id + "_header"
      }, _ctx.ptm("toggleablecontent")), [createElementVNode("div", mergeProps({
        "class": _ctx.cx("content")
      }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        "class": _ctx.cx("footer")
      }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16, _hoisted_3), [[vShow, !$data.d_collapsed]])];
    }),
    _: 3
  }, 16)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=panel.esm-3008802f.mjs.map
