import React from 'react';

const ToyCard = (props) => {

  const { id, name, image, likes } = props.toy

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button onClick={() => props.likeThisToy(props.toy)} className="like-btn">Like {'<3'}</button>
      <button onClick={() => props.removeToy(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
