<template>
    <!-- slide out menu -->
    <div :class="show ? '-left-0' : '-left-[350px] md:-left-[500px]'" class="w-[350px] md:w-[500px] grid px-6 pt-6 pb-12 overflow-y-auto h-screen fixed top-0 transition-all duration-1000 bg-white shadow-newdrop z-[88]">
        <!-- close button -->
        <button @click="show = false;" class="grid h-[48px] w-[48px] top-6 right-6 absolute">
            <Icon icon="line-md:arrow-close-left" height="36px" class="m-auto" />
        </button>

        <!-- nav -->
        <div class="w-full h-fit grid pr-8 gap-4 text-[16px] md:text-[18px]">
            <!-- logo -->
            <img src="../../assets/images/logo.png" alt="Xcell Logo" class="w-[72px] h-[72px] mb-12">

            <div class="w-fit h-fit flex items-center gap-2">
                <p>Xcell Academy</p>
                <div class="w-[24px] h-[24px]">
                    <Icon icon="pepicons-print:angle-up" height="24px" class=" text-custom-gray" />
                </div>
            </div>

            <p>Shop</p>
            <p>Members</p>
            <p>Content</p>
        </div>

        <!-- footer -->
        <div class="w-full h-fit py-4 bottom-0 left-0 absolute grid justify-items-center gap-4">
            <!-- social media -->
            <div class="w-fit h-fit flex items-center gap-6 text-custom-gray/70">
                <Icon icon="mdi:instagram" height="24px" />
                <Icon icon="mdi:facebook" height="24px" />
                <Icon icon="mdi:google-maps" height="24px" />
                <Icon icon="mdi:google" height="24px" />
            </div>

            <!-- pages -->
            <div class="w-fit h-fit flex items-center gap-6">
                <p>Contact</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
        </div>
    </div>

    <!-- nav bar -->
    <div class="w-full h-[69px] grid items-center grid-cols-3 text-custom-black">
            <div class="w-full grid h-[48px] xl:hidden">
                <button @click="show = true;" class="grid h-[48px] w-[48px] bg-white shadow-newdrop rounded-[4px]">
                    <Icon icon="pepicons-print:menu" height="36px" class="m-auto" />
                </button>
            </div>
 
            <!-- menues -->
            <div class="w-full hidden xl:flex items-center gap-6 text-[14px] xl:text-[16px] text-custom-gray">
                <button class="w-fit h-fit flex items-center gap-2">
                    <p>Xcell Academy</p>
                    <div class="w-[24px] h-[24px]">
                        <Icon icon="pepicons-print:angle-up" height="24px" class=" text-custom-gray" />
                    </div>
                </button>

                <p>Shop</p>
                <p>Members</p>
                <p>Content</p>
            </div>
            
            <!-- menues -->
            <div class="w-full grid items-center justify-items-center text-center font-semibold text-[14px] md:text-[19px] xl:text-[22px]">
                <img src="../../assets/images/logo.png" alt="Xcell Logo" class="w-[72px] h-[72px] md:hidden">
                <div class="w-fit h-fit grid items-center justify-items-center">
                    <a href="/" class="hidden md:block font-beb absolute text-custom-black">Xcell Jiu Jitsu Academy</a>
                </div>
            </div>

            <!-- cart -->
            <div class="w-full flex justify-end gap-2 text-custom-gray">
                <p>Cart</p>
                <Icon icon="solar:cart-broken" height="24px" />
            </div>
        </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    name: "Main Navbar",
    data() {
        return {
            show: false
        }
    },
    mounted(){
        
    },
    methods: {

    },
    components: {
        Icon
    }
}

</script>