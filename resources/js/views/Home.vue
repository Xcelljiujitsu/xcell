<template>
    <div class="w-full h-fit grid gap-12 px-56 py-4">
        <!-- nav bar -->
        <div class="w-full h-[69px] grid items-center grid-cols-3 text-custom-black">
            <!-- menues -->
            <div class="w-full flex items-center gap-6 text-custom-gray">
                <p>Xcell Academy</p>
                <p>Shop</p>
                <p>Members</p>
                <p>Content</p>
            </div>
            
            <!-- menues -->
            <div class="w-full grid items-center justify-itmes-center text-center font-semibold text-[18px]">
                <a href="/" class="">Xcell Jiu Jitsu Academy</a>
            </div>

            <!-- cart -->
            <div class="w-full flex justify-end gap-2 text-custom-gray">
                <p>Cart</p>
                <Icon icon="solar:cart-broken" height="24px" />
            </div>
        </div>

        <!-- hero -->
        <div class="w-full grid grid-cols-3 gap-6">
            <!-- shop -->
            <div class="w-full h-[1000px] grid overflow-clip relative group rounded-[4px]">
                <div class="w-full h-full absolute z-10 top-0 left-0 grid bg-custom-black/10">
                    <!-- body -->
                    <div class="m-auto w-[65%] h-fit grid">
                        <p class="text-[36px] text-white text-center font-bebas">Merchandise</p>
                    </div>
                </div>

                <!-- background -->
                <img src="../../assets/images/shop.jpg" alt="Kids BJJ" class="object-cover w-full h-full group-hover:scale-105 transition-all duration-700 z-0">
            </div>
            
            <!-- bjj academy -->
            <div class="w-full h-[1000px] grid overflow-clip relative group rounded-[4px]">
                <div class="w-full h-full absolute z-10 top-0 left-0 grid bg-custom-black/10">
                    <!-- body -->
                    <div class="m-auto w-[65%] h-fit grid">
                        <p class="text-[36px] text-white text-center font-bebas">BRAZILIAN JIU-JITSU</p>
                    </div>
                </div>

                <!-- background -->
                <img src="../../assets/images/academy0.jpg" alt="Kids BJJ" class="object-cover w-full h-full group-hover:scale-105 transition-all duration-700 z-0">
            </div>
            
            <!-- kids -->
            <div class="w-full h-[1000px] grid overflow-clip relative group rounded-[4px]">
                <div class="w-full h-full absolute z-10 top-0 left-0 grid bg-custom-black/10">
                    <!-- body -->
                    <div class="m-auto w-[65%] h-fit grid">
                        <p class="text-[36px] text-white text-center font-bebas">Kids BJJ</p>
                    </div>
                </div>

                <!-- background -->
                <img src="../../assets/images/kids_class.jpg" alt="Kids BJJ" class="object-cover w-full h-full group-hover:scale-105 transition-all duration-700 z-0">
            </div>
        </div>

        <!-- free trial -->
        <!-- <div class="w-full h-fit flex items-center gap-12 relative my-16">
            <img src="../../assets/images/logo.png" alt="Xcell Logo">

            <div class="w-fit h-fit grid">
                <p class="uppercase font-medium text-[36px] font-bebas">Free Trial Class!</p>
                <p class="text-[24px]">Brazilian Jiu Jutsu, No-Gi, Self-Defense, Kids Class, Adult Class.</p>
                <p>Visit us and start your Brazilian Jiu Jutsu journey learning from world-class instruction.</p>
            </div> 

            <button class="uppercase flex itmes-center gap-4 border-custom-black text-custom-black text-[18px] right-0 absolute px-10 py-2 rounded-[4px] shadow-newdrop hover:animate-vibrate-animate border-[1px]">
                <Icon icon="openmoji:calendar" height="32px" />
                <p>Schedule Now!</p>
            </button>
        </div> -->
        
        <!-- other free trial -->
        <div class="py-16 bg-custom-light">
            <div class="w-full h-fit grid">
                <div class="w-fit h-fit flex items-center gap-16 m-auto">
                    <div class="w-fit h-fit grid">
                        <p class="uppercase font-medium text-[48px] font-bebas -mt-2">Free Trial Class!</p>
                    </div>
                    

                    <div class="w-fit h-fit grid">
                        <p class="text-[18px]">Brazilian Jiu Jutsu, No-Gi, Self-Defense, Kids Class, Adult Class</p>
                        <p>Visit us and start your Brazilian Jiu Jutsu journey learning from world-class instruction.</p>

                        <button class="w-fit mt-4 uppercase flex itmes-center gap-4 hover:bg-custom-black bg-white border-custom-black hover:text-white text-custom-black px-10 py-2 rounded-[4px] shadow-newdrop hover:animate-vibrate-animate border-[1px] transition-all duration-300">
                            <p>Schedule Now!</p>
                        </button>
                    </div> 

                </div>
            </div>
        </div>

        <!-- about xcell bjj -->
        <div class="w-full h-[800px] grid grid-cols-2 gap-4 bg-black group rounded-[4px]">
            <!-- image -->
            <div class="w-full h-full grid">
                <img src="../../assets/images/xcell_bjj.jpg" alt="Xcell BJJ" class="m-auto w-[50%]">
            </div>

            <!-- content -->
            <div class="w-full h-full grid text-white group-hover:text-custom-black transition-all duration-200">
                <div class="w-[50%] m-auto h-fit px-6 group-hover:bg-opacity-100 bg-opacity-5 bg-white rounded-[2px] transition-all duration-200">
                    <div class="w-full border-t-[1px] border-white py-12 grid gap-8 ">
                        <p class="font-semibold text-[48px] font-bebas">Welcome to the Family</p>

                        <p class="">We believe in building character, connecting with community, and learning to cultivate a better self through the practice of Brazilian Jiu Jitsu. </p>
                        <p class="text-">Brazilian Jiu Jitsu is a combat sport, a self-defense system, a fitness routine, and a lifestyle. Our mission is to help people from around Boynton Beach, Lake Worth, and Delray Beach experience the incredible rewards that come with martial arts training -- Xcell Jiu Jitsu Academy is a small gym dedicated to the success of our members, so every time you train, you know you'll get hands-on guidance, personalized attention, and real results. </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- reviews -->
        <div class="py-16 bg-custom-light">
            <div class="w-full h-[250px] grid">
                <!-- review counter -->
                <div class="w-full h-fit max-h-[215px] overflow-auto grid py-8 px-48 relative">
                    <!-- stars -->
                    <div class="w-fit h-fit flex items-center">
                        <Icon v-for="(e, i) in 5" :key="i" icon="meteocons:star-fill" height="24px"/>
                        <!-- <Icon v-for="(e, i) in 1" :key="i" icon="meteocons:star" height="24px"/> -->
                    </div>

                    <!-- review name -->
                    <p class="text-[18px] font-medium">{{ reviews[1].name }}</p>
                    <!-- date -->
                    <p class="text-[18px]">{{ new Date(reviews[1].date).toDateString() }}</p>
                    <!-- text -->
                    <p class="mt-4">{{ reviews[1].text }}</p>
                </div>

                <div class="w-fit h-[35px] mx-auto flex items-center gap-2 text-custom-gray/50">
                    <Icon v-for="(e, i) in 5" :key="i" icon="oui:dot" height="24px" :class="i == 0 ? 'text-custom-black' : ''" class="cursor-pointer" />
                </div>
            </div>
        </div>

        <!-- request more information -->


        <div class="w-full h-fit grid grid-cols-2 gap-4">
            <div class="w-full h-fit m-auto grid">
                <div class="w-fit h-fit mx-auto grid">
                    <p class="font-bebas text-[48px]">Get Started Today</p>
                    <p>ENROLL TO RECEIVE DIRECT ACCESS TO EXCLUSIVE OFFERS, PRODUCT RELEASES, AND MORE!</p>
                    <div class="w-[450px] h-[48px] flex border-[2px] border-black rounded-[4px] mt-6">
                        <input type="text" class="w-full border-none ring-0 text-[14px]" placeholder="Enter your email address">
                        <button class="w-[130px] bg-black text-white uppercase text-[12px]">Subscribe</button>
                    </div>
                </div>
            </div>

            <div class="w-full h-fit m-auto">
                <div class="w-[545px] h-[970px] grid m-auto">
                    <img src="../../assets/images/professor_gatche.jpg" alt="Professor Competition" class="object-cover w-full h-full shadow-newdrop rounded-[4px]">
                </div>
            </div>
        </div>

        <!-- footer -->
        <div class="w-full h-[69px] grid items-center grid-cols-2 text-custom-black text-[12px]">
            <!-- left side -->
            <div class="w-full flex items-center gap-6 text-custom-gray">
                <p>Contact</p>
                <p>Terms</p>
                <p>Privacy</p>

                <!-- social media -->
                <div class="w-fit h-fit flex items-center gap-6 ml-6 text-custom-gray/70">
                    <Icon icon="mdi:instagram" height="24px" />
                    <Icon icon="mdi:facebook" height="24px" />
                    <Icon icon="mdi:google-maps" height="24px" />
                    <Icon icon="mdi:google" height="24px" />
                </div>
            </div>

            <!-- copyright -->
            <div class="w-full h-full flex items-center justify-end gap-2 text-custom-gray">
                <p>Xcell Jiu Jutsu Academy &#169; 2024</p>
            </div>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    name: "Home",
    data(){
        return {
            reviews: [
                {
                    name: "Pamela Moser",
                    date: "11/12/2023",
                    text: "Out 8 yr old grandson goes here. He loves it!! Jorge is great with the kids as well as his assistance. Would highly recommend this place."
                },
                {
                    name: "Justin Andrew",
                    date: "12/23/2023",
                    text: "Xcell is a fantastic palce! Clean, spacious, stylish, welcoming, warm, and a wonderful team to make you feel at home. Professor Santiago is a seasoned pro with an eye for meticulous detail, and he shares his knowledge with joy and a passion for the art. Greab vibes, great jiu jitsu; I highly highly recommend Xcell Academy."
                }
            ]
        }
    },
    components: {
        Icon
    }
}
</script>