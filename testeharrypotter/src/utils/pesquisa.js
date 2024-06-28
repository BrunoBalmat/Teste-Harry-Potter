import axios from 'axios'
const Pesquisar = (setDados) => {
    axios.get(`https://hp-api.herokuapp.com/api/characters`)
      .then(function (response) {
        setDados(response.data);
      })
      .catch(function (error) {
        console.error("Erro ao buscar personagem", error);
        alert("Personagem não encontrado")
      });
  }
  

  export default Pesquisar