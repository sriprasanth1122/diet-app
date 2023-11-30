import React from "react";
import { useNavigate } from "react-router-dom";
// import {
//   AccumulationChartComponent,
//   PieSeries,
//   Inject,
//   AccumulationSeriesCollectionDirective,
//   AccumulationSeriesDirective,
//   AccumulationDataLabel,
//   AccumulationLegend,
//   AccumulationTooltip,
// } from "@syncfusion/ej2-react-charts";
// import { data } from "../../src/data.js";
import Layout from "../components/layout/Layout";

function Category() {
  const navigate = useNavigate()
  return (
    <Layout title={"Category"}>
      <div>
        <div className="container">
          {/* banner */}
          <div className="row mb-5">
            <div
              className="container mt-5 pb-4 pt-2 w-75 rounded-5  text-center"
              style={{ backgroundColor: "#D1F2EB" }}
            >
              <p className="font-weight-bolderlh-base mt-3  ">
                <span
                  className="fs-1 text-uppercase"
                  style={{ letterSpacing: "0.2em", color: "#47856c" }}
                >
                   The Types of Diets
                  <br /> We Support{" "}
                </span>
                <br />
                <span className="fs-5" style={{ color: "#3e4444" }}>
                  There are various categories of diet plans,
                  <br /> each with its own approach and focus.
                </span>
              </p>
              <p className="font-weight-bolderlh-base text-uppercase ">
                
              </p>
              <h6
                className="fs-5 px-2 lh-base w-100"
                style={{ color: "#696969" }}
              >
                Our goal is to help you eat the way you want,
                <br /> and in the right amounts, NOT to tell you the "right" way
                to eat. 
              </h6>

              <button
                className="btn btn-md text-white text-uppercase mt-3 mb-3"
                style={{ backgroundColor: "#350f49", letterSpacing: "0.2em" }}
                onClick={() => navigate('/login')}
              >
                {" "}
                Sign-In to View Plans{" "}
              </button>
              <br/>
            </div>
          </div>

          <main className="col-md-12">
            <div className="row rounded-5 mb-3" style={{ backgroundColor: "#D1F2EB" }}>
              <div className="col-md-12 pt-4 ">
                <div className="row">
                  <h3
                    className="text-center text-uppercase mb-4"
                    style={{ letterSpacing: "0.2em", color: "#47856c" }}
                  >
                    five exclusion-based nutrition schemes
                  </h3>
                </div>
              </div>

              
              {/* Keto Diet Plan */}
              <div className="row">
                {/* <div className="col-md-4">
                  <img
                    className="img-thumbnail"
                    src={require("./../Images/pln-keto.jpg")}
                    alt="Keto"
                  />
                </div> */}
                <div
                  className="col-md-8 rounded-4 center"
                  style={{ backgroundColor: "#F8F9F9" }}
                >
                  <h3
                    className="text-center text-decoration-underline text-uppercase mt-4"
                    style={{ letterSpacing: "0.2em", color: "#1b2716" }}
                  >
                    Keto Diet Plans
                  </h3>

                  <h5 className="text-center lh-lg px-3">
                    The keto diet plan has grown in popularity in recent years,{" "}
                    <br />
                    and it's a low carb, high fat diet that involves putting
                    your body
                    <br /> into a metabolic state called ketosis. Ketosis
                    happens when fat provides most of the fuel for the body and
                    glucose.
                  </h5>
                </div>
              </div>

              {/* Paleo Diet Plan */}

              <div className="row mt-3">
                <div className="col-md-4">
                  <img
                    className="img-thumbnail"
                    src={require("./../Images/pln-meat.jpg")}
                    alt="Keto"
                  />
                </div>
                <div
                  className="col-md-8 rounded-4 mb-4"
                  style={{ backgroundColor: "#F8F9F9" }}
                >
                  <h3
                    className="text-center text-decoration-underline text-uppercase mt-4"
                    style={{ letterSpacing: "0.2em", color: "#242323" }}
                  >
                    Paleo Diet Plan
                  </h3>

                  <h5 className="text-center lh-lg px-3 ">
                    The paleo (short for paleolithic) diet plan is based on the
                    <br />
                    idea that humans should eat food that closely resembles the
                    diets of prehistoric humans. Early humans evolved as
                    hunter-gatherers long before the invention of what we would
                    recognize as modern-day agriculture.
                  </h5>
                </div>

              </div>

              {/* Vegetarian Diet plan */}

              <div className="row my-3">
                {/* <div className="col-md-4 ">
                  <img
                    className="img-thumbnail"
                    src={require("./../Images/pln-veg.jpg")}
                    alt="Keto"
                  />
                </div> */}
                <div
                  className="col-md-8 rounded-4 center"
                  style={{ backgroundColor: "#F8F9F9" }}
                >
                  <h3
                    className="text-center text-decoration-underline text-uppercase my-4"
                    style={{ letterSpacing: "0.2em", color: "#1b2716" }}
                  >
                    Vegetarian Diet Plans
                  </h3>

                  <h5 className="text-center lh-lg px-3">
                    To get the most out of a vegetarian diet, choose a variety
                    of healthy plant-based foods. These include whole fruits and
                    vegetables and whole grains. Nuts and legumes, such as
                    lentils, beans and peanuts, also are considered healthy
                    plant-based foods.
                  </h5>
                </div>
              </div>

              {/* Vegan Diet Plan */}

              <div className="row mt-3">
                <div className="col-md-4">
                  <img
                    className="img-thumbnail"
                    src={require("./../Images/pln-vegan.jpg")}
                    alt="Keto"
                  />
                </div>
                <div
                  className="col-md-8 rounded-4"
                  style={{ backgroundColor: "#F8F9F9" }}
                >
                  <h3
                    className="text-center text-decoration-underline text-uppercase mt-4"
                    style={{ letterSpacing: "0.2em", color: "#1b2716" }}
                  >
                    Vegan Diet Plan
                  </h3>

                  <h5 className="text-center lh-lg px-3">
                    The primary definition of a vegan diet plan is one that
                    avoids all animal-derived products. This includes not only
                    beef, poultry and fish, but also eggs and dairy products.
                    The vegan lifestyle also includes not using any products
                    made from animals, such as leather fur.
                  </h5>
                </div>

              </div>

              {/* Gluten-free Diet plan */}

              <div className="row mt-3 mb-3">
                {/* <div className="col-md-4 rounded-4 ">
                  <img
                    className="img-thumbnail"
                    src={require("./../Images/pln-glutn.jpg")}
                    alt="Keto"
                  />
                </div> */}

                <div
                  className="col-md-8 rounded-4 center"
                  style={{ backgroundColor: "#F8F9F9" }}
                >
                  <h3
                    className="text-center text-decoration-underline text-uppercase mt-4"
                    style={{ letterSpacing: "0.2em", color: "#1b2716" }}
                  >
                    Gluten-free Diet
                  </h3>

                  <h5 className="text-center lh-lg px-3">
                    Sidestepping gluten can be a lifestyle choice for many, but
                    for those with a condition known as celiac disease,
                    itU+2019s a medical necessity. As the name implies,
                    followers of the gluten free diet plan avoid all food with
                    gluten. Gluten is a protein found in wheat, barley, rye and
                    oats.
                  </h5>
                </div>

              </div>
            </div>
          </main>
        </div>
        
      </div>
    </Layout>
  );
}

export default Category;
