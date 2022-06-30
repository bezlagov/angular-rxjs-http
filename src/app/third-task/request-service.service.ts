import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient) {

    }
    //TODO
    get() {
        return this.http.get('api/data');
    }

    post(item) {
        return this.http.post('api/data', { exerciseName: item, attempts: 0,status:"Not started" });
    }

    put(item) {
        return this.http.put(`api/data/${item.id}`, item);
    }

    delete(id) {
        return this.http.delete(`api/data/${id}`);
    }
}