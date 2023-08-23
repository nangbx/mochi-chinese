import { IWord } from "./word.type";

export interface ILesson {
  stt: number;
  course: string;
  code: string;
  sort: number;
  title: string;
  description: string;
  lesson_status: string;
  words: IWord[];
}
