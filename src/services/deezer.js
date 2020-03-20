import { http } from './config'

export default {

    listar: (find, pag) => {
        return http.get('?q=' + find + '&index=' + pag)
            
    },

    buscar: (busca) => {
        return http.get('' + busca)
    }

}