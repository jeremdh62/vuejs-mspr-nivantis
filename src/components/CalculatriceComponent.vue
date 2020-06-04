<template>
  <div>
       <p class="title"> Calculs de remises commerciales </p>

    <v-autocomplete :items="items" dense filled label="Médicament"></v-autocomplete>
      <p class="body-1"> Taux de remise : </p>
      <p class="body-1"> Prix d'achat net : </p>
      <p class="body-1"> Prix de vente net : </p>
      <p class="body-1"> Coefficient multiplicateur : </p>
  </div>
</template>

<script>
  export default {
    name: 'CalculatriceComponent',

    data: () => ({
     items: ['Doliprane', 'Efferalgan', 'Fervex', 'Biseptine'],
    }),
  }
</script>
