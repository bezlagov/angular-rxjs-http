import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Album } from "./album";

@Injectable({
    providedIn: 'root'
})

export class TestService {

    constructor(private http: HttpClient) {

    }
    //TODO
    getData() {
        return this.http.get('https://jsonplaceholder.typicode.com/albums').pipe(
            map(item => {
                let album: Album[] = [];
                for (const key in item) {
                    if (Object.prototype.hasOwnProperty.call(item, key)) {
                        const element = item[key];
                        album.push(new Album(element.id, element.title))
                    }
                }
                return album;
            }));
    }
}