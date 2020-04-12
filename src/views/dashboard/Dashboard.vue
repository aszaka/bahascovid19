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
          <p align="justify">
            <br> Banyak dari masyarakat kita yang masih awam dan tidak tahu mengenai wabah yang tengah melanda dunia ini khususnya negara Indonesia. Padahal untuk mencegah penyebaran, salah satunya adalah dengan mengetahui tentang wabah itu sendiri dan berusaha untuk menjauhinya. Untuk itu dibuatlah website ini untuk memudahkan warga masyarakat mengakses informasi tentang wabah covid-19 ini. Selain informasi mengenai wabah, website ini juga berisi beberapa hal lain seperti :
            <ol>
              <li><b>Data <i>realtime</i> jumlah warga masyarakat yang terpapar virus</b><br>Data ini merupakan data nasional yang diupdate secara realtime sehingga masyarakat dapat mengetahui seberapa besar tingkat penyebaran virus ini di negara kita. Data mengacu pada website kawalcorona.com</li>
              <li><b>Data <i>realtime</i> jumlah tiap daerah</b><br> Disini warga masyarakat dapat mengakses data tiap daerah sesuai dengan domisili atau tempat tinggalnya, data disajikan menggunakan tabel agar masyarakat dapat membaca data tersebut dengan mudah </li>
              <li><b>Timeline atau kronologi penyebaran Covid-19</b><br> Pada bagian ini akan ditampilkan kronologi penyebaran Covid-19 mulai dari awal ketika virus ini muncul di China hingga update terakhir perkembangan virus di Indonesia. Dengan ditampilkan kronologi ini, diharapkan masyarakat dapat mengetahui sejarah dan peristiwa apa saja yang telah terjadi.</li>
              <li><b>Informasi mengenai instansi yang menggalang donasi</b><br>Banyak sekali masyarakat dengan kelas ekonomi menengah kebawah serta para pekerja harian yang terdampak dengan adanya virus ini, untuk ini pada bagian ini kami mengumpulkan beberapa informasi instansi yang menggalang bantuan donasi baik untuk tenaga medis maupun warga masyarakat.</li>
              <li><b><i>Frequently Asked Question</i></b><br>Banyaknya pertanyaan dari masyarakat dengan pola pertanyaan yang sama membuat kami berinisiatif untuk menampilkan beberapa pertanyaan yang sering diajukan oleh masyarakat serta menampilkan jawaban yang relevan. Data ini kami ambil langsung dari website WHO.</li>
              <li><b>Chatbot layanan masyarakat</b>. Chatbot ini adalah chatbot resmi dari pemerintah, sehingga segala informasi yang disampaikan di chatbot tersebut adalah informasi yang resmi berasal dari pemerintah.</li>
            </ol>
          </p>
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
          sub-text="Sumber : api.kawalcorona.com"
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
          sub-text="Sumber : api.kawalcorona.com"
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
