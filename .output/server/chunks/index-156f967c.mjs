import { ref, withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './Date-c0091c75.mjs';
import moment from 'moment';
import { u as useHead, _ as _export_sfc } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
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

const _sfc_main$6 = {
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const features = ref([
      {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/services.svg",
        name: "Layanan Masyarakat"
      },
      {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset186.svg",
        name: "Potensi Desa",
        href: "/potensi-desa"
      },
      {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset187.svg",
        name: "Berita Desa",
        href: "/berita"
      },
      {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset192.svg",
        name: "Pengumuman Desa",
        href: "/pengumuman"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "block md:flex justify-between items-center px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-8" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(features), (feature) => {
        _push(`<div class="cursor-pointer block w-fit mx-auto md:mb-10 mb-[3rem]"><div class="w-fit mx-auto"><img class="w-[80px] h-[80px]"${ssrRenderAttr("src", feature.img)} alt="" srcset=""></div><div class="mt-2 text-center font-medium text-base md:text-lg"><span>${ssrInterpolate(feature.name)}</span></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Features.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "LatestNews",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const news = ref(null);
    news.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/berita?limit=5")), __temp = await __temp, __restore(), __temp).data;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_img = resolveComponent("v-img");
      const _component_IconsDate = __nuxt_component_0$1;
      _push(`<!--[-->`);
      ssrRenderList(unref(news), (news2) => {
        _push(`<div class="flex mb-10 cursor-pointer" data-v-60a1efbb><div class="h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none" data-v-60a1efbb>`);
        _push(ssrRenderComponent(_component_v_img, {
          "lazy-src": news2.thumbnail,
          height: "100%",
          "aspect-ratio": "4/3",
          src: news2.thumbnail
        }, null, _parent));
        _push(`</div><div class="block pl-4" data-v-60a1efbb><div class="text-md md:text-xl font-semibold" data-v-60a1efbb><span class="line-clamp-2" data-v-60a1efbb>${ssrInterpolate(news2.title)}</span></div><div class="text-md flex items-center font-medium mt-1" data-v-60a1efbb>`);
        _push(ssrRenderComponent(_component_IconsDate, null, null, _parent));
        _push(`<span class="text-sm md:text-md ml-1" data-v-60a1efbb>${ssrInterpolate(unref(moment)(news2.created_at).format("LL"))}</span></div><div class="mt-2" data-v-60a1efbb><span class="line-clamp-2 sm:line-clamp-3" data-v-60a1efbb>${ssrInterpolate(news2.description)}</span></div></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/LatestNews.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-60a1efbb"]]);
const _sfc_main$4 = {
  __name: "LatestAnnouncement",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const announcement = ref(null);
    announcement.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/pengumuman?limit=5")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(announcement), (announcement2) => {
        _push(`<div class="mb-4 bg-[#0088CC] cursor-pointer font-semibold text-white px-2 py-3 rounded-md text-sm md:text-base"><span class="line-clamp-2">${ssrInterpolate(announcement2.title)}</span></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/LatestAnnouncement.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "LatestActivities",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const activities = ref(null);
    activities.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/kegiatan?limit=5")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(activities), (activity) => {
        _push(`<div class="mb-2 py-2 flex font-medium"><div class="text-base px-1 py-2 font-medium text-white flex-none w-[80px] h-[60px] rounded-md my-auto text-center bg-[#0088CC]"><span>${ssrInterpolate(unref(moment)(activity.created_at).format("DD MMM YYYY"))}</span></div><div class="block ml-3 cursor-pointer"><div class="text-[#0088CC] text-base"><span>${ssrInterpolate(activity.title)}</span></div><div class="text-base"><span class="line-clamp-2">${ssrInterpolate(activity.description)}</span></div></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/LatestActivities.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Gallery",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const images = ref(null);
    ref(null);
    images.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/image-homepage?limit=6")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_img = resolveComponent("v-img");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "block col-span-4" }, _attrs))} data-v-cd976494><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3" data-v-cd976494><span data-v-cd976494>Galeri Desa</span></div><div id="gallery" class="rounded-lg grid grid-cols-1 md:grid-cols-3 mb-2 gap-6" data-v-cd976494><!--[-->`);
      ssrRenderList(unref(images), (image, key) => {
        _push(`<a class="rounded-lg h-full w-full relative"${ssrRenderAttr("href", image.url)} data-pswp-width="600" data-pswp-height="400" target="_blank" rel="noreferrer" data-v-cd976494>`);
        _push(ssrRenderComponent(_component_v_img, {
          "lazy-src": image.url,
          class: "rounded-md",
          cover: "",
          width: "100%",
          "aspect-ratio": "1",
          src: image.url
        }, null, _parent));
        _push(`<div class="rounded-b-lg z-50 py-1 backdrop-blur-xl opacity-90 pl-2 bg-[#0088CC] bottom-0 absolute w-full text-white" data-v-cd976494><p class="truncate text-sm md:text-base" data-v-cd976494>${ssrInterpolate(image.description)}</p></div></a>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Gallery.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cd976494"]]);
const _sfc_main$1 = {
  __name: "Location",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const location = ref(null);
    const address = ref(null);
    location.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/location")), __temp = await __temp, __restore(), __temp);
    address.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/address")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "block md:flex px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] w-ful l bg-white py-12" }, _attrs))}><div class="flex-none w-full md:w-[60%] mb-8 md:mb-2">${unref(location).maps}</div><div class="ml-0 md:ml-6 md:pl-10 flex-1"><p class="text-[#0088CC] font-semibold text-xl md:text-2xl">Lokasi Desa</p><div class="block mt-3"><!--[-->`);
      ssrRenderList(unref(address), (unit) => {
        _push(`<div class="flex text-base md:text-lg mb-2"><div class="w-[60%]"><span>${ssrInterpolate(unit.name)}</span></div><div><span>: ${ssrInterpolate(unit.value)}</span></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Location.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const modules = ref([Autoplay, EffectFade, Navigation, Pagination]);
    const images = ref(null);
    const perangkatDesa = ref(null);
    images.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/image-homepage")), __temp = await __temp, __restore(), __temp);
    perangkatDesa.value = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/perangkat-desa")), __temp = await __temp, __restore(), __temp);
    function backgroundImage(url) {
      return `background-image: url(${url});`;
    }
    useHead({
      title: "Beranda"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeFeatures = __nuxt_component_0;
      const _component_HomeLatestNews = __nuxt_component_1;
      const _component_HomeLatestAnnouncement = __nuxt_component_2;
      const _component_HomeLatestActivities = __nuxt_component_3;
      const _component_HomeGallery = __nuxt_component_4;
      const _component_v_img = resolveComponent("v-img");
      const _component_HomeLocation = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1" }, _attrs))}><div id="hero" class="flex flex-column overflow-hidden">`);
      _push(ssrRenderComponent(unref(Swiper), {
        autoplay: {
          delay: 4e3,
          disableOnInteraction: false
        },
        spaceBetween: 30,
        effect: "fade",
        navigation: true,
        pagination: {
          clickable: true
        },
        modules: unref(modules),
        class: "w-full h-[420px] md:h-[600px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(images), (image) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-screen h-full bg-cover relative bg-center" style="${ssrRenderStyle(backgroundImage(image.url))}"${_scopeId2}><div class="px-5 absolute bottom-8 description left-[50%] md:left-[10rem] bg-black/40 w-fit text-center text-white text-base md:text-xl"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(image.description)}</span></div></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "w-screen h-full bg-cover relative bg-center",
                        style: backgroundImage(image.url)
                      }, [
                        createVNode("div", { class: "px-5 absolute bottom-8 description left-[50%] md:left-[10rem] bg-black/40 w-fit text-center text-white text-base md:text-xl" }, [
                          createVNode("span", null, toDisplayString(image.description), 1)
                        ])
                      ], 4)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(images), (image) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "w-screen h-full bg-cover relative bg-center",
                      style: backgroundImage(image.url)
                    }, [
                      createVNode("div", { class: "px-5 absolute bottom-8 description left-[50%] md:left-[10rem] bg-black/40 w-fit text-center text-white text-base md:text-xl" }, [
                        createVNode("span", null, toDisplayString(image.description), 1)
                      ])
                    ], 4)
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_HomeFeatures, null, null, _parent));
      _push(`<div class="block pb-6 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] bg-white pt-6"><div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12"><div class="block col-span-1 md:col-span-4"><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3"><span>Berita Terkini</span></div>`);
      _push(ssrRenderComponent(_component_HomeLatestNews, null, null, _parent));
      _push(`</div><div class="col-span-2"><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3"><span>Pengumuman</span></div>`);
      _push(ssrRenderComponent(_component_HomeLatestAnnouncement, null, null, _parent));
      _push(`<div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3"><span>Agenda Kegiatan</span></div>`);
      _push(ssrRenderComponent(_component_HomeLatestActivities, null, null, _parent));
      _push(`</div></div></div><div class="block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] py-10"><div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">`);
      _push(ssrRenderComponent(_component_HomeGallery, null, null, _parent));
      _push(`<div class="col-span-2"><div class="text-[#0088CC] struktur border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3"><span>Struktur Organisasi</span></div><div class="font-medium text-white px-2 rounded-md">`);
      _push(ssrRenderComponent(unref(Swiper), {
        autoplay: {
          delay: 4e3,
          disableOnInteraction: false
        },
        spaceBetween: 30,
        effect: "fade",
        navigation: true,
        modules: unref(modules),
        class: "w-full rounded-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(perangkatDesa), (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { class: "relative rounded-lg" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_img, {
                      class: "rounded-b-lg",
                      cover: "",
                      width: "100%",
                      "aspect-ratio": "1",
                      lazysrc: item.image,
                      src: item.image
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="text-sm sm:text-lg font-normal rounded-b-md z-50 py-1 backdrop-blur-xl opacity-90 pl-2 bg-[#0088CC] bottom-0 absolute w-full text-white"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(item.name)} - ${ssrInterpolate(item.job)}</span></div>`);
                  } else {
                    return [
                      createVNode(_component_v_img, {
                        class: "rounded-b-lg",
                        cover: "",
                        width: "100%",
                        "aspect-ratio": "1",
                        lazysrc: item.image,
                        src: item.image
                      }, null, 8, ["lazysrc", "src"]),
                      createVNode("div", { class: "text-sm sm:text-lg font-normal rounded-b-md z-50 py-1 backdrop-blur-xl opacity-90 pl-2 bg-[#0088CC] bottom-0 absolute w-full text-white" }, [
                        createVNode("span", null, toDisplayString(item.name) + " - " + toDisplayString(item.job), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(perangkatDesa), (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), { class: "relative rounded-lg" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_img, {
                      class: "rounded-b-lg",
                      cover: "",
                      width: "100%",
                      "aspect-ratio": "1",
                      lazysrc: item.image,
                      src: item.image
                    }, null, 8, ["lazysrc", "src"]),
                    createVNode("div", { class: "text-sm sm:text-lg font-normal rounded-b-md z-50 py-1 backdrop-blur-xl opacity-90 pl-2 bg-[#0088CC] bottom-0 absolute w-full text-white" }, [
                      createVNode("span", null, toDisplayString(item.name) + " - " + toDisplayString(item.job), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_HomeLocation, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-156f967c.mjs.map
