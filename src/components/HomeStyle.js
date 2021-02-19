import React from "react";

const HomeStyle = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <div className="card ">
        <div className="card-body list-body ">
          <div className="row">
            <div
              className="col-md-1 col-2 text-center"
              style={{ paddingRight: "0px", paddingLeft: "1px" }}
            >
              <input type="hidden" />
              <div className="row">
                <div className="col-md-12 col-12">
                  <span
                    style={{ cursor: "pointer" }}
                    className="listVoting upvote"
                  >
                    <i className="icon-arrow-up icon-3x"></i>
                  </span>
                </div>
              </div>
              <strong>
                <span className="likes-count">1</span>
              </strong>
              <div className="row">
                <div className="col-md-12 col-12">
                  <span
                    style={{ cursor: "pointer" }}
                    className="listVoting downvote"
                  >
                    <i className="icon-arrow-down icon-3x"></i>
                  </span>
                </div>
              </div>
              Votes
              <br />
            </div>

            <div className="col-md-2 col-4 col-lg-2 img_poster_div_5cc2b804aaa88948c547ae14">
              <img
                style={{ width: "100%" }}
                alt={movie.poster.title}
                src={movie.poster}
                data-src={movie.poster}
                title={movie.title}
              />
            </div>
            <div
              style={{ textAlign: "left" }}
              className="col-md-8 col-6 col-lg-8 cardDiv"
            >
              <h3 style={{ marginBottom: "0px" }} title={movie.title}>
                {movie.title}
              </h3>

              <p className="capitalize text-limit" title={movie.genre}>
                <strong>Genre: </strong>
                {movie.genre}
              </p>

              <p className="capitalize text-limit" title={movie.director}>
                <strong>Director: </strong>
                {movie.director}
              </p>
              <p className="capitalize text-limit" title={movie.stars}>
                <strong>Starring: </strong>
                {movie.stars}
              </p>

              <p className="text-limit" title={movie.language}>
                <strong>Language: </strong>
                {movie.language}
              </p>
              <div className="text-limit">
                <p
                  style={{ color: "#2196f3" }}
                  className="text-limit getVotedUser"
                >
                  {movie.pageViews} views |{" "}
                  {(movie.releasedDate = new Date().toLocaleDateString())} |
                  Voted by {movie.totalVoted} people
                </p>
              </div>
              <button type="button" className="btn btn-primary btn-lg ">
                Watch Trailer
              </button>
            </div>
          </div>
          <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
        </div>
      </div>
    </>
  );
};

export default HomeStyle;
