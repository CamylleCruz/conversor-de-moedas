import React, {useState} from 'react';
import'./App.css';


const cambio ={
  BRL: 1, // MOEDA BR
  USD: 0.20, //DOLAR AMERICANO
  EUR: 0.18, //EURO
  GBP: 0.16, //LIBRA ESTERLINA
  JPY: 30.25, //IENE JAPONES
}


const Conversao =() => { //variável anônima

  const [quantidadeInicial, setQuantidadeInicial] = useState(0);
  const [quantidadeFinal, setQuantidadeFinal] = useState(0);
  const [conversaoInicial, setConversaoInicial] = useState('BRL');
  const [conversaoFinal, setConversaoFinal] = useState('USD');

  const calculo = () =>{
    const calc = cambio[conversaoInicial] / cambio[conversaoFinal];
    const valorFinal = quantidadeInicial / calc

    setQuantidadeFinal(valorFinal.toFixed (2)); //arredonda os centavos
  };

  return(
    <div className="conversao">

      <h2>Conversor de Moedas</h2>

       <div className="generico">

          <input // o que o cliente digita pra mim
            type= "number"
            value={quantidadeInicial}
            onChange={(e) => setQuantidadeInicial(e.target.value)} //quando os valores vão mudar
            id="valor"
          />

          <select
          value={conversaoInicial}
          onChange={(e) => setConversaoInicial(e.target.value)}> 

          {Object.keys(cambio). map((parametro) => (
            <option key={parametro} value={parametro}>{parametro}</option>
          ))}
          </select>

          para

          <select
          value={conversaoFinal}
          onChange={(e) => setConversaoFinal(e.target.value)}> 

          {Object.keys(cambio). map((parametro) => (
            <option key={parametro} value={parametro}>{parametro}</option>
          ))}
          </select>

        </div>

        <div className="botão">
        <button onClick={calculo}>Converter</button>
        </div>

        <p>{`${quantidadeInicial} ${conversaoInicial} equivale a ${quantidadeFinal}`}</p>

    </div>
  );
};

export default Conversao; 