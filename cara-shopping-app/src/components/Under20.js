import React, { useState } from "react";
import u20bg from "../assets/u20bg.png";
import "../styles/Under20.css";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import filterBtn from "../assets/filterBtn.png";
import { store } from "../productsStore/Store";
import HoverImage from "react-hover-image/build";
import JournalSection from "./JournalSection";
import { FaShippingFast, FaLock, FaDollarSign } from "react-icons/fa";
import better from "../assets/better.jpeg";

const Under20 = () => {
  const [filter, setFilter] = useState(false);
  const [bodyLotionShow, setBodyLotionShow] = useState(false);
  const [bodyScrubShow, setBodyScrubShow] = useState(false);
  const [bodyWashShow, setBodyWashShow] = useState(false);
  const [allShow, setAllShow] = useState(true);

  const filterShowHandler = () => {
    setFilter(!filter);
  };

  const bodyLotionHandler = () => {
    setBodyLotionShow(true);
    setAllShow(false);
    setBodyScrubShow(false);
    setBodyWashShow(false);
  };

  const bodyScrubHandler = () => {
    setBodyScrubShow(true);
    setAllShow(false);
    setBodyLotionShow(false);
    setBodyWashShow(false);
  };

  const bodyWashHandler = () => {
    setBodyWashShow(true);
    setAllShow(false);
    setBodyLotionShow(false);
    setBodyScrubShow(false);
  };

  const allShowHandler = () => {
    setAllShow(true);
    setBodyWashShow(false);
    setBodyLotionShow(false);
    setBodyScrubShow(false);
  };

  var bodyLotionProducts = store.filter((product) =>
    product.type.includes("bodyLotion")
  );

  var bodyScrubProducts = store.filter((product) =>
    product.type.includes("bodyScrub")
  );

  var bodyWashProducts = store.filter((product) =>
    product.type.includes("bodywash")
  );

  const bgAddHandler = (e) => {
    e.target.classList.add("whi");
  };

  const bgRemoveHandler = (e) => {
    e.target.classList.remove("whi");
  };

  return (
    <div className="u20MainParent fof">
      <p className="bg-white z-50 relative w-full"> </p>

      <div className="u20Hold">
      <img src={u20bg} className="u20Pic" alt="" />
      </div>

      <div className="u20HeadingHold gap-20 justify-center relative flex flex-col">
        <p className="u20Heading"> Under $20 </p>
        <p className="u20Desc">
          Shop Sukin natural and vegan collection of skincare and hair care
          gifts under $20.
        </p>
      </div>

      <div className="u20BreadCrumbHold absolute text-sm">
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon />}>
          <BreadcrumbItem>
            <Link to={`/`}>Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to={`/`} href="#">
              Under 20
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="filterSortHold flex flex-row gap-8 absolute text-left">
        <img
          src={filterBtn}
          className="w-36 cursor-pointer" // Removed 'scale' class
          onClick={filterShowHandler}
          alt="Filter Button"
        />
      </div>

      <div
        className={`filterOptionsHold  relative ${filter ? "block" : "hidden"}`}
      >
        <div className="flex rounded-xl gap-8 flex-col boxSh fof absolute ">
          <p className="ml-12 cursor-pointer" onClick={bodyLotionHandler}>
            {" "}
            Body Lotion
          </p>
          <p className="ml-12 cursor-pointer" onClick={bodyWashHandler}>
            {" "}
            Body Wash{" "}
          </p>
          <p className="ml-12 cursor-pointer" onClick={bodyScrubHandler}>
            {" "}
            Body Scrub{" "}
          </p>
          <p
            className="ml-12 cursor-pointer text-white"
            onClick={allShowHandler}
          >
            {" "}
            All Products{" "}
          </p>
        </div>
      </div>

      {/* ALL PRODUCTS */}
      {allShow && (
        <div className="flex u20prodsHold flex-wrap justify-center text-center">
          {store.map((item) => {
            if (item.type.includes("all")) {
              return (
                <div
                  className="card w-96 bg-base-100 u20IndResponsive shadow-xl"
                  key={item.id}
                >
                  <Link to={`/${item.id}`}>
                    <figure className="px-10 pt-10">
                      <HoverImage
                        src={item.primaryImage}
                        hoverSrc={item.hoverImg}
                        className="w-32 u20img"
                        alt="Product"
                      />
                    </figure>
                  </Link>
                  <div className="card-body items-center text-center">
                    <h2 className="mb-1 fof text-lg font-semibold">
                      {item.name}
                    </h2>
                    <Link to={`/${item.id}`}>
                      <div className="card-actions">
                        <button
                          className="btn btn-primary knmBtn"
                          onMouseEnter={bgAddHandler}
                          onMouseLeave={bgRemoveHandler}
                        >
                          Know More{" "}
                        </button>
                        <p className="btnLine relative bg-black h-8"> </p>
                        <h2 className="text-xl mb-2 fof u20Price">
                          ${item.price}
                        </h2>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              return null; // Return null when the condition is not met
            }
          })}
        </div>
      )}

      {/* BODY LOTION  */}
      {bodyLotionShow && (
        <div className="flex u20prodsHold flex-wrap justify-center text-center">
          {bodyLotionProducts.map((item) => {
            if (item.type.includes("all")) {
              return (
                <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
                  <Link to={`/${item.id}`}>
                    <figure className="px-10 pt-10">
                      <HoverImage
                        src={item.primaryImage}
                        hoverSrc={item.hoverImg}
                        className="w-32 u20img"
                        alt="Product"
                      />
                    </figure>
                  </Link>
                  <div className="card-body items-center text-center">
                    <h2 className="mb-1 fof text-lg font-semibold">
                      {item.name}
                    </h2>
                    <Link to={`/${item.id}`}>
                      <div className="card-actions">
                        <button
                          className="btn btn-primary knmBtn"
                          onMouseEnter={bgAddHandler}
                          onMouseLeave={bgRemoveHandler}
                        >
                          Know More{" "}
                        </button>
                        <p className="btnLine relative bg-black h-8"> </p>
                        <h2 className="text-xl mb-2 fof u20Price">
                          ${item.price}
                        </h2>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              return null; // Return null when the condition is not met
            }
          })}
        </div>
      )}

      {/* BODY WASH */}
      {bodyWashShow && (
        <div className="flex u20prodsHold flex-wrap justify-center text-center">
          {bodyWashProducts.map((item) => {
            if (item.type.includes("all")) {
              return (
                <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
                  <Link to={`/${item.id}`}>
                    <figure className="px-10 pt-10">
                      <HoverImage
                        src={item.primaryImage}
                        hoverSrc={item.hoverImg}
                        className="w-32 u20img"
                        alt="Product"
                      />
                    </figure>
                  </Link>
                  <div className="card-body items-center text-center">
                    <h2 className="mb-1 fof text-lg font-semibold">
                      {item.name}
                    </h2>
                    <Link to={`/${item.id}`}>
                      <div className="card-actions">
                        <button
                          className="btn btn-primary knmBtn"
                          onMouseEnter={bgAddHandler}
                          onMouseLeave={bgRemoveHandler}
                        >
                          Know More{" "}
                        </button>
                        <p className="btnLine relative bg-black h-8"> </p>
                        <h2 className="text-xl mb-2 fof u20Price">
                          ${item.price}
                        </h2>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              return null; // Return null when the condition is not met
            }
          })}
        </div>
      )}

      {/* BODY SCRUB */}
      {bodyScrubShow && (
        <div className="flex u20prodsHold flex-wrap justify-center text-center">
          {bodyScrubProducts.map((item) => {
            if (item.type.includes("all")) {
              return (
                <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
                  <Link to={`/${item.id}`}>
                    <figure className="px-10 pt-10">
                      <HoverImage
                        src={item.primaryImage}
                        hoverSrc={item.hoverImg}
                        className="w-32 u20img"
                        alt="Product"
                      />
                    </figure>
                  </Link>
                  <div className="card-body items-center text-center">
                    <h2 className="mb-1 fof text-lg font-semibold">
                      {item.name}
                    </h2>
                    <Link to={`/${item.id}`}>
                      <div className="card-actions">
                        <button
                          className="btn btn-primary knmBtn"
                          onMouseEnter={bgAddHandler}
                          onMouseLeave={bgRemoveHandler}
                        >
                          Know More{" "}
                        </button>
                        <p className="btnLine relative bg-black h-8"> </p>
                        <h2 className="text-xl mb-2 fof u20Price">
                          ${item.price}
                        </h2>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              return null; // Return null when the condition is not met
            }
          })}
        </div>
      )}

      <div className="u20Js relative">
        <JournalSection />
      </div>

      <div className="u20Featyres relative">
        <div className="u20FeaturesHold flex flex-row relative">
          <FaShippingFast className="w-16 h-20" />
          <FaLock className="w-12 h-16" />
          <FaDollarSign className="w-16 h-20" />
          <img src={better} alt="Sukin Brand Logo" className="w-20" />
        </div>

        <div className="u20TextFeatureHold fof flex flex-row relative uppercase">
          <p> 2 DAY DELIVERY </p>
          <p> secure checkout </p>
          <p> royalty points </p>
          <p> easy returns </p>
        </div>
      </div>
    </div>
  );
};

export default Under20;
