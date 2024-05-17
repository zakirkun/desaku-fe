import script from './button.esm-b6fde1a6.mjs';
import { _ as __nuxt_component_1 } from './Loader-17ea2c2e.mjs';
import { resolveComponent, withCtx, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { i as useHead } from './server.mjs';
import './badge.esm-9b923ea6.mjs';
import './basecomponent.esm-75555909.mjs';
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
import './index.esm-7cc890d4.mjs';
import './baseicon.esm-961b188b.mjs';

const __default__ = {
  data() {
    return {
      loading: false,
      form: {
        desa: null,
        kecamatan: null,
        kelurahan: null,
        rt: null,
        rw: null,
        kabupaten: null,
        maps: null
      }
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      const data = await $fetch("http://api.desaku.muhichsan.com/api/location");
      this.form = data;
      this.form.maps = `<iframe src="${data.maps}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    },
    async updateLocation() {
      this.loading = true;
      await $fetch("http://api.desaku.muhichsan.com/api/location", {
        method: "PATCH",
        body: this.form
      });
      this.loading = false;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Location",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Setting Location"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_Button = script;
      const _component_Loader = __nuxt_component_1;
      _push(`<!--[--><div class="flex justify-between items-center mb-3"><div class="text-2xl font-semibold mb-2">Lokasi Desa</div></div><div class="grid mb-6"><div class="col-12"><div class="card"><div class="grid grid-cols-2 gap-x-4"><div>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.desa,
        "onUpdate:modelValue": ($event) => _ctx.form.desa = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Desa"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.kabupaten,
        "onUpdate:modelValue": ($event) => _ctx.form.kabupaten = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Kabupaten"
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 my-5 gap-x-4"><div>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.kecamatan,
        "onUpdate:modelValue": ($event) => _ctx.form.kecamatan = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Kecamatan"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.kelurahan,
        "onUpdate:modelValue": ($event) => _ctx.form.kelurahan = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Kelurahan"
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-2 gap-x-4"><div>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.rt,
        "onUpdate:modelValue": ($event) => _ctx.form.rt = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "RT"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.rw,
        "onUpdate:modelValue": ($event) => _ctx.form.rw = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "RW"
      }, null, _parent));
      _push(`</div></div><div class="mb-3 text-lg font-medium my-1 mt-6">Embed Maps Desa</div><div class="mt-5 w-full">`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.maps,
        "onUpdate:modelValue": ($event) => _ctx.form.maps = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Koordinat Desa",
        placeholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13775.689247611277!2d110.4623105457275!3d-7.719445311589754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b002c9e90df%3A0x23b5967fa1ba0b53!2sKledoan%20joglo's%20Villa!5e0!3m2!1sen!2sid!4v1715591524593!5m2!1sen!2sid"
      }, {
        "prepend-inner": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.2em" viewBox="0 0 256 367"${_scopeId}><path fill="#34a853" d="M70.585 271.865a370.712 370.712 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"${_scopeId}></path><path fill="#fbbc04" d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"${_scopeId}></path><path fill="#4285f4" d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"${_scopeId}></path><path fill="#1a73e8" d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"${_scopeId}></path><path fill="#ea4335" d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "mr-1",
                xmlns: "http://www.w3.org/2000/svg",
                width: "1.3em",
                height: "1.2em",
                viewBox: "0 0 256 367"
              }, [
                createVNode("path", {
                  fill: "#34a853",
                  d: "M70.585 271.865a370.712 370.712 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"
                }),
                createVNode("path", {
                  fill: "#fbbc04",
                  d: "M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"
                }),
                createVNode("path", {
                  fill: "#4285f4",
                  d: "M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"
                }),
                createVNode("path", {
                  fill: "#1a73e8",
                  d: "M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"
                }),
                createVNode("path", {
                  fill: "#ea4335",
                  d: "M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.form.maps) {
        _push(`<div class="mx-auto mt-6 flex justify-center">${_ctx.form.maps}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: _ctx.updateLocation,
        class: "mt-5 bg-[#10B981] text-white px-3 py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.loading) {
              _push2(`<span${_scopeId}>Update</span>`);
            } else {
              _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
            }
          } else {
            return [
              !_ctx.loading ? (openBlock(), createBlock("span", { key: 0 }, "Update")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Setting/Location.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Location-c653b3b3.mjs.map
