<template>
  <v-container
    id="timeline"
    fluid
    tag="section"
  >
    <v-row>
      <v-col>
        <v-timeline align-top>
          <v-timeline-item
            v-for="(timeline, i) in timelines"
            :key="i"
            :color="timeline.color"
            :icon="timeline.icon"
            fill-dot
            large
          >
            <v-card class="pa-6">
              <v-chip
                :color="timeline.color"
                class="overline mb-3"
                small
              >
                {{ timeline.chip }}
              </v-chip>

              <p
                class="subtitle-1 font-weight-light"
                v-text="timeline.text"
              />

              <div
                class="text-uppercase body-2"
                v-text="timeline.subtext"
              />

              <template v-if="timeline.action">
                <v-divider class="mb-3" />

                <v-menu
                  v-model="menu"
                  bottom
                  offset-y
                  origin="top left"
                  right
                  transition="scale-transition"
                >
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn
                      v-bind="attrs"
                      :color="timeline.action"
                      large
                      rounded
                      v-on="on"
                    >
                      <v-icon
                        left
                        v-text="timeline.actionIcon"
                      />
                      <v-icon right>
                        {{ menu ? 'mdi-menu-up' : 'mdi-menu-down' }}
                      </v-icon>
                    </v-btn>
                  </template>

                  <v-sheet>
                    <v-list>
                      <v-list-item
                        v-for="a in timeline.actions"
                        :key="a"
                        link
                      >
                        <v-list-item-title v-text="a" />
                      </v-list-item>
                    </v-list>
                  </v-sheet>
                </v-menu>
              </template>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        <v-divider light />
        <br>
        <p align="right">
          <i>Sumber : <a href="https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Indonesia">https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Indonesia</a></i>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardPagesTimeline',

    data: () => ({
      menu: false,
      timelines: [
        {
          chip: '2 Februari',
          color: 'success',
          text: 'Pemerintah Indonesia mengevakuasi 243 warga negara Indonesia dari Wuhan , Cina . Orang Indonesia yang dipulangkan ditempatkan di bawah karantina di Kepulauan Natuna tetapi tidak diuji karena tidak menunjukkan gejala.',
        },
        {
          chip: '24 Februari',
          color: 'success',
          text: '9 orang Indonesia yang berada di kapal Diamond Princess dinyatakan positif terkena virus dan dipindahkan ke fasilitas perawatan di Jepang . Pemerintah Indonesia memulangkan dan kemudian mengkarantina 68 awak yang tersisa, beserta 188 dari World Dream , ke Pulau Sebaru Kecil yang tidak berpenghuni di Kepulauan Seribu di lepas pantai Jakarta .',
        },
        {
          chip: '2 Maret',
          color: 'warning',
          text: 'Presiden Joko Widodo membenarkan dua kasus pertama COVID-19 di negara itu dalam sebuah pernyataan yang disiarkan televisi. Menurut Menteri Kesehatan Terawan Agus Putranto, pasien tertular virus dari orang Jepang yang terinfeksi di Depok yang kemudian dinyatakan positif di Malaysia. Kedua pasien Indonesia kemudian dirawat di Rumah Sakit Pusat Infeksi Sulianti Saroso, Jakarta Utara',
        },
        {
          chip: '6 Maret',
          color: 'warning',
          text: 'Per 6 Maret, Indonesia hanya menguji 450 orang dari 270 juta penduduknya.',
        },
        {
          chip: '7 Maret',
          color: 'warning',
          text: 'Salah satu kru yang dievakuasi dari Puteri Intan diduga terkena penyakit itu dan kemudian dipindahkan ke unit isolasi di Rumah Sakit Umum Pusat Persahabatan, Jakarta Timur .',
        },
        {
          chip: '8 Maret',
          color: 'warning',
          text: 'Seorang wanita berusia 50 tahun dari Jakarta dites positif di Melbourne , Australia . Dia mulai menunjukkan gejala dua hari setelah terbang ke Perth dari Jakarta pada 27 Februari dan melihat dokter umum empat hari setelah tiba di Melbourne pada 2 Maret.Pemerintah Indonesia mengumumkan dua kasus lagi yang dikonfirmasi. Satu pasien terinfeksi melalui kontak dekat dengan kasus # 1, pasien lainnya menjadi anggota awak Putri Intan.',
        },
        {
          chip: '9 Maret',
          color: 'warning',
          text: 'Indonesia mengkonfirmasi 13 kasus baru infeksi COVID-19, 2 di antaranya adalah orang asing. Pemerintah Indonesia memutuskan untuk tidak mengungkapkan lokasi deteksi pasien dan fasilitas perawatan yang digunakan.',
        },
        {
          chip: '10 Maret',
          color: 'warning',
          text: '2 pasien yang sebelumnya dikonfirmasi positif kemudian dilaporkan sebagai negatif, mendukung penjelasan yang dibuat oleh perwakilan pemerintah Indonesia. Kedua pasien harus dipulangkan, harus tes lebih lanjut mengkonfirmasi status negatif mereka. Indonesia mengkonfirmasi 8 kasus baru infeksi COVID-19, 2 di antaranya adalah orang asing. Seorang pasien COVID-19 yang diduga melarikan diri dari Rumah Sakit Umum Pusat Persahabatan. Ia kemudian dikonfirmasi sebagai positif virus dan telah kembali ke rumah sakit.',
        },
        {
          chip: '11 Maret',
          color: 'warning',
          text: 'Kasus # 25 meninggal karena komplikasi penyakit. Korban adalah warga negara Inggris dan meninggal di rumah sakit Bali. Indonesia mengkonfirmasi 7 kasus baru infeksi COVID-19, semuanya merupakan kasus impor.',
        },
        {
          chip: '12 Maret',
          color: 'warning',
          text: '5 kasus pulih. Menteri Tenaga Kerja Indonesia Ida Fauziah mengamanatkan bahwa semua perusahaan Indonesia menyediakan peralatan pencegahan coronavirus kepada karyawannya, seperti masker wajah dan pembersih tangan.',
        },
        {
          chip: '13 Maret',
          color: 'warning',
          text: '3 kematian terkait koronavirus dilaporkan, 1 kasus di Solo , Jawa Tengah. Dua lainnya tidak diungkapkan. Indonesia mengkonfirmasi 35 kasus baru infeksi COVID-19, dengan total 69 kasus. Pekerja medis pertama yang terkena dampak meninggal pada 13 Maret.',
        },
        {
          chip: '14 Maret',
          color: 'warning',
          text: 'Pemerintah Indonesia mengkonfirmasi 27 kasus baru COVID-19, total 96 kasus. Tanggal ini juga menandai pertama kalinya pemerintah mengumumkan lokasi dengan kasus koronavirus yang dikonfirmasi. Menteri Perhubungan Indonesia , Budi Karya Sumadi dinyatakan positif COVID-19.',
        },
        {
          chip: '15 Maret',
          color: 'warning',
          text: 'Indonesia mengkonfirmasi 21 kasus baru infeksi COVID-19, 19 di Jakarta dan 2 di Jawa Tengah , total 117 kasus. Presiden Indonesia Joko Widodo dikatakan akan menjalani tes COVID-19 di malam hari.',
        },
        {
          chip: '16 Maret',
          color: 'warning',
          text: 'Indonesia mengkonfirmasi 17 kasus infeksi baru, dengan total 134 kasus. 14 kasus baru di Jakarta, 1 kasus baru di Jawa Tengah, 1 kasus baru di Banten, dan 1 kasus baru di Jawa Barat. Indonesia mengumumkan bahwa mereka akan mulai mengkarantina pasien COVID-19 tanpa gejala di rumah mereka sendiri.',
        },
        {
          chip: '17 Maret',
          color: 'warning',
          text: 'Menanggapi meningkatnya jumlah kasus COVID-19 di Indonesia, Dewan Nasional Indonesia untuk Penanggulangan Bencana mengumumkan masa darurat selama 91 hari, efektif hingga 29 Mei 2020. Pemerintah Indonesia mengumumkan 38 kasus baru COVID-19, sehingga jumlah total infeksi menjadi 172.',
        },
        {
          chip: '18 Maret',
          color: 'warning',
          text: 'Indonesia mengkonfirmasi 55 kasus baru infeksi COVID-19, sehingga totalnya mencapai 227 kasus. 12 pasien meninggal, jumlah kematian sekarang telah meningkat menjadi 19.',
        },
        {
          chip: '19 Maret',
          color: 'warning',
          text: 'Joko Widodo mengumumkan 7 poin penting (tes cepat massal, insentif untuk tenaga medis, melibatkan umat beragama, berhenti mengekspor peralatan medis, menghentikan liburan, insentif untuk usaha kecil dan menengah, menambah stok makanan) untuk mempercepat penghapusan wabah COVID-19 di Indonesia. Kepala Kepolisian Indonesia Idham Azis menerbitkan pemberitahuan untuk semua polisi untuk membubarkan kerumunan di mana saja kapan saja, termasuk restoran, perkawinan dan layanan keagamaan, dan untuk menolak izin untuk acara besar. ',
        },
        {
          chip: '20 Maret',
          color: 'warning',
          text: 'Indonesia mengumumkan 60 kasus baru, sehingga totalnya menjadi 369 kasus. Indonesia juga mengumumkan 17 pulih dan 32 kematian, meningkat 7 kematian. Anies Baswedan menyatakan keadaan darurat di Jakarta untuk 14 hari ke depan (2 April).',
        },
        {
          chip: '21 Maret',
          color: 'warning',
          text: 'Angkatan Udara Indonesia akan menerbangkan C-130 Hercules (A-1333) ke kota Cina Shanghai pada hari Sabtu untuk mengambil sekitar 9 ton peralatan medis. Rute ini adalah Malang - Natuna -Hainan-Shanghai. Peralatan tersebut meliputi masker sekali pakai, masker N95 , pakaian pelindung, kacamata, sarung tangan, penutup sepatu, termometer inframerah, dan topi bedah.',
        },
        {
          chip: '22 Maret',
          color: 'warning',
          text: 'Asosiasi Kesehatan Indonesia (IDI) mengumumkan 6 dokter (Dr. Toni Daniel Silitonga; Dr. Ucok Martin; Dr. Djoko Judodjoko; Dr. Hadio Ali; Dr. Laurentius P; Dr. Adi Mirsaputra) telah mengontrak COVID-19. Indonesia mengumumkan 64 kasus baru, total 514 kasus.',
        },
        {
          chip: '23 Maret',
          color: 'warning',
          text: 'Indonesia mengumumkan 65 kasus baru, sehingga totalnya menjadi 579 kasus. Presiden Joko Widodo meresmikan rumah sakit darurat COVID-19 pertama di negara itu di desa mantan atlet untuk Asian Games 2018 di Kemayoran , Jakarta. Itu dijadwalkan akan dilengkapi dengan 3000 tempat tidur untuk pasien yang membutuhkan isolasi.',
        },
        {
          chip: '24 Maret',
          color: 'warning',
          text: 'Presiden Joko Widodo mengumumkan pembatalan ujian nasional tahunan ( Ujian Nasional ) untuk semua tingkat pendidikan, kecuali Sekolah Menengah Kejuruan (SMK ) yang telah dilakukan di hampir setengah dari semua sekolah di negara ini.',
        },
        {
          chip: '25 Maret',
          color: 'warning',
          text: 'Kementerian Perhubungan Indonesia melarang setiap orang bepergian pulang untuk liburan Idul Fitri untuk menahan penyebaran virus. Indonesia mengkonfirmasi 105 lebih banyak kasus dan mengoreksi data dari hari sebelumnya. Seharusnya mengatakan 685, sedangkan data hari sebelumnya mencatat 686. Satu nama pasien keliru terdaftar di dua rumah sakit. Jumlah total kasus menjadi 790.',
        },
        {
          chip: '26 Maret',
          color: 'warning',
          text: 'Indonesia mengumumkan 103 kasus baru, sehingga jumlah totalnya menjadi 893. Para peneliti memperkirakan bahwa mungkin ada puluhan ribu infeksi tersembunyi di seluruh negeri.',
        },
        {
          chip: '27 Maret',
          color: 'warning',
          text: 'Indonesia mengkonfirmasi 153 kasus positif baru, total 1.046. Mereka juga mengumumkan 9 kematian dan 11 pemulihan. Pasar Beringharjo dan Tanah Abang (10 hari) ditutup untuk mencegah COVID-19. Menteri Koordinator Politik, Hukum, dan Keamanan Indonesia Mahfud MD mengatakan bahwa undang-undang khusus tentang penguncian lokal saat ini sedang dikerjakan.',
        },
        {
          chip: '28 Maret',
          color: 'warning',
          text: 'Indonesia mengumumkan 109 kasus lagi, sehingga jumlah seluruhnya menjadi 1.155. Indonesia AirAsia menangguhkan semua penerbangan mulai 1 April hingga setidaknya 21 April untuk penerbangan domestik dan 17 Mei untuk penerbangan internasional.',
        },
        {
          chip: '29 Maret',
          color: 'warning',
          text: 'Indonesia mengkonfirmasi 130 kasus baru lainnya, total 1.285. Perusahaan kereta api negara, Kereta Api Indonesia, membatalkan 28 rute dari Jakarta untuk bulan April.',
        },
        {
          chip: '30 Maret',
          color: 'warning',
          text: 'Indonesia mengkonfirmasi 129 kasus baru, sehingga jumlah total menjadi 1.414. Jokowi memerintahkan pembatasan sosial berskala besar ditambah dengan kebijakan darurat sipil.',
        },
        {
          chip: '31 Maret',
          color: 'warning',
          text: 'Indonesia mengkonfirmasi 114 kasus baru, total 1.528. Presiden Joko Widodo menyatakan darurat kesehatan masyarakat dan meminta polisi untuk menegakkan kebijakan jarak sosial skala besar.',
        },
        {
          chip: '1 April',
          color: 'error',
          text: 'Indonesia mengkonfirmasi 149 kasus baru, sehingga jumlah total menjadi 1.677. 300 siswa polisi di Sekolah Pembentukan Perwira (Setukpa) Lembaga Pendidikan Polri (Lemdikpol) di Sukabumi dikarantina selama 14 hari setelah hasil tes cepat positif.',
        },
        {
          chip: '2 April',
          color: 'error',
          text: 'Indonesia mengkonfirmasi 113 kasus baru, total 1.790. Indonesia kini telah melarang orang asing memasuki perbatasannya. Warga negaranya yang kembali dari luar negeri harus memberikan laporan kesehatan dan melakukan karantina wajib sendiri. Kementerian Kehakiman dan Hak Asasi Manusia Indonesia akan membebaskan lebih dari 30.000 tahanan untuk menghindari infeksi massal virus corona di penjara-penjara Indonesia yang penuh sesak. Itu menerima banyak kritik terutama bagi mereka yang melakukan korupsi. Namun, dinyatakan bahwa mereka tidak akan membebaskan tahanan yang dihukum karena korupsi, pembalakan liar, terorisme, kejahatan narkoba, kejahatan berat hak asasi manusia atau kejahatan terorganisir lintas negara.',
        },
        {
          chip: '3 April',
          color: 'error',
          text: 'Indonesia mengkonfirmasi 196 kasus baru, sehingga jumlah total menjadi 1.986.',
        },
        {
          chip: '4 April',
          color: 'error',
          text: 'Indonesia mengumumkan 106 kasus baru, total 2.092.',
        },
        {
          chip: '5 April',
          color: 'error',
          text: 'Indonesia mengkonfirmasi 181 kasus baru, sehingga jumlah totalnya menjadi 2.273.',
        },
        {
          chip: '6 April',
          color: 'error',
          text: 'Indonesia telah menguji 11.242 spesimen, di mana 8.000 spesimen negatif. Indonesia mengumumkan 218 kasus tambahan, 2.491 total.',
        },
        {
          chip: '7 April',
          color: 'error',
          text: 'Indonesia mengkonfirmasi 247 kasus baru, total 2.738. Pemerintah Jakarta telah mengungkapkan telah mengubur 639 orang sesuai dengan protokol untuk penguburan orang yang dicurigai atau dikonfirmasi telah terinfeksi COVID-19. Kementerian Kesehatan mengabulkan permintaan Jakarta untuk memberlakukan pembatasan sosial berskala besar mulai dari 10 April hingga 24 April dan dapat diperpanjang selama 14 hari setelah kasus COVID-19 terakhir. Kementerian menulis dalam sebuah keputusan menteri bahwa data telah menunjukkan peningkatan yang signifikan dalam, dan penyebaran cepat, kasus COVID-19, disertai dengan bukti transmisi lokal di Jakarta.',
        },
        {
          chip: '8 April',
          color: 'error',
          text: 'Indonesia mengkonfirmasi 218 kasus baru, sehingga jumlah totalnya menjadi 2.956',
        },
        {
          chip: '9 April',
          color: 'error',
          text: 'Indonesia mengumumkan 337 kasus tambahan, terbanyak dalam satu hari sejak pandemi dimulai di Indonesia. Jumlah total sekarang adalah 3.293. Gorontalo mengumumkan kasus pertamanya. Pada 9 April malam, kasus telah dikonfirmasi di semua provinsi di Indonesia.',
        },
        {
          chip: '10 April',
          color: 'error',
          text: 'Indonesia mengkonfirmasi 219 kasus baru, total 3.512. Perusahaan naik-naik online, GoJek dan Grab , tidak lagi menyediakan layanan ojek di Jakarta karena Jakarta mulai memberlakukan kebijakan pembatasan sosial skala besar. Indonesia telah menguji 19.500 spesimen berdasarkan metode Reaksi Rantai Polymerase.',
        },
      ],
    }),
  }
</script>
