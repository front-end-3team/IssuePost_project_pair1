import Header from "./components/Layout/Header/Header";
import ListPage from "./pages/ListPage/ListPage";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <ListPage />
      </Provider>
    </>
  );
}

export default App;
