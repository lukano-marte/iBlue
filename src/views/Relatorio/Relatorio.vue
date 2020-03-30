<template>
    <div>
        <div class="container">
            <v-data-table :items="pesquisas" :headers="header">
            </v-data-table>
        </div>
    </div>
</template>

<script>
var moment = require('moment');
import Pesquisa from '@/services/pesquisas'
    
    export default {
      data() {
        return {
          pesquisas: [],
          moment: moment
        }
      },

    mounted () {
    Pesquisa.relatorio().then(resposta => {
      this.pesquisas = resposta.data;
    })
  },

    computed: {
      header() {
        return [
          {text: 'Item Pesquisado', value: 'nome_pesquisa', align: 'center'},
          {text: 'Data e Hora', value: 'data_pesquisa', align: 'center'}
        ]
      }
    }
}
</script>