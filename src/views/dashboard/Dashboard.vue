<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        md="12"
      >
        <base-material-card
          color="success"
          class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Selamat Datang
            </div>

            <div class="subtitle-1 font-weight-light">
              Selamat Datang di website BahasCovid19
            </div>
          </template>
          <h4 align="center">
            <br> Website ini membahas segala sesuatu tentang virus Covid 19 atau yang lebih dikenal dengan corona.
          </h4>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="12"
      >
        <base-material-card
          color="warning"
          class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Pengertian
            </div>
          </template>
          <br> <p align="justify">
            <b>Coronavirus </b> adalah suatu kelompok virus yang dapat menyebabkan penyakit pada hewan atau manusia. Beberapa jenis coronavirus diketahui menyebabkan infeksi saluran nafas pada manusia mulai dari batuk pilek hingga yang lebih serius seperti Middle East Respiratory Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan menyebabkan penyakit COVID-19.
          </p>
          <p><b>COVID-19</b> adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Ini merupakan virus baru dan penyakit yang sebelumnya tidak dikenal sebelum terjadi wabah di Wuhan, Tiongkok, bulan Desember 2019.</p>
          <v-divider light />
          <br>
          <p align="right">
            <i>Sumber : <a href="https://www.who.int/indonesia/news/novel-coronavirus/qa-for-public">https://www.who.int/indonesia/news/novel-coronavirus/qa-for-public</a></i>
          </p>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-stats-card
          color="warning"
          icon="mdi-emoticon-cry-outline"
          title="Positif"
          :value=positif
          sub-icon="mdi-tag"
          sub-text="Tracked from Google Analytics"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-stats-card
          color="success"
          icon="mdi-emoticon-happy-outline"
          title="Sembuh"
          :value=sembuh
          sub-text="Sumber : api.kawalcorona.com"
        />
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="4"
      >
        <base-material-stats-card
          color="danger"
          icon="mdi-emoticon-dead-outline"
          title="Meninggal Dunia"
          :value=meninggal
          sub-icon="mdi-alert"
          sub-icon-color="red"
          sub-text="Get More Space..."
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Dashboard',
    data () {
      return {
        name: null,
        positif: null,
        sembuh: null,
        meninggal: null,
      }
    },
    mounted () {
      axios
        .get('https://api.kawalcorona.com/indonesia/')
        .then(response => {
          this.positif = response.data[0].positif
          this.sembuh = response.data[0].sembuh
          this.meninggal = response.data[0].meninggal
        })
    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
    },
  }
</script>
