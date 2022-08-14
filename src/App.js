import "./App.css";
import MainRouter from "./routes/MainRouter";
import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Suspense>
        <MainRouter />;
      </Suspense>
    </Provider>
  );
}
export default App;
