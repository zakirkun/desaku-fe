<script setup>
const location = ref(null)
const address = ref(null)

location.value = await $fetch('/api/location')
address.value = await $fetch('/api/address')
</script>
<template>
    <div class="block md:flex px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] w-ful l bg-white py-12">
        <div class="flex-none w-full md:w-[60%] mb-8 md:mb-2" v-html="location.maps">
        </div>
        <div class="ml-0 md:ml-6 md:pl-10 flex-1">
            <p class="text-[#0088CC] font-semibold text-xl md:text-2xl">Lokasi Desa</p>
            <div class="block mt-3">
                <div v-for="unit in address" class="flex text-base md:text-lg mb-2">
                    <div class="w-[60%]">
                        <span>{{ unit.name }}</span>
                    </div>
                    <div>
                        <span>: {{ unit.value }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>