import { ResourceRepository } from "../domain/resource-repository"
import axios from 'axios';

export class AxiosResourceRepository extends ResourceRepository {

    constructor(basePath) {
        this.basePath = basePath;
    }

    async findAll (){
        //si completo la logica que no hizo el padre!!
        const response = axios.get(this.basePath);

        return response.data;
    }
}