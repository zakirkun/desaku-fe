import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { i as useHead } from './server.mjs';
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

const __default__ = {
  data() {
    return {
      data: null,
      loading: false,
      form: {
        description: null,
        video: null
      }
    };
  },
  methods: {
    async addVideo() {
      this.loading = true;
      await $fetch("http://api.desaku.muhichsan.com/api/video-gallery", {
        method: "POST",
        body: this.form
      });
      this.loading = false;
      this.$router.push("/dashboard/galeri");
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Tambah Video Galeri"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_Loading = resolveComponent("Loading");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid" }, _attrs))}><div class="col-12"><div class="card"><h3 class="text-2xl font-medium mb-5">Tambah Gambar Galeri</h3><div>`);
      _push(ssrRenderComponent(_component_v_textarea, {
        rows: "2",
        variant: "outlined",
        label: "Deskripsi Video",
        clearable: "",
        modelValue: _ctx.form.description,
        "onUpdate:modelValue": ($event) => _ctx.form.description = $event
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.video,
        "onUpdate:modelValue": ($event) => _ctx.form.video = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Video Galeri",
        placeholder: "https://www.youtube.com/embed/DhcIUYHiJDI?si=m46FieubiMP8R7P4"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: _ctx.addVideo,
        class: "mt-5 bg-[#10B981] text-white px-3 py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.loading) {
              _push2(`<span${_scopeId}>Submit</span>`);
            } else {
              _push2(ssrRenderComponent(_component_Loading, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              !_ctx.loading ? (openBlock(), createBlock("span", { key: 0 }, "Submit")) : (openBlock(), createBlock(_component_Loading, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Gallery/video/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-7cc4d2d8.mjs.map
