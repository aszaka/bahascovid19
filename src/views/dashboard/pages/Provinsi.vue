<template>
  <v-container
    id="Provinsi"
    fluid
    tag="section"
  >
    <v-card>
      <v-card-text>
        <v-row>
          <v-card-title>
            Data Sebaran Kasus Tiap Provinsi
          </v-card-title>
          <v-col
            cols="12"
            md="12"
          >
          Data ini merupakan date <i>realtime</i> yang berasal dari website kawalcorona.com. Semoga dengan adanya data ini masyarakat dapat mengetahui perkembangan data terkait penyebaran virus corona di daerahnya masing-masing.
            <template>
              <v-card>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th class="primary--text"><b>Provinsi</b></th>
                      <th class="primary--text">Positif</th>
                      <th class="primary--text">Sembuh</th>
                      <th class="primary--text">Meninggal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="covid in covids"
                      :key="covid.attributes.FID"
                    >
                      <td><b>{{ covid.attributes.Provinsi }}</b></td>
                      <td>{{ covid.attributes.Kasus_Posi }}</td>
                      <td>{{ covid.attributes.Kasus_Semb }}</td>
                      <td>{{ covid.attributes.Kasus_Meni }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card>
            </template>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Provinsi',

    data () {
      return {
        covids: null,
      }
    },

    mounted () {
      axios
        .get('https://api.kawalcorona.com/indonesia/provinsi/')
        .then(response => {
          // console.log(response.data)
          this.covids = response.data
        })
    },
  }
</script>
