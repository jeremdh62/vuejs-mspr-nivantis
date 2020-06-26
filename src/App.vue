<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" color="white" app>
         <v-list dense class="text-left">
            <!-- MENU -->
            <router-link to="/">
              <v-list-item link>
                <v-list-item-action>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Menu
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/calculatrice">
              <v-list-item link>
                <v-list-item-action>
                  <v-icon>mdi-calculator</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Calculatrice
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/pharmacie">
              <v-list-item link>
                <v-list-item-action>
                  <v-icon>mdi-pharmacy</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>
                    Pharmacie
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            
          </v-list>
        </v-navigation-drawer>

        <v-app-bar
        app
        color="#828282"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        <v-toolbar-title>Nivantis</v-toolbar-title>  
        <v-spacer></v-spacer>
      </v-app-bar>

              <v-content id="content">
          <v-col class="text-center no-padding">
            <!-- Affichage des page -->
            <router-view/>
          </v-col>
        </v-content>


  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false
  }),
watch: {
    group () {
      this.drawer = false
    },
}


};
</script>
