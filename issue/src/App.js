import Header from "./components/Layout/Header/Header";
import ListPage from "./pages/ListPage/ListPage";
import { store } from "./store/store";
import { Provider } from "react-redux";

import PageNation from "./pages/PageNation/PageNation";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <PageNation />
        {/* <ListPage /> */}
      </Provider>
    </>
  );
}

export default App;
