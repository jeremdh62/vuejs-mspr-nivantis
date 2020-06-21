<template>
  <div>
       <p class="title"> Calculs de remises commerciales </p>

    <v-select v-model="select" :items="items" item-text="nom" item-value="id" dense outlined label="Médicament" return-object></v-select>
     
      <v-text-field v-model="remise" label="Taux de remise" type="number"></v-text-field>
      <v-text-field v-model="coefMulti" label="Coefficient multiplicateur" type="number"></v-text-field>
      <p class="body-1"> Prix d'achat net : {{calcul.PrixAchatNet(`${select.prixBrut}`,remise)}} </p>
      <p class="body-1"> Prix de vente net : {{calcul.PrixVenteNet(calcul.PrixAchatNet(`${select.prixBrut}`,remise),coefMulti)}} </p>
    
  </div>
</template>

<script>
  import medicaments from '../repositories/medicaments.json';
  import { Calculatrice } from '../services/calculatrice.js';
  export default {
    name: 'CalculatriceComponent',

    data: () => ({
       remise : 0,
      coefMulti: 0,
      select:{'id':-1,'nom':'','prixBrut':0},
     items: medicaments,
     calcul: new Calculatrice()
    })
  }
</script>
