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
              :items="desserts"
              :search="search"
            />
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    //
  }
</script>
