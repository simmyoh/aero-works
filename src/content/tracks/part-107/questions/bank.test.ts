import { describe,expect,it } from 'vitest';
import { questions } from './bank';

describe('Part 107 question bank',()=>{
  it('contains 120 unique, fully explained, folder-sourced questions',()=>{expect(questions).toHaveLength(120);expect(new Set(questions.map(q=>q.id)).size).toBe(120);for(const q of questions){expect(q.choices).toHaveLength(4);expect(q.choices.some(c=>c.id===q.correctChoiceId)).toBe(true);expect(q.explanation.length).toBeGreaterThan(20);expect(q.references.length).toBeGreaterThan(0);expect(q.references.every(r=>r.includes('supplied')||r.includes('Resources_UAS-Recurrent-Non61.pdf')||r.includes('Learning Center Courses Content'))).toBe(true)}});
});
