import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './AppMenuItem-4b562e00.mjs';
import './layout-83f1b94f.mjs';
import 'vue-router';

const _sfc_main = {
  __name: "AppSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const model = ref([
      {
        label: "Menu",
        items: [
          {
            label: "Profil Desa",
            icon: "pi pi-fw pi-users",
            items: [
              { label: "Tentang Kami", to: "/dashboard/profile/about" },
              { label: "Visi & Misi", to: "/dashboard/profile/visi" },
              { label: "Sejarah Desa", to: "/dashboard/profile/history" }
            ]
          },
          {
            label: "Informasi Publik",
            icon: "pi pi-fw pi-book",
            items: [
              { label: "Berita", to: "/dashboard/news" },
              { label: "Galeri", to: "/dashboard/gallery" },
              { label: "Pengumuman", to: "/dashboard/announcement" }
            ]
          },
          {
            label: "Pengaturan",
            icon: "pi pi-fw pi-cog",
            items: [
              { label: "Gambar Beranda", to: "/dashboard/setting/homepageimage" },
              { label: "Lokasi Desa", to: "/dashboard/setting/location" },
              { label: "Footer", to: "/dashboard/setting/footer" },
              { label: "Header", to: "/dashboard/setting/header" }
              // { label: 'Pengaturan', to: "/dashboard/pengaturan" },
            ]
          }
        ]
      }
    ]);
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
          _push(`<!---->`);
        }
        if (item.separator) {
          _push(`<li class="menu-separator"></li>`);
        } else {
          _push(`<!---->`);
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
//# sourceMappingURL=AppSidebar-c414e9a8.mjs.map
