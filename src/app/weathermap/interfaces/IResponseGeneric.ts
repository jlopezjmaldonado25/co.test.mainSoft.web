export interface IResponseGeneric<T> {
  data?:      T;
  exito?:     boolean;
  codigo?:    string;
  mensaje?:   string;
  error?:     null;
}
