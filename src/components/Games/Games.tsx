import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button, { ButtonStatus } from "../../components/Button/Button";
import FlashCard from "../../components/Games/FlashCard";
import Practice, { PracticeType } from "../../components/Games/Practice";
import BoxAnswer, { AnswerType } from "../../components/Games/BoxAnswer";
import { IWord } from "../../types/word.type";
import Review from "./Review";

interface GamesProps {
  words: IWord[];
}
enum GameState {
  START,
  REVIEW,
  END,
}
enum TypeGame {
  FLASH_CARD,
  REVIEW,
  PRACTICE_1,
  PRACTICE_2,
}
export default function Games({ words }: GamesProps) {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState<GameState>(GameState.START);
  const [selected, setSelected] = useState<string>();
  const [boxAnswer, setBoxAnswer] = useState(false);
  const [game, setGame] = useState<TypeGame>(TypeGame.FLASH_CARD);
  const navigate = useNavigate();
  const handleClickFlashCard = () => {
    setState(GameState.END);
  };
  const handleNextGame = () => {
    if (state === GameState.END) {
      setState(GameState.START);
      if (game === TypeGame.PRACTICE_1 || game === TypeGame.PRACTICE_2) {
        if (index === words.length - 1) {
          navigate("/ending");
        } else {
          setIndex(index + 1);
        }
        setGame(TypeGame.FLASH_CARD);
      } else {
        setGame((prev) => {
          if (prev === TypeGame.FLASH_CARD) {
            return TypeGame.REVIEW;
          } else if (prev === TypeGame.REVIEW) {
            const randomNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            if (randomNumber === 1) {
              return TypeGame.PRACTICE_1;
            } else {
              return TypeGame.PRACTICE_2;
            }
          }
          return TypeGame.PRACTICE_1;
        });
      }
      setBoxAnswer(false);
      setSelected(undefined);
    } else if (state === GameState.REVIEW) {
      setBoxAnswer(true);
      setState(GameState.END);
    }
  };
  const handleClickReview = (selected: string) => {
    setSelected(selected);
    setState(GameState.REVIEW);
  };
  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      {game === TypeGame.FLASH_CARD ? (
        <FlashCard word={words[index]} onclick={handleClickFlashCard} />
      ) : game === TypeGame.REVIEW ? (
        <>
          <Review
            word={words[index]}
            onclick={handleClickReview}
            selected={selected}
          />
        </>
      ) : (
        <Practice
          type={
            game === TypeGame.PRACTICE_1
              ? PracticeType.MEANS
              : PracticeType.WORD
          }
          word={words[index]}
          selected={selected}
          onclick={handleClickReview}
        />
      )}

      {/*  */}
      <Button
        content="Continue"
        status={
          state !== GameState.START ? ButtonStatus.NORMAL : ButtonStatus.LOCK
        }
        onClick={handleNextGame}
      />
      {boxAnswer && (
        <BoxAnswer
          type={
            ((game === TypeGame.REVIEW || game === TypeGame.PRACTICE_1) &&
              selected === words[index].content) ||
            (selected === words[index].pinyin && game === TypeGame.PRACTICE_2)
              ? AnswerType.TRUE
              : AnswerType.FALSE
          }
          word={words[index]}
        />
      )}
      {/* */}
    </div>
  );
}
