const Movie = ({poster, title, year}) => (
    <div className="card Movie-Item">
      <div className="card-image">
          <figure className="image">
              <img src={poster} alt="Movie poster" className="image"/>
          </figure>
      </div>
      <div className="card-content">
          <div className="media">
              <div className="media-content">
                  <p className="title is-4">{title}</p>
                  <p className="subtitle is-6">{year}</p>
              </div>
          </div>
      </div>
  </div>
)

export default Movie;