import "./LessonCard.css"

const LessonCard = (props) => {

  const {image, name, hour} = props;

  return (
    <div className="card">
    <img src={image} alt="cardimg"/>
    <div className="lessons">
    <p className="lesName">Lesson Name :{name}</p>
    <p className="lesHour">Lesson Hour :{hour}</p>
    </div>
    </div>
      
      
  )
}

export default LessonCard