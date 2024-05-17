const VExpansionPanel = '.v-expansion-panel{background-color:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-expansion-panel:not(:first-child):after{border-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-expansion-panel--disabled .v-expansion-panel-title{color:rgba(var(--v-theme-on-surface),.26)}.v-expansion-panel--disabled .v-expansion-panel-title .v-expansion-panel-title__overlay{opacity:.4615384615}.v-expansion-panels{display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;position:relative;width:100%;z-index:1}.v-expansion-panels:not(.v-expansion-panels--variant-accordion)>:not(:first-child):not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--before-active){border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.v-expansion-panels:not(.v-expansion-panels--variant-accordion)>:not(:first-child):not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--after-active){border-top-left-radius:0!important;border-top-right-radius:0!important}.v-expansion-panels:not(.v-expansion-panels--variant-accordion)>:first-child:not(:last-child):not(.v-expansion-panel--active):not(.v-expansion-panel--before-active){border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.v-expansion-panels:not(.v-expansion-panels--variant-accordion)>:last-child:not(:first-child):not(.v-expansion-panel--active):not(.v-expansion-panel--after-active){border-top-left-radius:0!important;border-top-right-radius:0!important}.v-expansion-panels--variant-accordion>:first-child:not(:last-child){border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.v-expansion-panels--variant-accordion>:last-child:not(:first-child){border-top-left-radius:0!important;border-top-right-radius:0!important}.v-expansion-panels--variant-accordion>:last-child:not(:first-child) .v-expansion-panel-title--active{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-expansion-panels--variant-accordion>:not(:first-child):not(:last-child){border-radius:0!important}.v-expansion-panels--variant-accordion .v-expansion-panel-title__overlay{transition:border-radius .3s cubic-bezier(.4,0,.2,1)}.v-expansion-panel{border-radius:4px;flex:1 0 100%;max-width:100%;position:relative;transition:all .3s cubic-bezier(.4,0,.2,1);transition-property:margin-top,border-radius,border,max-width}.v-expansion-panel:not(:first-child):after{border-top-style:solid;border-top-width:thin;content:"";left:0;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-title{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-title{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-expansion-panel--active>.v-expansion-panel-title:not(.v-expansion-panel-title--static){min-height:64px}.v-expansion-panel__shadow{border-radius:inherit;box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity,rgba(0,0,0,.12));height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.v-expansion-panel-title{align-items:center;border-radius:inherit;display:flex;font-size:.9375rem;justify-content:space-between;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;text-align:start;transition:min-height .3s cubic-bezier(.4,0,.2,1);width:100%}.v-expansion-panel-title:hover>.v-expansion-panel-title__overlay{opacity:calc(var(--v-hover-opacity)*var(--v-theme-overlay-multiplier))}.v-expansion-panel-title:focus-visible>.v-expansion-panel-title__overlay{opacity:calc(var(--v-focus-opacity)*var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-expansion-panel-title:focus>.v-expansion-panel-title__overlay{opacity:calc(var(--v-focus-opacity)*var(--v-theme-overlay-multiplier))}}.v-expansion-panel-title--focusable.v-expansion-panel-title--active .v-expansion-panel-title__overlay{opacity:calc(var(--v-activated-opacity)*var(--v-theme-overlay-multiplier))}.v-expansion-panel-title--focusable.v-expansion-panel-title--active:hover .v-expansion-panel-title__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity))*var(--v-theme-overlay-multiplier))}.v-expansion-panel-title--focusable.v-expansion-panel-title--active:focus-visible .v-expansion-panel-title__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-expansion-panel-title--focusable.v-expansion-panel-title--active:focus .v-expansion-panel-title__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}}.v-expansion-panel-title__overlay{background-color:currentColor;border-radius:inherit;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}.v-expansion-panel-title__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;margin-inline-start:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-expansion-panel-text{display:flex}.v-expansion-panel-text__wrapper{flex:1 1 auto;max-width:100%;padding:8px 24px 16px}.v-expansion-panels--variant-accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--variant-accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--variant-popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--variant-popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--variant-inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--variant-inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel .v-expansion-panel__shadow{display:none}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel{border-radius:0}';

const VExpansionPanelsStyles_e702dd14 = [VExpansionPanel];

export { VExpansionPanelsStyles_e702dd14 as default };
//# sourceMappingURL=VExpansionPanels-styles.e702dd14.mjs.map
