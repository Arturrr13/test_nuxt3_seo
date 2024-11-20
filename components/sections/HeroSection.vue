<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

// const getImageUrl = (name) => new URL(`../../assets/img/category/hero/${name}.png`, import.meta.url).href
// const getVideoUrl = (name) => new URL(`../../assets/video/${name}.mp4`, import.meta.url).href
</script>

<template>
    <section class="section__wrapper">
        <div class="section__content">
            <Splide :has-track="false" :options="{ perPage: 1, focus: 0, arrows: false }" aria-label="Games">
                <ul class="splide__pagination"></ul>

                <SplideTrack>
                    <SplideSlide v-for="slide in 5" :key="slide">
                        <div class="title__wrapper">
                            <h3 class="title">
                                Action
                            </h3>
                        </div>
                        <div class="slide__content">
                            <div class="img__wrapper--mainImg">
                                <img :src="`img/category/hero/mainImg.png`" alt="game">
                            </div>
    
                            <div class="mainCard__wrapper">
                                <div class="video__wrapper">
                                    <img :src="`img/category/hero/mainImg.png`" alt="game">
                                </div> 
                                <div class="about__wrapper">
                                    <h3 class="name">
                                        Cyberpunk 2077
                                    </h3>
                                    <div class="price__wrapper">
                                        <span class="price">
                                            $ 99.99
                                        </span>
                                        <div class="more__btn">
                                            <span>
                                                ...
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="gallery__wrapper">
                                <div class="item__wrapper" v-for="index in 8" :key="index">
                                    <!-- <img :src="`_nuxt/assets/img/category/hero/${index}.png`" alt="game"> -->
                                    <img :src="`img/category/hero/${index}.png`" alt="game">
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="469" viewBox="0 0 1920 469" fill="none">
            <path d="M906.964 200.861C350.329 -25.2312 46.7106 338.831 0 469H1919.84L1919.34 182.996C1919.84 159.454 1920.54 170.701 1919.34 0C1536.41 383.683 1228.23 331.351 906.964 200.861Z" fill="url(#paint0_linear_1_143)"/>
            <defs>
                <linearGradient id="paint0_linear_1_143" x1="960" y1="117" x2="960" y2="469" gradientUnits="userSpaceOnUse">
                <stop stop-color="#242427"/>
                <stop offset="1" stop-color="#131315"/>
                </linearGradient>
            </defs>
        </svg>
    </section>
</template>

<style lang="scss" scoped>
.section__wrapper{
    position: relative;
    background-image: url(/img/BG/mainSection.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left bottom;
    padding: rem(60) 0 rem(80);
}

.section__content{
    z-index: 1;
    position: relative;
}

svg{
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: auto;
}

.title__wrapper{
    padding-bottom: rem(40);
}

.title{
    color: #FFF;
    font-size: rem(32);
    font-weight: 400;
}

.slide__content{
    @include flex(false, false, false, rem(20))
}

.splide__pagination{
    top: 0;
    right: 0;
    padding: 0;
    padding-top: rem(20);
    left: unset;
    bottom: unset;
}

.mainCard__wrapper{
    flex-shrink: 0;
    max-width: rem(600);
    width: 100%;
    border-radius: rem(12);
    background: #1D1D1F;
}

.name{
    @include t-20(#FFFFFF)
}

.price{
    @include t-16(#8E8CFF)
}

.more__btn{
    width: rem(36);
    height: rem(36);
    background: #17171A;
    padding-top: rem(6);
}

.about__wrapper{
    @include flex(false, center, space-between, false);
    padding: rem(13)
}

.price__wrapper{
    @include flex(false, center, false, rem(12));
}

.video__wrapper{
    max-width: rem(600);
    max-height: rem(338);
    height: 100vh;
}

.video-js{
    width: 100%;
    height: 100%;
}

.img__wrapper--mainImg{
    flex-shrink: 0;
    max-width: rem(290);
    img{
        border-radius: rem(12);
    }
}

.item__wrapper{
    max-width: rem(135);
    img{
        border-radius: rem(8);
    }
}

.gallery__wrapper{
    @include flex(false, false, false, rem(20));
    flex-wrap: wrap;
}
</style>

