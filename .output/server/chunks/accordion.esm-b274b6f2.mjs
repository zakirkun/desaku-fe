import { s as script$2 } from './index.esm-b9cc331d.mjs';
import { s as script$3 } from './index.esm-e4e3ec38.mjs';
import { B as BaseStyle, U as UniqueComponentId, D as DomHandler, R as Ripple$1 } from './server.mjs';
import { mergeProps, openBlock, createElementBlock, Fragment, renderList, createElementVNode, createBlock, resolveDynamicComponent, toDisplayString, createCommentVNode, createVNode, Transition, withCtx, withDirectives, vShow } from 'vue';
import { s as script$4 } from './basecomponent.esm-75555909.mjs';
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
  root: "p-accordion p-component",
  tab: {
    root: function root(_ref) {
      var instance = _ref.instance, index = _ref.index;
      return ["p-accordion-tab", {
        "p-accordion-tab-active": instance.isTabActive(index)
      }];
    },
    header: function header(_ref2) {
      var instance = _ref2.instance, tab = _ref2.tab, index = _ref2.index;
      return ["p-accordion-header", {
        "p-highlight": instance.isTabActive(index),
        "p-disabled": instance.getTabProp(tab, "disabled")
      }];
    },
    headerAction: "p-accordion-header-link p-accordion-header-action",
    headerIcon: "p-accordion-toggle-icon",
    headerTitle: "p-accordion-header-text",
    toggleableContent: "p-toggleable-content",
    content: "p-accordion-content"
  }
};
var AccordionStyle = BaseStyle.extend({
  name: "accordion",
  classes
});
var script$1 = {
  name: "BaseAccordion",
  "extends": script$4,
  props: {
    multiple: {
      type: Boolean,
      "default": false
    },
    activeIndex: {
      type: [Number, Array],
      "default": null
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    expandIcon: {
      type: String,
      "default": void 0
    },
    collapseIcon: {
      type: String,
      "default": void 0
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    }
  },
  style: AccordionStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Accordion",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:activeIndex", "tab-open", "tab-close", "tab-click"],
  data: function data() {
    return {
      id: this.$attrs.id,
      d_activeIndex: this.activeIndex
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    activeIndex: function activeIndex(newValue) {
      this.d_activeIndex = newValue;
    }
  },
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
  },
  methods: {
    isAccordionTab: function isAccordionTab(child) {
      return child.type.name === "AccordionTab";
    },
    isTabActive: function isTabActive(index) {
      return this.multiple ? this.d_activeIndex && this.d_activeIndex.includes(index) : this.d_activeIndex === index;
    },
    getTabProp: function getTabProp(tab, name) {
      return tab.props ? tab.props[name] : void 0;
    },
    getKey: function getKey(tab, index) {
      return this.getTabProp(tab, "header") || index;
    },
    getTabHeaderActionId: function getTabHeaderActionId(index) {
      return "".concat(this.id, "_").concat(index, "_header_action");
    },
    getTabContentId: function getTabContentId(index) {
      return "".concat(this.id, "_").concat(index, "_content");
    },
    getTabPT: function getTabPT(tab, key, index) {
      var count = this.tabs.length;
      var tabMetaData = {
        props: tab.props || {},
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index,
          count,
          first: index === 0,
          last: index === count - 1,
          active: this.isTabActive(index)
        }
      };
      return mergeProps(this.ptm("tab.".concat(key), {
        tab: tabMetaData
      }), this.ptm("accordiontab.".concat(key), {
        accordiontab: tabMetaData
      }), this.ptm("accordiontab.".concat(key), tabMetaData), this.ptmo(this.getTabProp(tab, "pt"), key, tabMetaData));
    },
    onTabClick: function onTabClick(event, tab, index) {
      this.changeActiveIndex(event, tab, index);
      this.$emit("tab-click", {
        originalEvent: event,
        index
      });
    },
    onTabKeyDown: function onTabKeyDown(event, tab, index) {
      switch (event.code) {
        case "ArrowDown":
          this.onTabArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onTabArrowUpKey(event);
          break;
        case "Home":
          this.onTabHomeKey(event);
          break;
        case "End":
          this.onTabEndKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onTabEnterKey(event, tab, index);
          break;
      }
    },
    onTabArrowDownKey: function onTabArrowDownKey(event) {
      var nextHeaderAction = this.findNextHeaderAction(event.target.parentElement.parentElement);
      nextHeaderAction ? this.changeFocusedTab(event, nextHeaderAction) : this.onTabHomeKey(event);
      event.preventDefault();
    },
    onTabArrowUpKey: function onTabArrowUpKey(event) {
      var prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement.parentElement);
      prevHeaderAction ? this.changeFocusedTab(event, prevHeaderAction) : this.onTabEndKey(event);
      event.preventDefault();
    },
    onTabHomeKey: function onTabHomeKey(event) {
      var firstHeaderAction = this.findFirstHeaderAction();
      this.changeFocusedTab(event, firstHeaderAction);
      event.preventDefault();
    },
    onTabEndKey: function onTabEndKey(event) {
      var lastHeaderAction = this.findLastHeaderAction();
      this.changeFocusedTab(event, lastHeaderAction);
      event.preventDefault();
    },
    onTabEnterKey: function onTabEnterKey(event, tab, index) {
      this.changeActiveIndex(event, tab, index);
      event.preventDefault();
    },
    findNextHeaderAction: function findNextHeaderAction(tabElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var nextTabElement = selfCheck ? tabElement : tabElement.nextElementSibling;
      var headerElement = DomHandler.findSingle(nextTabElement, '[data-pc-section="header"]');
      return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") ? this.findNextHeaderAction(headerElement.parentElement) : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
    },
    findPrevHeaderAction: function findPrevHeaderAction(tabElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var prevTabElement = selfCheck ? tabElement : tabElement.previousElementSibling;
      var headerElement = DomHandler.findSingle(prevTabElement, '[data-pc-section="header"]');
      return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") ? this.findPrevHeaderAction(headerElement.parentElement) : DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
    },
    findFirstHeaderAction: function findFirstHeaderAction() {
      return this.findNextHeaderAction(this.$el.firstElementChild, true);
    },
    findLastHeaderAction: function findLastHeaderAction() {
      return this.findPrevHeaderAction(this.$el.lastElementChild, true);
    },
    changeActiveIndex: function changeActiveIndex(event, tab, index) {
      if (!this.getTabProp(tab, "disabled")) {
        var active = this.isTabActive(index);
        var eventName = active ? "tab-close" : "tab-open";
        if (this.multiple) {
          if (active) {
            this.d_activeIndex = this.d_activeIndex.filter(function(i) {
              return i !== index;
            });
          } else {
            if (this.d_activeIndex)
              this.d_activeIndex.push(index);
            else
              this.d_activeIndex = [index];
          }
        } else {
          this.d_activeIndex = this.d_activeIndex === index ? null : index;
        }
        this.$emit("update:activeIndex", this.d_activeIndex);
        this.$emit(eventName, {
          originalEvent: event,
          index
        });
      }
    },
    changeFocusedTab: function changeFocusedTab(event, element) {
      if (element) {
        DomHandler.focus(element);
        if (this.selectOnFocus) {
          var index = parseInt(element.parentElement.parentElement.dataset.pcIndex, 10);
          var tab = this.tabs[index];
          this.changeActiveIndex(event, tab, index);
        }
      }
    }
  },
  computed: {
    tabs: function tabs() {
      var _this = this;
      return this.$slots["default"]().reduce(function(tabs2, child) {
        if (_this.isAccordionTab(child)) {
          tabs2.push(child);
        } else if (child.children && child.children instanceof Array) {
          child.children.forEach(function(nestedChild) {
            if (_this.isAccordionTab(nestedChild)) {
              tabs2.push(nestedChild);
            }
          });
        }
        return tabs2;
      }, []);
    }
  },
  components: {
    ChevronDownIcon: script$2,
    ChevronRightIcon: script$3
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
var _hoisted_1 = ["data-pc-index", "data-p-active"];
var _hoisted_2 = ["data-p-highlight", "data-p-disabled"];
var _hoisted_3 = ["id", "tabindex", "aria-disabled", "aria-expanded", "aria-controls", "onClick", "onKeydown"];
var _hoisted_4 = ["id", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.tabs, function(tab, i) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: $options.getKey(tab, i),
      "class": _ctx.cx("tab.root", {
        tab,
        index: i
      })
    }, $options.getTabPT(tab, "root", i), {
      "data-pc-name": "accordiontab",
      "data-pc-index": i,
      "data-p-active": $options.isTabActive(i)
    }), [createElementVNode("div", mergeProps({
      style: $options.getTabProp(tab, "headerStyle"),
      "class": [_ctx.cx("tab.header", {
        tab,
        index: i
      }), $options.getTabProp(tab, "headerClass")]
    }, _objectSpread(_objectSpread({}, $options.getTabProp(tab, "headerProps")), $options.getTabPT(tab, "header", i)), {
      "data-p-highlight": $options.isTabActive(i),
      "data-p-disabled": $options.getTabProp(tab, "disabled")
    }), [createElementVNode("a", mergeProps({
      id: $options.getTabHeaderActionId(i),
      "class": _ctx.cx("tab.headerAction"),
      tabindex: $options.getTabProp(tab, "disabled") ? -1 : _ctx.tabindex,
      role: "button",
      "aria-disabled": $options.getTabProp(tab, "disabled"),
      "aria-expanded": $options.isTabActive(i),
      "aria-controls": $options.getTabContentId(i),
      onClick: function onClick($event) {
        return $options.onTabClick($event, tab, i);
      },
      onKeydown: function onKeydown($event) {
        return $options.onTabKeyDown($event, tab, i);
      }
    }, _objectSpread(_objectSpread({}, $options.getTabProp(tab, "headeractionprops")), $options.getTabPT(tab, "headeraction", i))), [tab.children && tab.children.headericon ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.headericon), {
      key: 0,
      isTabActive: $options.isTabActive(i),
      active: $options.isTabActive(i),
      index: i
    }, null, 8, ["isTabActive", "active", "index"])) : $options.isTabActive(i) ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.collapseicon ? _ctx.$slots.collapseicon : _ctx.collapseIcon ? "span" : "ChevronDownIcon"), mergeProps({
      key: 1,
      "class": [_ctx.cx("tab.headerIcon"), _ctx.collapseIcon],
      "aria-hidden": "true"
    }, $options.getTabPT(tab, "headericon", i)), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.expandicon ? _ctx.$slots.expandicon : _ctx.expandIcon ? "span" : "ChevronRightIcon"), mergeProps({
      key: 2,
      "class": [_ctx.cx("tab.headerIcon"), _ctx.expandIcon],
      "aria-hidden": "true"
    }, $options.getTabPT(tab, "headericon", i)), null, 16, ["class"])), tab.props && tab.props.header ? (openBlock(), createElementBlock("span", mergeProps({
      key: 3,
      "class": _ctx.cx("tab.headerTitle")
    }, $options.getTabPT(tab, "headertitle", i)), toDisplayString(tab.props.header), 17)) : createCommentVNode("", true), tab.children && tab.children.header ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.header), {
      key: 4
    })) : createCommentVNode("", true)], 16, _hoisted_3)], 16, _hoisted_2), createVNode(Transition, mergeProps({
      name: "p-toggleable-content"
    }, $options.getTabPT(tab, "transition", i)), {
      "default": withCtx(function() {
        return [(_ctx.lazy ? $options.isTabActive(i) : true) ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
          key: 0,
          id: $options.getTabContentId(i),
          style: $options.getTabProp(tab, "contentStyle"),
          "class": [_ctx.cx("tab.toggleableContent"), $options.getTabProp(tab, "contentClass")],
          role: "region",
          "aria-labelledby": $options.getTabHeaderActionId(i)
        }, _objectSpread(_objectSpread({}, $options.getTabProp(tab, "contentProps")), $options.getTabPT(tab, "toggleablecontent", i))), [createElementVNode("div", mergeProps({
          "class": _ctx.cx("tab.content")
        }, $options.getTabPT(tab, "content", i)), [(openBlock(), createBlock(resolveDynamicComponent(tab)))], 16)], 16, _hoisted_4)), [[vShow, _ctx.lazy ? true : $options.isTabActive(i)]]) : createCommentVNode("", true)];
      }),
      _: 2
    }, 1040)], 16, _hoisted_1);
  }), 128))], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=accordion.esm-b274b6f2.mjs.map
