export class Album implements AlbumData {
    id: number = 0;
    title: string = '';

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }

}

export interface AlbumData{
    id: number;
    title: string;
}