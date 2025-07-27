import React from "react";
import MainDetails from "../_components/main-details";
import InformationFilm from "../_components/information";
import EpisodesFilm from "../_components/episodes";
import ReviewsFilm from "../_components/reviews";

const FilmPage = () => {
  return (
    <div className="w-full mt-4 flex items-center justify-center flex-col">
      <MainDetails />
      <InformationFilm />
      <EpisodesFilm />
      <ReviewsFilm />
    </div>
  );
};

export default FilmPage;
