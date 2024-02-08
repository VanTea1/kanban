import { Column } from "./columns.model";

export class Board{
    constructor(public name: string, public columns: Column[]){

    }
}