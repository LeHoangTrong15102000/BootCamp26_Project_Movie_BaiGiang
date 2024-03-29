import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getMovieShowing } from '../actions/movieActions';
import { getShowing } from '../slices/movieSlice';
import { useNavigate } from 'react-router-dom';
// import homeMovie from '../reducers/movieReducers'
// import thư viện mantine vào

const MovieShowing = () => {
  const navigate = useNavigate(); // khởi tạo biến navigate
  const dispatch = useDispatch();
  // Tên Reducer lấy từ rootReducer về
  const { data, isLoading, error } = useSelector(
    (state) => state.homeMovieSlice
  ); // Gọi tử rootReducers về

  // Sử dụng useEffect để call API
  useEffect(() => {
    // dispatch lên cái getMovieShowing
    dispatch(getShowing());
    // console.log('Hello error');
  }, []);

  const goToMovieDetails = (movieId) => {
    // Navigate tới trang movies/:movieId
    // Để điều hướng tới cái trang đó thì sử dụng cái hook của thz react-router-dom
    navigate(`movies/${movieId}`); // Điều hướng tới trang details của phim
  };

  // Nếu isLoading là true thì nó cứ load như này hoài
  if (isLoading) {
    return <p>Loading Data...</p>;
  }
  if (error) {
    // Cho nó một cái fallBack, để không may cái err nó ko hiện ra
    return <p>{error || 'Something went wrong'}</p>;
  }

  return (
    // Render ra giao diện
    <div>
      <h3>MovieShowing</h3>
      {data.map((movie, index) => (
        <Fragment key={index}>
          <p>{movie.tenPhim}</p>
          <button
            className="border border-stone-100 bg-stone-400 p-2"
            onClick={() => goToMovieDetails(movie.maPhim)}
          >
            Details
          </button>
        </Fragment>
      ))}
    </div>
  );
};

export default MovieShowing;
