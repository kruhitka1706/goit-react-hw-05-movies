import { getMovieCast } from 'components/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from "components/Loader/Loader";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getMovieCast(movieId).then(data => {

      setCast(data.cast);
    }).finally(()=> {setShowLoader(false)});
  }, [movieId]);

  return (
        <div>
         {!showLoader &&  <Loader/>}
      {!cast && <p>there is no cast</p>}
      {cast && (
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <div>
                  <div>
                    <img
                      srcSet={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      alt=""
                    />
                  </div>
                  <div>
                    <p>{actor.name}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Cast;