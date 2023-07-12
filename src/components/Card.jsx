import "../scss/style.scss";


const Card = ({x}) => {
  console.log(x);
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
    {x.map((item ,index) => {
    const {photographer, src }= item
    return(
      <div className="card" key={index} style={{ width: "300px" }}>
            <div className="img-div" style={{ height: "40vh" }}>
              <img src={src.large} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <p className="card-text fs-4 text-center">{photographer}</p>
            </div>
          </div>

    )
    })}
    </div>
  )
}

export default Card