<template>
  <div class="calculatriceview">
    <p class="title"> Calculs de remises commerciales </p>
    <CalculatriceComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import CalculatriceComponent from '../components/CalculatriceComponent.vue'

export default {
  name: 'CalculatriceView',
  components: {
    CalculatriceComponent
  }
}
</script>