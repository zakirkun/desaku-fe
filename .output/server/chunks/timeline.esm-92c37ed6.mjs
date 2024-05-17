import { B as BaseStyle, O as ObjectUtils } from './server.mjs';
import { s as script$2 } from './basecomponent.esm-75555909.mjs';
import { openBlock, createElementBlock, mergeProps, Fragment, renderList, createElementVNode, renderSlot, createCommentVNode } from 'vue';
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
    return ["p-timeline p-component", "p-timeline-" + props.align, "p-timeline-" + props.layout];
  },
  event: "p-timeline-event",
  opposite: "p-timeline-event-opposite",
  separator: "p-timeline-event-separator",
  marker: "p-timeline-event-marker",
  connector: "p-timeline-event-connector",
  content: "p-timeline-event-content"
};
var TimelineStyle = BaseStyle.extend({
  name: "timeline",
  classes
});
var script$1 = {
  name: "BaseTimeline",
  "extends": script$2,
  props: {
    value: null,
    align: {
      mode: String,
      "default": "left"
    },
    layout: {
      mode: String,
      "default": "vertical"
    },
    dataKey: null
  },
  style: TimelineStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "Timeline",
  "extends": script$1,
  inheritAttrs: false,
  methods: {
    getKey: function getKey(item, index) {
      return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index;
    },
    getPTOptions: function getPTOptions(key, index) {
      return this.ptm(key, {
        context: {
          index,
          count: this.value.length
        }
      });
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, function(item, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: $options.getKey(item, index),
      "class": _ctx.cx("event")
    }, $options.getPTOptions("event", index)), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("opposite", {
        index
      })
    }, $options.getPTOptions("opposite", index)), [renderSlot(_ctx.$slots, "opposite", {
      item,
      index
    })], 16), createElementVNode("div", mergeProps({
      "class": _ctx.cx("separator")
    }, $options.getPTOptions("separator", index)), [renderSlot(_ctx.$slots, "marker", {
      item,
      index
    }, function() {
      return [createElementVNode("div", mergeProps({
        "class": _ctx.cx("marker")
      }, $options.getPTOptions("marker", index)), null, 16)];
    }), index !== _ctx.value.length - 1 ? renderSlot(_ctx.$slots, "connector", {
      key: 0,
      item,
      index
    }, function() {
      return [createElementVNode("div", mergeProps({
        "class": _ctx.cx("connector")
      }, $options.getPTOptions("connector", index)), null, 16)];
    }) : createCommentVNode("", true)], 16), createElementVNode("div", mergeProps({
      "class": _ctx.cx("content")
    }, $options.getPTOptions("content", index)), [renderSlot(_ctx.$slots, "content", {
      item,
      index
    })], 16)], 16);
  }), 128))], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=timeline.esm-92c37ed6.mjs.map
