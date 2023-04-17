import React from "react";
import '../index.css'
import img from "./nullImg.png";

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, mode,author,date } =props;
    return (
      <div className="my-3">
        <div className="card myBox" style={{ width: "15.5rem"}}>
          <img
            src={imageUrl === null ? img : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div
            className="card-body"
            style={{ backgroundColor: mode === "light" ? "white" : "#282624" ,transition:"0.4s"}}
          >
            <h5
              className="card-title"
              style={{ color: mode === "light" ? "black" : "white",transition:"0.4s" }}
            >
              {title === null ? "" : title.slice(0,100) + "..."}
            </h5>
            <p
              className="card-text"
              style={{ color: mode === "light" ? "black" : "white",transition:"0.4s" }}
            >
              {description === null ? "" : description.slice(0, 100) + "..."}
            </p>
            <p className="card-text" ><small  style={{color:mode==="light"?"black":"white"}}>By {!author?"unknown":author} On - {date.toGMTString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-dark btn-sm"
              style={{
                backgroundColor: mode === "dark" ? "white" : "black",
                color: mode === "dark" ? "black" : "white",transition:"0.4s"
              }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    )
}

