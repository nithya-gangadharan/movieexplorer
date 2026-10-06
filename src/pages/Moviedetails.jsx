import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Moviedetails() {


  const { id } = useParams()
  const navigate = useNavigate()

  const [movie, setMovie] = useState({})
  const [error, setError] = useState("")

  useEffect(() => {

    fetch(`https://www.omdbapi.com/?i=${id}&apikey=af55e318`)
      .then((response) => response.json())
      .then((data) => {

        if (data.Response == "True") {
          setMovie(data)
        } else {
          setError("Movie details not found")
        }

      })
      .catch((error) => {

        console.log(error)
        setError("Something went wrong. Please try again.")

      })

  }, [id])

  return (
    <>
    <div className="container py-5">

      {/* Back to Search */}

      <Link to={'/'} className='btn text-light mb-4' style={{background:'black'}}>Back to search</Link>


      {/* Error */}

      {error && (
        <p className="text-danger text-center">
          {error}
        </p>
      )}


      {/* Movie Details */}

      {movie.Title && (

        <div className="row shadow rounded p-4">

          {/* Poster */}

          <div className="col-md-4 text-center">

            <img
              src={movie.Poster}
              alt={movie.Title}
              className="img-fluid rounded"
              style={{
                height: '500px',
                width: '100%',
                objectFit: 'cover'
              }}
            />

          </div>


          {/* Movie Information */}

          <div className="col-md-8">

            <h1 className="mb-4">
              {movie.Title}
            </h1>

            <p>
              <strong>Release Year:</strong> {movie.Year}
            </p>

            <p>
              <strong>IMDb Rating:</strong> {movie.imdbRating}
            </p>

            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>

            <p>
              <strong>Director:</strong> {movie.Director}
            </p>

            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>

            <p>
              <strong>Runtime:</strong> {movie.Runtime}
            </p>

            <p>
              <strong>Language:</strong> {movie.Language}
            </p>

            <p>
              <strong>Awards:</strong> {movie.Awards}
            </p>
{/* Plot */}

      {movie.Title && (

        <div>
 <p><strong>Plot:</strong></p>
<p>
{movie.Plot}
          </p>

        </div>

      )}
          </div>
 
        </div>

      )}


     

    </div>
    
    
    
    </>
  )
}

export default Moviedetails