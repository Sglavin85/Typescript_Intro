export interface Person {
    name: string,
    age?: number
}

enum Type {
    Video,
    BlogPost,
    Quiz
}

export default Type;

export enum Type2 {
    Video = "VIDEO",
    BlogPost = "BLOG_POST",
    Quiz = "QUIZ"
}