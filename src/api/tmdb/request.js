import createCustomAxios from "../../hoc/createCustomAxios/createCustomAxios";
import { domain } from "./base";
const request = createCustomAxios(domain);

export default request;
