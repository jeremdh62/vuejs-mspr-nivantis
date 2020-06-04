<template>
  <div class="calculatrice">
    <CalculatriceComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import CalculatriceComponent from '../components/CalculatriceComponent.vue'

export default {
  name: 'Calculatrice',
  components: {
    CalculatriceComponent
  }
}
</script>