import axios from "axios";
import { IModelBrand } from "../interfaces/ModelAndBrand";

const api = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1",
});

export const getBrands = async (): Promise<IModelBrand[] | any> => {
  try {
    const response = await api.get("carros/marcas");

    return response;
  } catch (err) {
    console.log(err);
  }
};
