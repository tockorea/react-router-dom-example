import React from "react";
import { NavLink, Route } from "react-router-dom";
import Topic from './Topic';

function Topics(props) {
  let lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    lis.push(<li key={props.topics[i].id}><NavLink to={"/topics/" + props.topics[i].id}>{props.topics[i].title}</NavLink></li>);
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic topics={props.topics}></Topic>
      </Route>
    </div>
  );
}

export default Topics;