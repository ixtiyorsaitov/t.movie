import React from "react";
import NewsSwiper from "./news-swiper";

const NewsPanel = () => {
  return (
    <aside className="w-72 sticky top-0 p-6 flex-shrink-0 overflow-hidden">
      <div className="w-full flex items-center justify-center overflow-hidden">
        <NewsSwiper />
      </div>
    </aside>
  );
};

export default NewsPanel;
