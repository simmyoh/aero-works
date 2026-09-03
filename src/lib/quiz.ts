import type { Question } from '../types/content';
export const scoreQuiz = (questions:Question[], answers:Record<string,string>) => ({correct:questions.filter(q=>answers[q.id]===q.correctChoiceId).length,total:questions.length,percent:questions.length?Math.round(100*questions.filter(q=>answers[q.id]===q.correctChoiceId).length/questions.length):0});
export const selectExamQuestions = (questions:Question[], count:number, random=Math.random) => [...questions].sort(()=>random()-.5).slice(0,Math.max(0,count));
