import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Footer-8ad1daf1.mjs';
import { ref, resolveComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import moment from 'moment';
import { i as useHead } from './server.mjs';
import '@vueuse/core';
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
  data: () => ({
    showContent: false,
    moment,
    images: [],
    videos: [],
    location: {},
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ],
    features: [
      {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/services.svg",
        name: "Layanan Masyarakat"
      },
      {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset186.svg",
        name: "Potensi Desa"
      },
      {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset187.svg",
        name: "Pembangunan Desa"
      },
      {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset192.svg",
        name: "Keuangan Desa"
      }
    ],
    news: [],
    announcement: [],
    acitivityData: [
      {
        "title": "Sosialisasi Penanggulangan Covid 19",
        "location": "Aula Desa"
      },
      {
        "title": "Vaksin Booster 2",
        "location": "Aula Desa"
      },
      {
        "title": "Vaksin Booster 2",
        "location": "Aula Desa"
      }
    ],
    galleryData: [
      {
        "title": "Sosialisasi Penanggulangan Covid 19",
        "location": "Aula Desa"
      },
      {
        "title": "Vaksin Booster 2",
        "location": "Aula Desa"
      },
      {
        "title": "Vaksin Booster 2",
        "location": "Aula Desa"
      }
    ]
  }),
  async mounted() {
    await this.loadImages();
    await this.loadNews();
    await this.loadVideos();
    await this.loadLocation();
    await this.loadAnnouncements();
    this.showContent = true;
  },
  methods: {
    async loadImages() {
      this.images = await $fetch("http://api.desaku.muhichsan.com/api/image-homepage");
    },
    async loadNews() {
      this.news = await $fetch("http://api.desaku.muhichsan.com/api/news?limit=5");
    },
    async loadAnnouncements() {
      this.announcement = await $fetch("http://api.desaku.muhichsan.com/api/announcement?limit=5");
    },
    async loadVideos() {
      this.videos = await $fetch("http://api.desaku.muhichsan.com/api/video-gallery");
    },
    async loadLocation() {
      const data = await $fetch("http://api.desaku.muhichsan.com/api/location");
      this.location = data;
      this.location.maps = `<iframe src="${data.maps}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    },
    backgroundImage(url) {
      return `background-image: url(${url});`;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = ref([Autoplay, EffectFade, Navigation, Pagination]);
    useHead({
      title: "Beranda"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_layout = resolveComponent("v-layout");
      const _component_v_app = resolveComponent("v-app");
      const _component_Header = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<!--[-->`);
      if (!_ctx.showContent) {
        _push(`<div class="backdrop-blur-sm bg-white/30 h-screen flex items-center justify-center w-screen fixed" style="${ssrRenderStyle({ "z-index": "999999" })}"><img class="bounce mr-6" width="120" src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png" alt=""></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_v_layout, { class: "block" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Header, null, null, _parent3, _scopeId2));
                  _push3(`<div id="hero" class="flex flex-column overflow-hidden"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Swiper), {
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
                    class: "w-full h-[500px] md:h-[600px]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(_ctx.images, (image) => {
                          _push4(ssrRenderComponent(unref(SwiperSlide), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="w-screen h-full bg-cover relative bg-center" style="${ssrRenderStyle(_ctx.backgroundImage(image.url))}"${_scopeId4}><div class="px-5 absolute bottom-8 description left-[50%] md:left-[10rem] bg-black/40 w-fit text-center text-white text-xl"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(image.description)}</span></div></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "w-screen h-full bg-cover relative bg-center",
                                    style: _ctx.backgroundImage(image.url)
                                  }, [
                                    createVNode("div", { class: "px-5 absolute bottom-8 description left-[50%] md:left-[10rem] bg-black/40 w-fit text-center text-white text-xl" }, [
                                      createVNode("span", null, toDisplayString(image.description), 1)
                                    ])
                                  ], 4)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.images, (image) => {
                            return openBlock(), createBlock(unref(SwiperSlide), null, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "w-screen h-full bg-cover relative bg-center",
                                  style: _ctx.backgroundImage(image.url)
                                }, [
                                  createVNode("div", { class: "px-5 absolute bottom-8 description left-[50%] md:left-[10rem] bg-black/40 w-fit text-center text-white text-xl" }, [
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
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="bg-[#F8F9FC] block md:flex justify-between items-center px-[2rem] md:px-[14rem] pt-8 pb-3"${_scopeId2}><!--[-->`);
                  ssrRenderList(_ctx.features, (feature) => {
                    _push3(`<div class="block w-fit mx-auto md:mb-0 mb-10"${_scopeId2}><div class="w-fit mx-auto"${_scopeId2}><img class="w-[80px] h-[80px]"${ssrRenderAttr("src", feature.img)} alt="" srcset=""${_scopeId2}></div><div class="mt-2"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(feature.name)}</span></div></div>`);
                  });
                  _push3(`<!--]--></div><div class="block px-[2rem] md:px-[14rem] bg-white pt-6"${_scopeId2}><div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12"${_scopeId2}><div class="block col-span-1 md:col-span-4"${_scopeId2}><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"${_scopeId2}><span${_scopeId2}>Berita Terkini</span></div><!--[-->`);
                  ssrRenderList(_ctx.news, (news) => {
                    _push3(`<div class="flex mb-10 cursor-pointer"${_scopeId2}><div class="w-fit flex-none"${_scopeId2}><img class="w-[140px] sm:w-[200px] md:w-[250px] h-[110px] md:h-[140px]"${ssrRenderAttr("src", news.thumbnail)} alt=""${_scopeId2}></div><div class="block pl-4"${_scopeId2}><div class="text-md md:text-xl font-semibold"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(news.title)}</span></div><div class="text-md flex items-center font-medium mt-1"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="mr-1" width="1.5em" height="1.5em" viewBox="0 0 24 24"${_scopeId2}><g fill="none"${_scopeId2}><rect width="18" height="15" x="3" y="6" stroke="#A3A3A3" rx="2"${_scopeId2}></rect><path fill="black" d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"${_scopeId2}></path><path stroke="#A3A3A3" stroke-linecap="round" d="M7 3v3m10-3v3"${_scopeId2}></path><rect width="4" height="2" x="7" y="12" fill="#A3A3A3" rx=".5"${_scopeId2}></rect><rect width="4" height="2" x="7" y="16" fill="#A3A3A3" rx=".5"${_scopeId2}></rect><rect width="4" height="2" x="13" y="12" fill="#A3A3A3" rx=".5"${_scopeId2}></rect><rect width="4" height="2" x="13" y="16" fill="#A3A3A3" rx=".5"${_scopeId2}></rect></g></svg><span class="text-sm md:text-md"${_scopeId2}>${ssrInterpolate(unref(moment)(news.created_at).format("LL"))}</span></div><div class="mt-2 hidden md:flex"${_scopeId2}><span class="text-sm md:text-base"${_scopeId2}>${ssrInterpolate(news.description)}</span></div><div class="mt-2 flex md:hidden"${_scopeId2}><span class="text-sm md:text-base"${_scopeId2}>${ssrInterpolate(news.description.substring(0, 70))}...</span></div></div></div>`);
                  });
                  _push3(`<!--]--></div><div class="col-span-2"${_scopeId2}><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"${_scopeId2}><span${_scopeId2}>Pengumuman</span></div><!--[-->`);
                  ssrRenderList(_ctx.announcement, (announcement) => {
                    _push3(`<div class="mb-6 bg-[#0088CC] cursor-pointer font-semibold text-white px-2 py-3 rounded-md"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(announcement.title)}</span></div>`);
                  });
                  _push3(`<!--]--><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"${_scopeId2}><span${_scopeId2}>Agenda Kegiatan</span></div><!--[-->`);
                  ssrRenderList(_ctx.acitivityData, (activity) => {
                    _push3(`<div class="mb-2 px-2 py-3 flex"${_scopeId2}><div class="px-1 py-2 font-semibold text-white flex-none w-[80px] h-[60px] rounded-md my-auto text-center bg-[#0088CC]"${_scopeId2}><span${_scopeId2}>Sep 02 2022</span></div><div class="block ml-3"${_scopeId2}><div class="text-[#0088CC] text-lg"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(activity.title)}</span></div><div class=""${_scopeId2}><span${_scopeId2}>Lokasi ${ssrInterpolate(activity.location)}</span></div></div></div>`);
                  });
                  _push3(`<!--]--></div></div></div><div class="block bg-[#F8F9FC] px-[2rem] md:px-[14rem] py-10"${_scopeId2}><div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12"${_scopeId2}><div class="block col-span-4"${_scopeId2}><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"${_scopeId2}><span${_scopeId2}>Galeri Foto &amp; Video</span></div><div class="grid grid-cols-1 md:grid-cols-3 mb-2 gap-6"${_scopeId2}><!--[-->`);
                  ssrRenderList(_ctx.videos, (video) => {
                    _push3(`<div class="h-full w-full md:w-[260px]"${_scopeId2}><iframe width="100%" height="160"${ssrRenderAttr("src", video.url)}${_scopeId2}></iframe></div>`);
                  });
                  _push3(`<!--]--></div></div><div class="col-span-2"${_scopeId2}><div class="text-[#0088CC] mt-5 md:mt-0 border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3"${_scopeId2}><span${_scopeId2}>Struktur Organisasi</span></div><div class="font-semibold text-white px-2 rounded-md"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Swiper), {
                    autoplay: {
                      delay: 4e3,
                      disableOnInteraction: false
                    },
                    spaceBetween: 30,
                    effect: "fade",
                    navigation: true,
                    modules: unref(modules),
                    class: "w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(SwiperSlide), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img class="h-[340px] w-full" src="https://swiperjs.com/demos/images/nature-1.jpg"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  class: "h-[340px] w-full",
                                  src: "https://swiperjs.com/demos/images/nature-1.jpg"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(SwiperSlide), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img class="h-[340px] w-full" src="https://swiperjs.com/demos/images/nature-2.jpg"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  class: "h-[340px] w-full",
                                  src: "https://swiperjs.com/demos/images/nature-2.jpg"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(SwiperSlide), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img class="h-[340px] w-full" src="https://swiperjs.com/demos/images/nature-3.jpg"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  class: "h-[340px] w-full",
                                  src: "https://swiperjs.com/demos/images/nature-3.jpg"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(SwiperSlide), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img class="h-[340px] w-full" src="https://swiperjs.com/demos/images/nature-4.jpg"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  class: "h-[340px] w-full",
                                  src: "https://swiperjs.com/demos/images/nature-4.jpg"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(SwiperSlide), null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                class: "h-[340px] w-full",
                                src: "https://swiperjs.com/demos/images/nature-1.jpg"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(SwiperSlide), null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                class: "h-[340px] w-full",
                                src: "https://swiperjs.com/demos/images/nature-2.jpg"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(SwiperSlide), null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                class: "h-[340px] w-full",
                                src: "https://swiperjs.com/demos/images/nature-3.jpg"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(SwiperSlide), null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                class: "h-[340px] w-full",
                                src: "https://swiperjs.com/demos/images/nature-4.jpg"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div></div><div class="block md:flex px-[2rem] md:px-[14rem] w-ful l bg-white py-12"${_scopeId2}><div class="flex-none w-full md:w-[65%]"${_scopeId2}>${_ctx.location.maps}</div><div class="ml-6 flex-1 mt-10 md:mt-0"${_scopeId2}><p class="text-black font-semibold text-2xl"${_scopeId2}>Lokasi Desa</p><div class="block mt-3"${_scopeId2}><div class="flex mb-2"${_scopeId2}><div class="w-[60%]"${_scopeId2}><span${_scopeId2}>Desa</span></div><div${_scopeId2}><span${_scopeId2}>: ${ssrInterpolate(_ctx.location.desa)}</span></div></div><div class="flex mb-2"${_scopeId2}><div class="w-[60%]"${_scopeId2}><span${_scopeId2}>Kabupaten</span></div><div${_scopeId2}><span${_scopeId2}>: ${ssrInterpolate(_ctx.location.kabupaten)}</span></div></div><div class="flex mb-2"${_scopeId2}><div class="w-[60%]"${_scopeId2}><span${_scopeId2}>Kelurahan</span></div><div${_scopeId2}><span${_scopeId2}>: ${ssrInterpolate(_ctx.location.kelurahan)}</span></div></div><div class="flex mb-2"${_scopeId2}><div class="w-[60%]"${_scopeId2}><span${_scopeId2}>Kecamatan</span></div><div${_scopeId2}><span${_scopeId2}>: ${ssrInterpolate(_ctx.location.kecamatan)}</span></div></div><div class="flex mb-2"${_scopeId2}><div class="w-[60%]"${_scopeId2}><span${_scopeId2}>RT/RW</span></div><div${_scopeId2}><span${_scopeId2}>: ${ssrInterpolate(_ctx.location.rt)}/${ssrInterpolate(_ctx.location.rw)}</span></div></div></div></div></div>`);
                  _push3(ssrRenderComponent(_component_Footer, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Header),
                    createVNode("div", {
                      id: "hero",
                      class: "flex flex-column overflow-hidden"
                    }, [
                      createVNode(unref(Swiper), {
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
                        class: "w-full h-[500px] md:h-[600px]"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.images, (image) => {
                            return openBlock(), createBlock(unref(SwiperSlide), null, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "w-screen h-full bg-cover relative bg-center",
                                  style: _ctx.backgroundImage(image.url)
                                }, [
                                  createVNode("div", { class: "px-5 absolute bottom-8 description left-[50%] md:left-[10rem] bg-black/40 w-fit text-center text-white text-xl" }, [
                                    createVNode("span", null, toDisplayString(image.description), 1)
                                  ])
                                ], 4)
                              ]),
                              _: 2
                            }, 1024);
                          }), 256))
                        ]),
                        _: 1
                      }, 8, ["modules"])
                    ]),
                    createVNode("div", { class: "bg-[#F8F9FC] block md:flex justify-between items-center px-[2rem] md:px-[14rem] pt-8 pb-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.features, (feature) => {
                        return openBlock(), createBlock("div", { class: "block w-fit mx-auto md:mb-0 mb-10" }, [
                          createVNode("div", { class: "w-fit mx-auto" }, [
                            createVNode("img", {
                              class: "w-[80px] h-[80px]",
                              src: feature.img,
                              alt: "",
                              srcset: ""
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "mt-2" }, [
                            createVNode("span", null, toDisplayString(feature.name), 1)
                          ])
                        ]);
                      }), 256))
                    ]),
                    createVNode("div", { class: "block px-[2rem] md:px-[14rem] bg-white pt-6" }, [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-6 md:gap-x-12" }, [
                        createVNode("div", { class: "block col-span-1 md:col-span-4" }, [
                          createVNode("div", { class: "text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" }, [
                            createVNode("span", null, "Berita Terkini")
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.news, (news) => {
                            return openBlock(), createBlock("div", {
                              class: "flex mb-10 cursor-pointer",
                              onClick: ($event) => _ctx.$router.push("/berita/" + news.slug)
                            }, [
                              createVNode("div", { class: "w-fit flex-none" }, [
                                createVNode("img", {
                                  class: "w-[140px] sm:w-[200px] md:w-[250px] h-[110px] md:h-[140px]",
                                  src: news.thumbnail,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "block pl-4" }, [
                                createVNode("div", { class: "text-md md:text-xl font-semibold" }, [
                                  createVNode("span", null, toDisplayString(news.title), 1)
                                ]),
                                createVNode("div", { class: "text-md flex items-center font-medium mt-1" }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "mr-1",
                                    width: "1.5em",
                                    height: "1.5em",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("g", { fill: "none" }, [
                                      createVNode("rect", {
                                        width: "18",
                                        height: "15",
                                        x: "3",
                                        y: "6",
                                        stroke: "#A3A3A3",
                                        rx: "2"
                                      }),
                                      createVNode("path", {
                                        fill: "black",
                                        d: "M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"
                                      }),
                                      createVNode("path", {
                                        stroke: "#A3A3A3",
                                        "stroke-linecap": "round",
                                        d: "M7 3v3m10-3v3"
                                      }),
                                      createVNode("rect", {
                                        width: "4",
                                        height: "2",
                                        x: "7",
                                        y: "12",
                                        fill: "#A3A3A3",
                                        rx: ".5"
                                      }),
                                      createVNode("rect", {
                                        width: "4",
                                        height: "2",
                                        x: "7",
                                        y: "16",
                                        fill: "#A3A3A3",
                                        rx: ".5"
                                      }),
                                      createVNode("rect", {
                                        width: "4",
                                        height: "2",
                                        x: "13",
                                        y: "12",
                                        fill: "#A3A3A3",
                                        rx: ".5"
                                      }),
                                      createVNode("rect", {
                                        width: "4",
                                        height: "2",
                                        x: "13",
                                        y: "16",
                                        fill: "#A3A3A3",
                                        rx: ".5"
                                      })
                                    ])
                                  ])),
                                  createVNode("span", { class: "text-sm md:text-md" }, toDisplayString(unref(moment)(news.created_at).format("LL")), 1)
                                ]),
                                createVNode("div", { class: "mt-2 hidden md:flex" }, [
                                  createVNode("span", { class: "text-sm md:text-base" }, toDisplayString(news.description), 1)
                                ]),
                                createVNode("div", { class: "mt-2 flex md:hidden" }, [
                                  createVNode("span", { class: "text-sm md:text-base" }, toDisplayString(news.description.substring(0, 70)) + "...", 1)
                                ])
                              ])
                            ], 8, ["onClick"]);
                          }), 256))
                        ]),
                        createVNode("div", { class: "col-span-2" }, [
                          createVNode("div", { class: "text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" }, [
                            createVNode("span", null, "Pengumuman")
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.announcement, (announcement) => {
                            return openBlock(), createBlock("div", {
                              class: "mb-6 bg-[#0088CC] cursor-pointer font-semibold text-white px-2 py-3 rounded-md",
                              onClick: ($event) => _ctx.$router.push("/pengumuman/" + announcement.slug)
                            }, [
                              createVNode("span", null, toDisplayString(announcement.title), 1)
                            ], 8, ["onClick"]);
                          }), 256)),
                          createVNode("div", { class: "text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" }, [
                            createVNode("span", null, "Agenda Kegiatan")
                          ]),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.acitivityData, (activity) => {
                            return openBlock(), createBlock("div", { class: "mb-2 px-2 py-3 flex" }, [
                              createVNode("div", { class: "px-1 py-2 font-semibold text-white flex-none w-[80px] h-[60px] rounded-md my-auto text-center bg-[#0088CC]" }, [
                                createVNode("span", null, "Sep 02 2022")
                              ]),
                              createVNode("div", { class: "block ml-3" }, [
                                createVNode("div", { class: "text-[#0088CC] text-lg" }, [
                                  createVNode("span", null, toDisplayString(activity.title), 1)
                                ]),
                                createVNode("div", { class: "" }, [
                                  createVNode("span", null, "Lokasi " + toDisplayString(activity.location), 1)
                                ])
                              ])
                            ]);
                          }), 256))
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "block bg-[#F8F9FC] px-[2rem] md:px-[14rem] py-10" }, [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-6 md:gap-x-12" }, [
                        createVNode("div", { class: "block col-span-4" }, [
                          createVNode("div", { class: "text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" }, [
                            createVNode("span", null, "Galeri Foto & Video")
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 mb-2 gap-6" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.videos, (video) => {
                              return openBlock(), createBlock("div", { class: "h-full w-full md:w-[260px]" }, [
                                createVNode("iframe", {
                                  width: "100%",
                                  height: "160",
                                  src: video.url
                                }, null, 8, ["src"])
                              ]);
                            }), 256))
                          ])
                        ]),
                        createVNode("div", { class: "col-span-2" }, [
                          createVNode("div", { class: "text-[#0088CC] mt-5 md:mt-0 border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" }, [
                            createVNode("span", null, "Struktur Organisasi")
                          ]),
                          createVNode("div", { class: "font-semibold text-white px-2 rounded-md" }, [
                            createVNode(unref(Swiper), {
                              autoplay: {
                                delay: 4e3,
                                disableOnInteraction: false
                              },
                              spaceBetween: 30,
                              effect: "fade",
                              navigation: true,
                              modules: unref(modules),
                              class: "w-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(SwiperSlide), null, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      class: "h-[340px] w-full",
                                      src: "https://swiperjs.com/demos/images/nature-1.jpg"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(SwiperSlide), null, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      class: "h-[340px] w-full",
                                      src: "https://swiperjs.com/demos/images/nature-2.jpg"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(SwiperSlide), null, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      class: "h-[340px] w-full",
                                      src: "https://swiperjs.com/demos/images/nature-3.jpg"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(SwiperSlide), null, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      class: "h-[340px] w-full",
                                      src: "https://swiperjs.com/demos/images/nature-4.jpg"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modules"])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "block md:flex px-[2rem] md:px-[14rem] w-ful l bg-white py-12" }, [
                      createVNode("div", {
                        class: "flex-none w-full md:w-[65%]",
                        innerHTML: _ctx.location.maps
                      }, null, 8, ["innerHTML"]),
                      createVNode("div", { class: "ml-6 flex-1 mt-10 md:mt-0" }, [
                        createVNode("p", { class: "text-black font-semibold text-2xl" }, "Lokasi Desa"),
                        createVNode("div", { class: "block mt-3" }, [
                          createVNode("div", { class: "flex mb-2" }, [
                            createVNode("div", { class: "w-[60%]" }, [
                              createVNode("span", null, "Desa")
                            ]),
                            createVNode("div", null, [
                              createVNode("span", null, ": " + toDisplayString(_ctx.location.desa), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex mb-2" }, [
                            createVNode("div", { class: "w-[60%]" }, [
                              createVNode("span", null, "Kabupaten")
                            ]),
                            createVNode("div", null, [
                              createVNode("span", null, ": " + toDisplayString(_ctx.location.kabupaten), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex mb-2" }, [
                            createVNode("div", { class: "w-[60%]" }, [
                              createVNode("span", null, "Kelurahan")
                            ]),
                            createVNode("div", null, [
                              createVNode("span", null, ": " + toDisplayString(_ctx.location.kelurahan), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex mb-2" }, [
                            createVNode("div", { class: "w-[60%]" }, [
                              createVNode("span", null, "Kecamatan")
                            ]),
                            createVNode("div", null, [
                              createVNode("span", null, ": " + toDisplayString(_ctx.location.kecamatan), 1)
                            ])
                          ]),
                          createVNode("div", { class: "flex mb-2" }, [
                            createVNode("div", { class: "w-[60%]" }, [
                              createVNode("span", null, "RT/RW")
                            ]),
                            createVNode("div", null, [
                              createVNode("span", null, ": " + toDisplayString(_ctx.location.rt) + "/" + toDisplayString(_ctx.location.rw), 1)
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode(_component_Footer)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app, null, {
                default: withCtx(() => [
                  createVNode(_component_Header),
                  createVNode("div", {
                    id: "hero",
                    class: "flex flex-column overflow-hidden"
                  }, [
                    createVNode(unref(Swiper), {
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
                      class: "w-full h-[500px] md:h-[600px]"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.images, (image) => {
                          return openBlock(), createBlock(unref(SwiperSlide), null, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "w-screen h-full bg-cover relative bg-center",
                                style: _ctx.backgroundImage(image.url)
                              }, [
                                createVNode("div", { class: "px-5 absolute bottom-8 description left-[50%] md:left-[10rem] bg-black/40 w-fit text-center text-white text-xl" }, [
                                  createVNode("span", null, toDisplayString(image.description), 1)
                                ])
                              ], 4)
                            ]),
                            _: 2
                          }, 1024);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["modules"])
                  ]),
                  createVNode("div", { class: "bg-[#F8F9FC] block md:flex justify-between items-center px-[2rem] md:px-[14rem] pt-8 pb-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.features, (feature) => {
                      return openBlock(), createBlock("div", { class: "block w-fit mx-auto md:mb-0 mb-10" }, [
                        createVNode("div", { class: "w-fit mx-auto" }, [
                          createVNode("img", {
                            class: "w-[80px] h-[80px]",
                            src: feature.img,
                            alt: "",
                            srcset: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "mt-2" }, [
                          createVNode("span", null, toDisplayString(feature.name), 1)
                        ])
                      ]);
                    }), 256))
                  ]),
                  createVNode("div", { class: "block px-[2rem] md:px-[14rem] bg-white pt-6" }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-6 md:gap-x-12" }, [
                      createVNode("div", { class: "block col-span-1 md:col-span-4" }, [
                        createVNode("div", { class: "text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" }, [
                          createVNode("span", null, "Berita Terkini")
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.news, (news) => {
                          return openBlock(), createBlock("div", {
                            class: "flex mb-10 cursor-pointer",
                            onClick: ($event) => _ctx.$router.push("/berita/" + news.slug)
                          }, [
                            createVNode("div", { class: "w-fit flex-none" }, [
                              createVNode("img", {
                                class: "w-[140px] sm:w-[200px] md:w-[250px] h-[110px] md:h-[140px]",
                                src: news.thumbnail,
                                alt: ""
                              }, null, 8, ["src"])
                            ]),
                            createVNode("div", { class: "block pl-4" }, [
                              createVNode("div", { class: "text-md md:text-xl font-semibold" }, [
                                createVNode("span", null, toDisplayString(news.title), 1)
                              ]),
                              createVNode("div", { class: "text-md flex items-center font-medium mt-1" }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "mr-1",
                                  width: "1.5em",
                                  height: "1.5em",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("g", { fill: "none" }, [
                                    createVNode("rect", {
                                      width: "18",
                                      height: "15",
                                      x: "3",
                                      y: "6",
                                      stroke: "#A3A3A3",
                                      rx: "2"
                                    }),
                                    createVNode("path", {
                                      fill: "black",
                                      d: "M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"
                                    }),
                                    createVNode("path", {
                                      stroke: "#A3A3A3",
                                      "stroke-linecap": "round",
                                      d: "M7 3v3m10-3v3"
                                    }),
                                    createVNode("rect", {
                                      width: "4",
                                      height: "2",
                                      x: "7",
                                      y: "12",
                                      fill: "#A3A3A3",
                                      rx: ".5"
                                    }),
                                    createVNode("rect", {
                                      width: "4",
                                      height: "2",
                                      x: "7",
                                      y: "16",
                                      fill: "#A3A3A3",
                                      rx: ".5"
                                    }),
                                    createVNode("rect", {
                                      width: "4",
                                      height: "2",
                                      x: "13",
                                      y: "12",
                                      fill: "#A3A3A3",
                                      rx: ".5"
                                    }),
                                    createVNode("rect", {
                                      width: "4",
                                      height: "2",
                                      x: "13",
                                      y: "16",
                                      fill: "#A3A3A3",
                                      rx: ".5"
                                    })
                                  ])
                                ])),
                                createVNode("span", { class: "text-sm md:text-md" }, toDisplayString(unref(moment)(news.created_at).format("LL")), 1)
                              ]),
                              createVNode("div", { class: "mt-2 hidden md:flex" }, [
                                createVNode("span", { class: "text-sm md:text-base" }, toDisplayString(news.description), 1)
                              ]),
                              createVNode("div", { class: "mt-2 flex md:hidden" }, [
                                createVNode("span", { class: "text-sm md:text-base" }, toDisplayString(news.description.substring(0, 70)) + "...", 1)
                              ])
                            ])
                          ], 8, ["onClick"]);
                        }), 256))
                      ]),
                      createVNode("div", { class: "col-span-2" }, [
                        createVNode("div", { class: "text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" }, [
                          createVNode("span", null, "Pengumuman")
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.announcement, (announcement) => {
                          return openBlock(), createBlock("div", {
                            class: "mb-6 bg-[#0088CC] cursor-pointer font-semibold text-white px-2 py-3 rounded-md",
                            onClick: ($event) => _ctx.$router.push("/pengumuman/" + announcement.slug)
                          }, [
                            createVNode("span", null, toDisplayString(announcement.title), 1)
                          ], 8, ["onClick"]);
                        }), 256)),
                        createVNode("div", { class: "text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" }, [
                          createVNode("span", null, "Agenda Kegiatan")
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.acitivityData, (activity) => {
                          return openBlock(), createBlock("div", { class: "mb-2 px-2 py-3 flex" }, [
                            createVNode("div", { class: "px-1 py-2 font-semibold text-white flex-none w-[80px] h-[60px] rounded-md my-auto text-center bg-[#0088CC]" }, [
                              createVNode("span", null, "Sep 02 2022")
                            ]),
                            createVNode("div", { class: "block ml-3" }, [
                              createVNode("div", { class: "text-[#0088CC] text-lg" }, [
                                createVNode("span", null, toDisplayString(activity.title), 1)
                              ]),
                              createVNode("div", { class: "" }, [
                                createVNode("span", null, "Lokasi " + toDisplayString(activity.location), 1)
                              ])
                            ])
                          ]);
                        }), 256))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "block bg-[#F8F9FC] px-[2rem] md:px-[14rem] py-10" }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-6 md:gap-x-12" }, [
                      createVNode("div", { class: "block col-span-4" }, [
                        createVNode("div", { class: "text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" }, [
                          createVNode("span", null, "Galeri Foto & Video")
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 mb-2 gap-6" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.videos, (video) => {
                            return openBlock(), createBlock("div", { class: "h-full w-full md:w-[260px]" }, [
                              createVNode("iframe", {
                                width: "100%",
                                height: "160",
                                src: video.url
                              }, null, 8, ["src"])
                            ]);
                          }), 256))
                        ])
                      ]),
                      createVNode("div", { class: "col-span-2" }, [
                        createVNode("div", { class: "text-[#0088CC] mt-5 md:mt-0 border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3" }, [
                          createVNode("span", null, "Struktur Organisasi")
                        ]),
                        createVNode("div", { class: "font-semibold text-white px-2 rounded-md" }, [
                          createVNode(unref(Swiper), {
                            autoplay: {
                              delay: 4e3,
                              disableOnInteraction: false
                            },
                            spaceBetween: 30,
                            effect: "fade",
                            navigation: true,
                            modules: unref(modules),
                            class: "w-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(SwiperSlide), null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "h-[340px] w-full",
                                    src: "https://swiperjs.com/demos/images/nature-1.jpg"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(SwiperSlide), null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "h-[340px] w-full",
                                    src: "https://swiperjs.com/demos/images/nature-2.jpg"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(SwiperSlide), null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "h-[340px] w-full",
                                    src: "https://swiperjs.com/demos/images/nature-3.jpg"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(unref(SwiperSlide), null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "h-[340px] w-full",
                                    src: "https://swiperjs.com/demos/images/nature-4.jpg"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modules"])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "block md:flex px-[2rem] md:px-[14rem] w-ful l bg-white py-12" }, [
                    createVNode("div", {
                      class: "flex-none w-full md:w-[65%]",
                      innerHTML: _ctx.location.maps
                    }, null, 8, ["innerHTML"]),
                    createVNode("div", { class: "ml-6 flex-1 mt-10 md:mt-0" }, [
                      createVNode("p", { class: "text-black font-semibold text-2xl" }, "Lokasi Desa"),
                      createVNode("div", { class: "block mt-3" }, [
                        createVNode("div", { class: "flex mb-2" }, [
                          createVNode("div", { class: "w-[60%]" }, [
                            createVNode("span", null, "Desa")
                          ]),
                          createVNode("div", null, [
                            createVNode("span", null, ": " + toDisplayString(_ctx.location.desa), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex mb-2" }, [
                          createVNode("div", { class: "w-[60%]" }, [
                            createVNode("span", null, "Kabupaten")
                          ]),
                          createVNode("div", null, [
                            createVNode("span", null, ": " + toDisplayString(_ctx.location.kabupaten), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex mb-2" }, [
                          createVNode("div", { class: "w-[60%]" }, [
                            createVNode("span", null, "Kelurahan")
                          ]),
                          createVNode("div", null, [
                            createVNode("span", null, ": " + toDisplayString(_ctx.location.kelurahan), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex mb-2" }, [
                          createVNode("div", { class: "w-[60%]" }, [
                            createVNode("span", null, "Kecamatan")
                          ]),
                          createVNode("div", null, [
                            createVNode("span", null, ": " + toDisplayString(_ctx.location.kecamatan), 1)
                          ])
                        ]),
                        createVNode("div", { class: "flex mb-2" }, [
                          createVNode("div", { class: "w-[60%]" }, [
                            createVNode("span", null, "RT/RW")
                          ]),
                          createVNode("div", null, [
                            createVNode("span", null, ": " + toDisplayString(_ctx.location.rt) + "/" + toDisplayString(_ctx.location.rw), 1)
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode(_component_Footer)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-e63102e6.mjs.map
