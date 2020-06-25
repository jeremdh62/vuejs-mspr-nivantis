<template>
  <div> 
    <div v-for="laPharmacie in pharmacie" :key="pharmacie.indexOf(laPharmacie)">
    <p> nom : {{ laPharmacie.nom}} </p>
       </div>

<GmapMap :center="{lat:50.485719,lng:2.864796}" :zoom="10" map-type-id="terrain" style="width: 100%; height: 550px" >
<div v-for="laPharmacie in pharmacie" :key="pharmacie.indexOf(laPharmacie)">
  <gmap-marker :position="{lat: laPharmacie.latlng.Rc ,lng: laPharmacie.latlng.Ac }">

  </gmap-marker>
     <!-- <gmap-info-window :position="{lat: laPharmacie.latlng.Rc ,lng: laPharmacie.latlng.Ac }"> 
        {{laPharmacie.nom}} 
        </gmap-info-window>-->

</div>
</GmapMap>

  </div>
</template>

<script>
  import db from '@/config/db';

  export default {
    name: 'PharmacieMap',
    data() {
       return {
        pharmacie: []
    };
    },
  methods: {},

  created() {
    db.collection('pharmacie').get().then(snapshot => {
    snapshot.forEach(doc => {
      this.pharmacie.push(doc.data())
    });
})
}}


</script>