<script setup lang="ts">

</script>

<template>
	<div class="searchBar__wrapper">
        <input type="text" name="search" id="search" placeholder="Search">
    </div>
</template>

<style lang="scss" scoped>
input[type=text]{
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.10);
    background: #1D1D1F;
    width: rem(300);
    height: rem(46);
    padding: rem(12);
    @include t-16(#ffffff80);
}
</style>
