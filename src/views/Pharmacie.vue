<template>
  <div class="pharmacie">
     <pharmacie-map></pharmacie-map>
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