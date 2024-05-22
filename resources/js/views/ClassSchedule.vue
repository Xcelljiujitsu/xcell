<template>
    <div class="w-full h-fit grid gap-12 md:px-12 lg:px-16 xl:28 2xl:px-44">
        <div class="w-full h-fit grid gap-12 px-6 pt-16 md:pt-4 pb-4 bg-white">
            <Navbar @contact="gotoContactRequest" />

            <!-- class schedule -->
            <div class="w-full h-fit grid py-6 md:py-12">
                <div class="w-[85%] md:w-[70%] xl:w-[50%] h-fit mx-auto grid">
                    <p class="text-[22px] md:text-[36px] xl:text-[48px] font-bebas text-center">Class Schedule</p>

                    <!-- class select buttons -->
                    <div class="w-full h-[59px] grid grid-cols-2 text-[24px] font-bebas my-6">
                        <!-- adult -->
                        <button @click="view = 'adult'" :class="view == 'adult' ? 'bg-custom-black text-white' : 'bg-custom-light text-custom-black'" class="transition-all duration-500">Adult BJJ</button>
                        <!-- kids -->
                        <button @click="view = 'kid'" :class="view == 'kid' ? 'bg-custom-black text-white' : 'bg-custom-light text-custom-black'" class="transition-all duration-500">Kids BJJ</button>
                    </div>

                    <!-- weekdays -->
                    <div class="w-[80%] h-fit grid gap-4 mx-auto">
                        <p class="text-center uppercase text-[14px]">monday &mdash; friday <span class="ml-2 font-medium">{{ view == 'adult' ? '1 hour' : '45 minutes' }}</span></p>

                        <!-- headers -->
                        <div class="w-full h-fit flex items-center gap-2 mt-4 font-semibold uppercase text-[14px] md:text-[15px]">
                            <p class="w-[78px] min-w-[78px] text-center">Time</p>
                            <p class="w-full">Class</p>
                        </div>

                        <!-- weekday classes -->
                        <div v-for="(item, index) in (view == 'adult' ? adult_weekdays : kids_weekdays)" :key="index" class="w-full h-fit flex truncate md:items-center gap-2 uppercase text-[12px] md:text-[14px] relative">
                            <p class="w-[78px] min-w-[78px]">{{ item.time }}</p>
                            <div class="w-full h-fit grid md:flex items-center truncate gap-1 md:gap-2 relative">
                                <p class="w-full truncate">{{ item.class.replace('-', '&mdash;') }}</p>

                                <!-- class days -->
                                <div class="w-fit h-fit flex items-center gap-2 md:absolute md:right-0">
                                    <div v-for="(day, dindex) in item.days.split('')" :key="dindex" class="w-[20px] h-[20px] min-w-[20px] min-h-[20px] grid text-[10px] md:text-[12px] text-center bg-custom-light rounded-full font-medium uppercase">
                                        <p class="m-auto">{{ day }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- weekends -->
                    <div class="w-[80%] h-fit grid gap-4 mx-auto mt-12">
                        <p class="text-center uppercase text-[14px] font-medium">saturday <span class="ml-2 font-medium">2 hours</span></p>

                        <!-- headers -->
                        <div class="w-full h-fit flex items-center gap-2 mt-4 font-semibold uppercase text-[14px] md:text-[15px]">
                            <p class="w-[78px] min-w-[78px] text-center">Time</p>
                            <p class="w-full">Class</p>
                        </div>

                        <!-- weekend classes -->
                        <div class="w-full h-fit flex items-center gap-2 uppercase text-[12px] md:text-[14px]">
                            <p class="w-[78px] min-w-[78px]">10:00 AM</p>
                            <p class="w-full">Open Mat</p>
                        </div>
                    </div>
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
    name: "Class Schedule",
    data() {
        return {
            view: "adult",

            adult_weekdays: [
                {
                    time: "7:00 AM",
                    class: "Adults BJJ - All Levels",
                    days: "TT"
                },
                {
                    time: "12:00 PM",
                    class: "Adults BJJ - All Levels",
                    days: "MWF"
                },
                {
                    time: "6:30 PM",
                    class: "Adults BJJ - All Levels",
                    days: "MW"
                },
                {
                    time: "6:30 PM",
                    class: "Adults BJJ - Beginners",
                    days: "TT"
                },
                {
                    time: "7:30 PM",
                    class: "Adults BJJ - Beginners",
                    days: "MW"
                },
                {
                    time: "7:30 PM",
                    class: "Adults BJJ - No Gi",
                    days: "TT"
                },
            ],
            kids_weekdays: [
                {
                    time: "4:45 PM",
                    class: "Kids BJJ - 5 and 6 Yrs",
                    days: "MW"
                },
                {
                    time: "5:30 PM",
                    class: "Kids BJJ - 7 to 11 Yrs",
                    days: "MTWT"
                }
            ]
        }
    },
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