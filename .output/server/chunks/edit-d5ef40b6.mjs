import script from './button.esm-b6fde1a6.mjs';
import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
      data: null,
      renderRichEditor: false,
      form: {
        name: null
      },
      headers: [
        { title: "Title", align: "start", sortable: false, key: "title" },
        { title: "Category", align: "start", key: "category" },
        { title: "Content", align: "end", key: "content" }
      ],
      items: []
    };
  },
  async mounted() {
    const data = await $fetch("http://api.desaku.muhichsan.com/api/news-category/" + this.$route.query.id);
    this.form.name = data.name;
  },
  methods: {
    async addNews() {
      this.form.content = this.data;
      await $fetch("http://api.desaku.muhichsan.com/api/news-category/" + this.$route.query.id, {
        method: "PATCH",
        body: this.form
      });
      this.$router.push("/dashboard/news");
    },
    contentChange(v) {
      this.data = v;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Edit Kategori Berita"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_Button = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid" }, _attrs))}><div class="col-12"><div class="card"><h3 class="text-2xl font-medium mb-5">Ubah Kategori Berita</h3><div>`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: _ctx.form.name,
        "onUpdate:modelValue": ($event) => _ctx.form.name = $event,
        variant: "outlined",
        "hide-details": "auto",
        label: "Kategori Berita"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: _ctx.addNews,
        class: "mt-5 bg-[#10B981] text-white px-3 py-2",
        label: "Ubah"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/News/category/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-d5ef40b6.mjs.map
