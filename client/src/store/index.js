import Vue from "vue";
import Vuex from "vuex";

import TreatedParcelData from '../services/TreatedParcelData.js'


Vue.use(Vuex);


export default new Vuex.Store({

   state: {

   
      parcelNames: ['Aglae','Franquet','TerreBlanche'],
      actuators: ['faceparface','panneaurecuperateur','voutepneumatique'],
      phenoPhases: ['Debut','Milieu','Fin'],
      hypotheses: ['risque','securise'],


   /**
    * treatedParcel.parcelName.actuator.phenoPhase[centre,area,track]
    */
     treatedParcels : new Map(),
     dataIsLoaded:false,

     selectedParcelName: "Aglae",
     selectedActuator: "faceparface",
     selectedPhenoPhase: "Fin",
     selectedHypothesis: "risque",

   },


   getters: { // computed methods

      getTreatedParcels: (state) => {
         return state.treatedParcels;
      },

      getParcelNames: (state) =>{
         return state.parcelNames
      },

      getActuators: (state) =>{
         return state.actuators;
      },

      getPhenoPhases: (state) =>{
         return state.phenoPhases;
      },

      getHypotheses:(state) =>{
         return state.hypotheses
      },

      getDataIsLoaded:(state) =>{
         return state.dataIsLoaded
      },

      getSelectedParcel: (state) =>{
         return state.treatedParcels.get(state.selectedParcelName).get(state.selectedActuator).get(state.selectedPhenoPhase).get(state.selectedHypothesis)
      }

   },

   mutations: { // synchronous  commit of changes of state

      initTreatedParcels: (state, treatedParcels) =>{
         state.treatedParcels = treatedParcels;
      },

      validateDataIsLoaded : (state) =>{
         state.dataIsLoaded =true
      },

      setSelectedParcelName: (state,val) =>{
         state.selectedParcelName =val;
      },

      setSelectedActuator: (state,val) =>{
         state.selectedActuator =val;
      },

      setSelectedPhenoPhase: (state,val) =>{
         state.selectedPhenoPhase =val;
      }



   },

   actions: { // assynchronous commit of changes
      async initTreatedParcels({ state, commit }) {

         let tmpTreatedParcels = new Map()

         for(let parcelName of state.parcelNames){
            tmpTreatedParcels.set(parcelName,new Map)

            for(let actuator of state.actuators){
               tmpTreatedParcels.get(parcelName).set(actuator,new Map())

               for(let phenoPhase of state.phenoPhases){
                  tmpTreatedParcels.get(parcelName).get(actuator).set(phenoPhase,new Map());

                  for(let hypothesis of state.hypotheses){


                  console.log(`Parcelle_${parcelName}-actionneur_${actuator}-phasePheno_${phenoPhase}-Hypothese_${hypothesis}`)
                  let treatedParcel = await TreatedParcelData.getTreatedParcel(parcelName,actuator,phenoPhase,hypothesis);
                  console.log(treatedParcel)

                  tmpTreatedParcels.get(parcelName).get(actuator).get(phenoPhase).set(hypothesis,treatedParcel);

                  }
               }
            }
         }

         commit('initTreatedParcels', tmpTreatedParcels);
         commit ('validateDataIsLoaded')

         console.log(`validateDataIsLoaded: ${state.dataIsLoaded}`)
         
         
      },


   
      
   }
});

