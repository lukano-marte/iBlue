<template>
    <div>
        <div class="container">

          <div class="img-logo">
          <img width="650" src="./../assets/deezer.png">
          </div>

          <h3>Busque a sua música</h3>


              <form @submit.prevent="buscar">
                  <input type="text" placeholder="Ex: Pearl Jam" v-model="busca.nome">
                  <button class="waves-effect waves-light btn-small btn-busca right " style="bottom: 50px"><i class="material-icons">done</i></button>
              </form>

          <div class="container">
            <v-data-table 
                :items="deezer" 
                :headers="header" 
                :sort-desc="[false, true]"
                no-data-text=""
                hide-default-footer 
                items-per-page="25">
                <template #item.artist="{ item }">
                    <a target="_blank" v-bind:href="item.artist.link" style="color: inherit">{{ item.artist.name }}</a>
                </template>

                <template #item.title="{ item }">
                    <a target="_blank" v-bind:href="item.link" style="color: inherit">{{ item.title }}</a>
                  </template>;
                  
                <template #item.duration="{ item }">
                    {{ moment.utc(item.duration*1000).format('mm:ss') }}  
                </template>

                <template #item.preview="{ item }">
                  <td class="center">
                    <a :href="''+ item.link " target="_blank">
                      <button class="waves-effect btn-small btn-play">
                        <i class="material-icons">headset</i> 
                      </button>
                    </a>
                  </td>
               </template>
                
            </v-data-table>
          </div>
        </div>
   
            <ul class="pagination paginacao">
              <li class="waves-effect"><a @click="anterior"><i class="material-icons btn-arrow">chevron_left</i></a></li>
          
              <li class="waves-effect"><a @click="proxima"><i class="material-icons btn-arrow">chevron_right</i></a></li>
            </ul> 
    </div>
</template>

<script>
  import Deezer from './../services/deezer'
  import Pesquisas from './../services/pesquisas'
  
  var moment = require('moment');

  export default {
    data(){
      return { 
        busca: {nome:'', data_atual: new Date()},
        deezer: [],
        next: 0,
        moment: moment,
        pag: 1,
        vazio: false,
        total: [],
        pesquisa: {
          nome: ''
        }
      }
    },

    computed: {
      header() {
        return [
          {text: 'Artista', sortable: false, value: 'artist', align: 'center'},
          {text: 'Música', sortable: false, value: 'title', align: 'center'},
          {text: 'Álbum', sortable: true, value: 'album.title', align: 'center'},
          {text: 'Rank', sortable: true, value: 'rank', align: 'center'},
          {text: 'Duração', sortable: false, value: 'duration', align: 'center'},
          {text: 'Link', sortable: false, value: 'preview', align: 'center'}
        ]
      }
    },

    methods: {

      listar() {
        Deezer.listar(this.busca.nome, this.next).then(resposta => {
          this.deezer = resposta.data.data
          this.total = resposta.data.total
          this.pesquisa.nome = this.busca.nome;
        }).catch(e => e)

      },

      buscar(){
        Deezer.buscar(this.buscar).then( () => {
          this.next = 0
          this.pag = 1
          this.salvar()
          this.listar()
          this.vazio = true
        }).catch(e => e)
      },

      salvar(){
        Pesquisas.salvar(this.busca).then( () => {
        }).catch(e => e)
      },

      proxima(){
        if(this.busca.nome !== '' && this.next <= (this.total  - 24)){
          this.next += 25
          this.listar()
          this.somar()
        }
      },

      anterior(){
        if(this.next > 0){
          this.next -= 25
          this.listar()
          this.subtrair()
        }
      },

      somar(){
        this.pag++
      },

      subtrair(){
        this.pag--
      }
    }
  }
</script>

<style>
h3 {
  text-align: center;
  color: #343136;
}

form {
  margin-bottom: 30px;
}

.btn-play, .btn-busca {
  background-color: #FB8518;
  color: #fff;
}

.btn-play {
  text-align: center;
  
}

.btn-play:hover, .btn-busca:hover {
  background-color: #8518fb;
  color: #fff;
  transition: all .35s ease-in-out;
}

.img-logo {
  margin-top: 30px;
  margin-bottom: 30px;
}

.img-logo img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}

input{
  font-family: 'Montserrat', sans-serif;
}

input:focus {
  border-bottom: 1px solid #8518fb !important;
  box-shadow: 0 1px 0 0 #8518fb;
 }

input::placeholder {
  color: silver;
  font-style: italic;
  font-size: 1.2em;
  font-weight: lighter;
  text-align: center;
}


.btn-arrow {
  background-color: #FB8518;
  color: #fff;
  border-radius: 5px;
  }

.btn-arrow:hover {
  background-color: #8518fb;
  color: #fff;
  transition: all .35s ease-in-out;
}

.paginacao {
  display: block;
  margin: 30px auto;
  text-align: center;
}
</style>