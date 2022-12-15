<template>
  <div class="mobs-container">
    <div class="mobs-details"   v-for="mob in data" :key="mob">
        <div class="mob-name padding-3">
            <span>Name:</span><span><b>{{mob.name}}</b></span>
        </div>
        <div class="mob-stats">
            <div>Level : <b>{{mob.level}}</b></div>
            <StatsVue statname="Attack Range" :value=parseInt(mob.range) :max_value=this.maxrangevalue></StatsVue>
            <StatsVue statname="Strength" :value=parseInt(mob.strength) :max_value=this.maxstat_str></StatsVue>
            <StatsVue statname="Agility" :value=parseInt(mob.agility) :max_value=this.maxstat_agi></StatsVue>
            <StatsVue statname="Intelligence" :value=parseInt(mob.intelligence) :max_value=this.maxstat_int></StatsVue>
            <StatsVue statname="Vitality" :value=parseInt(mob.vit) :max_value=this.maxstat_vit></StatsVue>
            
        </div>
        <div class="mobs-skills" v-if="(mob.skill_ids.length != 0)">
            <br/>
            <h3>Skills</h3>
            <div v-for="skill in mob.skills" :key="skill" class="skill-container">
                <div class="skill-name">
                    <b>{{skill.name}}</b>    

                </div>                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import StatsVue from '@/components/Stats.vue'

export default {
    name:'MobsInfo',
    components:{
        StatsVue,
    },
    data(){
        return {
            data:{},
            maxstat_agi:0,
            maxstat_vit:0,
            maxstat_stm:0,
            maxstat_str:0,
            maxstat_int:0,
            maxrangevalue:7
        }
    },
    methods:{
        async fetchMobs(){
            let index=0
            let data={}
            await fetch("https://region.egcextremeunrealtechnology.com/api/Mobs")
                .then(response => response.json())
                .then(res => (data = res));
            for(const mob of data){
                data[index].skills=[]
                for(const skill of mob.skill_ids){
                    data[index].skills.push(await this.fetchMobsSkill(skill))
                }
                index++
            }
            this.maxstat_agi = Math.max(...data.map(a => a.agility))
            this.maxstat_str = Math.max(...data.map(a => a.strength))
            this.maxstat_int = Math.max(...data.map(a => a.intelligence))
            this.maxstat_stm = Math.max(...data.map(a => a.stm))
            this.maxstat_vit = Math.max(...data.map(a => a.vit))
            return data     
        },
        async fetchMobsSkill(skill_id){
            let skillname={}
            await fetch(`https://region.egcextremeunrealtechnology.com/api/MobSkills/${skill_id}`)
                .then(response => response.json())
                .then(data => (skillname = data));
            return skillname
        },
        async statRating(stat){
            stat
        },
        

    },
    async created(){
        this.data = await this.fetchMobs()
        console.log(this.data)
    }
}
</script>

<style lang="scss">
    .mob-name {
        @include flex-basic('c','c','nw','');
    }

    .mob-stats{
        @include flex-basic('c','c','','c');

        
    }
    .mobs-details{
        padding:2rem 0;
        border:2px solid black;
        margin:1rem 0;
        width:20rem;
    }
    .mobs-container{
        @include flex-basic('c','c','nw','c');
        width:100%;
    }
    
 
</style>