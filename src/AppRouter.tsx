import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import App from "./App";
import Church from "./pages/church/Church";
import Contacts from "./pages/contacts/Contacts";
import VideosGridView from "./pages/video/VideosGridView";
import VideoStream from "./pages/video/VideoStream";
import ServicesList from "./pages/churchMinistries/ChurchMinistries";
import NotFoundPage from "./pages/exceptions/NotFoundPage";
import {
  CHURCH_PAGE,
  CONTACTS_PAGE,
  MINISTERIES_PAGE,
  ROOT_PAGE,
  VIDEOS_ROOT_PAGE,
} from "./constants/pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT_PAGE} element={<App />}>
          <Route index element={<Home />} />
          <Route path={CHURCH_PAGE} element={<Church />} />
          <Route path={CONTACTS_PAGE} element={<Contacts />} />
          <Route path={VIDEOS_ROOT_PAGE}>
            <Route index element={<VideosGridView />} />
            <Route path="id/:id" element={<VideoStream />} />
            <Route path="*" element={<Navigate to={"/videos"} replace />} />
          </Route>
          <Route path={MINISTERIES_PAGE} element={<ServicesList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
