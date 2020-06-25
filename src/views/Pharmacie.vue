<template>
  <div class="pharmacie">
    <p class="title"> Pharmacies </p>
     <pharmacieMap></pharmacieMap>
  </div>
</template>

<script>
import PharmacieMap from '../components/PharmacieMap.vue';
 
export default {
  name: 'Pharmacie',
  components:{
    PharmacieMap
  }
}
</script>