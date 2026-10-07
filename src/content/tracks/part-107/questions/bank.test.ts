import { describe,expect,it } from 'vitest';
import { questions } from './bank';

describe('Part 107 question bank',()=>{
  it('contains 60 unique, fully explained questions',()=>{expect(questions).toHaveLength(60);expect(new Set(questions.map(q=>q.id)).size).toBe(60);for(const q of questions){expect(q.choices).toHaveLength(4);expect(q.choices.some(c=>c.id===q.correctChoiceId)).toBe(true);expect(q.explanation.length).toBeGreaterThan(20);expect(q.references.length).toBeGreaterThan(0)}});
});
