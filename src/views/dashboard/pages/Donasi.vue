<template>
  <v-container
    id="donasi"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="black--text align-end"
            height="200px"
            src="../../../../src/assets/logo-act.png"
          >
            <v-card-title />
          </v-img>

          <v-card-subtitle class="pb-0">
            <small>10 April 2020</small>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div><b>Aksi Cepat Tanggap</b></div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              default
              class="v-btn--block"
              @click="act = true"
            >
              Detail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="black--text align-end"
            height="200px"
            src="../../../../src/assets/logo-dd.png"
          >
            <v-card-title />
          </v-img>

          <v-card-subtitle class="pb-0">
            <small>10 April 2020</small>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div><b>Dompet Dhuafa</b></div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              default
              class="v-btn--block"
              @click="dd = true"
            >
              Detail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="black--text align-end"
            height="200px"
            src="../../../../src/assets/logo-rz.png"
          >
            <v-card-title />
          </v-img>

          <v-card-subtitle class="pb-0">
            <small>10 April 2020</small>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div><b>Rumah Zakat</b></div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              default
              class="v-btn--block"
              @click="rz = true"
            >
              Detail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="black--text align-end"
            height="200px"
            src="../../../../src/assets/logo-kb.jpg"
          >
            <v-card-title />
          </v-img>

          <v-card-subtitle class="pb-0">
            <small>10 April 2020</small>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div><b>Kitabisa.com</b></div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              default
              class="v-btn--block"
              @click="kb = true"
            >
              Detail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="black--text align-end"
            height="200px"
            src="../../../../src/assets/logo-bm.jpg"
          />

          <v-card-subtitle class="pb-0">
            <small>11 April 2020</small>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div><b>Bangunmasjid.com</b></div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="warning"
              default
              class="v-btn--block"
              @click="bm = true"
            >
              Detail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="black--text align-end"
            height="200px"
            src="../../../../src/assets/space.jpg"
          />

          <v-card-text class="text--primary">
            <div><b>Iklan Donasi</b></div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="green"
              default
              class="v-btn--block"
              @click="space = true"
            >
              Detail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog
      v-model="act"
      max-width="600"
    >
      <v-card class="text-left">
        <v-img
          class="black--text align-end"
          src="../../../../src/assets/detail-act.jpg"
        />
        <v-card-text>
          <h2>Aksi Cepat Tanggap</h2>
          <small>10 April 2020</small>
          <br>
          <p align="justify">
            Awal Maret 2020, negeri ini digemparkan dengan pengumuman Presiden bersama Menteri Kesehatan yang menyatakan bahwa virus corona atau COVID-19 positif ada di Indonesia dan telah menjangkiti warga di sekitaran Ibukota.Sontak saja, negeri ini pun geger dan kewaspadaan mencuat dimana-mana. Bagaimana tidak? Virus Corona ini telah menjangkiti ratusan ribu manusia dan ribuan korban jiwa meninggal dunia. Kewaspadaan pun berubah menjadi kepanikan.<br><br>Tiba-tiba, alat kesehatan seperti masker, hand sanitizer, dan alat kesehatan lainnya menjadi langka karena diborong atau bahkan ditimbun orang tak bertanggung jawab agar dapat dijual dengan harga yang tinggi. Sedihnya, sebagian petugas medis pun harus kekurangan Alat Proteksi Diri (APD) dikala harus bertugas menangani pasien corona.<br><br>Tim Aksi Cepat Tanggap pun tak tinggal diam. Atas izin Allah, kami mengadakan aksi medis mulai dari edukasi, pembagian alat kesehatan, hingga aksi pencegahan untuk meminimalisir atau bahkan mengatasi permasalahan wabah virus Corona ini. Tidak sampai di situ, kami juga melakukan antisipasi terhadap dampak wabah ini seperti dampak sosial dan ekonomi yang melemah dengan cara melakukan pembagian makanan gratis, beras gratis hingga air minum gratis.<br><br>Khusus untuk tim medis yang menjadi peran vital penanganan Covid-19 ini, Aksi Cepat Tanggap mendukung penyediaan kebutuhan para tenaga medis. Melalui campaign ini, kamu sangat bisa membantu penyediaan makanan, vitamin, dan juga APD atau Alat Proteksi Diri seperti baju hazmat, masker N95, masker bedah, surgical cap dan helmet face shield.<br><br>Sahabat Dermawan, yuk tunjukkan kepedulian kita pada umat dan bangsa! Ayo #BersamaLawanCorona dengan bantuan terbaik mu!
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            class="v-btn--block"
            color="success"
            href="https://act.id/program/bersamalawancorona"
            target="_blank"
          >
            info Selengkapnya
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dd"
      max-width="600"
    >
      <v-card class="text-left">
        <v-img
          class="black--text align-end"
          src="../../../../src/assets/detail-dd.jpg"
        />
        <v-card-text>
          <h2>Dompet Dhuafa</h2>
          <small>10 April 2020</small>
          <br>
          <b>Penerima Manfaat</b>
          <ul>
            <li>Tenaga Kesehatan di RS rujukan Corona (Bantuan: Alat Pelindung Diri)</li>
            <li>Keluarga Dhuafa yang Terisolasi (Bantuan: Kebutuhan Harian, Layanan Ambulans)</li>
            <li>Fasilitas publik (Penyemprotan Desinfektan)</li>
          </ul>
          <br>
          <b>Jenis Bantuan</b>
          <ul>
            <li>Alat Pelindung Diri (APD)</li>
            <li>Alat Desinfektan (Alat Semprot dan Disenfection Chamber)</li>
            <li>Hand Sanitizer</li>
            <li>Sabun Cuci Tangan</li>
            <li>Vitamin</li>
            <li>Layanan Ambulans</li>
            <li>Kebutuhan Harian</li>
            <li>Sosialisasi Pencegahan Virus Corona</li>
          </ul>
          <p align="justify">
            Sahabat mari ikut #menebarkebaikan menjadi bagian dari melawan Covid-19, dengan membantu masyarakat yang rentan dengan Covid-19. Selain bantuan disinfektan gratis, Donasimu akan dikonversikan dengan beberapa hal diatas yang akan dibagikan pada kaum Dhuafa dan mereka yang masuk dalam kelompok rentan Covid-19 di sejumlah daerah di tanah air.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            class="v-btn--block"
            color="success"
            href="https://donasi.dompetdhuafa.org/bersamalawancorona/"
            target="_blank"
          >
            Info Selengkapnya
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="rz"
      max-width="600"
    >
      <v-card class="text-left">
        <v-img
          class="black--text align-end"
          src="../../../../src/assets/detail-rz.webp"
        />
        <v-card-text>
          <h2>Rumah Zakat</h2>
          <small>10 April 2020</small>
          <br>
          <p align="justify">
            Saat coronavirus desease 2019 (Covid-19) merebak seperti saat ini, alat pelindung diri (APD) bagi tenaga kesehatan menjadi sangat penting. Selain diutamakan untuk rumah sakit yang dijadikan rujukan, permintaan juga datang dari RS lainnya. Distribusi APD dilakukan dengan bervariasi. Namun yang jelas, dalam menangani satu pasien tenaga medis di rumah sakit membutuhkan APD 10 sampai 18 set dalam sehari. Mari bantu kami untuk menyediakan lebih banyak APD untuk para Petugas Medis. Jangan Sampai Kita Kehilangan Petugas Medis Lagi, Mari Lindungi Mereka Dengn APD Lengkap
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            class="v-btn--block"
            color="success"
            href="https://www.rumahzakat.org/corona/"
            target="_blank"
          >
            info Selengkapnya
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="kb"
      max-width="600"
    >
      <v-card class="text-left">
        <v-img
          class="black--text align-end"
          src="../../../../src/assets/detail-kb.webp"
        />
        <v-card-text>
          <h2>Kitabisa.com</h2>
          <small>10 April 2020</small>
          <br>
          <p align="justify">
            Penyebaran virus corona di Indonesia terus meluas. Dampak virus ini sangat mengkhawatirkan: Ribuan orang positif dan dalam pengawasan, sementara ratusan lainnya meninggal dunia. Angka tersebut bukan statistik semata, melainkan menyangkut nyawa dan kehidupan banyak orang. Penyebaran corona berdampak pada banyak hal mulai dari kesehatan banyak orang, sampai kehidupan ekonomi masyarakat kecil yang menurun drastis. <br><br>Kita tak bisa diam saja melihat penyebaran virus ini. Kita harus tolong menolong untuk menghentikan penyebaran virus corona secepat mungkin. <br><br>Melalui galang dana ini, kamu dan semua orang bisa berdonasi untuk membantu menghentikan penyebaran virus corona. Kita akan menggunakan hasil galang dana ini untuk membantu dan melindungi banyak orang yang terdampak corona.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            class="v-btn--block"
            color="success"
            href="https://kitabisa.com/campaign/indonesialawancorona"
            target="_blank"
          >
            info Selengkapnya
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="bm"
      max-width="600"
    >
      <v-card class="text-left">
        <v-img
          class="black--text align-end"
          src="../../../../src/assets/detail-bm.jpg"
        />
        <v-card-text>
          <h2>Beras Untuk Pemakmur Masjid</h2>
          <small>10 April 2020</small>
          <br>
          <p align="justify">
            Seorang orientalis pernah mengatakan “Umat Islam akan senantiasa jaya bila mereka selalu berpegang teguh dengan Al-Quran dan memakmurkan masjid”.  Pernyataan itu tentu bukan pernyataan biasa, pernyataannya tentu sudah berdasarkan penelitian dan kajian mendalam.<br><br>Meski kita tidak bermaksud ucapan tersebut sebagai dalil, namun kita pasti membenarkan kesimpulan itu, karena faktanya Peradaban Islam Tidak mungkin Berjaya dan memancarkan cahaya melainkan berawal dari masjid yang menjadi pusat aktifitas keislaman.<br><br>Virus Corona (covid 19) telah menyebar keseluruh dunia dan dampak pertama dari virus ini bukan soal kematian tetapi dampak ekonomi ( banyak usaha tutup atau kalaupun buka pembeli juga ngak banyak) yang akhirnya berdampak pada daya beli masyarakat yang menurun, dan ini tentu juga termasuk didalamnya para pemakmur masjid.<br><br>Siapakah Pemakmur Masjid ?<br>Mereka adalah orang2 yang aktif dimasjid, mulai dari ustadz, pengasuh TPA serta jama’ahnya. Tidak sedikit juga mereka yang terdampak ekomoninya. Padahal mereka adalah pengerak dan yang menghidupkan masjid sebagai tempat aktifitas Keislaman. Melalui program Beras Untuk Pemakmur Masjid, Yuk kita bantu mereka.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            class="v-btn--block"
            color="success"
            href="http://bangunmasjid.com/beras-untuk-pemakmur-masjid/"
            target="_blank"
          >
            Info Selengkapnya
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="space"
      max-width="600"
    >
      <v-card class="text-center">
        <v-img
          class="black--text align-end"
          src="https://stamps.umich.edu/images/uploads/exhibitions/spaceavailable.jpg"
        />
        <v-card-text>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            class="v-btn--block"
            color="success"
            href="http://bangunmasjid.com/beras-untuk-pemakmur-masjid/"
            target="_blank"
          >
            Go To Page
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardNotifications',

    data: () => ({
      color: 'info',
      colors: [
        'info',
        'success',
        'warning',
        'error',
      ],
      act: false,
      dd: false,
      rz: false,
      kb: false,
      bm: false,
      space: false,
      direction: 'top center',
      directions: [
        'top left',
        'top center',
        'top right',
        'bottom left',
        'bottom center',
        'bottom right',
      ],
      snackbar: false,
    }),

    computed: {
      parsedDirection () {
        return this.direction.split(' ')
      },
    },

    methods: {
      randomColor () {
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
      },
    },
  }
</script>
