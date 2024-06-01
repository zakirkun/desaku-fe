import { e as useParseJWT } from './server.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './AppMenuItem-66160126.mjs';
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
import './layout-83f1b94f.mjs';

const _sfc_main = {
  __name: "AppSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const model = ref([
      {
        label: "Menu",
        items: [
          {
            user: false,
            label: "Profil Desa",
            icon: "pi pi-fw pi-user",
            items: [
              { label: "Tentang Desa", to: "/dashboard/profile/about" },
              { label: "Visi & Misi", to: "/dashboard/profile/visi" },
              { label: "Sejarah Desa", to: "/dashboard/profile/history" }
            ]
          },
          {
            user: true,
            label: "Informasi Publik",
            icon: "pi pi-fw pi-book",
            items: [
              { label: "Berita", to: "/dashboard/news" },
              { label: "Galeri", to: "/dashboard/gallery" },
              { label: "Pengumuman", to: "/dashboard/announcement" },
              { label: "Kegiatan", to: "/dashboard/activities" },
              { label: "Potensi Desa", to: "/dashboard/potensi-desa" }
            ]
          },
          {
            user: false,
            label: "Pemerintahan",
            icon: "pi pi-fw pi-sitemap",
            items: [
              { label: "Perangkat Desa", to: "/dashboard/perangkat-desa" },
              { label: "Jabatan", to: "/dashboard/jabatan" },
              { label: "Lembaga", to: "/dashboard/lembaga" },
              { label: "Struktur Organisasi", to: "/dashboard/struktur-organisasi" }
            ]
          },
          {
            user: false,
            label: "Pengaturan",
            icon: "pi pi-fw pi-cog",
            items: [
              { label: "Gambar Beranda", to: "/dashboard/setting/homepageimage" },
              { label: "Lokasi Desa", to: "/dashboard/setting/location" },
              { label: "Footer", to: "/dashboard/setting/footer" },
              { label: "Header", to: "/dashboard/setting/header" }
            ]
          }
          // {
          //     user: false,
          //     label: 'Admin',
          //     icon: 'pi pi-fw pi-users',
          //     to: '/dashboard/admin'
          // },
        ]
      }
    ]);
    model.value[0].items = model.value[0].items.filter((v) => {
      if (useParseJWT().value.is_admin == 1) {
        return v;
      } else {
        return v.user;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "layout-menu" }, _attrs))}><!--[-->`);
      ssrRenderList(model.value, (item, i) => {
        _push(`<!--[-->`);
        if (!item.separator) {
          _push(ssrRenderComponent(_sfc_main$1, {
            item,
            index: i
          }, null, _parent));
        } else {
          _push(`<li class="menu-separator"></li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/AppSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AppSidebar-eaed5dc7.mjs.map
