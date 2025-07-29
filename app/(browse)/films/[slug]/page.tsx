"use client";

import { useEffect, useState } from "react";
import MainDetails from "../_components/main-details";
import InformationFilm from "../_components/information";
import EpisodesFilm from "../_components/episodes";
import ReviewsFilm from "../_components/reviews";
import MainDetailsSkeleton from "../_components/main-details/skeleton";
import { notFound, useParams } from "next/navigation";
import { IFilm } from "@/types";
import { FILMS } from "@/lib/constants";

const FilmPage = () => {
  const [data, setData] = useState<IFilm | null>(null);
  const params = useParams();
  const slug = params?.slug;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const data = FILMS.find((c) => c.slug === slug);

    if (data) {
      setData(data);
    } else {
      return notFound();
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="w-full mt-4 flex items-center justify-center flex-col">
      <div className="w-full md:px-3">
        {loading ? (
          <MainDetailsSkeleton />
        ) : data !== null ? (
          <MainDetails data={data} />
        ) : null}
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
