import React from "react"
import {Link} from "react-router-dom";

function About() {
    return (
      <div className="about">
        <h1>About page</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, quia? Dolor ducimus tempore, omnis mollitia alias nostrum culpa id beatae deserunt debitis a architecto nobis totam unde doloremque. Vitae quidem dignissimos impedit rerum alias laborum similique nihil labore, reiciendis repellendus? Veritatis est minima sequi libero eligendi qui exercitationem mollitia soluta.</p>
        <Link to ="/topics">Topics</Link>
      </div>
    );
  }

export default About;