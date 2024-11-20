<script setup lang="ts">
import { ref } from "vue";

//@ts-ignore 
const props = defineProps({
    arr: Array<string>,
    fromTo: { to: Number, title: String },
    activeEdit: Boolean
})

const emit = defineEmits<{
    countryCode: [item: string]
}>()

const inputValue = ref<string | number>()
props.arr ? inputValue.value = props.arr[0] : props.fromTo ? inputValue.value = props.fromTo.title : null
const active = ref(false)
const itemsMouse = ref(false)
const input = ref<HTMLInputElement>()

const activeFun = () => {
    if(props.activeEdit) active.value = !active.value
    if(input.value) input.value.focus()
}

const changeItem = (item: string | number) => {
    inputValue.value = item
    active.value = false
    itemsMouse.value = false
    if(typeof item === 'string') emit('countryCode', item)
}

const getArr = () => props.arr ? props.arr : props.fromTo.to
const getItem = (item: string | number) => props.arr || (props.fromTo.to && props.fromTo.title === 'Day') ? item : typeof item === 'number' ? new Date().getFullYear() - item : null
</script>

<template>
    <div class="dropDown__wrapper">
        <div class="input__wrapper" :class="{ active: active, edit: activeEdit }" @click="activeFun">
            <input
                ref="input" 
                type="text"
                name="text"
                readonly
                v-model="inputValue"
                @blur="itemsMouse !== true ? active = false : null"
            >
        </div>

        <div class="items__wrapper" v-if="active">
            <ul>
                <li 
                    v-if="props.fromTo"
                    class="item" 
                    @click="changeItem(props.fromTo.title)" 
                    @mouseenter="itemsMouse = true"
                    @mouseleave="itemsMouse = false"
                >
                    {{ props.fromTo.title }}
                </li>
                <li 
                    class="item" 
                    v-for="item in getArr()" :key="item"
                    @click="changeItem(getItem(item))" 
                    @mouseenter="itemsMouse = true"
                    @mouseleave="itemsMouse = false"
                >
                    {{ getItem(item) }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dropDown__wrapper{
    position: relative;
    width: rem(300);
}

input[type=text]{
    transition: all .35s ease-in-out;
    width: 100%;
    max-width: rem(300);
    @include t-16(#ffffff);
    border-radius: rem(8);
    background: linear-gradient(#17171A, #17171A) padding-box, rgba(255, 255, 255, 0.10) border-box;
    border: rem(2) solid transparent;
    outline: none;
    padding: rem(14) rem(50) rem(14) rem(13);
    &:hover{
        cursor: pointer;
        // color: #FFFFFF;
        // border: 1px solid #FFFFFF;
    }
}

.input__wrapper{
    position: relative;
    @include flex(false, center, false, false);
    &.edit{
        input[type=text]{
            background: linear-gradient(#17171A, #17171A) padding-box, linear-gradient(to right, #854FDD, #4B6DAE) border-box;
        }
        &::before{
            transition: all .35s ease-in-out;
            content: '';
            position: absolute;
            right: rem(20);
            width: rem(10);
            height: rem(10);
            border-bottom: rem(3) solid #854FDD;
            border-left: rem(3) solid #854FDD;
            transform: rotate(-135deg);
        }
        &::after{
            transition: all .35s ease-in-out;
            content: '';
            position: absolute;
            right: 0;
            width: rem(42);
            height: rem(22);
            border-left: rem(2) solid #854FDD;
        }
    }
    &:hover{
        cursor: pointer;
        &::before{
            scale: 1.1;
        }
    }
    &.active{
        &::before{
            transform: rotate(-45deg);
        }
    }
}

.items__wrapper{
    position: absolute;
    top: rem(70);
    width: 100%;
    @include t-16(#ffffff80);
    border-radius: rem(8);
    border: rem(1) solid #854FDD;
    background: #1D1D1F;
    padding: rem(13) rem(10);
    z-index: 5;
    max-height: rem(500);
    overflow: auto;

}

ul{
    @include flex(column, false, false, false)
}

.item{
    padding: rem(5) rem(10);
    border-radius: rem(10);
    &:hover{
        color: #FFFFFF;
        background: rgba(255, 255, 255, 0.10);
        cursor: pointer;
    }
}
</style>