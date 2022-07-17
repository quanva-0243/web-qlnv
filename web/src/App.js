import { useContext } from "react";
import { TestContext } from "./context/appContext";


function App() {
  const test = useContext(TestContext);

  return (
      <div style={{ padding: 20 }}>
          <button onClick={test.changeValue}>Change</button>
          <div>{test.value}</div>
      </div>
  );
}

export default App;
