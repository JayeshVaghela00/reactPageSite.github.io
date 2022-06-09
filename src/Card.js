import "./App.css";



function Card(props) {
  let { degree, description } = props;


  return (
    <>
      <div className="row">
        <div className="card-col">
          <h2>{degree}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;


