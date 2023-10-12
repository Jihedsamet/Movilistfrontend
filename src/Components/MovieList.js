import { useEffect, useState } from "react";
import axios from "axios";


function MovieList() {
  const [movielist, setmovielist] = useState([]);
  
  
  
  
  
  
  
  //addmovie
  const [movie, setMovie] = useState({
    title: "",
    link: "",
    rate: "",
  });

  const Addtitle = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/addmovie",
        movie
      );

      if (response.status === 200) {
        setMovie({
          title: "",
          link: "",
          rate: "",
        });
        setmovielist([...movielist, response.data]);
        console.log(movielist);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //get movie
  useEffect(() => {
    const getmovie = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getmovie");
        console.log(response.data);
        setmovielist(response.data);
      } catch (error) {
        console.log();
      }
    };
    getmovie();
  }, []);

  // delete movie
  const deletemovie = async (id) => {
    console.log("this is the id", id);

    const response = await axios.delete(
      `http://localhost:5000/deletemovie/${id}`
    );
    if (response.status === 200) {
      console.log(response.data);
      setmovielist(response.data);

      // alert("movie deleted");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        name="title"
        value={movie.title}
        placeholder="add title plz"
        onChange={(event) => {
          setMovie({ ...movie, title: event.target.value });
        }}
      />
      <input
        type="text"
        name="link"
        value={movie.link}
        placeholder="add link plz"
        onChange={(event) => {
          setMovie({ ...movie, link: event.target.value });
        }}
      />
      <input
        type="text"
        name="rate"
        value={movie.rate}
        placeholder="add rate plz"
        onChange={(event) => {
          setMovie({ ...movie, rate: event.target.value });
        }}
      />

      <button onClick={() => Addtitle()}> ADD </button>
      <ul>
        {movielist.map((movie, key) => (
          <li key={key}>
            <span className="title">{movie.title}</span>
            <h1 className="separator">-Rate-</h1>
            <span className="rate">{movie.rate}</span>
            {/* {" "}
            {movie.title} <h1>-Rate-</h1> {movie.rate} */}
            <iframe
              width="560"
              height="315"
              src={movie.link}
              title="YouTube video player"
            ></iframe>
            <button onClick={() => deletemovie(movie._id)}>
              delete movie{" "}
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
