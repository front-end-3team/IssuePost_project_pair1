import Header from "./components/Layout/Header/Header";
import ListPage from "./pages/ListPage/ListPage";
import { store } from "./store/store";
import { Provider } from "react-redux";

import { createContext, useState } from "react";

export const pageNumber = createContext();
function App() {
  const [postsPerPage, setPostsPerPage] = useState(10);
  return (
    <>
      <Provider store={store}>
        <pageNumber.Provider value={{ postsPerPage, setPostsPerPage }}>
          <Header />
          <ListPage />
        </pageNumber.Provider>
      </Provider>
    </>
  );
}

export default App;
