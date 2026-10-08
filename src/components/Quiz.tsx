import { useMemo, useState } from 'react';
import type { Question } from '../types/content';
import { scoreQuiz, selectExamQuestions } from '../lib/quiz';

export function Quiz({ questions }: { questions: Question[] }) {
  const sizes = [10, 25, 60, questions.length];
  const [size, setSize] = useState(10);
  const [seed, setSeed] = useState(0);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const exam = useMemo(() => {
    void seed;
    return selectExamQuestions(questions, Math.min(size, questions.length));
  }, [questions, size, seed]);
  const current = exam[index];
  const result = scoreQuiz(exam, answers);

  const restart = (next = size) => {
    setSize(next);
    setSeed((value) => value + 1);
    setIndex(0);
    setAnswers({});
    setChecked({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className="quiz" aria-labelledby="quiz-title">
        <div className="results">
          <span className="eyebrow">Practice complete</span>
          <strong>{result.percent}%</strong>
          <h2 id="quiz-title">{result.correct} of {result.total} correct</h2>
          <p>{result.percent >= 80 ? 'Strong result. Try another randomized set to reinforce it.' : 'Use another randomized set to focus your next study pass.'}</p>
          <button onClick={() => restart()}>New randomized set</button>
        </div>
      </section>
    );
  }

  const selectedAnswer = answers[current.id];
  const hasChecked = Boolean(checked[current.id]);
  const isCorrect = selectedAnswer === current.correctChoiceId;

  return (
    <section className="quiz" aria-labelledby="quiz-title">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Randomized practice</span>
          <h2 id="quiz-title">Part 107 quiz bank</h2>
        </div>
        <span className="counter">{questions.length} original questions</span>
      </div>
      <div className="quiz-toolbar" aria-label="Quiz length">
        {sizes.map((length) => (
          <button key={length} className={size === length ? 'chip active' : 'chip'} onClick={() => restart(length)}>
            {length === questions.length ? 'Full bank' : length === 60 ? '60-question simulation' : `${length} questions`}
          </button>
        ))}
      </div>
      <div className="quiz-progress"><span style={{ width: `${((index + 1) / exam.length) * 100}%` }} /></div>
      <div className="question-card">
        <div className="question-meta">
          <span>Question {index + 1} / {exam.length}</span>
          <span>{current.tags[0].replaceAll('-', ' ')}</span>
        </div>
        <fieldset>
          <legend>{current.prompt}</legend>
          {current.choices.map((choice) => {
            const selected = selectedAnswer === choice.id;
            const className = hasChecked
              ? choice.id === current.correctChoiceId
                ? 'choice-correct'
                : selected
                  ? 'choice-incorrect'
                  : ''
              : selected
                ? 'selected'
                : '';
            return (
              <label key={choice.id} className={className}>
                <input
                  type="radio"
                  name={current.id}
                  value={choice.id}
                  checked={selected}
                  disabled={hasChecked}
                  onChange={() => setAnswers((all) => ({ ...all, [current.id]: choice.id }))}
                />
                <span className="choice-letter">{choice.id.toUpperCase()}</span>
                {choice.text}
                {hasChecked && choice.id === current.correctChoiceId && <span className="choice-result">Correct</span>}
                {hasChecked && selected && !isCorrect && <span className="choice-result">Your answer</span>}
              </label>
            );
          })}
        </fieldset>
        {hasChecked && (
          <div className={isCorrect ? 'answer-feedback correct-feedback' : 'answer-feedback incorrect-feedback'} role="status">
            <strong>{isCorrect ? 'Correct.' : 'Not quite.'}</strong>
            <p>{current.explanation}</p>
            <small>{current.references.join(' · ')}</small>
          </div>
        )}
        <div className="quiz-nav">
          <button className="secondary" onClick={() => setIndex((value) => value - 1)} disabled={index === 0}>Previous</button>
          <button
            className="secondary check-answer"
            onClick={() => setChecked((all) => ({ ...all, [current.id]: true }))}
            disabled={!selectedAnswer || hasChecked}
          >
            {hasChecked ? 'Answer checked' : 'Check answer'}
          </button>
          {index < exam.length - 1 ? (
            <button onClick={() => setIndex((value) => value + 1)} disabled={!selectedAnswer}>Next question</button>
          ) : (
            <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length !== exam.length}>Grade quiz</button>
          )}
        </div>
      </div>
    </section>
  );
}
