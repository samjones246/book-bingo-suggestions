import { Book } from "./book.model";

export class Prompt {
    constructor(
        public description: String,
        public suggestions: Book[]
    ) {}
}