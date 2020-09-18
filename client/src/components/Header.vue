<template>

    <!-- Todo separate in 3 div and add a grid -->
  <div >
    <div  v-if="$store.getters.getCurrentNavPath==='/CaractParcels'" class="header" style="background-image:url(images/bandeau_page_variabilite_intraparcellaire.jpg) ; background-size: 100% 150px;"></div>
    <div  v-if="$store.getters.getCurrentNavPath==='/IntraParcel'" class="header" style="background-image:url(images/bandeau_page_variabilite_intraparcellaire.jpg) ; background-size: 100% 150px;"></div>
    
    <div  v-if="$store.getters.getCurrentNavPath==='/CompCaract'" class="header" style="background-image:url(images/bandeau_page_variabilite_interparcellaire.jpg) ; background-size: 100% 150px;"></div>
    <div  v-if="$store.getters.getCurrentNavPath==='/InterParcel'" class="header" style="background-image:url(images/bandeau_page_variabilite_interparcellaire.jpg) ; background-size: 100% 150px;"></div>
    
    
    <div  v-if="$store.getters.getCurrentNavPath==='/CompScen'" class="header" style="background-image:url(images/bandeau_page_comparaison_scenarios_technologique.jpg) ; background-size: 100% 150px;"></div>
    <div  v-if="$store.getters.getCurrentNavPath==='/ScenTechno'" class="header" style="background-image:url(images/bandeau_page_comparaison_scenarios_technologique.jpg) ; background-size: 100% 150px;"></div>
  
  </div>
   
</template>


<script>
export default {
    name: 'Header',

    components: {   
    },

  }


</script>

<style scoped>

.header {
  height: 150px; 
  
  text-align: center;
  color: whitesmoke;

}


  
</style>