const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} />
        <button> Like </button>
        <button> Comment </button>
        <button> Share </button>
      </div>
    </>
  )
}

export default Card;
