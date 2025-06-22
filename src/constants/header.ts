import { NavigationOption } from "../components/header/interfaces";
import {
  CHURCH_PAGE,
  CONTACTS_PAGE,
  MINISTERIES_PAGE,
  ROOT_PAGE,
  VIDEOS_ROOT_PAGE,
} from "./pages";

export const ROOT_PAGE_OPTIONS: NavigationOption = {
  link: ROOT_PAGE,
  label: "Սկիզբ",
  id: 1,
};

export const HEADER_MENU_OPTIONS: NavigationOption[] = [
  {
    link: CHURCH_PAGE,
    label: "Եկեղեցի",
    id: 2,
  },
  {
    link: MINISTERIES_PAGE,
    label: "Ծառայություններ",
    id: 3,
  },
  {
    link: VIDEOS_ROOT_PAGE,
    label: "Տեսանյութեր",
    id: 4,
  },
  {
    link: CONTACTS_PAGE,
    label: "Կապ մեզ հետ",
    id: 5,
  },
];
