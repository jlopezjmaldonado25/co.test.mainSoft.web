import { IResponseGeneric } from "./IResponseGeneric";

export interface IResponseHistory extends IResponseGeneric<ResponseHistory[]> {}

export interface ResponseHistory {
  id?:              number;
  city?:            string;
  history_weather?: string;
  created_at?:      Date;
  updated_at?:      Date;
}
