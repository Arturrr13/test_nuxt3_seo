<script setup>
import { ref } from 'vue'
import DropDown from '..//UI/DropDown.vue'

const games = ref([
    {
        name: 'Hogwarts Legacy',
        sale: '-50%',
        price: '$ 49.99'
    },
    {
        name: 'Spider-man Remastered',
        price: '$ 99.99'
    },
    {
        name: 'Battlefield V Definitive Edition',
        price: '$ 99.99'
    },
    {
        name: 'Destroy All Humans Clone Carnage',
        sale: '-50%',
        price: '$ 49.99'
    },
    {
        name: 'Bioshock Infinite The Complete Edi',
        sale: '-50%',
        price: '$ 49.99'
    },
    {
        name: 'Gotham Knights',
        sale: '-50%',
        price: '$ 49.99'
    },
    {
        name: 'Trek To Yomi',
        price: '$ 99.99'
    },
    {
        name: 'Godfall Ultimate Edition',
        price: '$ 99.99'
    },
    {
        name: 'Ghostwire Tokyo',
        sale: '-50%',
        price: '$ 49.99'
    },
    {
        name: 'Tiny Tina’s Wonderlands',
        price: '$ 99.99'
    },
    {
        name: 'Sifu',
        price: '$ 99.99'
    },
    {
        name: 'Dying Light 2 Stay Human',
        sale: '-50%',
        price: '$ 49.99'
    },
    {
        name: 'Chorus',
        sale: '-50%',
        price: '$ 49.99'
    },
    {
        name: 'Deathloop',
        price: '$ 49.99'
    },
    {
        name: 'Alan Wake Remastered',
        price: '$ 99.99'
    },
    {
        name: 'World War Z: Aftermatch',
        price: '$ 99.99'
    }
])

const genres = ref([
    'All action', 'Early Access', 'MMO', 'Action', 'Shooter', 'RPG', 'Adventure', 'Survival', 'Strategy', 'Racing', 'Simulator', 'Sport', 'Fighting'
])

const filterBtn = ref([
    'All', 'Discounts', 'Offers'
])

// const getImageUrl = (name) => new URL(`/img/category/main/${name}.png`, import.meta.url).href
</script>

<template>
    <section class="section__wrapper">
        <div class="section__content">
            <div class="tools">
                <drop-down :genres="genres" class="tools__dd"/>
                <div class="tools__rightBlock">
                    <ul class="tools__rightBlock--filterBtn">
                        <li v-for="item in filterBtn" :key="item" class="linkHover__style">
                            {{ item }}
                        </li>
                    </ul>
                    <drop-down :genres="['Popularity', 'Sale', 'New']" class="tools__rightBlock--filter"/>
                </div>
            </div>

            <div class="products">
                <div class="products__gameCard" v-for="(item, index) in games" :key="index">
                    <div class="img__wrapper">
                        <!-- <NuxtLink 
                            rel="nofollow" 
                            :to="`/${item.name.replace(/\s+/g, '')}`" 
                            :title="`${item.name}`"
                            @click="setNewGameData({
                                name: item.name,
                                sale: item.sale ? item.sale : false,
                                price: item.price,
                                imgUrl: getImageUrl(index + 1)
                            })"
                        >
                            <img :src="`img/category/main/${index + 1}.png`" alt="game">
                        </NuxtLink > -->
                        <img :src="`img/category/main/${index + 1}.png`" alt="game">
                    </div>
                    <div class="about__wrapper">
                        <div class="about__mainBlock">
                            <h3 class="name">
                                {{ item.name }}
                            </h3>
                            <div class="price__wrapper">
                                <div class="infoTab__style" v-if="item.sale">
                                    <span>
                                        {{ item.sale }}
                                    </span>
                                </div>
                                <span class="price">
                                    {{ item.price }}
                                </span>
                            </div>
                        </div>

                        <div class="more__btn">
                            <span>
                                ...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section__wrapper{
    padding: rem(60) 0 rem(80);
}

.tools{
    @include flex(false, center, space-between, false);
    padding-bottom: rem(40);

    &__rightBlock{
        @include flex(false, center, false, rem(40));

        &--filterBtn{
            @include flex(false, false, false, rem(40));
        }

        &--filter{
            max-width: rem(200);
        }
    }
}

.products{
    @include flex(false, false, center, rem(20));
    flex-wrap: wrap;
    padding-bottom: rem(20);
    border-bottom: rem(1) solid rgba(255, 255, 255, 0.05);

    &__gameCard{
        max-width: rem(290);
        padding-bottom: rem(20);
    }
}

.img__wrapper{
    position: relative;
    width: 100%;

    img{
        border-radius: rem(12);
    }
}

.about__wrapper{
    @include flex(false, false, space-between, false);
    padding-top: rem(12);
    width: 100%;
}

.name{
    @include t-16(#FFFFFF);
    padding-bottom: rem(7);
}

.price__wrapper{
    @include flex(false, center, false, rem(4));
}

.infoTab__style{
    padding: 0 rem(6);
    width: max-content;
}

.price{
    @include t-16(#8E8CFF)
}

.pagination__wrapper{
    padding-top: rem(20);
}

@media  screen and (max-width:760px){
    .section__wrapper{
        padding: rem(40) rem(16);
    }

    .tools{
        flex-direction: column;
        padding-bottom: rem(24);

        &__rightBlock{
            @include flex(false, center, false, rem(24));
            padding-top: rem(12);

            &--filterBtn{
                @include flex(false, false, false, rem(24));
            }

            &--filter{
                width: auto;
            }
        }

        &__dd{
            width: 100%;
        }
    }

    .linkHover__style{
        font-size: rem(12);
    }

    .products{
        gap: rem(16);
        padding-bottom: rem(20);

        &__gameCard{
            position: relative;
            max-width: rem(170);
            padding-bottom: rem(8);
        }
    }

    .img__wrapper{
        width: 100%;

        img{
            border-radius: rem(8);
        }
    }

    .more__btn{
        position: absolute;
        right: rem(10);
        top: rem(195);
    }

    .name, .price{
        font-size: rem(14);
    }
}
</style>