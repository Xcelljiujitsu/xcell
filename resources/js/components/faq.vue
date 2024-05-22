<template>
    <!-- FAQ -->
    <div :class="transparent_bg ? 'bg-transparent' : 'bg-custom-light'" class="w-full h-fit grid py-6 md:py-12">
        <div class="w-[95%] md:w-[70%] xl:w-[50%] h-fit mx-auto grid">
            <p class="text-[22px] md:text-[36px] xl:text-[48px] font-bebas text-center">Frequently Asked Questions</p>

            <!-- questions -->
            <div class="w-full h-fit grid my:4 md:my-8 p-6 bg-white rounded-[2px]">
                <div class="w-full h-fit grid gap-4 md:gap-6">
                    <div v-for="(question, index) in questions" :key="index" class="w-full h-fit grid relative">
                        <div class="w-full h-fit grid items-center relative">
                            <!-- question -->
                            <p @click="showAnswer(index, !question.show)" class="font-medium cursor-pointer uppercase text-[12px] md:text-[14px] w-full py-2 pr-8 truncate">{{ question.question }}?</p> 

                            <!-- icon -->
                            <div @click="showAnswer(index, !question.show)" class="w-[25px] h-[25px] min-w-[25px] min-h-[25px] grid right-0 absolute cursor-pointer">
                                <Icon icon="pepicons-print:angle-up" height="25px" :class="question.show ? 'rotate-180' : ''" class="m-auto text-custom-black transition-all duration-700" />
                            </div>
                        </div>

                        <div :id="'faq_'+index" style="height: 0px;" class="relative overflow-hidden transition-all duration-700 grid">
                            <p class="py-2 uppercase text-[12px] md:text-[14px] absolute top-0">{{ question.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    name: "Xcell BJJ | Frequently Asked Questions",
    props: {
        transparent_bg: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            questions: [
                {
                    show: false,
                    show_answer: false,
                    question: "What should I wear for my first Brazilian Jiu-Jitsu class",                    
                    answer: "For your first class, it's best to wear comfortable athletic clothing such as a t-shirt and shorts or leggings. If you have a gi (the traditional BJJ uniform), bring it along. Don't worry if you don't have one yet; we have rental gis available for beginners."
                },
                {
                    show: false,
                    question: "Do I need any prior experience or fitness level to start training Brazilian Jiu-Jitsu",
                    answer: "No prior experience or specific fitness level is required to start training Brazilian Jiu-Jitsu. Our classes are designed to accommodate all skill levels, from complete beginners to advanced practitioners. Our instructors will help you progress at your own pace."
                },
                {
                    show: false,
                    question: "How often should I train to see progress in Brazilian Jiu-Jitsu",
                    answer: "The frequency of your training depends on your personal goals and schedule. However, we recommend training at least 2-3 times per week to see steady progress. Consistency is key in developing your skills and improving your fitness."
                },
                {
                    show: false,
                    question: "Is Brazilian Jiu-Jitsu suitable for children and teenagers",
                    answer: "Yes, we offer specialized classes for children and teenagers. Our youth programs are designed to teach BJJ techniques in a safe and fun environment while also emphasizing discipline, respect, and physical fitness."
                },
                {
                    show: false,
                    question: "What is the belt system in Brazilian Jiu-Jitsu and how long does it take to earn a black belt",
                    answer: "The belt system in BJJ typically starts with white belt and progresses through blue, purple, brown, and finally black belt. The time it takes to earn a black belt varies widely depending on individual dedication, training frequency, and progression. On average, it can take 8-12 years of consistent training to achieve a black belt."
                }
            ]
        }
    },
    methods: {
        showAnswer(index, value){
            const elm_id = 'faq_'+index;

            let faq_elm = document.getElementById(elm_id);
            document.getElementById(elm_id).style.height = value ? (String(faq_elm.firstElementChild.scrollHeight)+'px') : '0px';
            this.questions[index].show = value;
        }
    },
    components: {
        Icon
    }
}

</script>