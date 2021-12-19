import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Component/Buttons/Buttons.css";
import { initWeb3 } from "./Features/web3/web3.actions";
import Routers from "./Routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initWeb3());
  }, [dispatch]);

  return <Routers />;
}

export default App;
