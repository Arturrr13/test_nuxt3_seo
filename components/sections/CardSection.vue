<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    cards: Array,
    folder: String
})

// const getImageUrl = (name) => new URL(`../../assets/img/${props.folder}/${name}.png`, import.meta.url).href

onMounted(() => {
    console.log(new URL('/img/category/1.png', import.meta.url))
})
</script>

<template>
    <section class="section__wrapper">
        <div class="section__content">
            <div class="card" v-for="(item, index) in props.cards" :key="index">
                <div class="card__img">
                    <img :src="`img/${props.folder}/${index + 1}.png`" alt="game">
                    <div class="infoTab__style" v-if="item.time">
                        <span>
                            {{ item.time }}
                        </span>
                    </div>
                </div>
                <div class="card__about">
                    <h3 class="card__about--name">
                        {{ item.name }}
                    </h3>
                    <p class="card__about--info">
                        {{ item.info }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section__wrapper{
    padding: rem(80) 0;
    background-image: url(/img/BG/mainSection.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left bottom;
}

.section__content{
    @include flex(false, flase, space-between, rem(20))
}

.card{
    &__img{
        position: relative;
        height: 100%;
        max-height: rem(290);
        img{
            border-radius: rem(12);
        }
    }

    &__about{
        &--name{
            @include t-20(#FFFFFF);
            padding: rem(24) 0 rem(8);
        }

        &--info{
            @include t-14(#ffffff80);
        }
    }
}

.infoTab__style{
    position: absolute;
    top: rem(12);
    right: rem(12);
    padding: rem(8) rem(12);
}

@media  screen and (max-width:760px){
    .section__wrapper{
        padding: rem(40) rem(16);
    }
    .section__content{
        flex-direction: column;
    }

    .card{
        &__img{
            img{
                border-radius: rem(9);
            }
        }

        &__about{
            &--name{
                @include t-16(#FFFFFF);
                padding: rem(15) 0 rem(12);
            }

            &--info{
                @include t-12(#ffffff80);
            }
        }
    }
}
</style>