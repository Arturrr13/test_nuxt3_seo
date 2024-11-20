<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
    countryCode: String,
    value: String
})

const value = ref('')
value.value = props.value ? props.value : ''
</script>

<template>
    <div class="phone__wrapper">
        <p class="label">
            Number Phone
        </p>
        <div class="input__wrapper">
            <span class="countryCode">
                {{ props.countryCode }}
            </span>
            <input type="text" name="phone" v-model="value">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.label{
    color: #ffffff80;
    font-size: rem(12);
    font-weight: 500;
    line-height: rem(22);
    padding-bottom: rem(4);
}

.input__wrapper{
    position: relative;
    @include flex(false, center, false, false);
}

input[type=text]{
    transition: all .35s ease-in-out;
    width: 100%;
    max-width: rem(240);
    @include t-16(#ffffff);
    border-radius: rem(8);
    background: linear-gradient(#1D1D1F, #1D1D1F) padding-box, linear-gradient(to right, #854FDD, #4B6DAE) border-box;
    border: 2px solid transparent;
    outline: none;
    padding: rem(14) rem(14) rem(14) rem(90);
    &:hover{
        cursor: pointer;
        // color: #FFFFFF;
        // border: 1px solid #FFFFFF;
    }
}

.countryCode{
    @include t-16(#854FDD);
    position: absolute;
    left: rem(13);
    padding-right: rem(20);
    border-right: 2px solid #854FDD;
}
</style>