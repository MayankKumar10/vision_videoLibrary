import {Routes, Route} from "react-router-dom";
import "./App.css";
import {
  Header,
  Filter,
  Playlist,
  SinglePlaylist,
  ProductListing,
  VideoPage,
  Login,
  Signup,
  ForgotPassword,
  LikedList,
  HistoryPage,
  WatchLater,
  ErrorPage,
} from "./components/index";
import Mockman from "mockman-js";
import {RequireAuth} from "./components/UserAuth/Auth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Routes>
        
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="forgot_password"
          element={<ForgotPassword />}
        />
        
        <Route path="/" element={<ProductListing />}/>
        <Route path="/" element={<RequireAuth />}>
          <Route path="/videos/:videoId"element={<VideoPage />}/>
          <Route path="likedlist" element={<LikedList />} />
          <Route path="watchLater" element={<WatchLater />}/>
          <Route path="history_page" element={<HistoryPage />}/>
          <Route path="playlist" element={<Playlist />} />
          <Route path='/playlist/:playlistId' element={<SinglePlaylist />} />
        </Route>

        <Route path="mockAPI" element={<Mockman />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
