<template>
    <div class="stat-container">
        <div class="stat">
            <div class="stat-name">
                {{this.statname}} :
            </div>
            <div class="bar-value">
                <div class="stat-bar">
                    <div class="stat-bar-value" :style="`height:100%;background:green;width:${this.computeStat(this.value, this.max_value)}%;`"></div>
                </div>
                <div class="bar-num-value"><b>{{this.value}}</b></div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name:'stats',
    props:{
        value:Number, 
        max_value:Number, 
        statname:String
    },
    methods:{
        computeStat(value,max){
            return (value/max) * 100
        }
    }
}
</script>

<style lang="scss">
.stat-container{
    width:100%;
}
.stat{
    @include flex-basic('se','c','nw','r');
    width:100%;
    padding:0 1rem;
    > .stat-name {
        @include flex-basic('l','c','nw','r');
        width:10rem;
    }

    > .bar-value{
        @include flex-basic('r','c','nw','c');
        width:min(100% - 1rem, 10rem);
        padding:.5rem 0;

        > .bar-num-value{
            font-size:.7rem;
        }

        > .stat-bar{
            background:rgb(17, 27, 114);
            height: 1rem;
            width:5rem;
            border-radius:.2rem;
            border:1px solid rgb(231, 231, 231);
        }

    } 
}
</style>