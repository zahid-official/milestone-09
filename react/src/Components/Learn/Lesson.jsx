import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import PageTitle from "./PageTitle";

const Lesson = () => {
  // loader Data for Lesson page
  const data = useLoaderData();

  const { id } = useParams();
  //state for lesson
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    const filtered = [...data].filter(
      (item) => item.lesson_no === parseInt(id)
    );
    setLesson(filtered);
  }, [data, id]);
  
  return (
    <>
      <PageTitle
        pageTitle={`We're Starting Lesson: ${id}`}
        text={"Read each word with care and perfect it through Practice."}
      ></PageTitle>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 w-11/12 mx-auto px-4 py-28">
        {lesson.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </>
  );
};

export default Lesson;
