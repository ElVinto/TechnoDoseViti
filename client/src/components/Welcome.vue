<template>
  <div
    class="global"
    style="background-image:url(images/Image2.jpg); background-size: 2200px 800px;padding:30px;margin: 1px;height: 800px"
    >
  

    
 
  <div id="title" >
    <router-link to="/CaractParcels" class="text-white"> <h1>TechnodoseViti</h1></router-link>
  </div>

  <div id="btnScenario" style="width: auto; opacity:80%;">
    <b-button to="/CaractParcels" variant="dark" style="width: auto;">
      <!-- <img src="images/scenario.png"/> -->
      <!-- <br> -->
      <h3>Démonstrateur</h3>
    </b-button>  
    <br>   
  </div>

  <div id="btnGuide">
     <b-button id="btnGuide" variant="dark" v-b-toggle.sidebar-footer style="opacity:80%">
        <!-- <img src="images/guid.png"/> -->
        Mode d'emploi
    </b-button>
  </div>
    
<hr>
	
	<div id="objective" class="card bg-dark text-white" style="opacity:90%">
      
      <div class="card-body" >
        <p>
        <center><b >
          Comparaison des doses de produits phytosanitaires à appliquer en fonction des caractéristiques de la végétation et de la performance du pulvérisateur : objectif pulvérisation de précision
        </b></center>
        </p>
        <p > 
          Dans l’objectif d’optimiser l’utilisation des produits phytosanitaires en vigne, notre approche consiste à prendre en compte à la fois les caractéristiques structurales de la végétation et la typologie du pulvérisateur utilisé pour raisonner les doses à appliquer.
          La stratégie mise en œuvre dans la thèse <b> « Modélisation expérimentale et statistique des relations entre caractéristiques morphologiques de la vigne et dépôts de pulvérisation : application à l’agriculture de précision » </b> 
          s’appuie sur le développement de modèles de prédiction des quantités et profils de dépôts de produits phytosanitaires dans la végétation en fonction d’une part des paramètres végétatifs issus de  mesures effectuées avec un capteur LiDAR (hauteur, épaisseur et densité de végétation) et d’autre part de la performance du pulvérisateur.
          Afin d’évaluer les perspectives de réduction des doses en viticulture, plusieurs scénarios technologiques intégrant différents pulvérisateurs et raisonnements de la dose appliquée sont comparés en termes d’économie d’intrants en appliquant les modèles.
        </p>

        <p>Contacts : Anice Cheraiet anice.cheraiet@vignevin.com, Sebastien CODIS sebastien.codis@vignevin.com, ITAP, INRAE</p>

        <p>Développeur(s) : Vincent Armant et Amin Ouail INRAE</p>
      </div>
    </div>
    


    


  
	
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" no-header shadow>
      
      <template v-slot:footer="{ hide }">
        <b-button size="sm" @click="hide">Fermer</b-button>
      </template>

      <div class="px-3 py-2" >
        
         <h5>Bienvenue sur l'application </h5><br>
        

        <p>
          Les données présentées sont issues de l’exploitation Mas Piquet (commune de Grabels), domaine du lycée viticole de Montpellier.
        </p>
        <p>
          Les données LIDAR ont été acquises à trois stades végétatifs (début, milieu et pleine végétation) sur trois parcelles de vigueur contrastée (Aglae (Marselan), Terre Blanche (Chardonnay) et Franquet (Cabernet Sauvignon)).
        </p>
        <p>
          Les modèles de dépôts permettent de prédire la quantité et la distribution des dépôts au sein du couvert végétal pour trois typologies différentes de pulvérisateurs (une voûte pneumatique passée, tous les 4 rangs, un appareil face par face et un panneau récupérateur).
        </p>
        <p>
          L’onglet « caractéristique morphologique » permet de visualiser et de comparer les paramètres végétatifs sur les trois parcelles aux différentes dates avec une échelle spatiale d'avancement de trois mètres.
        </p>
        <p>
          L’onglet « comparaison des scénarios technologiques » permet de choisir entre deux niveaux de risques en matière d’efficacité de la protection phytosanitaire (risqué ou sécurisé) et de visualiser de manière automatisée les pourcentages de la dose homologuée à appliquer pour les deux scénarios choisis.
        </p>

      </div>
    </b-sidebar>
 
</div>
  
   
</template>
<script>



export default {
  name: 'Welcome',

   data() {
      return {
        show: false
      }
    },

  components: {
    

  },

  async created() {
    await this.$store.dispatch('initTreatedParcels');
  },
}
</script>

<style scoped>


.card-body {  
  overflow-y: scroll; 
  width: 100%; 
  text-align: justify; 
  margin-top: 0px;
  font-size: small;
  }


@media screen and (min-width: 900px) {
.global {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
   grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);}
 
#title {color:rgb(105, 103, 101);
  grid-column: 1/6;
  grid-row: 1;
}

#btnScenario { 
  width: auto;
  grid-column: 3 ;
  grid-row: 2;
}

#objective {
  grid-column: 2/5;
  grid-row: 5/6;
}

#btnGuide {
  grid-column: 3;
  grid-row: 3;
}}




</style>
