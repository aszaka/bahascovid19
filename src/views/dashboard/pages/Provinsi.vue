<template>
  <v-container
    id="provinsi"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >
        <template>
          <v-card>
            <v-card-title>
              Data Sebaran Kasus Tiap Provinsi
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              />
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="item"
              :search="search"
            />
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Provinsi',
    data () {
      return {
        provinsi: {},
      }
    },
    mounted () {
      axios
        .get('https://api.kawalcorona.com/indonesia/provinsi')
        .then(({ provinsi }) => (this.provinsi = provinsi))
    },
  }
</script>
