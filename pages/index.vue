<script setup>
// import HeroSection from '../components/sections/HeroSection.vue'
// import ProductsSection from '../components/sections/ProductsSection.vue'
// import CardSection from '../components/sections/CardSection.vue'

// const cardSection = ref([
//     {
//         name: 'Saints Row Preorder',
//         info: 'In a world full of crime, where gangs fight for power, a group of young friends start their own criminal enterprise! The Gold Edition includes the base game and the DLC Pass.'
//     },
//     {
//         name: 'Fortnite Chapter 3 Season 3: Idyll',
//         info: 'Gather your friends and head into Epic Games` Fortnite, an epic battle for up to 100 players. With each new season the game becomes even more and more interesting.'
//     }
// ])

onMounted(async () => {
    try {
        const data = await $fetch('/api/test')
        console.log(data)
    } catch(error) {
        console.log(error)
    }
})
</script>

<template>
    <main>
        <!-- <hero-section />
        <products-section />
        <card-section :folder="'category/card'" :cards="cardSection"/> -->
        <h1>
            Hi!!!
        </h1>
    </main>
</template>

<style lang="scss" scoped>
main{
    margin-top: rem(110);
}
</style>