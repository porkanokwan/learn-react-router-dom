import React from "react"

function Topics(props) {
    console.log(props)
    console.log(props.match.url)  //จะแสดงที่ console ทุกครั้งที่กดเข้า Topics
    console.log(props.location.key)
    return (
        <div className="topics">
            <h1>Topics page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur asperiores repudiandae quidem necessitatibus officia quo qui exercitationem fugit tempora laboriosam quis pariatur, eligendi nisi provident odit dolorum! Nulla, accusamus iusto.</p>
        </div>
    );
  }

export default Topics;