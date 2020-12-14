import Card from './Card';

const CardContainer = (props) => {

  return (
    <div className="card-container">
      {
        props.images.map(image => {
          return <Card key={image.id} image={image} removePost={props.removePost} />
        })
      }
    </div>
  )
}

export default CardContainer;
