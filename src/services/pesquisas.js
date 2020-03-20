import { http } from './api'

export default {
    relatorio: () => {
        return http.get('pesquisas')
    },

    salvar:(pesquisa) => {
        return http.post('http://localhost:8080/api/pesquisas', pesquisa)  
    },

    procurar:(salvar) => {
        return http.get('pesquisa', salvar)
    }

}