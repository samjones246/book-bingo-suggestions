export class Book {
    constructor(
        public title: String,
        public author: String,
        public isbn: String | null = null
    ) {}
}