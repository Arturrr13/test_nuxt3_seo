<script setup>
import { ref } from "vue"
import VueAwesomePaginate from "vue-awesome-paginate"
import "vue-awesome-paginate/dist/style.css"

const onClickHandler = (page) => console.log(page)

const currentPage = ref(1)
</script>

<template>
    <div class="wrapper">
        <vue-awesome-paginate 
            :total-items="150" 
            :items-per-page="16" 
            :max-pages-shown="5" 
            v-model="currentPage"
            :on-click="onClickHandler" 
            :show-breakpoint-buttons="false" 
            :hide-prev-next-when-ends="true"
        >
            <template #prev-button>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none" style="rotate: 180deg;">
                        <path d="M1 1L4 3.85714L1 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </template>
            <template #next-button>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                        <path d="M1 1L4 3.85714L1 7" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </template>
        </vue-awesome-paginate>
    </div>
</template>


<style lang="scss">
.pagination-container {
    column-gap: 10px;
}

.paginate-buttons {
    height: rem(40);
    width: rem(40);
    border-radius: 50%;
    cursor: pointer;
    background-color: transparent;
    border: rem(1) solid rgba(255, 255, 255, 0.10);
    @include t-16(#FFFFFF);
    opacity: .5;
}

.paginate-buttons:hover {
    border: rem(1) solid #7573E4;
    color: #7573E4;
}

.active-page {
    border: rem(1) solid #7573E4;
    color: white;
}

.active-page:hover {
    background-color: #7573E4;
    color: white;
}

.back-button:active,
.next-button:active {
    background-color: #c4c4c4;
}

@media  screen and (max-width:760px){
    .paginate-buttons{
        font-size: rem(14);
    }
}
</style>