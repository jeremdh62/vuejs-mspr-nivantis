<template>
  <div>
      <v-select v-model="select" :items="items" item-text="nom" item-value="id" dense outlined label="Médicament" return-object></v-select>
      <v-text-field v-model="remise" label="Remise" type="number" suffix="%"></v-text-field>
      <v-text-field v-model="coefMulti" label="Coefficient Multiplicateur" type="number"></v-text-field>
      <p class="body-1"> Prix d'achat net : {{calcul.PrixAchatNet(`${select.prixBrut}`, remise ) }} €</p>
      <p class="body-1"> Prix de vente net : {{calcul.PrixVenteNet(calcul.PrixAchatNet(`${select.prixBrut}`,remise),coefMulti)}} € </p>
  </div>
</template>

<script>
  import db from '@/config/db';
  import { Calculatrice } from '../services/calculatrice.js';
  export default {
    name: 'CalculatriceComponent',

    data: () => ({
       remise : 0,
      coefMulti: 0,
      select:{'nom':'','prixBrut':0},
     items: [],
     calcul: new Calculatrice()
    }),

    created() {
    db.collection('medicaments').get().then(snapshot => {
    snapshot.forEach(doc => {
      this.items.push(doc.data())
    });
})
}
  }
</script>
