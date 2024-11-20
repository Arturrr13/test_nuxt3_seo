<script setup lang="ts">
    const props = defineProps({
        text: String,
    })
</script>

<template>
    <div class="moreBtn__wrapper">
        <span>
            {{ props.text }}
        </span>
        <div class="arrow__wrapper"></div>
    </div>
</template>

<style lang="scss" scoped>
    span{
        @include t-14(#FFFFFF)
    }

    .arrow__wrapper{
        @include flex(false, center, center, false);
        background: linear-gradient(#1D1D1F, #1D1D1F) padding-box, linear-gradient(to right, #854FDD, #4B6DAE) border-box;
        border-radius: 50%;
        border: rem(2) solid transparent;
        width: rem(20);
        height: rem(20);
        &::before{
            content: '';
            width: rem(5);
            height: rem(5);
            border-bottom: rem(1) solid #FFFFFF;
            border-left: rem(1) solid #FFFFFF;
            transform: rotate(-135deg) translate(rem(1), rem(-1));
        }
    }

    .moreBtn__wrapper{
        @include flex(false, center, false, rem(8));
        &:hover{
            cursor: pointer;
            .arrow__wrapper::before{
                border-bottom: rem(1) solid #854FDD;
                border-left: rem(1) solid #4B6DAE;
            }
            span{
                color: #854FDD;
            }
        }
    }
</style>