import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Jane" />
      <CommentDetail author="Tom" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// https://cdnjs.com/libraries/semantic-ui
// https://semantic-ui.com/introduction/getting-started.html
//
