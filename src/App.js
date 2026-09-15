import { useState } from 'react';                                    // Uso de aspas simples padrão adotado na indústria e evita uso de barras invertidas
import logo from './assets/logo.png';
import './App.css';

export default function App() {
  const [precoEtanol, setPrecoEtanol] = useState('');                // Boa prática iniciar com String vazia: ('')
  const [precoGasolina, setPrecoGasolina] = useState('');

  function calcular() {
    if (!precoEtanol || !precoGasolina) {                           // Guard Clause
      alert('Preencha o preço do litro do etanol e da gasolina!');  // Componente nativo do JavaScript
      return; 
    }
 
    if (precoEtanol / precoGasolina < 0.7) {                       // Fluxo principal
      alert('É mais vantajoso abastecer com ETANOL!');  
    } else {
      alert('É mais vantajoso abastecer com GASOLINA!');
    }
  }
  
  return (
    <div className='container'>
      <img src={logo} alt='Logo' className='logo'/>

      <h1>Calculadora de Combustível</h1>
 
      <label htmlFor='etanol'>Etanol (preço por litro): </label>
      <input 
        id='etanol' 
        type='number' 
        step='0.01' 
        placeholder='Digite o valor do Etanol' 
        value={precoEtanol} 
        onChange={(e) => setPrecoEtanol(e.target.value)}
      />

      <label htmlFor='gasolina'>Gasolina (preço por litro):</label>
      <input
        id='gasolina'
        type='number'
        step='0.01'
        placeholder='Digite o valor da Gasolina'
        value={precoGasolina}
        onChange={(e) => setPrecoGasolina(e.target.value)}
      />
      
      <button onClick={calcular}>Calcular</button>
    </div>
  );
}
