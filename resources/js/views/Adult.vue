<template>
    <div class="w-full h-fit grid gap-12 md:px-12 lg:px-16 xl:28 2xl:px-44">
        <div class="w-full h-fit grid gap-12 px-6 pt-16 md:pt-4 pb-4 bg-white">
            <Navbar @contact="gotoContactRequest" />

            <!-- Adult BJJ Article -->
            <div class="w-full h-fit grid my-8 gap-4">
                <!-- title -->
                <div class="w-[85%] md:w-[70%] xl:w-[50%] h-fit grid mx-auto">
                    <!-- published date -->
                    <p class="text-[14px] xl:text-[15px] font-medium text-custom-gray/50">Published May 21, 2024</p>

                    <!-- title -->
                    <h1 class="text-[32px] md:text-[42px] xl:text-[53px] font-semibold">Brazilian Jiu Jitsu in Boynton Beach</h1>

                    <!-- author -->
                    <div class="w-fit h-fit flex items-center gap-2">
                        <!-- headshot -->
                        <div class="w-[48px] h-[48px] min-w-[48px] min-h-[48px] grid rounded-full relative overflow-hidden">
                            <img src="../../assets/images/headshot.jpg" alt="Professor Santiago Headshot" class="w-full h-full object-cover">
                        </div>

                        <!-- info -->
                        <div class="w-fit h-fit grid">
                            <p class="text-custom-black font-medium text-[14px] xl:text-[15px]">By Jorge Santiago</p>
                            <p class="text-custom-gray/50 text-[13px] xl:text-[14px]">Owner, Head Professor</p>
                        </div>
                    </div>
                </div>

                <!-- image -->
                <div class="w-[95%] md:w-[80%] xl:w-[70%] h-[250px] md:h-[400px] xl:h-[650px] mx-auto grid my-8 relative overflow-hidden rounded-[2px] shadow-carddrop">
                    <img src="../../assets/images/adultbjj.jpg" alt="Adult BJJ" class="w-full h-full object-cover">
                </div>

                <div class="w-[85%] md:w-[70%] xl:w-[50%] h-fit mx-auto grid gap-4 relative text-custom-black md:text-[18px] xl:text-[20px]">
                    <p>Brazilian Jiu Jitsu is more than just a martial art! It's an awesome way to lose weight, build your personal fitness, reduce your stress and anxiety levels, learn self-defense, and connect with the amazing community we've worked hard to cultivate here at Xcell Jiu Jitsu Academy. Our members come to us from across Boynton Beach, Lake Worth, and Delray beach because we offer high-quality BJJ classes for beginners and veterans alike.</p>
                    <p>If you have questions about whether Jiu Jitsu is right for you, just <span @click="gotoContactRequest" class="cursor-pointer underline">fill out the form below</span> and our team will reach out to you about how we can help you achieve your goals!</p>
                
                    <h2 class="text-[22px] md:text-[25px] xl:text-[30px]">Brazilian Jiu Jitsu Classes Create Positive Change</h2>

                    <p>Our BJJ Classes are all about <span class="font-medium">building character</span>, <span class="font-medium">connecting with community</span>, and <span class="font-medium">growing as an individual</span>. When you train at Xcell Jiu Jitsu Academy, you're doing more than just gaining fitness and learning self-defense: you're making an investment in yourself.</p>
                    <p>Jiu Jitsu helps develop confidence and discipline, reduces stress, and helps you meet new friends and mentors. We're proud to have individuals from Boynton Beach and beyond as part of our community, and we hope to continue growing and enacting positive change through our BJJ classes. One of our philosophies is to <span class="font-medium">be better than yourself, not others!</span></p>

                    <p class="font-semibold">By training in Jiu Jitsu, you'll get access to:</p>

                    <ul class="grid list-disc ml-12">
                        <li>A dynamic fitness system that works for beginners & veterans alike</li>
                        <li>Boosted energy, better sleep, reduced stress & anxiety</li>
                        <li>Real-world self-defense skills to stay safe in any situation</li>
                        <li>A community that will support, uplift, & empower you</li>
                    </ul>
                    
                    <h2 class="text-[22px] md:text-[25px] xl:text-[30px]">See Why We're Boynton Beach's Best Brazilian Jiu Jitsu Program</h2>

                    <p>Our team at Xcell Jiu Jitsu Academy is proud to offer our community Brazilian Jiu Jitsu classes that result in real personal growth, improved fitness, and involvement in a passionate and supportive community. Visit us in Boynton Beach and sign up for your first class -- you won't regret it!</p>
                    <p>If you have questions about BJJ, <span @click="gotoContactRequest" class="cursor-pointer underline">fill out the short form below</span> and one of our team members will reach out to you!</p>
                </div>
            </div>

            <FAQ />

            <!-- <Reviews /> -->

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

export default {
    name: "Adult Brazilian Jiu Jitsu",
    data() {
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
            });
        }
    },
    components: {
        Icon,

        Navbar,
        Reviews,
        FAQ,
        Footer
    }
}

</script>

<style scoped>

h2 {
    font-weight: 700;
    padding: 8px 0px;
}

</style>