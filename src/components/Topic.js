import React from "react";
import { useParams } from "react-router-dom";

function Topic(props) {
  const params = useParams();
  const topic_id = params.topic_id;
  let selected_topic = {
    title: "Sorry",
    description: "Not Found"
  };
  for (let i = 0; i < props.topics.length; i++) {
    if (props.topics[i].id === Number(topic_id)) {
      selected_topic = props.topics[i];
      break;
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

export default Topic;