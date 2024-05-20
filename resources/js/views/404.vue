<template>
    <div class="w-full h-fit grid gap-12 md:px-12 lg:px-16 xl:28 2xl:px-44">
        <div class="w-full h-fit grid gap-12 px-6 pt-16 md:pt-4 pb-4 bg-white">
            <Navbar @contact="gotoContactRequest" />

            <!-- page not found -->
            <div class="w-full h-fit md:h-[400px] lg:h-[600px] xl:h-[800px] grid grid-cols-3 md:grid-cols-2 gap-4">
                <div class="w-full h-[300px] md:h-full grid">
                    <img src="../../assets/images/404.jpg" alt="404 Not Found" class="object-contain w-full h-full">
                </div>

                <div class="w-fit h-fit my-auto grid col-span-2 md:col-span-1">
                    <p class="text-[48px] md:text-[96px] xl:text-[128px] font-semibold">404</p>
                    <p class="text-[20px] md:text-[28px] xl:text-[36px] font-medium mt-4">UH OH! You're lost.</p>
                    <p class="text-[13px] mt-2 md:text-[14px] md:w-[90%] lg:w-[80%] 2xl:w-[70%]">The page you are looking for does not exist. It could have been moved or deleted.. who knows, but, you can click the button below to go back to the homepage.</p>

                    <button @click="$router.push({name: 'Home'})" class="w-full md:w-fit h-[48px] md:px-8 rounded-[4px] bg-custom-black text-white uppercase text-[14px] font-medium mt-8">Homepage</button>
                </div>
            </div>

            <!-- free trial -->
            <div class="w-full h-fit grid lg:flex items-center gap-8 lg:gap-12 relative bg-custom-light px-8 py-8 lg:py-16">
                <img src="../../assets/images/logo.png" alt="Xcell Logo" class="hidden lg:block">

                <div class="w-fit h-fit grid">
                    <p class="uppercase font-medium text-[36px] lg:text-[48px] font-bebas -mt-2 whitespace-nowrap">Free Trial Class!</p>
                    <p class="lg:text-[18px]">Brazilian Jiu Jutsu, No-Gi, Self-Defense, Kids Class, Adult Class.</p>
                    <p class="text-[14px] lg:text-[16px]">Visit us and start your Brazilian Jiu Jutsu journey learning from world-class instruction.</p>
                </div> 

                <button class="w-fit uppercase flex itmes-center gap-4 border-custom-black text-custom-black text-[18px] right-8 lg:absolute px-10 py-2 rounded-[4px] shadow-newdrop hover:animate-vibrate-animate border-[1px]">
                    <p>Schedule Now!</p>
                </button>
            </div>

            <Footer :set_type="'request'" />
        </div>
    </div>
</template>

<script>

import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';

export default {
    name: "404 Page Not Found",
    methods: {
        gotoContactRequest(){
            document.getElementById("contact_form").scrollIntoView(true);
        }
    },
    components: {
        Navbar,
        Footer
    }
}

</script>