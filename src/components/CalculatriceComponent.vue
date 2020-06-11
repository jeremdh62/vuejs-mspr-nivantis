<template>
  <div>
       <p class="title"> Calculs de remises commerciales </p>

    <v-select v-model="select" :items="items" item-text="nom" item-value="id" dense outlined label="Médicament" return-object></v-select>
     <div v-if="`${select.id} === null`">
      <p class="body-1" > Taux de remise : {{ `${select.remise}` }} </p>
      <p class="body-1"> Prix d'achat net : {{PrixAchatNet(`${select.prixBrut}`,`${select.remise}`)}} </p>
      <p class="body-1"> Prix de vente net : {{PrixVenteNet(PrixAchatNet(`${select.prixBrut}`,`${select.remise}`),`${select.coefMulti}`)}} </p>
      <p class="body-1"> Coefficient multiplicateur : {{`${select.coefMulti}`}} </p>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'CalculatriceComponent',

    data: () => ({
      prixNet:0,
      venteNet:0,
      select:{'id':null,'nom':null,'prixBrut':null,'remise':null,'coefMulti':null},
     items: [{'id':1,'nom':'Doliprane','prixBrut':6,'remise':3,'coefMulti':1}, 
            {'id':2,'nom':'Efferalgan','prixBrut':5,'remise':4,'coefMulti':2},
            {'id':3,'nom':'Fervex','prixBrut':9,'remise':5,'coefMulti':3},
            {'id:':4,'nom':'Biseptine','prixBrut':3,'remise':1,'coefMulti':4}],
    }),
    methods: {
  
      TauxRemise(achatNet, achatBrut) {
        let remise = (1 - achatNet / achatBrut) * 100;
        return remise;
      },

      PrixAchatNet(achatBrut, remise) {
        let achatNet = achatBrut * (1 - remise)

        return achatNet;
      },

      PrixVenteNet(achatNet, coefMulti) {
        let venteNet = achatNet * coefMulti
        return venteNet;
      },

      CoefficientMultiplicateur(venteNet, achatNet) {
        let coefMulti = venteNet / achatNet
        return coefMulti;
      }
    }
  }
</script>
