export type Difficulty = 'foundational' | 'intermediate' | 'advanced';
export type Question = { id:string; trackId:string; objectiveId:string; prompt:string; choices:{id:string;text:string}[]; correctChoiceId:string; explanation:string; references:string[]; difficulty:Difficulty; tags:string[] };
export type Lesson = { id:string; title:string; summary:string; objectives:string[]; sections:{heading:string;body:string}[]; references:string[] };
export type Track = { id:string; title:string; shortTitle:string; description:string; status:'available'|'planned'; lessons:Lesson[]; questions:Question[] };
