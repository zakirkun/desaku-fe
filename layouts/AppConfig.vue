<script setup>
import { ref, computed } from 'vue';
import { usePrimeVue } from 'primevue/config';
import { useLayout } from './composables/layout';

defineProps({
    simple: {
        type: Boolean,
        default: false
    }
});

const $primevue = usePrimeVue();
const inputStyle = computed(() => $primevue.config.inputStyle || 'outlined');

const scales = ref([12, 13, 14, 15, 16]);
const visible = ref(false);
const inputStyles = ref([
    { label: 'Outlined', value: 'outlined' },
    { label: 'Filled', value: 'filled' }
]);
const menuModes = ref([
    { label: 'Static', value: 'static' },
    { label: 'Overlay', value: 'overlay' }
]);
const compactMaterial = ref(false);
const primaryFocusRing = ref(true);

const { setScale, layoutConfig } = useLayout();

const onConfigButtonClick = () => {
    visible.value = !visible.value;
};
const onChangeTheme = (theme, mode) => {
    $primevue.changeTheme(layoutConfig.theme.value, theme, 'theme-css', () => {
        layoutConfig.theme.value = theme;
        layoutConfig.darkTheme.value = mode;
    });
};
const decrementScale = () => {
    setScale(layoutConfig.scale.value - 1);
    applyScale();
};
const incrementScale = () => {
    setScale(layoutConfig.scale.value + 1);
    applyScale();
};
const applyScale = () => {
    document.documentElement.style.fontSize = layoutConfig.scale.value + 'px';
};
const onInputStyleChange = (value) => {
    $primevue.config.inputStyle = value;
};
const onMenuModeChange = (value) => {
    layoutConfig.menuMode.value = value;
};
const onRippleChange = (value) => {
    layoutConfig.ripple.value = value;
};
const onDarkModeChange = (value) => {
    const newThemeName = value ? layoutConfig.theme.value.replace('light', 'dark') : layoutConfig.theme.value.replace('dark', 'light');

    layoutConfig.darkTheme.value = value;
    onChangeTheme(newThemeName, value);
};
const changeTheme = (theme, color) => {
    let newTheme, dark;

    newTheme = theme + '-' + (layoutConfig.darkTheme.value ? 'dark' : 'light');

    if (color) {
        newTheme += '-' + color;
    }

    if (newTheme.startsWith('md-') && compactMaterial.value) {
        newTheme = newTheme.replace('md-', 'mdc-');
    }

    dark = layoutConfig.darkTheme.value;

    onChangeTheme(newTheme, dark);
};
const isThemeActive = (themeFamily, color) => {
    let themeName;
    let themePrefix = themeFamily === 'md' && compactMaterial.value ? 'mdc' : themeFamily;

    themeName = themePrefix + (layoutConfig.darkTheme.value ? '-dark' : '-light');

    if (color) {
        themeName += '-' + color;
    }

    return layoutConfig.theme.value === themeName;
};
const onCompactMaterialChange = (value) => {
    compactMaterial.value = value;

    if (layoutConfig.theme.value.startsWith('md')) {
        let tokens = layoutConfig.theme.value.split('-');

        changeTheme(tokens[0].substring(0, 2), tokens[2]);
    }
};
const onFocusRingColorChange = (value) => {
    primaryFocusRing.value = value;
    let root = document.documentElement;

    if (value) {
        if (layoutConfig.darkTheme.value) root.style.setProperty('--p-focus-ring-color', 'var(--primary-500)');
        else root.style.setProperty('--p-focus-ring-color', 'var(--primary-500)');
    } else {
        if (layoutConfig.darkTheme.value) root.style.setProperty('--p-focus-ring-color', 'var(--surface-500)');
        else root.style.setProperty('--p-focus-ring-color', 'var(--surface-900)');
    }
};
</script>

<template>
</template>

<style lang="scss" scoped></style>
