import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router";
import Home from "./pages/home/Home";
import App from "./App";
import Church from "./pages/church/Church";
import Contacts from "./pages/contacts/Contacts";
import VideosGridView from "./pages/video/VideosGridView";
import VideoStream from "./pages/video/VideoStream";
import ServicesList from "./pages/churchServices/ChurchServices";
import NotFoundPage from "./pages/exceptions/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/church" element={<Church />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/videos">
            <Route index element={<VideosGridView />} />
            <Route path="id/:id" element={<VideoStream />} />
            <Route path="*" element={<Navigate to={"/videos"} replace />} />
          </Route>
          <Route path="/services" element={<ServicesList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
