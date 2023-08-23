import { AxiosResponse } from "axios";
import { ICourse } from "../types/course.type";
import api from "../http";

export default class LessonService {
  static async getInfo(): Promise<
    AxiosResponse<{ pageProps: { courseData: ICourse } }>
  > {
    return api.get<{ pageProps: { courseData: ICourse } }>("");
  }
}
