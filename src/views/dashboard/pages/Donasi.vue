<template>
  <v-container
    id="donasi"
    fluid
    tag="section"
  >

    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-img
            class="white--text align-end"
            height="200px"
            src=" "
            >
            <v-card-title>Aksi Cepat Tanggap</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">10 April 2020</v-card-subtitle>

            <v-card-text class="text--primary">
            <div>Whitsunday Island, Whitsunday Islands</div>
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
