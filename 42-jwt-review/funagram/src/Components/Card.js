import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {

  const { id, img, likes } = props.image

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

        <button className={"share"} onClick={() => props.removePost(id)}>
          ❌
        </button>

      </div>

    </div>
  )
}

export default Card;
