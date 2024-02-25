import { useDispatch } from 'react-redux'
import { incrementar } from "../features/contadorSlice";

export const Boton = () => {

  const dispatch = useDispatch();

  const aumentarCuenta = () => {
    dispatch(incrementar());
  };

  return (
    <div>
      <input type="button" value="Incrementar" onClick={aumentarCuenta} />

    </div>
  )
}
