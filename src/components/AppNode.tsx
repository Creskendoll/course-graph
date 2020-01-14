import React, { useState } from "react";
import { Course } from "../models/Course";
import "../style/AppNode.css";

interface Props {
  course: Course;
}

enum StateEnum {
  NOT_ACTIVE = 0,
  SELECTED = 1,
  ACTIVE = 2
}

export const AppNode = (props: Props) => {
  const [state, setState] = useState(StateEnum.NOT_ACTIVE);

  return (
    <div className="node-container">
      <span>{props.course.name}</span>
      <br />
      <span>{props.course.code}</span>
    </div>
  );
};
