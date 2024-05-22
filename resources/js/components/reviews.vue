<template>
    <!-- reviews -->
    <div class="lg:py-10 2xl:py-16 bg-custom-light relative">
        <div class="w-full h-[250px] grid justify-items-center">
            <!-- review counter -->
            <div v-for="(item, index) in reviews" :key="index" :class="review == index ? 'opacity-100' : 'opacity-0'" class="w-full h-fit max-h-[215px] overflow-auto grid py-4 2xl:py-8 px-12 md:px-20 2xl:px-42 transition-opacity duration-700 absolute left-0 lg:top-10 2xl:top-16">
                <!-- stars -->
                <div class="w-fit h-fit flex items-center">
                    <Icon v-for="(e, i) in 5" :key="i" icon="meteocons:star-fill" height="24px"/>
                    <!-- <Icon v-for="(e, i) in 1" :key="i" icon="meteocons:star" height="24px"/> -->
                </div>

                <!-- review name -->
                <p class="text-[14px] md:text-[16px] 2xl:text-[18px] font-medium">{{ item.name }}</p>
                <!-- date -->
                <p class="text-[14px] md:text-[16px] 2xl:text-[18px]">{{ new Date(item.date).toDateString() }}</p>
                <!-- text -->
                <p class="text-[12px] md:text-[14px] 2xl:text-[16px] mt-4">{{ item.text }}</p>
            </div>

            <div class="w-fit h-[35px] flex items-center gap-2 text-custom-gray/50 absolute bottom-0">
                <Icon v-for="(e, i) in reviews.length" :key="i" icon="oui:dot" height="24px" :class="review == i ? 'text-custom-black' : ''" class="" />
            </div>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    name: "Reviews",
    data() {
        return {
            review: 0,
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
                },
                {
                    name: "Daniel Porcelain",
                    date: "10/08/2023",
                    text: "My son and I have been members of Xcell for over 3yrs now. All the coaches are amazing with the adults and kids. Professor Jorge, Coach Kelly, Coach Rob, Coach Enea, are Coach Andy, have help my son learn confidence, self defense, and self discipline."
                },
                {
                    name: "Dan G",
                    date: "10/28/2023",
                    text: "In addition to Jorge, they have a great coaching staff and support system.   The first thing that caught my attention was the welcoming environment. Good vibes, good jujitsu!"
                },
                {
                    name: "PJ Davis",
                    data: "12/04/2023",
                    text: "From hobbyist to competitor. Xcell Jiu Jitsu has the most well rounded instruction in Palm Beach County. Led by Jorge Santiago, the environment embodies positivity, togetherness, and is very family oriented. The coaching staff is amazing, and detailed in all aspects of Jiu Jitsu. There’s no better place to be."
                }
            ],
        }
    },
    mounted(){
        this.nextReview(-1);
    },
    methods: {
        nextReview(value){
            this.review = (value < this.reviews.length - 1 ) ? value + 1 : 0;

            setTimeout(() => {
                this.nextReview(this.review);
            }, 5000);
        },
    },
    components: {
        Icon
    }
}

</script>