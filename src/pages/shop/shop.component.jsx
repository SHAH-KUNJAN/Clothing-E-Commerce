import React from "react";
import { Route, Routes } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionOverView from "../../components/collection-overview/collection-overview.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/" element={<CollectionOverView />} />
        <Route path="/:collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
