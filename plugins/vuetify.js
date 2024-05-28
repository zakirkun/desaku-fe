import { createVuetify } from 'vuetify'
import { VApp, VBtn, VCard, VDataTable, VDialog, VForm, VImg, VLayout, VList, VMenu, VPagination, VSelect, VSnackbar, VTab, VTabs, VTextField, VTextarea } from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    display: {
      mobileBreakpoint: "sm"
    },
    components: {
      VBtn,
      VMenu,
      VDialog,
      VTabs,
      VTab,
      VCard,
      VLayout,
      VApp,
      VSnackbar,
      VForm,
      VTextField,
      VTextarea,
      VDataTable,
      VList,
      VSelect,
      VImg,
      VPagination
    },
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})