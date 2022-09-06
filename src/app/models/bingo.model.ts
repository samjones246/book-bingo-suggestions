import { Prompt } from "./prompt.model";

export class Bingo {
    constructor(
        public name: String, 
        public prompts: Prompt[]
    ) { }
}