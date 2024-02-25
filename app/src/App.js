import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Contador } from './components/Contador';
import { Boton } from './components/Boton';

function App() {
  return (
    <Provider store={store}>
      <Contador/>
      <Boton/>

      <p>hola</p>
    </Provider>
    )
}

export default App;
