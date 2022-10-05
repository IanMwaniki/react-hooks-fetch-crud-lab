import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questions, setPage] = useState([]);
  useEffect (()=> {
     fetch ("http://localhost:4000/questions")
    .then ((res)=> res.json())
    .then (questions => { setPage(questions)
      // console.log(questions)
    })
  },[])
  let items =  questions.map((que)=>(
     
       <QuestionItem 
       key={que.id}
       question={que}
       onDelete={handleDelete}
       />
   ) )
   
   function handleDelete (id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => {
      const updatedQuestions = questions.filter((q) => q.id !== id);
      setPage(updatedQuestions);
    })
  }
 
 
  return (
    <div>
      <section>
      <h1>Quiz Questions</h1>
      <ul>
      <ul>
        {items}
      </ul>
    </ul>
    </section>
    </div>
   
  );
}

export default QuestionList;
