<script setup>
const props = defineProps(['child'])
</script>
<template>
    <div class="flex mb-6 text-sm sm:text-base items-center bg-[#f0f0f0] pa-3 w-full rounded-lg">
        <div class="flex-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                <path fill="#0088CC"
                    d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
            </svg>
        </div>
        <span class="mx-2">/</span>
        <div class="whitespace-nowrap cursor-pointer font-medium">
            <slot name="root" />
        </div>
        <div v-if="props.child" class="truncate max-[300px]:w-[100px] max-[450px]:w-[150px] w-[200px] sm:w-fit">
            <span class="mx-2">/</span>
            {{ props.child }}
        </div>
    </div>
</template>