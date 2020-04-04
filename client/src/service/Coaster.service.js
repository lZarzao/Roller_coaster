import axios from "axios";

export default class Services {
  constructor() {
    this._service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/coasters`,
      withCredentials: true, // RUTAS PERSISTENTES
    });
  }

  getAllCoasters = () => this._service.get("/getAllCoasters");
  getOneCoaster = (id) => this._service.get(`/${id}`);
  postCoaster = (coaster) => this._service.post("/new", coaster);
  putCoaster = (id, coaster) => this._service.post(`/edit/${id}`, coaster);
  deleteCoaster = (id) => this._service.get(`/delete/${id}`);
}
