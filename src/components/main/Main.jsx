
import LessonCard from "../LessonCard/LessonCard"
import "./Main.css"
import {data} from "../../data"


const Main = () => {
  return (
    <div className="main">
      {data.map((item) => (
      <LessonCard {...item} />
      ))}
      

    </div>
      
    
  )
}

export default Main
