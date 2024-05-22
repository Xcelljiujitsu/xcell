<template>
    <div class="w-full h-fit grid gap-12 md:px-12 lg:px-16 xl:28 2xl:px-44">
        <div class="w-full h-fit grid gap-12 px-6 pt-16 md:pt-4 pb-4 bg-white">
            <Navbar @contact="gotoContactRequest" />

            <!-- mobile hero -->
            <div @click="mobileHeroClick(hero)" class="w-full h-[500px] grid md:hidden relative overflow-clip rounded-[4px]">
                <div class="w-full h-full absolute z-10 top-0 left-0 grid bg-custom-black/10">
                    <div class="m-auto w-[65%] h-fit grid">
                        <p class="text-[28px] text-white text-center font-bebas"> {{ hero == 1 ? 'Merchandise' : ( hero == 2 ? 'Adult BJJ' : 'Kids BJJ' ) }} </p>
                    </div>
                </div>

                <!-- background images -->
                <img src="../../assets/images/shop.jpg" alt="Merchandise" :class="hero == 1 ? 'opacity-100' : 'opacity-0'" class="object-cover w-full h-full transition-opacity duration-700 z-0 absolute top-0 left-0">
                <img src="../../assets/images/academy0.jpg" alt="Adult BJJ" :class="hero == 2 ? 'opacity-100' : 'opacity-0'" class="object-cover w-full h-full transition-opacity duration-700 z-0 absolute top-0 left-0">
                <img src="../../assets/images/kids_class.jpg" alt="Kids BJJ" :class="hero == 3 ? 'opacity-100' : 'opacity-0'" class="object-cover w-full h-full transition-opacity duration-700 z-0 absolute top-0 left-0">
            
                <div class="w-full h-fit py-4 absolute bottom-0 left-0">
                    <div class="w-fit mx-auto flex items-center gap-2 text-white/60">
                        <Icon v-for="(e, i) in 3" :key="i" icon="oui:dot" height="24px" :class="hero == e ? 'text-white' : ''" class="cursor-pointer" />
                    </div>
                </div>
            </div>

            <!-- hero -->
            <div class="w-full hidden md:grid grid-cols-3 gap-6">
                <!-- shop -->
                <button @click="$router.push({name: 'Coming Soon'})" class="w-full md:h-[500px] lg:h-[700px] xl:h-[1000px] grid overflow-clip relative group rounded-[4px]">
                    <div class="w-full h-full absolute z-10 top-0 left-0 grid bg-custom-black/10">
                        <!-- body -->
                        <div class="m-auto w-[65%] h-fit grid">
                            <p class="text-[28px] lg:text-[36px] text-white text-center font-bebas">Merchandise</p>
                        </div>
                    </div>

                    <!-- background -->
                    <img src="../../assets/images/shop.jpg" alt="Merchandise" class="object-cover w-full h-full group-hover:scale-105 transition-all duration-700 z-0">
                </button>
                
                <!-- bjj academy -->
                <button @click="$router.push({name: 'Adult BJJ'})" class="w-full md:h-[500px] lg:h-[700px] xl:h-[1000px] grid overflow-clip relative group rounded-[4px]">
                    <div class="w-full h-full absolute z-10 top-0 left-0 grid bg-custom-black/10">
                        <!-- body -->
                        <div class="m-auto w-[65%] h-fit grid">
                            <p class="text-[28px] lg:text-[36px] text-white text-center font-bebas">Adult BJJ</p>
                        </div>
                    </div>

                    <!-- background -->
                    <img src="../../assets/images/academy0.jpg" alt="Adult BJJ" class="object-cover w-full h-full group-hover:scale-105 transition-all duration-700 z-0">
                </button>
                
                <!-- kids -->
                <button @click="$router.push({name: 'Kids BJJ'})" class="w-full md:h-[500px] lg:h-[700px] xl:h-[1000px] grid overflow-clip relative group rounded-[4px]">
                    <div class="w-full h-full absolute z-10 top-0 left-0 grid bg-custom-black/10">
                        <!-- body -->
                        <div class="m-auto w-[65%] h-fit grid">
                            <p class="text-[28px] lg:text-[36px] text-white text-center font-bebas">Kids BJJ</p>
                        </div>
                    </div>

                    <!-- background -->
                    <img src="../../assets/images/kids_class.jpg" alt="Kids BJJ" class="object-cover w-full h-full group-hover:scale-105 transition-all duration-700 z-0">
                </button>
            </div>
            
            <!-- other free trial -->
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

            <!-- about xcell bjj -->
            <div class="w-full h-fit lg:h-[800px] grid lg:grid-cols-2 gap-4 py-8 group rounded-[4px] relative">
                <!-- mobile borders -->
                <div class="top-0 left-0 absolute h-[25%] w-[25%] border-custom-black border-l-[3px] border-t-[3px] rounded-tl-[4px]"></div>
                <div class="bottom-0 right-0 absolute h-[25%] w-[25%] border-custom-black border-r-[3px] border-b-[3px] rounded-br-[4px]"></div>

                <!-- image -->
                <!-- <div class="w-full h-full hidden lg:grid">
                    <img src="../../assets/images/xcell_bjj.jpg" alt="Xcell BJJ" class="m-auto w-[50%] lg:w-[80%] xl:w-[6575%] 2xl:w-[65%]">
                </div> -->
                <!-- mobile image -->
                <div class="w-full h-full grid">
                    <img src="../../assets/images/invert_xcell_bjj.png" alt="Xcell BJJ" class="m-auto w-[50%] lg:w-[80%] xl:w-[6575%] 2xl:w-[65%]">
                </div>

                <!-- content -->
                <div class="w-[90%] h-full grid mx-auto text-custom-black transition-all duration-200 shadow-carddrop">
                    <div class="w-[90%] md:w-[80%] lg:w-[75%] 2xl:w-[65%] m-auto h-fit px-6 group-hover:bg-opacity-100 bg-opacity-5 bg-white rounded-[2px] transition-all duration-200">
                        <div class="w-full border-t-[1px] border-white py-12 grid gap-8 ">
                            <p class="font-semibold text-[28px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] font-bebas text-center lg:text-left">Welcome to the Family</p>

                            <p class="hidden md:block">We believe in building character, connecting with community, and learning to cultivate a better self through the practice of Brazilian Jiu Jitsu. </p>
                            <p class="text-[14px] md:text-[16px]">Brazilian Jiu Jitsu is a combat sport, a self-defense system, a fitness routine, and a lifestyle. Our mission is to help people from around Boynton Beach, Lake Worth, and Delray Beach experience the incredible rewards that come with martial arts training -- Xcell Jiu Jitsu Academy is a small gym dedicated to the success of our members, so every time you train, you know you'll get hands-on guidance, personalized attention, and real results. </p>
                        </div>
                    </div>
                </div>
            </div>

            <Reviews />

            <FAQ transparent_bg=""/>

            <GoogelMaps />
            
            <Footer :set_type="footer_type" />
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue';
import Navbar from '../components/navbar.vue';
import Footer from '../components/footer.vue';
import Reviews from '../components/reviews.vue';
import FAQ from '../components/faq.vue';
import GoogelMaps from '../components/googelMaps.vue';

export default {
    name: "Home",
    data(){
        return {
            hero: 1,
            footer_type: "",
        }
    },
    mounted(){
        this.nextHero(0);

        if('request_form' in this.$route.query){
            this.$router.replace({query: {}})
            this.gotoContactRequest()
        }
    },
    watch: {

    },
    methods: {
        nextHero(value){
            this.hero = (value < 3 ) ? value + 1 : 1;

            setTimeout(() => {
                this.nextHero(this.hero);
            }, 5000);
        },
        mobileHeroClick(index){
            switch(index){
                case 1:
                    this.$router.push({name: "Coming Soon"});
                    break;
                case 2:
                    this.$router.push({name: "Adult BJJ"});
                    break;
                case 3:
                    this.$router.push({name: "Kids BJJ"});
                    break;
                default:
                    break;
            }
        },

        gotoContactRequest(){
            this.footer_type = "";
            
            setTimeout(() => {
                this.footer_type = 'request';
                document.getElementById("contact_form").scrollIntoView(true);
            }, 20);
        }
    },
    components: {
        Icon,

        Navbar,
        Reviews,
        FAQ,
        GoogelMaps,
        Footer
    }
}
</script>