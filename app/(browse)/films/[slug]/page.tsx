"use client";

import { useEffect, useState } from "react";
import MainDetails from "../_components/main-details";
import InformationFilm from "../_components/information";
import EpisodesFilm from "../_components/episodes";
import ReviewsFilm from "../_components/reviews";
import MainDetailsSkeleton from "../_components/main-details/skeleton";

const FilmPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="w-full mt-4 flex items-center justify-center flex-col">
      <div className="w-full md:px-3">
        {loading ? <MainDetailsSkeleton /> : <MainDetails />}
      </div>
      <div className="w-full px-3 flex items-center justify-center flex-col">
        {/* <InformationFilm /> */}
        <EpisodesFilm />
        <ReviewsFilm />
      </div>
    </div>
  );
};

export default FilmPage;
