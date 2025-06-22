interface ChurchWeeklySchedule {
  title: string;
  description?: string;
  time: string;
}

export const CHURCH_WEEKLY_SCHEDULE: ChurchWeeklySchedule[] = [
  {
    title: "ԿԻՐԱԿՆՕՐՅԱ ԾԱՌԱՅՈՒԹՅՈՒՆ",
    description:
      "«Աստված օրհնեց յոթերորդ օրը և սրբագործեց այն, որովհետև այդ օրը հանգստացավ իր բոլոր գործերից, որ Աստված ստեղծեց ու արեց։»  Ծննդոց 2։ 3",
    time: "Ամեն կիրակի 11:00-13:00",
  },
  {
    title: "Մանկական ծառայություն",
    time: "Ամեն կիրակի 12:00-13:00",
  },
  {
    title: "Պատանիների ծառայություն",
    time: "Ամեն կիրակի 13:00-15:00",
  },
  {
    title: "Երիտասարդների ծառայություն",
    time: "Ամեն հինգշաբթի 18:00-20:00",
  },
];
