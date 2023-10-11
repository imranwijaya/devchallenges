"use client";
import type { NextPage } from "next";
import type {
  Question,
  ApiSuccessResponseBody,
} from "../types/api-response-body";
import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ContextProps = {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  questions: Question[];
  start: boolean;
  stop: boolean;
  number: number;
  selectedAnswer: string;
  isAnswerSelected: boolean;
  isAnswerCorrect: boolean;
  score: number;
  currentQuestion: Question | null;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  setIsError: Dispatch<SetStateAction<boolean>>;
  setQuestions: Dispatch<SetStateAction<Question[]>>;
  setStart: Dispatch<SetStateAction<boolean>>;
  setStop: Dispatch<SetStateAction<boolean>>;
  setNumber: Dispatch<SetStateAction<number>>;
  setSelectedAnswer: Dispatch<SetStateAction<string>>;
  setIsAnswerSelected: Dispatch<SetStateAction<boolean>>;
  setIsAnswerCorrect: Dispatch<SetStateAction<boolean>>;
  setScore: Dispatch<SetStateAction<number>>;
  setCurrentQuestion: Dispatch<SetStateAction<Question | null>>;
  handleStart: () => void;
  handleAnswer: (answer: string) => void;
  handleNextQuestion: () => void;
  handleResult: () => void;
  reset: () => void;
};

export const QuestionContext = createContext<ContextProps>({
  isLoading: true,
  isSuccess: false,
  isError: false,
  questions: [],
  start: false,
  stop: false,
  number: 0,
  selectedAnswer: "",
  isAnswerCorrect: false,
  isAnswerSelected: false,
  score: 0,
  currentQuestion: null,
  setIsLoading: () => {},
  setIsSuccess: () => {},
  setIsError: () => {},
  setQuestions: () => {},
  setStart: () => {},
  setStop: () => {},
  setNumber: () => {},
  setSelectedAnswer: () => {},
  setIsAnswerSelected: () => {},
  setIsAnswerCorrect: () => {},
  setScore: () => {},
  setCurrentQuestion: () => {},
  handleStart: () => {},
  handleAnswer: () => {},
  handleNextQuestion: () => {},
  handleResult: () => {},
  reset: () => {},
});

type ProviderProps = {
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  questions?: Question[];
  start?: boolean;
  stop?: boolean;
  number?: number;
  selectedAnswer?: string;
  isAnswerSelected?: boolean;
  isAnswerCorrect?: boolean;
  score?: number;
  currentQuestion?: Question | null;
  children: React.ReactNode;
};

export const QuestionProvider: NextPage<ProviderProps> = ({
  isLoading = true,
  isSuccess = false,
  isError = false,
  questions = [],
  start = false,
  stop = false,
  number = 0,
  selectedAnswer = "",
  isAnswerSelected = false,
  isAnswerCorrect = false,
  score = 0,
  currentQuestion = null,
  children,
}) => {
  // Fetching data state
  const [_isLoading, setIsLoading] = useState(isLoading);
  const [_isSuccess, setIsSuccess] = useState(isSuccess);
  const [_isError, setIsError] = useState(isError);

  const [_questions, setQuestions] = useState<Question[]>(questions);
  const [_start, setStart] = useState(start);
  const [_stop, setStop] = useState(stop);
  const [_number, setNumber] = useState(number);
  const [_selectedAnswer, setSelectedAnswer] = useState(selectedAnswer);
  const [_isAnswerSelected, setIsAnswerSelected] = useState(isAnswerSelected);
  const [_isAnswerCorrect, setIsAnswerCorrect] = useState(isAnswerCorrect);
  const [_score, setScore] = useState(score);
  const [_currentQuestion, setCurrentQuestion] = useState<Question | null>(
    currentQuestion,
  );

  const fetchQuestions = useCallback(async () => {
    setIsSuccess(false);
    setIsError(false);
    setIsLoading(true);

    const res = await fetch(
      "/legacy/front-end-developer/country-quiz/api/questions",
      { method: "GET" },
    );
    setIsLoading(false);

    if (res.ok) {
      const resJson: ApiSuccessResponseBody = await res.json();

      setIsSuccess(true);
      setQuestions(resJson.data);
    } else {
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Start quiz
  const handleStart = useCallback(() => {
    setStart(true);
    setCurrentQuestion(_questions[_number]);
  }, [_questions, _number]);

  const handleAnswer = useCallback(
    (answer: string) => {
      setIsAnswerSelected(true);
      setSelectedAnswer(answer);

      if (answer === _currentQuestion?.answer) {
        setIsAnswerCorrect(true);
        setScore((prev) => prev + 1);
        setNumber((prev) => prev + 1);
      } else {
        setIsAnswerCorrect(false);
      }
    },
    [_currentQuestion],
  );

  const handleNextQuestion = useCallback(() => {
    setIsAnswerSelected(false);
    setSelectedAnswer("");
    setIsAnswerCorrect(false);
    setCurrentQuestion(_questions[_number]);
  }, [_questions, _number]);

  const handleResult = useCallback(() => {
    setIsAnswerSelected(false);
    setSelectedAnswer("");
    setIsAnswerCorrect(false);
    setCurrentQuestion(null);
    setStop(true);
  }, []);

  const reset = useCallback(async () => {
    setQuestions(questions);
    setStart(start);
    setStop(stop);
    setNumber(number);
    setSelectedAnswer("");
    setIsAnswerSelected(false);
    setIsAnswerCorrect(false);
    setScore(score);
    setCurrentQuestion(currentQuestion);

    await fetchQuestions();
  }, []);

  const value = useMemo(
    () => ({
      isLoading: _isLoading,
      isSuccess: _isSuccess,
      isError: _isError,
      questions: _questions,
      start: _start,
      stop: _stop,
      number: _number,
      selectedAnswer: _selectedAnswer,
      isAnswerSelected: _isAnswerSelected,
      isAnswerCorrect: _isAnswerCorrect,
      score: _score,
      currentQuestion: _currentQuestion,
      setIsLoading,
      setIsSuccess,
      setIsError,
      setQuestions,
      setStart,
      setStop,
      setNumber,
      setSelectedAnswer,
      setIsAnswerSelected,
      setIsAnswerCorrect,
      setScore,
      setCurrentQuestion,
      handleStart,
      handleAnswer,
      handleNextQuestion,
      handleResult,
      reset,
    }),
    [
      _isLoading,
      _isSuccess,
      _isError,
      _questions,
      _start,
      _number,
      _selectedAnswer,
      _isAnswerSelected,
      _isAnswerCorrect,
      _score,
      _currentQuestion,
      handleStart,
      handleAnswer,
      handleNextQuestion,
      handleResult,
      reset,
    ],
  );

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};
