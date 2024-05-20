<template>
    <div class="w-full h-fit grid gap-12 md:px-12 lg:px-16 xl:28 2xl:px-44">
        <div class="w-full h-fit grid gap-12 px-6 pt-16 md:pt-4 pb-4 bg-white">
            <Navbar @contact="gotoContactRequest" />

            <!-- page not found -->
            <div class="w-full h-fit md:h-[400px] lg:h-[600px] xl:h-[800px] grid gap-4 relative">
                <div class="w-fit h-fit my-auto grid z-10">
                    <p class="text-[18px] md:text-[24px] xl:text-[32px]">We're almost there</p>
                    <p class="text-[48px] md:text-[96px] xl:text-[128px] font-semibold">Coming Soon</p>
                    <p class="text-[16px] mt-2 md:text-[18px] md:w-[90%] lg:w-[80%] 2xl:w-[70%]">We are preparing something amazing and exciting for you! We'll be here soon, <span @click="scrollToSubscribe" class="font-medium underline cursor-pointer">subscribe</span> to be notified of new updates. You can click the button below to go back to the previous page.</p>

                    <button @click="$router.back()" class="w-full md:w-fit h-[48px] md:px-8 rounded-[4px] bg-custom-black text-white uppercase text-[14px] font-medium mt-8">Back</button>
                </div>

                <!-- background image -->
                <div class="w-full h-[300px] md:h-full grid absolute top-0 left-0 z-0">
                    <!-- <img src="../../assets/images/coming_soon.jpg" alt="404 Not Found" class="object-contain w-full h-full"> -->
                </div>
            </div>

            <!-- free trial -->
            <div class="py-6 lg:py-16 grid bg-custom-light">
                <div class="mx-auto w-fit max-w-[80%] xl:w-full xl:max-w-[100%] h-fit grid">
                    <div class="w-fit h-fit grid lg:flex items-center gap-4 lg:gap-16 m-auto">
                        <div class="w-fit h-fit grid">
                            <p class="uppercase font-medium text-[36px] lg:text-[48px] font-bebas -mt-2 whitespace-nowrap">Free Trial Class!</p>
                        </div>
                        

                        <div class="lg:w-fit h-fit grid">
                            <p class="lg:text-[18px]">Brazilian Jiu Jutsu, No-Gi, Self-Defense, Kids Class, Adult Class</p>
                            <p class="text-[14px] lg:text-[16px]">Visit us and start your Brazilian Jiu Jutsu journey learning from world-class instruction.</p>

                            <button class="text-[14px] lg:text-[16px] w-fit mt-4 uppercase flex itmes-center gap-4 hover:bg-custom-black bg-white border-custom-black hover:text-white text-custom-black px-10 py-2 rounded-[4px] shadow-newdrop hover:animate-vibrate-animate border-[1px] transition-all duration-300">
                                <p>Schedule Now!</p>
                            </button>
                        </div> 

                    </div>
                </div>
            </div>

            <Footer :set_type="footer_type" />
        </div>
    </div>
</template>

<script>

import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';

export default {
    name: "404 Page Not Found",
    data(){
        return {
            footer_type: ""
        }
    },
    methods: {
        gotoContactRequest(){
            this.footer_type = "";
            
            setTimeout(() => {
                this.footer_type = 'request';
                document.getElementById("contact_form").scrollIntoView(true);
            }, 20);
        },
        scrollToSubscribe(){
            this.footer_type = "";
            
            setTimeout(() => {
                this.footer_type = 'subscribe';
                document.getElementById("contact_form").scrollIntoView(true);
            }, 20);
        }
    },
    components: {
        Navbar,
        Footer
    }
}

</script>