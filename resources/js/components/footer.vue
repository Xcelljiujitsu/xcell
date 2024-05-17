<template>
    <!-- footer -->
    <div class="w-full h-fit md:h-[69px] grid gap-4 md:gap-0 py-8 md:py-0 justify-items-center md:justify-items-start items-center lg:grid-cols-2 text-custom-black text-[12px]">
        <!-- left side -->
        <div class="w-fit lg:w-full grid mx-auto lg:mx-0 md:flex md:items-center md:justify-items-start gap-6 text-custom-gray">
            <div class="w-fit h-fit flex items-center gap-6">
                <p>Contact</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>

            <!-- social media -->
            <div class="w-fit h-fit flex items-center gap-6 md:ml-6 text-custom-gray/70">
                <Icon icon="mdi:instagram" height="24px" />
                <Icon icon="mdi:facebook" height="24px" />
                <Icon icon="mdi:google-maps" height="24px" />
                <Icon icon="mdi:google" height="24px" />
            </div>
        </div>

        <!-- copyright -->
        <div class="w-full h-full flex items-center justify-center lg:justify-end gap-2 text-custom-gray">
            <p class="">Xcell Jiu Jutsu Academy &#169; 2024</p>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    name: "Footer",
    components: {
        Icon
    }
}

</script>