import { ILesson } from "./lesson.type";

export interface ICourse {
  title: string;
  code: string;
  slug: string;
  lessons: ILesson[];
}
