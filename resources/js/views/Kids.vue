<template>
    <div class="w-full h-fit grid gap-12 md:px-12 lg:px-16 xl:28 2xl:px-44">
        <div class="w-full h-fit grid gap-12 px-6 pt-16 md:pt-4 pb-4 bg-white">
            <Navbar @contact="gotoContactRequest" />

            <!-- Kids BJJ Article -->
            <div class="w-full h-fit grid my-8 gap-4">
                <!-- title -->
                <div class="w-[85%] md:w-[70%] xl:w-[50%] h-fit grid mx-auto">
                    <!-- published date -->
                    <p class="text-[14px] xl:text-[15px] font-medium text-custom-gray/50">Published May 21, 2024</p>

                    <!-- title -->
                    <h1 class="text-[32px] md:text-[42px] xl:text-[53px] font-semibold">Kids Jiu Jitsu in Boynton Beach</h1>

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
                    <img src="../../assets/images/kids.jpg" alt="Adult BJJ" class="w-full h-full object-cover">
                </div>

                <div class="w-[85%] md:w-[70%] xl:w-[50%] h-fit mx-auto grid gap-4 relative text-custom-black md:text-[18px] xl:text-[20px]">
                    <p>Every parent wants the best for their child. That's why Xcell Jiu Jitsu Academy offers comprehensive Kids Jiu Jitsu classes that will give your child the opportunity to learn important lessons about teamwork, self-confidence, discipline, respect, and how to achieve big goals. They'll get to engage with interactive games, stay active, and have fun building lifelong fitness!</p>
                    <p>Brazilian Jiu Jitsu is all about <span class="font-medium">family</span>, <span class="font-medium">community</span>, and <span class="font-medium">self-improvement</span>. Our instructors are passionate about helping children from around Boynton Beach, Lake Worth, and Delray Beach develop strong values and become the best they can be.</p>
                    <p>If you have questions about our program, <span @click="gotoContactRequest" class="underline cursor-pointer">fill out the short form below</span> to reach out! We're happy to help.</p>

                    <h2 class="text-[22px] md:text-[25px] xl:text-[30px]">Our Kids Jiu Jitsu classes are split into three categories:</h2>

                    <h3 class="font-semibold">Tiny Champions (Ages 4 &mdash; 6)</h3>
                    <p>We'll introduce your child to the basics of Brazilian Jiu Jitsu and help them learn how to listen to instruction, behave respectfully toward teachers, and develop their gross motor skills. They'll also meet new friends and have tons of fun!</p>
                
                    <h3 class="font-semibold">Little Champions (Ages 7 &mdash; 10)</h3>
                    <p>We'll continue to build upon the fundamentals introduced in our Tiny Champions program, and introduce new students to the early concepts of Brazilian Jiu Jitsu. Students will begin to take on basic grappling techniques, learning focus and discipline, and they'll get the chance to stay active while also learning crucial life skills!</p>
                    

                    <h3 class="font-semibold">Juniors (Ages 11 &mdash; 13)</h3>
                    <p>This component of our Kids Jiu Jitsu program introduces the full and diverse experience of Brazilian Jiu Jitsu, helping students build robust physical fitness, enhance their skills, and learn valuable teamwork and leadership skills.</p>

                    <h2 class="text-[22px] md:text-[25px] xl:text-[30px]">Kids Jiu Jitsu Classes Build A Foundation For Success</h2>

                    <p>Martial arts training will give your child the tools they need to perform better in school by <span class="font-medium">establishing strong values</span> and learning transferable skills. Whether they grow up to be a doctor, lawyer, scientist, or anything else, what we teach at Xcell Jiu Jitsu Academy will prepare them for lifelong success!</p>
                    <p>Our Kids Jiu Jitsu classes teach more than just grappling. As your child works to earn their black belt, they <span class="font-medium">learngoal-setting skills</span> and <span class="font-medium">the value of hard work</span>. When they train with their new friends and mentors, they learn about <span class="font-medium">teamwork</span> and <span class="font-medium">leadership</span>. When they practice to master new techniques, they gain <span class="font-medium">discipline</span> and <span class="font-medium">focus</span>. The benefits are endless!</p>

                    <p class="font-semibold">Our Brazilian Jiu Jitsu classes offer students:</p>

                    <ul class="grid list-disc ml-12">
                        <li>Soaring self-confidence</li>
                        <li>Foundational teamwork & leadership skills</li>
                        <li>Improved discipline & focus</li>
                        <li>Positive role models to provide guidance</li>
                    </ul>

                    <p>Our classes begin with fundamentals, and we work with each student to ensure that they get the personalized training they need. As a small gym, we're able to offer unparalleled attention to each child, giving feedback and helping them get the most out of Jiu Jitsu! It all starts here in Boynton Beach.</p>
                </div>

                <!-- video -->
                <video muted autoplay loop class="w-[85%] md:w-[70%] xl:w-[50%] h-[250px] md:h-[400px] xl:h-[650px] mx-auto">
                    <source src="../../assets/videos/kidsbjj.mp4"  type="video/mp4">
                </video>

                <div class="w-[85%] md:w-[70%] xl:w-[50%] h-fit mx-auto grid gap-4 relative text-custom-black md:text-[18px] xl:text-[20px]">
                    <h2 class="text-[22px] md:text-[25px] xl:text-[30px]">Plus Brazilian Jiu Jitsu Will Help Your Child Develop Fitness, Flexibility, & More!</h2>

                    <p>Aside from confidence and life skills your child will going from our Kids Jiu Jitsu program, they'll also stay active and have tons of fun! Our unique training system at Xcell Jiu Jitsu Academy uses games and learning tools to help keeps stay <span class="font-medium">focused</span>, <span class="font-medium">motivated</span>, and <span class="font-medium">moving</span>.</p>
                    <p>They'll get stronger, become more flexible, and establish lifelong habits of physical health and wellness. Starting as early as Age 4, we can help your child develop gross motor skills and put them on the path to becoming their best self!</p>

                    <p class="font-semibold">From day one, your child will experience:</p>

                    <ul class="grid list-disc ml-12">
                        <li>Improved strength & flexibility</li>
                        <li>Better hand-eye coordination</li>
                        <li>Practical self-defense training</li>
                        <li>Lifelong habits of wellness</li>
                    </ul>
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
    name: "Kids Brazilian Jiu Jitsu",
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