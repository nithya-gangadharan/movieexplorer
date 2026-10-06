import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function Landing() {
     const [movie, setMovie] = useState("")
  const [movies, setMovies] = useState([])

  const [error, setError] = useState("")

  const navigate = useNavigate()

  const searchMovie = () => {

    if (movie == "") {
      setError("Please enter a movie name")
      return
    }

   
    setError("")

    fetch(`https://www.omdbapi.com/?s=${movie}&apikey=af55e318`)
      .then((response) => response.json())
      .then((data) => {

        if (data.Response == "True") {
          setMovies(data.Search)
        } else {
          setMovies([])
          setError("Movie not found,search another")
        }

        
      })
      .catch((error) => {

        console.log(error)

        setMovies([])
        setError("Something went wrong. Please try again.")

      })
  }

  return (
    <>
    
     {/* part 1 */}
    <section id='part1'>
      <div className="row pt-5">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-4 box  py-5 rounded my-5 text-center text-light"style={{backgroundColor:'rgb(255,255,255,0.2)'}}>
         <h3>Discover Your Next Favorite Movie</h3>
         <h4> Search, discover and explore your favorite movies.</h4>
         
        </div>
        <div className="col-12 col-md-4"></div>
      </div>
    </section>
      {/* Part 2 - Search */}

      <section className="container py-5">

        <h2 className="text-center">
          Search Movies
        </h2>

        <p className="text-center">
          Enter a movie title to discover movies
        </p>


        <div className="d-flex justify-content-center gap-2 mt-4">

          <TextField
            label="Movie Name"
            placeholder="Enter movie name"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            sx={{
    width: '350px'}}
          />

          <Button 
            variant="contained"
            onClick={searchMovie}
             sx={{
    backgroundColor:'black'
  }}
          >
            Search
          </Button>

        </div>


       


        {/* Error */}

        {error && (
          <p className="text-danger text-center mt-4">
            {error}
          </p>
        )}


        {/* Movie Cards */}

        <div className="row mt-5">

          {movies.map((item) => (

            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={item.imdbID}
            >

              <div className="card h-100 shadow">

                <img
                  src={item.Poster}
                  alt={item.Title}
                  className="card-img-top"
                  style={{
                    height: '350px',
                    objectFit: 'cover',
                    cursor: 'pointer'
                  }}
                  onClick={() =>
                    navigate(`/movie/${item.imdbID}`)
                  }
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {item.Title}
                  </h5>

                  <p className="mb-0">
                    Release Year: {item.Year}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    
    </>
  )
}

export default Landing