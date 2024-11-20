<script setup lang="ts">
import { ref, watch, watchEffect } from "vue"
const props = defineProps({
    label: String,
    placeholder: String,
    value: String,
    activeEdit: Boolean,
    cancel: Boolean,
    phone: String,
    password: String,
    checkInput: Boolean
})

const emit = defineEmits<{
    setValue: [item: string | boolean]
}>()

const value = ref<string>('')
const err = ref(false)

props.value ? value.value = props.value : ''

watchEffect(async () => props.cancel && props.value ? value.value = props.value : null)

const pickType = (value: string) => {
    props.label === 'Name' ? nameAndSurnameValid() 
    : props.label === 'Surname' ? nameAndSurnameValid()
    : props.label === 'Email' ? emailValid() 
    : props.phone ? phoneValid() 
    : props.label === 'oldPassword' ? oldPasswordValid()
    : props.label === 'newPassword' ? newPasswordValid() : repeatPasswordValid()
    console.log(typeof value)
}

const error = () => {
    err.value = true
    emit('setValue', false)
}

const successful = (value: string | boolean) => {
    err.value = false
    if(!props.cancel) emit('setValue', value)
}

const nameAndSurnameValid = () => value.value.length < 2 ? error() : successful(String(value.value))

const emailValid = () => Boolean(value.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) === false ? error() : successful(String(value.value))

const phoneValid = () => String(value.value).length != 9 ? error() : successful(String(value.value))

const oldPasswordValid = () => value.value !== props.password ? error() : successful(value.value)

const newPasswordValid = () => value.value === props.password ? error() : successful(value.value)

const repeatPasswordValid = () => value.value !== props.password ? error() : successful(value.value)

//watchEffect(async () => pickType(value.value))
watch(value, () => pickType(value.value))
// @ts-ignore
watchEffect(async () => pickType(props.checkInput))
</script>

<template>
    <div class="phone__wrapper" :class="{ err: err }" v-if="props.phone">
        <p class="label">
            Number Phone
        </p>
        <div class="input__wrapper" :class="{ edit: activeEdit }">
            <span class="countryCode">
                {{ props.phone }}
            </span>
            <input type="number" name="phone" v-model="value" :readonly="!activeEdit">
        </div>
    </div>
    <div class="password__wrapper" :class="{ err: err }" v-else-if="props.label === 'oldPassword' || props.label === 'newPassword' || props.label === 'repeatPassword'">
        <div class="input__wrapper" :class="{ edit: activeEdit }">
            <input type="password" v-model="value" :name="password" :placeholder="props.placeholder" :readonly="!activeEdit">
        </div>
    </div>
    <div class="wrapper" :class="{ err: err }" v-else>
        <p class="label">
            {{ props.label }}
        </p>
        <div class="input__wrapper" :class="{ edit: activeEdit }" v-if="activeEdit">
            <input type="text" v-model="value" :name="props.label">
        </div>
        <p class="noEditValue" v-else>
            {{ value }}
        </p>
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
    &.edit{
        input[type=text], input[type=number], input[type=password]{
            background: linear-gradient(#17171A, #17171A) padding-box, linear-gradient(to right, #854FDD, #4B6DAE) border-box;
        }
        .countryCode{
            color: #854FDD;
            border-right: rem(2) solid #854FDD;
        }
    }
}

input[type=text], input[type=number], input[type=password]{
    transition: all .35s ease-in-out;
    width: 100%;
    max-width: rem(300);
    @include t-16(#ffffff);
    border-radius: rem(8);
    background: linear-gradient(#17171A, #17171A) padding-box, rgba(255, 255, 255, 0.10) border-box;
    border: rem(2) solid transparent;
    outline: none;
    padding: rem(14);
    // &:hover{
    //     color: #FFFFFF;
    //     border: 1px solid #FFFFFF;
    // }
}

input[type=number]{
    padding: rem(14) rem(14) rem(14) rem(90);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number]{
  -moz-appearance: textfield;
}

.noEditValue{
    @include t-16(#ffffff);
}

.countryCode{
    @include t-16(#ffffff80);
    position: absolute;
    left: rem(13);
    padding-right: rem(20);
    border-right: rem(2) solid #ffffff80;
}

.err{
    .edit input[type=text], .edit input[type=number], .edit input[type=password]{
        background: linear-gradient(#17171A, #17171A) padding-box, linear-gradient(to right, #992D2D, #ff2c2c) border-box;
        border: rem(2) solid transparent;
    }
    .countryCode{
        color: #992D2D;
        border-right: rem(2) solid #992D2D;
    }
    .label{
        color: #992D2D;
    }
}
</style>