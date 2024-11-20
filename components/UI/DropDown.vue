<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
    genres: Array<string>,
})

const inputValue = ref('')
props.genres ? inputValue.value = props.genres[0] : null
const active = ref(false)
const itemsMouse = ref(false)

const changeItem = (item: string) => {
    inputValue.value = item
    active.value = false
    itemsMouse.value = false
}
</script>

<template>
    <div class="dropDown">
        <div class="dropDown__input" :class="{ active: active }">
            <input 
                type="text"
                name="text"
                readonly
                v-model="inputValue"
                @click="active = !active"
                @blur="itemsMouse !== true ? active = false : null"
            >
        </div>

        <div class="dropDown__items" v-if="active">
            <ul>
                <li 
                    class="dropDown__items--item" 
                    v-for="item in props.genres" :key="item"
                    @click="changeItem(item)" 
                    @mouseenter="itemsMouse = true"
                    @mouseleave="itemsMouse = false"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dropDown{
    position: relative;
    width: rem(300);

    &__input{
        position: relative;
        @include flex(false, center, false, false);
        &::before{
            transition: all .35s ease-in-out;
            content: '';
            position: absolute;
            right: rem(20);
            width: rem(6);
            height: rem(6);
            border-bottom: rem(2) solid #FFFFFF;
            border-left: rem(2) solid #FFFFFF;
            transform: rotate(-45deg);
        }

        &::after{
            transition: all .35s ease-in-out;
            content: '';
            position: absolute;
            right: rem(20);
            width: rem(6);
            height: rem(6);
            border-bottom: rem(2) solid #FFFFFF;
            border-left: rem(2) solid #FFFFFF;
            transform: rotate(-45deg);
        }

        &:hover{
            &::before{
                margin-top: rem(1);
            }
            &::after{
                margin-top: rem(10);
            }
        }

        &.active{
            &::before, &::after{
                transform: rotate(135deg);
            }
        }
    }

    &__items{
        position: absolute;
        top: rem(60);
        width: 100%;
        @include t-16(#ffffff80);
        border-radius: rem(30);
        border: rem(1) solid rgba(255, 255, 255, 0.10);
        background: #1D1D1F;
        padding: rem(13) rem(10);
        z-index: 1;

        &--item{
            padding: rem(5) rem(10);
            border-radius: rem(10);
            &:hover{
                color: #FFFFFF;
                background: rgba(255, 255, 255, 0.10);
                cursor: pointer;
            }
        }
    }
}

input[type=text]{
    transition: all .35s ease-in-out;
    width: 100%;
    @include t-16(#ffffff80);
    border-radius: rem(30);
    border: rem(1) solid rgba(255, 255, 255, 0.10);
    outline: none;
    background: #1D1D1F;
    padding: rem(13) rem(35) rem(13) rem(20);
    &:hover{
        cursor: pointer;
        color: #FFFFFF;
        border: rem(1) solid #FFFFFF;
    }
}

ul{
    @include flex(column, false, false, false)
}

@media  screen and (max-width:760px){
    input[type=text], .dropDown__items{
        font-size: rem(14);
    }

    input[type=text]{
        padding: rem(10) rem(35) rem(10) rem(20);
    }
}
</style>