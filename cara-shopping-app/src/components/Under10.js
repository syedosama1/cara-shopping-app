import React from "react";
import u20bg from "../assets/u20bg.png";
import "../styles/Under20.css";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import filterBtn from "../assets/filterBtn.png";
import { useState } from "react";
import { store } from "../productsStore/Store";
import HoverImage from "react-hover-image/build";
import JournalSection from "./JournalSection";

import { FaShippingFast } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import better from "../assets/better.jpeg";

const Under10 = () => {
  const [filter, SetFilter] = useState(false);

  const [bodyLotionShow, SetBodyLotionShow] = useState(false);

  const [bodyScrubShow, SetBodyScrubShow] = useState(false);

  const [bodyWashShow, SetBodyWashShow] = useState(false);

  const [allShow, SetAllShow] = useState(true);

  const filterShowHandler = () => {
    SetFilter(!filter);
  };

  const bodyLotionHandler = () => {
    SetBodyLotionShow(true);
    SetAllShow(false);

    SetBodyScrubShow(false);
    SetBodyWashShow(false);
  };

  const bodyScrubHandler = () => {
    SetBodyScrubShow(true);
    SetAllShow(false);

    SetBodyLotionShow(false);
    SetBodyWashShow(false);
  };

  const bodyWashHandler = () => {
    SetBodyWashShow(true);
    SetAllShow(false);

    SetBodyLotionShow(false);
    SetBodyScrubShow(false);
  };

  const allShowHandler = () => {
    SetAllShow(true);

    SetBodyWashShow(false);
    SetBodyLotionShow(false);
    SetBodyScrubShow(false);
  };

  var bodyLotionProducts = store.filter((product) =>
    product.type.includes("bodyLotion")
  );

  var bodyScrubProducts = store.filter((produt) =>
    produt.type.includes("bodyScrub")
  );

  var bodyWashProducts = store.filter((product) =>
    product.type.includes("bodywash")
  );

  var under40Products = store.filter(
    (product) => product.price > 16 && product.price < 40
  );

  const bgAddHandler = (e) => {
    e.target.classList.add("whi");
  };

  const bgRemoveHandler = (e) => {
    e.target.classList.remove("whi");
  };

  return (
    <div className="u20MainParent fof ">
      <p className=" bg-white z-50 relative w100vw"> </p>

      <div className="u20Hold">
        <img src={u20bg} className="u20Pic" alt="Under $20 Banner" />
      </div>

      <div className="u20HeadingHold gap-20 justify-center relative flex flex-col">
        <p className="u20Heading"> Under $40 </p>
        <p className="u20Desc">
          {" "}
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
              Under 40
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="filterSortHold flex flex-row gap-8 absolute text-left">
        <img
          src={filterBtn}
          alt="Filter Button"
          className="w-36 cursor-pointer scale"
          onClick={filterShowHandler}
        />
      </div>

      <div className="filterOptionsHold  relative">
        {filter && (
          <div className="flex rounded-xl gap-8 flex-col boxSh fof absolute ">
            <p
              className="ml-12 scale cursor-pointer scale"
              onClick={bodyLotionHandler}
            >
              {" "}
              Body Lotion
            </p>
            <p className="ml-12 scale cursor-pointer" onClick={bodyWashHandler}>
              {" "}
              Body Wash{" "}
            </p>
            <p
              className="ml-12 scale cursor-pointer"
              onClick={bodyScrubHandler}
            >
              {" "}
              Body Scrub{" "}
            </p>
            <p
              className="ml-12 scale cursor-pointer text-white"
              onClick={allShowHandler}
            >
              {" "}
              All Products{" "}
            </p>
          </div>
        )}
      </div>

      {/* ALL PRODUCTS */}

      {allShow && (
        <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
          {under40Products.map((item) => {
            if (item.type.includes("all")) {
              return (
                <div className="card w-96 bg-base-100 shadow-xl  ">
                  <Link to={`/${item.id}`}>
                    <figure className="px-10 pt-10">
                      <HoverImage
                        src={item.primaryImage}
                        hoverSrc={item.hoverImg}
                        className="w-32 u20img"
                      />
                    </figure>
                  </Link>
                  <div className="card-body items-center text-center">
                    <h2 className=" mb-1 fof text-lg font-semibold">
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
                        <h2 className=" text-xl mb-2 fof u20Price">
                          ${item.price}
                        </h2>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              // Make sure to return something if the condition isn't met.
              return null; // or any other suitable value
            }
          })}
        </div>
      )}

      {/* BODY LOTION  */}

      {bodyLotionShow && (
        <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
          {bodyLotionProducts.map((item) => {
            if (item.type.includes("all")) {
              return (
                <div className="card w-96 bg-base-100 shadow-xl  ">
                  <Link to={`/${item.id}`}>
                    <figure className="px-10 pt-10">
                      <HoverImage
                        src={item.primaryImage}
                        hoverSrc={item.hoverImg}
                        className="w-32 u20img"
                      />
                    </figure>
                  </Link>
                  <div className="card-body items-center text-center">
                    <h2 className=" mb-1 fof text-lg font-semibold">
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
                        <h2 className=" text-xl mb-2 fof u20Price">
                          ${item.price}
                        </h2>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              // Make sure to return something if the condition isn't met.
              return null; // or any other suitable value
            }
          })}
        </div>
      )}

      {bodyWashShow && (
        <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
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
                          Know More
                        </button>
                        <p className="btnLine relative bg-black h-8"></p>
                        <h2 className="text-xl mb-2 fof u20Price">
                          ${item.price}
                        </h2>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              // Make sure to return something if the condition isn't met.
              return null; // or any other suitable value
            }
          })}
        </div>
      )}

      {/* BODY SCRUB */}

      {bodyScrubShow && (
        <div className="flex u20prodsHold flex-wrap relative top-96 justify-center text-center">
          {bodyScrubProducts.map((item) => {
            if (item.type.includes("all")) {
              return (
                <div className="card w-96 bg-base-100 shadow-xl  ">
                  <Link to={`/${item.id}`}>
                    <figure className="px-10 pt-10">
                      <HoverImage
                        src={item.primaryImage}
                        hoverSrc={item.hoverImg}
                        className="w-32 u20img"
                      />
                    </figure>
                  </Link>
                  <div className="card-body items-center text-center">
                    <h2 className=" mb-1 fof text-lg font-semibold">
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
                        <h2 className=" text-xl mb-2 fof u20Price">
                          ${item.price}
                        </h2>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            } else {
              // Make sure to return something if the condition isn't met.
              return null; // or any other suitable value
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
          <BsCurrencyDollar className="w-16 h-20" />
          <img src={better} alt="" className="w-20" />
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

export default Under10;
