<template>
  <v-container
    id="donasi"
    fluid
    tag="section"
  >

    <v-row>
      <v-col
        cols="4"
        md="4"
      >
        <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-img
            class="black--text align-end"
            height="200px"
            src="https://static.republika.co.id/uploads/images/inpicture_slide/logo-aksi-cepat-tanggap-act-_191123203953-177.png"
            >
            <v-card-title></v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"><small>10 April 2020</small></v-card-subtitle>

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
        cols="4"
        md="4"
      >
        <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-img
            class="black--text align-end"
            height="200px"
            src="https://1.bp.blogspot.com/-s-DzcHwODzc/XOx-_FqJUhI/AAAAAAAASQo/Y2JFgglG3WwzLan-Hrk8OAe3FWFeSZJJQCLcBGAs/s1600/Dompet%2BDhuafa.png"
            >
            <v-card-title></v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"><small>10 April 2020</small></v-card-subtitle>

            <v-card-text class="text--primary">
            <div><b>Dompet Dhuafa</b></div>
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
        cols="4"
        md="4"
      >
        <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-img
            class="black--text align-end"
            height="200px"
            src="https://1.bp.blogspot.com/-j-WXQs5jhMo/XOx-0RiLPXI/AAAAAAAASQg/xzrplS9Jyegtc97Oz2DPw3x79-WoDaJQwCLcBGAs/w1200-h630-p-k-no-nu/Rumah%2BZakat.png"
            >
            <v-card-title></v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"><small>10 April 2020</small></v-card-subtitle>

            <v-card-text class="text--primary">
            <div><b>Rumah Zakat</b></div>
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
        cols="4"
        md="4"
      >
        <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-img
            class="black--text align-end"
            height="200px"
            src="https://stamps.umich.edu/images/uploads/exhibitions/spaceavailable.jpg"
            >
            <v-card-title></v-card-title>
            </v-img>

            <v-card-text class="text--primary">
            <div><b>Iklan Donasi</b></div>
            </v-card-text>

            <v-card-actions>
            <v-btn
                color="green"
                default
                class="v-btn--block"
                @click="act = true"
            >
                Detail
            </v-btn>
            </v-card-actions>
        </v-card>
      </v-col>

    </v-row>

    <v-dialog
      v-model="act"
      max-width="500"
    >
      <v-card class="text-center">
        <v-card-title>
          Dialog Title

          <v-spacer />

          <v-icon
            aria-label="Close"
            @click="act = false"
          >
            mdi-close
          </v-icon>
        </v-card-title>

        <v-card-text>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            color="error"
            text
            @click="act = false"
          >
            Close
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
