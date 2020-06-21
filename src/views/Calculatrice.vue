<template>
  <div class="calculatriceview">
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