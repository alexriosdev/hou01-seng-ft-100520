import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {

  const { img, likes } = props.image

  return (
    <div className="card">

      <img src={ img } alt={''}/>

      <span className="likes">
        { likes } likes
      </span>

      <div className="buttons-list">

        <button className={"like"}>
          ♥️
        </button>

        <button className={"comment"}>
          ✍🏻
        </button>

        <button className={"share"}>
          📤
        </button>

        <button className={"share"} onClick={() => console.log('delete this post')}>
          ❌
        </button>

      </div>

    </div>
  )
}

export default Card;
