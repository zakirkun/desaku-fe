<template>
    <div class="backdrop-blur-sm bg-white/30 h-screen flex items-center justify-center w-screen min-h-[26rem]">
        <div>
            <img class="bounce mr-6" width="120"
                src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png"
                alt="">
            <p class="font-semibold text-center mx-auto text-xl mr-4">Loading...</p>
        </div>
    </div>
</template>
<style>
.bounce {
    animation: bounce .4s ease infinite alternate;
}


@keyframes bounce {
    0% {
        text-shadow:
            0 5px 0 #ccc,
            0 2px 3px rgba(0, 0, 0, 1);
    }

    100% {
        transform: translateY(-15px);
        text-shadow: 0 50px 0 black,
            0 0px 20px rgba(0, 0, 0, .8);
    }
}
</style>