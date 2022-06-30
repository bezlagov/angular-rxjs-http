import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Database implements InMemoryDbService {

    constructor() {

    }
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        let data = [
            {id:1, exerciseName:"Run", attempts:10, status:"Done"},
            {id:2, exerciseName:"Squats", attempts:15, status:"In Progress"},
            {id:3, exerciseName:"Lunges", attempts:1, status:"Done"},
            {id:4, exerciseName:"Push-ups", attempts:6, status:"Done"},
            {id:5, exerciseName:"Bent-over", attempts:11, status:"Failed"},
        ];

        return { data };
    }
    //TODO
    getData() {

    }
}  