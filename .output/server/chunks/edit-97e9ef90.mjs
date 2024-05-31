import { H as Head, T as Title } from './components-b178fbaf.mjs';
import { _ as __nuxt_component_0 } from './server-placeholder-da4405da.mjs';
import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { _ as _export_sfc, a as useToken } from './server.mjs';
import { c as createSlug } from './createSlug-702a15de.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import '@vueuse/integrations/useJwt';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  data() {
    return {
      modalRemoveThumbnail: false,
      data: null,
      image: null,
      renderRichEditor: false,
      thumbnailDeleted: false,
      loading: false,
      form: {
        title: null,
        category: null,
        description: null,
        content: null,
        thumbnail: null,
        slug: null
      }
    };
  },
  async mounted() {
    const data = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/announcement/" + this.$route.query.id);
    this.form = data;
    this.data = data.content;
    this.renderRichEditor = true;
  },
  methods: {
    async updateAnnouncement() {
      this.loading = true;
      if (this.thumbnailDeleted) {
        let urlImage = await this.uploadThumbnail();
        this.form.thumbnail = urlImage;
      }
      this.form.content = this.data;
      this.form.slug = createSlug(this.form.title);
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/announcement/" + this.$route.query.id, {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: this.form
      });
      this.loading = false;
      this.$router.push("/dashboard/announcement");
    },
    contentChange(v) {
      this.data = v;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = Head;
  const _component_Title = Title;
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_RichEditor = __nuxt_component_0;
  const _component_v_btn = resolveComponent("v-btn");
  const _component_Loader = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Edit Pengumuman`);
            } else {
              return [
                createTextVNode("Edit Pengumuman")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Title, null, {
            default: withCtx(() => [
              createTextVNode("Edit Pengumuman")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="grid animate-fade"><div class="col-12"><div class="card"><h3 class="text-2xl font-medium mb-5">Ubah Pengumuman</h3><div class="mb-8">`);
  _push(ssrRenderComponent(_component_v_text_field, {
    modelValue: $data.form.title,
    "onUpdate:modelValue": ($event) => $data.form.title = $event,
    variant: "outlined",
    "hide-details": "auto",
    label: "Judul Pengumuman"
  }, null, _parent));
  _push(`</div><div class="mb-8">`);
  _push(ssrRenderComponent(_component_v_text_field, {
    modelValue: $data.form.description,
    "onUpdate:modelValue": ($event) => $data.form.description = $event,
    variant: "outlined",
    "hide-details": "auto",
    label: "Deksripsi Pengumuman"
  }, null, _parent));
  _push(`</div><div class="mb-3 text-lg font-medium my-1">Konten</div>`);
  if ($data.renderRichEditor) {
    _push(ssrRenderComponent(_component_RichEditor, {
      data: $data.data,
      onContentChange: $options.contentChange
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_v_btn, {
    onClick: $options.updateAnnouncement,
    color: "#10B981",
    class: "mt-5 text-white px-3 py-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!$data.loading) {
          _push2(`<span class="capitalize"${_scopeId}>Ubah</span>`);
        } else {
          _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
        }
      } else {
        return [
          !$data.loading ? (openBlock(), createBlock("span", {
            key: 0,
            class: "capitalize"
          }, "Ubah")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Announcement/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { edit as default };
//# sourceMappingURL=edit-97e9ef90.mjs.map
