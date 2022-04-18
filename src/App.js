import {Routes, Route} from "react-router-dom";
import "./App.css";
import {
  Header,
  Filter,
  Playlist,
  ProductListing,
  VideoPage,
  Login,
  Signup,
  ForgotPassword,
  UserPage,
  LikedList,
  HistoryPage,
  WatchLater,
  ErrorPage,
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
        <Route
          path="/videos/:videoId"
          element={<VideoPage />}
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="forgot_password"
          element={<ForgotPassword />}
        />

        <Route path="likedlist" element={<LikedList />} />
        <Route path="watchLater" element={<WatchLater />} />

        <Route
          path="history_page"
          element={<HistoryPage />}
        />
        <Route
          path="playlist"
          element={
          <Playlist />  
          }
        />
        <Route path="mockAPI" element={<Mockman />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
