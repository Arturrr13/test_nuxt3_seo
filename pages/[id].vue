<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <main>
        <h1>Some Game</h1>
    </main>
</template>

<style lang="scss" scoped>
main{
    margin-top: rem(110);
}

.sliderSection{
    padding-bottom: rem(60);
}

@media  screen and (max-width:760px){
    .sliderSection{
        padding-bottom: rem(40);
    }
}
</style>