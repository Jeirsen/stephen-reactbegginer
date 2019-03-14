import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 2:00PM"
        content="Nice blog post"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 4:45PM"
        content="Nice course"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 5:00PM"
        content="Nice App"
      />
      <CommentDetail
        author="Tom"
        timeAgo="Today at 10:00AM"
        content="Check that service"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// https://cdnjs.com/libraries/semantic-ui
// https://semantic-ui.com/introduction/getting-started.html
//
