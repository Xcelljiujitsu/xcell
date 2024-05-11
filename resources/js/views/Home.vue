<template>
    <!-- nav bar -->
    <div class="w-full px-12 py-4 grid items-center grid-cols-3 text-custom-black">
        <!-- menues -->
        <div class="w-full flex items-center gap-6 text-custom-gray">
            <p>Xcell Academy</p>
            <p>Shop</p>
            <p>Members</p>
            <p>Content</p>
        </div>
        
        <!-- menues -->
        <div class="w-full grid items-center justify-itmes-center text-center font-semibold text-[18px]">
            <a href="/">Xcell Jiu Jitsu Academy</a>
        </div>

        <!-- cart -->
        <div class="w-full flex justify-end gap-2 text-custom-gray">
            <p>Cart</p>
            <Icon icon="solar:cart-broken" height="24px" />
        </div>
    </div>

    <!-- hero -->
    <div class="w-full px-12 py-4 grid grid-cols-3 gap-6">
        <!-- shop -->
        <div class="w-full h-[1000px] grid">
            <img src="../../assets/images/kids.jpg" alt="Kids BJJ" class="object-cover w-full h-full">
        </div>
        
        <!-- bjj academy -->
        <div class="w-full h-[1000px] grid">
            <img src="../../assets/images/group.jpg" alt="Kids BJJ" class="object-cover w-full h-full">
        </div>
        
        <!-- kids bjj -->
        <div class="w-full h-[1000px] grid overflow-clip">
            <img src="../../assets/images/kids.jpg" alt="Kids BJJ" class="object-cover w-full h-full hover:scale-105 transition-all duration-700">
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    name: "Home",
    components: {
        Icon
    }
}
</script>