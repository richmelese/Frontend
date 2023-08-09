import React, { Fragment } from "react";
import data from "../../Data/data.json";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
const ContentDisplay = () => {
  // const [currentPage, setCurrentPage] = useState(null);

  // const handleButtonClick = (id) => {
  //   setCurrentPage(id);
  //   window.history.pushState(null, "", `/page/${id}`);
  // };
  const { pages, activePage } = this.state;
  return (
    // <div>
    //   <ul>
    //     {data.pages.map((page) => (
    //       <li key={page.id}>
    //         <Link to={`/page/${page.id}`}>{`Page${page.id}`}</Link>
    //       </li>
    //     ))}
    //   </ul>
    //   <hr />
    //   <div>
    //     <div exact path="/content" render={() => <Navigate to="/1" />}></div>
    //   </div>
    //   {data.pages.map((page) => (
    //     <div
    //       key={page.id}
    //       path={`/page/${page.id}`}
    //       render={() => (
    //         <div>
    //           <h2>{`Page ${page.id}`}</h2>
    //           <p>{page.content}</p>
    //           <button onClick={() => handleButtonClick(page.id + 1)}>
    //             Next Page
    //           </button>
    //         </div>
    //       )}
    //     ></div>
    //   ))}
    // </div>
    <div>
      <h1>Dynamic Content Rendering</h1>
      <div>
        {pages &&
          pages.map((page) => (
            <button
              key={page.id}
              onClick={() => this.setState({ activePage: page })}
            >
              Go to {page.id}
            </button>
          ))}
      </div>
      <div>
        {activePage && (
          <div>
            <h2>{activePage.id}</h2>
            <p>{activePage.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentDisplay;
