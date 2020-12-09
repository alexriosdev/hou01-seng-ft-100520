import Card from './Card';

const CardContainer = (props) => {

  return (
    <div className="card-container">
    {
      props.posts.map(image => {
        return (
          <Card img={image} />
        )
      })
    }
    </div>
  )
}

export default CardContainer;
