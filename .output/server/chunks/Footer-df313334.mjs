import script from './button.esm-b6fde1a6.mjs';
import { _ as __nuxt_component_1 } from './Loader-17ea2c2e.mjs';
import { resolveComponent, withCtx, openBlock, createBlock, useSSRContext } from 'vue';
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
      form: {
        profile_desa: null,
        address: null,
        instagram: null,
        twitter: null,
        youtube: null,
        whatsapp: null,
        facebook: "Facebook"
      },
      sosmed: {
        instagram: "Instagram",
        twitter: "Twitter",
        youtube: "Youtube",
        whatsapp: "Whatsapp",
        facebook: "Facebook"
      },
      loading: false
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      const data = await $fetch("http://api.desaku.muhichsan.com/api/footer");
      this.form = data;
    },
    async updateLocation() {
      this.loading = true;
      await $fetch("http://api.desaku.muhichsan.com/api/footer", {
        method: "PATCH",
        body: this.form
      });
      this.loading = false;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Setting Footer"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_Button = script;
      const _component_Loader = __nuxt_component_1;
      _push(`<!--[--><div class="flex justify-between items-center mb-3"><div class="text-2xl font-semibold mb-2">Pengaturan Footer</div></div><div class="grid mb-6"><div class="col-12"><div class="card">`);
      _push(ssrRenderComponent(_component_v_textarea, {
        rows: "3",
        variant: "outlined",
        label: "Profil Desa",
        clearable: "",
        modelValue: _ctx.form.profile,
        "onUpdate:modelValue": ($event) => _ctx.form.profile = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_textarea, {
        rows: "2",
        variant: "outlined",
        label: "Alamat Lengkap",
        clearable: "",
        modelValue: _ctx.form.address,
        "onUpdate:modelValue": ($event) => _ctx.form.address = $event
      }, null, _parent));
      _push(`<div class="mb-3 text-lg font-medium my-1">Sosial Media</div><div class="mb-6 flex w-full items-center"><div class="flex-auto grid grid-cols-2 gap-x-6">`);
      _push(ssrRenderComponent(_component_v_text_field, {
        readonly: "",
        modelValue: _ctx.sosmed.instagram,
        "onUpdate:modelValue": ($event) => _ctx.sosmed.instagram = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Instagram"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.instagram,
        "onUpdate:modelValue": ($event) => _ctx.form.instagram = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Link"
      }, null, _parent));
      _push(`</div></div><div class="mb-6 flex w-full items-center"><div class="flex-auto grid grid-cols-2 gap-x-6">`);
      _push(ssrRenderComponent(_component_v_text_field, {
        readonly: "",
        modelValue: _ctx.sosmed.twitter,
        "onUpdate:modelValue": ($event) => _ctx.sosmed.twitter = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Twitter"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.twitter,
        "onUpdate:modelValue": ($event) => _ctx.form.twitter = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Link"
      }, null, _parent));
      _push(`</div></div><div class="mb-6 flex w-full items-center"><div class="flex-auto grid grid-cols-2 gap-x-6">`);
      _push(ssrRenderComponent(_component_v_text_field, {
        readonly: "",
        modelValue: _ctx.sosmed.facebook,
        "onUpdate:modelValue": ($event) => _ctx.sosmed.facebook = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Twitter"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.facebook,
        "onUpdate:modelValue": ($event) => _ctx.form.facebook = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Link"
      }, null, _parent));
      _push(`</div></div><div class="mb-6 flex w-full items-center"><div class="flex-auto grid grid-cols-2 gap-x-6">`);
      _push(ssrRenderComponent(_component_v_text_field, {
        readonly: "",
        modelValue: _ctx.sosmed.youtube,
        "onUpdate:modelValue": ($event) => _ctx.sosmed.youtube = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Channel Youtube"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.youtube,
        "onUpdate:modelValue": ($event) => _ctx.form.youtube = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Link"
      }, null, _parent));
      _push(`</div></div><div class="mb-6 flex w-full items-center"><div class="flex-auto grid grid-cols-2 gap-x-6">`);
      _push(ssrRenderComponent(_component_v_text_field, {
        readonly: "",
        modelValue: _ctx.sosmed.whatsapp,
        "onUpdate:modelValue": ($event) => _ctx.sosmed.whatsapp = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Whatsapp"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.whatsapp,
        "onUpdate:modelValue": ($event) => _ctx.form.whatsapp = $event,
        variant: "outlined",
        "hide-details": "auto",
        placeholder: "62897882637329",
        label: "Link"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: _ctx.updateLocation,
        class: "mt-1 bg-[#10B981] text-white px-3 py-2"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Setting/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Footer-df313334.mjs.map
