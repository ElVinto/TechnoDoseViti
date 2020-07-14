<template>
    <div  class="row" style="margin-bottom:30px;" v-if="$store.getters.getDataIsLoaded">
    
        <div class="col-md-12">
            <div id="parcelSetterView" >
                <div id="parcelSetter">
                    <b >Choisissez une parcelle : </b>
                    <select v-model="selectedParcelName" class="custom-select" style="width:auto;">
                        <option
                            v-for="(parcelName, index) in $store.getters.getParcelNames"
                            v-bind:key="index"
                            v-bind:value="parcelName">{{ parcelName }}
                        </option>
                    </select>
                </div>
            </div>
        </div> 
                 
        <div class="phenoPhaseSetterView">
            <b>Choisissez un stade phénologique : </b>
            <select v-model="selectedPhenoPhase" @click="selectIcone" class="custom-select" style="width:auto;">
                <option
                    v-for="(phenoPhase, index) in $store.getters.getPhenoPhases"
                    v-bind:key="index"
                    v-bind:value="phenoPhase">
                    {{ phenoPhase }}
                </option>
            </select>

            <div id="menudv1"  style="width:auto;margin-top:10px;" >
                <div id="btndebut">
                    <b-button id="iconedebut" variant="outline-primary" style="width:auto;" >
                    <p style="font-size:13px">Debut</p>
                    <img src="../assets/debut.png" style="width:80px;height:auto;">
                    </b-button>
                    <b-tooltip target="iconedebut">Debut</b-tooltip>
                </div>
                <div id="btnmilieu" style="display:none;">
                    <b-button id="iconemilieu"  variant="outline-primary" style="width:auto;" >
                    <p style="font-size:13px">Milieu</p>
                    <img src="../assets/milieu.png" style="width:80px;height:auto;">
                    </b-button>
                    <b-tooltip target="iconemilieu">Milieu</b-tooltip>
                </div>
                <div id="btnfin" style="display:none;">
                    <b-button id="iconefin"  variant="outline-primary" style="width:auto;">
                    <p style="font-size:13px">Fin</p>
                    <img src="../assets/fin.png" style="width:80px;height:auto;">
                    </b-button>
                    <b-tooltip target="iconefin">Fin</b-tooltip>
                </div> 
            </div>
        </div>
   
        <div class="row" >
            <div class="col-lg-6">
            <h3>Hauteur</h3>
                <ParcelFeaturesTest v-bind:feat="height">d</ParcelFeaturesTest>
            </div>
            <div class="col-lg-6" >
            <h3>Epaisseur</h3>
                <ParcelFeaturesTest v-bind:feat="thickness">de</ParcelFeaturesTest>
            </div>
        </div>

        <div class="row" >
            <div class="col-lg-6">
            <h3>Densité végétation</h3>
                <ParcelFeaturesTest v-bind:feat="density"></ParcelFeaturesTest>
            </div>
            <div class="col-lg-6" >
            <h3>Aire mur végétale</h3>
                <ParcelFeaturesTest v-bind:feat="leafWallArea"></ParcelFeaturesTest>
            </div>
        </div>

    </div> 
</template>
<script>
import ParcelFeaturesTest from "./scenarioSetterTest/ParcelFeaturesTest"


export default {
    data() {
    return {
        selectedPhenoPhase:this.$store.state.selectedPhenoPhase,  
        selectedParcelName: this.$store.state.selectedParcelName,
        height:"height",
        density:"density",
        thickness:"thickness",
        leafWallArea:"leafWallArea"  
        }
},

methods: {

    selectIcone(){
   
if(this.selectedPhenoPhase === 'Debut'){

document.getElementById('btndebut').style.display='block';
document.getElementById('btnmilieu').style.display='none';
document.getElementById('btnfin').style.display='none';}

else if(this.selectedPhenoPhase === 'Milieu'){

document.getElementById('btnmilieu').style.display='block';
document.getElementById('btndebut').style.display='none';
document.getElementById('btnfin').style.display='none';}

else if (this.selectedPhenoPhase === 'Fin'){
document.getElementById('btnfin').style.display='block';
document.getElementById('btndebut').style.display='none';
document.getElementById('btnmilieu').style.display='none';
}


}
  

    
},

components:{
      
      ParcelFeaturesTest,
    },

watch: {
       selectedParcelName : function(val){
        this.$store.commit("setSelectedParcelName", val);},
       selectedPhenoPhase : function(val){
          console.log(this.$selectedPhenoPhase)
            this.$store.commit("setSelectedPhenoPhase", val);

    },
    
}}
</script>
<style scoped>
.phenoPhaseSetterView{text-align: center;margin-left: auto;margin-right: auto;margin-top:20px}

p{background-color: black;color: blanchedalmond;
    text-align: center;
}
.row{
    margin: 20px;
    text-align: center;
}
</style>

