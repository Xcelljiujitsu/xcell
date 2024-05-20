<template>
    <!-- slide out menu -->
    <div :class="show ? '-left-0' : '-left-[350px] md:-left-[500px]'" class="w-[350px] md:w-[500px] grid px-6 pt-16 pb-12 overflow-y-auto h-screen fixed top-0 transition-all duration-1000 bg-white shadow-newdrop z-[88]">
        <!-- close button -->
        <button @click="show = false;" class="grid h-[48px] w-[48px] top-16 right-6 absolute">
            <Icon icon="line-md:arrow-close-left" height="36px" class="m-auto" />
        </button>

        <!-- nav -->
        <div class="w-full h-fit grid pr-8 gap-4 text-[16px] md:text-[18px]">
            <!-- logo -->
            <img src="../../assets/images/logo.png" alt="Xcell Logo" class="w-[72px] h-[72px] mb-12">

            <!-- academy dropdown -->
            <div class="w-fit h-fit grid items-center gap-2 relative">
                <button @click="slider_dropdown = !slider_dropdown" class="w-fit h-fit flex items-center gap-2">
                    <p class="cursor-pointer">Xcell Academy</p>

                    <div class="w-[24px] h-[24px] cursor-pointer">
                        <Icon icon="pepicons-print:angle-up" height="24px" :class="slider_dropdown ? 'rotate-180' : '' " class=" text-custom-gray transition-all duration-300" />
                    </div>
                </button>

                <!-- dropdown menu -->
                <div v-if="slider_dropdown" class="w-[200px] h-fit text-left grid py-4 bg-white rounded-[4px] overflow-y-auto  transition-all duration-300 cursor-default" style="z-index: 20 !important;">
                    <div id="nav_dropdown" class="w-full h-fit grid gap-2 text-[14px]">
                        <a v-for="(item, index) in menu_options" :key="index" href="#" class="truncate border-l-[3px] border-transparent hover:border-custom-black hover:bg-sidebar-bg px-4 py-[6px]">{{ item.label }}</a>
                    </div>
                </div>
            </div>

            <p>Shop</p>
            <p>Members</p>
            <p>Content</p>
            <p @click="$emit('contact'); show = false;" class="cursor-pointer">Get In Touch</p>
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
                <p @click="$emit('contact'); show = false;" class="cursor-pointer">Contact</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
        </div>
    </div>

    <!-- nav bar -->
    <div class="w-full h-fit grid items-center grid-cols-3 text-custom-black">
            <div class="w-full grid h-[48px] xl:hidden">
                <button @click="show = true;" class="grid h-[48px] w-[48px] bg-white shadow-newdrop rounded-[4px]">
                    <Icon icon="pepicons-print:menu" height="36px" class="m-auto" />
                </button>
            </div>
 
            <!-- menues -->
            <div class="w-full hidden xl:flex items-center gap-6 text-[14px] xl:text-[16px] text-custom-gray">
                <div class="w-fit h-fit flex items-center gap-2 relative dropdown-elm">
                    <p @click="dropdown = !dropdown" class="cursor-pointer dropdown-elm">Xcell Academy</p>
                    <div @click="dropdown = !dropdown" class="w-[24px] h-[24px] cursor-pointer dropdown-elm">
                        <Icon icon="pepicons-print:angle-up" height="24px" :class="dropdown ? 'rotate-180' : '' " class=" text-custom-gray transition-all duration-300 dropdown-elm" />
                    </div>

                    <!-- dropdown menu -->
                    <div v-if="dropdown" class="w-[200px] h-[220px] text-left grid py-4 bg-white rounded-[4px] shadow-dropdown overflow-y-auto absolute -bottom-[230px] -left-4 transition-all duration-300 cursor-default dropdown-elm" style="z-index: 20 !important;">
                        <div id="nav_dropdown" class="w-full h-fit grid gap-2 text-[14px] dropdown-elm">
                            <a v-for="(item, index) in menu_options" :key="index" href="#" class="truncate border-l-[3px] border-transparent hover:border-custom-black hover:bg-sidebar-bg px-4 py-[6px] dropdown-elm">{{ item.label }}</a>
                        </div>
                    </div>
                </div>

                <p>Shop</p>
                <p>Members</p>
                <p>Content</p>
            </div>
            
            <!-- menues -->
            <div class="w-full grid items-center justify-items-center text-center font-semibold text-[14px] md:text-[19px] xl:text-[22px]">
                <img src="../../assets/images/logo.png" alt="Xcell Logo" class="w-[72px] h-[72px] md:hidden">
                <div class="w-fit h-fit grid items-center justify-items-center">
                    <!-- <a href="/" class="hidden md:block font-beb absolute text-custom-black">Xcell Jiu Jitsu Academy</a> -->
                    <img src="../../assets/images/nav_logo.png" alt="Xcell Logo" class="hidden md:block h-[75px] lg:h-[90px]">
                </div>
            </div>

            <!-- cart -->
            <div class="w-full flex items-center justify-end gap-4 lg:gap-8 text-custom-gray">
                <p @click="$emit('contact')" class="hidden xl:block cursor-pointer">Contact Us</p>

                <!-- phone number -->
                <button class="w-fit h-fit hidden md:flex items-center gap-2">
                    <p class="grid"><span class="font-medium">CALL US NOW!</span> (561) 619 &mdash; 6969</p>
                </button>

                <!-- cart -->
                <div class="w-fit h-fit flex items-center gap-2">
                    <p>Cart</p>
                    <Icon icon="solar:cart-broken" height="24px" />
                </div>
            </div>
        </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    name: "Main Navbar",
    data() {
        return {
            show: false,

            dropdown: false,
            slider_dropdown: false,

            menu_options: [
                {
                    label: "Kids Jiu Jitsu",
                    click: () => {

                    }
                },
                {
                    label: "Adult Jiu Jitsu",
                    click: () => {

                    }
                },
                {
                    label: "Book a Private",
                    click: () => {

                    }
                },
                {
                    label: "Class Schedule",
                    click: () => {

                    }
                }
            ]
        }
    },
    mounted(){
        window.addEventListener("click", this.watchDropdownClick);
    },
    unmounted(){
        window.removeEventListener("click", this.watchDropdownClick);
    },
    methods: {
        watchDropdownClick(e){
            if(this.dropdown && !e.target.classList.contains('dropdown-elm')){
                this.dropdown = false;
            }
        },
    },
    components: {
        Icon
    }
}

</script>