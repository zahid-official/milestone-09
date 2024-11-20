/* eslint-disable react/prop-types */
import { SiDictionarydotcom } from "react-icons/si";
import { RiSpeakFill, RiBook3Fill } from "react-icons/ri";
import { AiFillSound } from "react-icons/ai";
import { Gi3dStairs } from "react-icons/gi";
import { useEffect, useState } from "react";

const Card = ({ card }) => {
  // state for color
  const [color, setColor] = useState("");
  const [btnColor, setBtnColor] = useState("");

  const {
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    when_to_say,
    example,
  } = card;

  //check difficulty
  useEffect(() => {
    if (difficulty === "easy") {
      setColor("bg-[#d3e3f0]");
      setBtnColor("hover:bg-[#76a2c7] hover:text-white hover:border-none");
    } 
    else if (difficulty === "medium") {
      setColor("bg-[#ddd2f5]");
      setBtnColor("hover:bg-[#9e7ddd] hover:text-white hover:border-none");
    } 
    else {
      setColor("bg-[#fad4d3]");
      setBtnColor("hover:bg-[#fd7e7f] hover:text-white hover:border-none");
    }
  }, [difficulty]);

  return (
    <div>
      <div className={`text-xl rounded-xl py-16 px-5 ${color}`}>
        <div className="flex justify-center">
          <img src="" alt="" />
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">{word}</h2>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <SiDictionarydotcom />
              Meaning: {meaning}
            </p>
            <p className="flex items-center gap-2">
              <RiSpeakFill />
              Pronunciation: {pronunciation}
            </p>
            <p className="flex items-center gap-2">
              <RiBook3Fill />
              Part of speech : {part_of_speech}
            </p>
            <p className="flex items-center gap-2">
              <Gi3dStairs />
              Difficulty: {difficulty}
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
            <button className={`btn btn-outline text-xl h-14 sm:px-16 ${btnColor}`}><AiFillSound/> When to Say</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
