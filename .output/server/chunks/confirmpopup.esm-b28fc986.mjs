import script$2 from './button.esm-b6fde1a6.mjs';
import { B as BaseStyle, e as ConfirmationEventBus, Z as ZIndexUtils, D as DomHandler, C as ConnectedOverlayScrollHandler, d as FocusTrap } from './server.mjs';
import { O as OverlayEventBus } from './overlayeventbus.esm-d527dbf2.mjs';
import { s as script$3 } from './portal.esm-e4a6f08c.mjs';
import { s as script$4 } from './basecomponent.esm-75555909.mjs';
import { resolveComponent, resolveDirective, openBlock, createBlock, withCtx, createVNode, Transition, mergeProps, withDirectives, createElementBlock, renderSlot, Fragment, resolveDynamicComponent, normalizeClass, createCommentVNode, createElementVNode, toDisplayString, createSlots } from 'vue';
import './badge.esm-9b923ea6.mjs';
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
import './index.esm-7cc890d4.mjs';
import './baseicon.esm-961b188b.mjs';

var classes = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-confirm-popup p-component", {
      "p-ripple-disabled": instance.$primevue.config.ripple === false
    }];
  },
  content: "p-confirm-popup-content",
  icon: "p-confirm-popup-icon",
  message: "p-confirm-popup-message",
  footer: "p-confirm-popup-footer",
  rejectButton: function rejectButton(_ref2) {
    var instance = _ref2.instance;
    return ["p-confirm-popup-reject", instance.confirmation && !instance.confirmation.rejectClass ? "p-button-sm p-button-text" : null];
  },
  acceptButton: function acceptButton(_ref3) {
    var instance = _ref3.instance;
    return ["p-confirm-popup-accept", instance.confirmation && !instance.confirmation.acceptClass ? "p-button-sm" : null];
  }
};
var ConfirmPopupStyle = BaseStyle.extend({
  name: "confirmpopup",
  classes
});
var script$1 = {
  name: "BaseConfirmPopup",
  "extends": script$4,
  props: {
    group: String
  },
  style: ConfirmPopupStyle,
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};
var script = {
  name: "ConfirmPopup",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      visible: false,
      confirmation: null,
      autoFocusAccept: null,
      autoFocusReject: null
    };
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  confirmListener: null,
  closeListener: null,
  mounted: function mounted() {
    var _this = this;
    this.confirmListener = function(options) {
      if (!options) {
        return;
      }
      if (options.group === _this.group) {
        _this.confirmation = options;
        _this.target = options.target;
        if (_this.confirmation.onShow) {
          _this.confirmation.onShow();
        }
        _this.visible = true;
      }
    };
    this.closeListener = function() {
      _this.visible = false;
      _this.confirmation = null;
    };
    ConfirmationEventBus.on("confirm", this.confirmListener);
    ConfirmationEventBus.on("close", this.closeListener);
  },
  beforeUnmount: function beforeUnmount() {
    ConfirmationEventBus.off("confirm", this.confirmListener);
    ConfirmationEventBus.off("close", this.closeListener);
    this.unbindOutsideClickListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindResizeListener();
    if (this.container) {
      ZIndexUtils.clear(this.container);
      this.container = null;
    }
    this.target = null;
    this.confirmation = null;
  },
  methods: {
    accept: function accept() {
      if (this.confirmation.accept) {
        this.confirmation.accept();
      }
      this.visible = false;
    },
    reject: function reject() {
      if (this.confirmation.reject) {
        this.confirmation.reject();
      }
      this.visible = false;
    },
    onHide: function onHide() {
      if (this.confirmation.onHide) {
        this.confirmation.onHide();
      }
      this.visible = false;
    },
    onAcceptKeydown: function onAcceptKeydown(event) {
      if (event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter") {
        this.accept();
        DomHandler.focus(this.target);
        event.preventDefault();
      }
    },
    onRejectKeydown: function onRejectKeydown(event) {
      if (event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter") {
        this.reject();
        DomHandler.focus(this.target);
        event.preventDefault();
      }
    },
    onEnter: function onEnter(el) {
      this.autoFocusAccept = this.confirmation.defaultFocus === void 0 || this.confirmation.defaultFocus === "accept" ? true : false;
      this.autoFocusReject = this.confirmation.defaultFocus === "reject" ? true : false;
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      ZIndexUtils.set("overlay", el, this.$primevue.config.zIndex.overlay);
    },
    onAfterEnter: function onAfterEnter() {
      this.focus();
    },
    onLeave: function onLeave() {
      this.autoFocusAccept = null;
      this.autoFocusReject = null;
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
    },
    onAfterLeave: function onAfterLeave(el) {
      ZIndexUtils.clear(el);
    },
    alignOverlay: function alignOverlay() {
      DomHandler.absolutePosition(this.container, this.target, false);
      var containerOffset = DomHandler.getOffset(this.container);
      var targetOffset = DomHandler.getOffset(this.target);
      var arrowLeft = 0;
      if (containerOffset.left < targetOffset.left) {
        arrowLeft = targetOffset.left - containerOffset.left;
      }
      this.container.style.setProperty("--overlayArrowLeft", "".concat(arrowLeft, "px"));
      if (containerOffset.top < targetOffset.top) {
        this.container.setAttribute("data-p-confirm-popup-flipped", "true");
        !this.isUnstyled && DomHandler.addClass(this.container, "p-confirm-popup-flipped");
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this2.visible && _this2.container && !_this2.container.contains(event.target) && !_this2.isTargetClicked(event)) {
            if (_this2.confirmation.onHide) {
              _this2.confirmation.onHide();
            }
            _this2.visible = false;
          } else {
            _this2.alignOverlay();
          }
        };
        document.addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function() {
          if (_this3.visible) {
            _this3.visible = false;
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this4.visible && !DomHandler.isTouchDevice()) {
            _this4.visible = false;
          }
        };
        window.addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    focus: function focus() {
      var focusTarget = this.container.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus({
          preventScroll: true
        });
      }
    },
    isTargetClicked: function isTargetClicked(event) {
      return this.target && (this.target === event.target || this.target.contains(event.target));
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    },
    onOverlayKeydown: function onOverlayKeydown(event) {
      if (event.code === "Escape") {
        ConfirmationEventBus.emit("close", this.closeListener);
        DomHandler.focus(this.target);
      }
    },
    getCXOptions: function getCXOptions(icon, iconProps) {
      return {
        contenxt: {
          icon,
          iconClass: iconProps["class"]
        }
      };
    }
  },
  computed: {
    message: function message() {
      return this.confirmation ? this.confirmation.message : null;
    },
    acceptLabel: function acceptLabel() {
      return this.confirmation ? this.confirmation.acceptLabel || this.$primevue.config.locale.accept : null;
    },
    rejectLabel: function rejectLabel() {
      return this.confirmation ? this.confirmation.rejectLabel || this.$primevue.config.locale.reject : null;
    },
    acceptIcon: function acceptIcon() {
      return this.confirmation ? this.confirmation.acceptIcon : null;
    },
    rejectIcon: function rejectIcon() {
      return this.confirmation ? this.confirmation.rejectIcon : null;
    }
  },
  components: {
    CPButton: script$2,
    Portal: script$3
  },
  directives: {
    focustrap: FocusTrap
  }
};
var _hoisted_1 = ["aria-modal"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CPButton = resolveComponent("CPButton");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createBlock(_component_Portal, null, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-confirm-popup",
        onEnter: $options.onEnter,
        onAfterEnter: $options.onAfterEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            role: "alertdialog",
            "class": _ctx.cx("root"),
            "aria-modal": $data.visible,
            onClick: _cache[2] || (_cache[2] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[3] || (_cache[3] = function() {
              return $options.onOverlayKeydown && $options.onOverlayKeydown.apply($options, arguments);
            })
          }, _ctx.ptmi("root")), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
            key: 0,
            message: $data.confirmation,
            onAccept: $options.accept,
            onReject: $options.reject,
            acceptCallback: $options.accept,
            rejectCallback: $options.reject
          }) : (openBlock(), createElementBlock(Fragment, {
            key: 1
          }, [!_ctx.$slots.message ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("content")
          }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "icon", {}, function() {
            return [_ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), {
              key: 0,
              "class": normalizeClass(_ctx.cx("icon"))
            }, null, 8, ["class"])) : $data.confirmation.icon ? (openBlock(), createElementBlock("span", mergeProps({
              key: 1,
              "class": [$data.confirmation.icon, _ctx.cx("icon")]
            }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true)];
          }), createElementVNode("span", mergeProps({
            "class": _ctx.cx("message")
          }, _ctx.ptm("message")), toDisplayString($data.confirmation.message), 17)], 16)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.message), {
            key: 1,
            message: $data.confirmation
          }, null, 8, ["message"])), createElementVNode("div", mergeProps({
            "class": _ctx.cx("footer")
          }, _ctx.ptm("footer")), [createVNode(_component_CPButton, {
            label: $options.rejectLabel,
            onClick: _cache[0] || (_cache[0] = function($event) {
              return $options.reject();
            }),
            onKeydown: $options.onRejectKeydown,
            autofocus: $data.autoFocusReject,
            "class": normalizeClass([_ctx.cx("rejectButton"), $data.confirmation.rejectClass]),
            unstyled: _ctx.unstyled,
            pt: _ctx.ptm("rejectButton")
          }, createSlots({
            _: 2
          }, [$options.rejectIcon || _ctx.$slots.rejecticon ? {
            name: "icon",
            fn: withCtx(function(iconProps) {
              return [renderSlot(_ctx.$slots, "rejecticon", {}, function() {
                return [createElementVNode("span", mergeProps({
                  "class": [$options.rejectIcon, iconProps["class"]]
                }, _ctx.ptm("rejectButton")["icon"], {
                  "data-pc-section": "rejectbuttonicon"
                }), null, 16)];
              })];
            }),
            key: "0"
          } : void 0]), 1032, ["label", "onKeydown", "autofocus", "class", "unstyled", "pt"]), createVNode(_component_CPButton, {
            label: $options.acceptLabel,
            onClick: _cache[1] || (_cache[1] = function($event) {
              return $options.accept();
            }),
            onKeydown: $options.onAcceptKeydown,
            autofocus: $data.autoFocusAccept,
            "class": normalizeClass([_ctx.cx("acceptButton"), $data.confirmation.acceptClass]),
            unstyled: _ctx.unstyled,
            pt: _ctx.ptm("acceptButton")
          }, createSlots({
            _: 2
          }, [$options.acceptIcon || _ctx.$slots.accepticon ? {
            name: "icon",
            fn: withCtx(function(iconProps) {
              return [renderSlot(_ctx.$slots, "accepticon", {}, function() {
                return [createElementVNode("span", mergeProps({
                  "class": [$options.acceptIcon, iconProps["class"]]
                }, _ctx.ptm("acceptButton")["icon"], {
                  "data-pc-section": "acceptbuttonicon"
                }), null, 16)];
              })];
            }),
            key: "0"
          } : void 0]), 1032, ["label", "onKeydown", "autofocus", "class", "unstyled", "pt"])], 16)], 64))], 16, _hoisted_1)), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  });
}
script.render = render;

export { script as default };
//# sourceMappingURL=confirmpopup.esm-b28fc986.mjs.map
