import {Routes, Route} from "react-router-dom";
import "./App.css";
import {
  Header,
  Filter,
  Cart,
  ProductListing,
  VideoPage,
  Login,
  Signup,
  ForgotPassword,
  UserPage,
  LikedList,
  NotFound,
  HistoryPage,
} from "./components/index";
import Mockman from "mockman-js";
import {FilterProvider} from "./context/FilterProvider";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Routes>
        <Route
          path="/"
          element={
            <FilterProvider>
              <ProductListing />
            </FilterProvider>
          }
        />
        <Route path="/:videoId" element={<VideoPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="forgot_password"
          element={<ForgotPassword />}
        />

        <Route path="Likedlist" element={<LikedList />} />
        <Route path="user-page" element={<UserPage />} />
        <Route
          path="history_page"
          element={<HistoryPage />}
        />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="mockAPI" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
