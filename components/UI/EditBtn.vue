<script setup lang="ts">
import { ref } from "vue"

const emit = defineEmits(['status', 'cancel', 'checkInput'])
const props = defineProps({isDisabled: Boolean, blockBtn: Boolean})

const content = ref('E')

const changeStatus = (btn: boolean) => {
    emit('checkInput')
    content.value = content.value === 'E' ? 'X' : 'E'
    if(btn) emit('status')
    else emit('cancel')
}
</script>

<template>
    <div class="editBtn__wrapper">
        <button type="button" class="cancel" @click="content === 'X' ? changeStatus(false) : changeStatus(true)">
            {{ content }}
        </button>
        <button 
            type="button" class="btn__mainStyle" :class="{ disable: props.isDisabled }"
            v-if="content === 'X' && !props.blockBtn"  
            @click="changeStatus(true)" :disabled='props.isDisabled'
        >
            Save Changes
        </button>
    </div>
</template>

<style lang="scss" scoped>
.cancel{
    position: absolute;
    top: rem(20);
    right: rem(26);
    border-radius: rem(30);
    border: rem(1) solid rgba(255, 255, 255, 0.10);
    background: #17171A;
    color: #7573E4;
    width: rem(36);
    height: rem(36);
}

.btn__mainStyle{
    border-radius: rem(8);
    width: rem(180);
    height: rem(48);
    &.disable{
        background: linear-gradient(#992D2D, #ff2c2c);
    }
}
</style>