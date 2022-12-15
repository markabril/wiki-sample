<template>
    <div>
        <div v-for="(item,index) in this.data" :key="index">
            <div class="img-container">
                <!-- <img :src='`${assetspath}Assets/Resources/Icons/Anting Anting.png`' alt=""> -->
            </div>
            <div class="item-name">
                <h3>{{item.name}}</h3>
            </div>
            <div class="description">
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name:"ItemInfo",
    setup(){
        return {
        }
    },
    data(){
        return {
            data:{}
        }
    },
    created(){
        this.fetch()
    },
    methods:{
        async fetch(){
            await fetch("https://region.egcextremeunrealtechnology.com/api/Equipments")
                .then(response => response.json())
                .then(data => (this.data = data));
        }
    }
    
}
</script>

<style>

</style>