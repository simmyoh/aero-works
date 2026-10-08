import { describe,expect,it } from 'vitest';
import { questions } from './bank';
import { studyGuide } from '../lessons/study-guide';

describe('Part 107 question bank',()=>{
  it('contains 180 unique, fully explained, folder-sourced questions',()=>{expect(questions).toHaveLength(180);expect(new Set(questions.map(q=>q.id)).size).toBe(180);for(const q of questions){expect(q.choices).toHaveLength(4);expect(q.choices.some(c=>c.id===q.correctChoiceId)).toBe(true);expect(q.explanation.length).toBeGreaterThan(20);expect(q.references.length).toBeGreaterThan(0);expect(q.references.every(r=>r.includes('supplied')||r.includes('Resources_UAS-Recurrent-Non61.pdf')||r.includes('Learning Center Courses Content'))).toBe(true)}});

  it('does not repeat the same prompt',()=>{
    const prompts=questions.map(q=>q.prompt.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim());
    expect(new Set(prompts).size).toBe(prompts.length);
  });

  it('teaches the concepts required by the audited question bank',()=>{
    const guide=studyGuide.flatMap(lesson=>lesson.sections.map(section=>`${section.heading} ${section.body}`)).join(' ').toLowerCase();
    const requiredConcepts=['hazardous material','undue hazard','asos','awos','weather charts','microburst','icing','hyperventilation','warning areas','controlled firing area','radio-frequency interference','who may maintain','more than $500','standard remote id','broadcast module','declaration of compliance','ads-b out','sida','precipitation static'];
    for(const concept of requiredConcepts)expect(guide).toContain(concept);
  });
});
