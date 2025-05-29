import {
  CHURCH_PAGE,
  CONTACTS_PAGE,
  ROOT_PAGE,
  SERVICES_PAGE,
  VIDEOS_ROOT_PAGE,
} from "./pages";

export const ROOT_PAGE_OPTIONS = {
  link: ROOT_PAGE,
  label: "Սկիզբ",
  id: 1,
};

export const HEADER_MENU_OPTIONS = [
  {
    link: CHURCH_PAGE,
    label: "Եկեղեցի",
    id: 2,
  },
  {
    link: SERVICES_PAGE,
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
