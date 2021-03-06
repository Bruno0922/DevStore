import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030/'
})

export default class Api {
    async listar() {
        let r = await api.get('/produto');
        return r.data;
    }

    async inserir(nproduto, categoria, preco_de, preco_por, avaliacao, dsproduto, estoque, imgproduto, ativo, inclusao) {
        let r = await api.post('/produto', {nproduto, categoria, preco_de, preco_por, avaliacao, dsproduto, estoque, imgproduto, ativo, inclusao});
        return r.data;
    }

    async alterar(id, nproduto, categoria, preco_de, preco_por, avaliacao, dsproduto, estoque, imgproduto, ativo, inclusao) {
        let r = await api.put('/produto/' + id, {nproduto, categoria, preco_de, preco_por, avaliacao, dsproduto, estoque, imgproduto, ativo, inclusao});
        return r.data;
    }

    async remover(id) {
        let r = await api.delete('/produto/' + id);
        return r.data;
    }
}