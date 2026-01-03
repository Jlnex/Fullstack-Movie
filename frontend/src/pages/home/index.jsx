import Hero from "./hero";
import { useQuery } from "@tanstack/react-query";
import api from "../../service/api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "./card";
import { useState } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: () => api.get("/movies"),
    select: (res) => res.data,
  });

  const filtredMovies = data?.filter((movie) => {
    const titleFilter = movie.title.toLowerCase().includes(searchValue);

    const directorFilter = movie.director.toLowerCase().includes(searchValue);

    const castFilter = movie.cast.some((actor) =>
      actor.toLowerCase().includes(searchValue)
    );

    const genreFilter = movie.genre.some((genre) =>
      genre.toLowerCase().includes(searchValue)
    );

    return titleFilter || directorFilter || castFilter || genreFilter;
  });

  return (
    <div className="min-h-screen">
      <Hero setSearchValue={setSearchValue} />

      <div className="container mx-auto px-6 py-12">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error.message} refetch={refetch} />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtredMovies.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
