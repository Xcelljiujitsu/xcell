<template>
    <!-- get started today -->
    <div class="w-full h-fit grid md:grid-cols-2 gap-8 md:gap-4">
        <div class="w-full h-fit m-auto grid order-2 md:order-1">
            <div id="contact_form" class="w-fit h-fit md:mx-auto grid">
                <p class="font-bebas text-[28px] md:text-[36px] xl:text-[42px] 2xl:text-[48px]">Get Started Today</p>
                <p class="text-[12px] md:text-[14px] xl:text-[16px]">{{ type == 'request' ? ( verify_code ? 'PLEASE VERIFY THE CODE SENT TO YOUR PHONE TO CONNECT TO OUR TEAM!' : 'ENTER YOUR INFORMATION AND CONTINUE TO GET IN TOUCH WITH A TEAM MEMBER NOW!' ) : 'ENROLL TO RECEIVE DIRECT ACCESS TO EXCLUSIVE OFFERS, PRODUCT RELEASES, AND MORE!' }}</p>

                <div v-if="type == 'request'" class="w-fit xl:w-[450px] h-fit grid gap-2 mt-6">
                    <div v-if="!verify_code" class="w-fit xl:w-[450px] h-[48px] flex border-[2px] border-black rounded-[4px] mt-6">
                        <div class="w-[24px] h-[24px] min-w-[24px] min-h-[24px] m-auto ml-2">
                            <Icon icon="mdi:user" height="24px" class="m-auto text-custom-black" />
                        </div>

                        <input v-model="form.first_name" type="text" class="w-full border-none ring-0 text-[14px]" placeholder="John">
                        <input v-model="form.last_name" type="text" class="w-full border-none ring-0 text-[14px]" placeholder="Doe">
                    </div>

                    <!-- email -->
                    <div v-if="!verify_code" class="w-full h-[48px] flex border-[2px] border-black rounded-[4px]">
                        <div class="w-[24px] h-[24px] min-w-[24px] min-h-[24px] m-auto ml-2">
                            <Icon icon="mdi:email" height="24px" class="m-auto text-custom-black" />
                        </div>

                        <input v-model="form.email" type="email" class="w-full border-none ring-0 text-[14px] focus:ring-0 focus:border-0" placeholder="john@doe.com">
                    </div>

                    <!-- phone -->
                    <div class="w-full h-[48px] flex border-[2px] border-black rounded-[4px]">
                        <div class="w-[24px] h-[24px] min-w-[24px] min-h-[24px] m-auto ml-2">
                            <Icon :icon="verify_code ? 'uim:lock-access' : 'mdi:phone'" height="24px" class="m-auto text-custom-black" />
                        </div>

                        <!-- phone verification code -->
                        <input v-if="verify_code" v-model="verification_code" type="text" class="w-full border-none ring-0 text-[14px]" placeholder="######">
                        <!-- phone input -->
                        <input v-else v-model="form.phone" type="text" class="w-full border-none ring-0 text-[14px]" placeholder="(561) 555-5555">
                        
                        <button @click="verify_code ? verifyCode() : sendCode();" class="w-[130px] bg-black text-white uppercase text-[12px]">{{ verify_code ? 'Verify' : 'Continue' }}</button>
                    </div>
                </div>

                <!-- subscribe form -->
                <div v-else class="w-fit xl:w-[450px] h-[48px] flex border-[2px] border-black rounded-[4px] mt-6">
                    <div class="w-[24px] h-[24px] min-w-[24px] min-h-[24px] m-auto ml-2">
                        <Icon icon="mdi:email" height="24px" class="m-auto text-custom-black" />
                    </div>

                    <input v-model="subscribe_email"type="text" class="w-full border-none ring-0 text-[14px]" placeholder="Enter your email address">
                    <button class="w-[130px] bg-black text-white uppercase text-[12px]">Subscribe</button>
                </div>
            </div>
        </div>

        <div class="w-full h-fit grid m-auto order-1 md:order-2">
            <div class="w-full xl:w-[545px] h-[400px] md:h-[700px] xl:h-[970px] grid m-auto relative overflow-hidden rounded-[8px] md:rounded-[4px] shadow-newdrop">
                <img src="../../assets/images/professor_gatche.jpg" alt="Professor Competition" class="object-cover -transform-y-20 md:-transform-y-0 w-full h-full">
            </div>
        </div>
    </div>

    <!-- footer -->
    <div class="w-full h-fit grid gap-4 md:gap-0 py-8 md:py-4 justify-items-center md:justify-items-start items-center lg:grid-cols-2 text-custom-gray text-[14px]">
        <!-- left side -->
        <div class="w-fit lg:w-full grid mx-auto lg:mx-0 md:flex md:items-center justify-items-center md:justify-items-start gap-6">
            <img src="../../assets/images/logo.png" alt="Xcell Logo" class="h-[55px] w-[55px] mx-auto md:mx-0">

            <div class="w-fit h-fit flex items-center gap-6">
                <p @click="changeType" class="cursor-pointer">{{ type == 'request' ? 'Subscribe' : 'Contact' }}</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>

            <!-- social media -->
            <div class="w-fit h-fit flex items-center gap-6 md:ml-6 text-custom-gray/70">
                <a v-for="(social, index) in socials" :key="index" :href="social.link" target="_blank"><Icon :icon="social.icon" height="24px" /></a>
            </div>
        </div>

        <!-- copyright -->
        <div class="w-full h-full flex items-center justify-center lg:justify-end gap-2">
            <p class="">Xcell Jiu Jutsu Academy &#169; 2024</p>
        </div>

        <!-- contact info -->
        <div class="w-full h-fit lg:col-span-2 grid items-center text-center mt-6">
            <div class="w-fit h-fit grid justify-items-center m-auto">
                <!-- phone and email -->
                <p><a href="tel:5616196969">(561) 619 &mdash; 6969</a> <span class="px-2">&#124;</span> <a href="mailto:xcelljiujitsu@gmail.com">xcelljiujitsu@gmail.com</a></p>
                <!-- address -->
                <a target="_blank" href="https://www.google.com/maps/place/Xcell+Jiu+Jitsu+Academy/@26.5514945,-80.076186,17z/data=!3m1!4b1!4m6!3m5!1s0x88d8d8c9a304bfdf:0xf1eed7caa87a4e89!8m2!3d26.5514897!4d-80.0736111!16s%2Fg%2F11g6mh4hc1?entry=ttu">975 Gatewat Blvd #101-102, Boynton Beach, FL 33463</a>
            </div>
        </div>
    </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
    name: "Footer",
    props: {
        set_type: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            type: "subscribe",
            subscribe_email: "",

            verify_code: false,
            verification_code: "", 

            form: {
                first_name: "",
                last_name: "",
                phone: "",
                email: ""
            },

            socials: [
                {
                    icon: "mdi:instagram",
                    link: "https://www.instagram.com/xcelljiujitsu/?hl=en"
                },
                {
                    icon: "mdi:facebook",
                    link: "https://www.facebook.com/XcellJiuJitsu/"
                },
                {
                    icon: "mdi:google-maps",
                    link: "https://www.google.com/maps/place/Xcell+Jiu+Jitsu+Academy/@26.5514945,-80.076186,17z/data=!3m1!4b1!4m6!3m5!1s0x88d8d8c9a304bfdf:0xf1eed7caa87a4e89!8m2!3d26.5514897!4d-80.0736111!16s%2Fg%2F11g6mh4hc1?entry=ttu"
                },
                {
                    icon: "mdi:google",
                    link: "https://www.google.com/search?q=xcell+jujutsu"
                }
            ]
        }
    },
    mounted(){
        if(this.set_type == 'request'){
            this.verify_code = false;
            this.type = 'request';
        }
    },
    watch: {
        set_type(value){
            switch(value){
                case 'request':
                    this.verify_code = false;
                    this.type = 'request';
                    break;
                case 'subscribe':
                    this.type = 'subscribe';
                    break;
                default:
                    break;
            }
        }
    },
    methods: {
        changeType(){
            if(this.type == 'request'){
                this.type = 'subscribe';
            }else{
                this.verify_code = false;
                this.type = 'request';
            }
        },

        async sendCode(){
            this.verify_code = true;
        },
        async verifyCode(){
            console.log('verify')
        }
    },
    components: {
        Icon
    }
}

</script>