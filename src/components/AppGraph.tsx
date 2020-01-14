import { Graph } from "react-d3-graph";

import React from "react";
import { AppNode } from "./AppNode";
import { CoursesData } from "./CoursesData";

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
// https://github.com/danielcaldas/react-d3-graph/blob/d75cff8903d339293ad8d4518e3112208d786322/sandbox/data/custom-node/custom-node.config.js
const myConfig = {
  directed: true,
  nodeHighlightBehavior: true,
  node: {
    size: 1000,
    renderLabel: false,
    viewGenerator: node => <AppNode course={node} />
  },
  link: {
    highlightColor: "lightblue",
    color: "blue"
  }
};

export const AppGraph = () => {
  // graph event callbacks
  const onClickGraph = function() {
    console.log("Clicked the graph background");
  };
  const onClickNode = function(nodeId) {
    console.log("Clicked node ${nodeId}");
  };

  const onDoubleClickNode = function(nodeId) {
    console.log("Double clicked node ${nodeId}");
  };

  const onRightClickNode = function(event, nodeId) {
    console.log("Right clicked node ${nodeId}");
  };

  const onMouseOverNode = function(nodeId) {
    console.log(`Mouse over node ${nodeId}`);
  };

  const onMouseOutNode = function(nodeId) {
    console.log(`Mouse out node ${nodeId}`);
  };

  const onClickLink = function(source, target) {
    console.log(`Clicked link between ${source} and ${target}`);
  };

  const onRightClickLink = function(event, source, target) {
    console.log("Right clicked link between ${source} and ${target}");
  };

  const onMouseOverLink = function(source, target) {
    console.log(`Mouse over in link between ${source} and ${target}`);
  };

  const onMouseOutLink = function(source, target) {
    console.log(`Mouse out link between ${source} and ${target}`);
  };

  const onNodePositionChange = function(nodeId, x, y) {
    console.log(`Node ${nodeId} moved to new position x= ${x} y= ${y}`);
  };
  return (
    <Graph
      id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
      data={CoursesData}
      config={myConfig}
      onClickGraph={onClickGraph}
      onClickNode={onClickNode}
      onDoubleClickNode={onDoubleClickNode}
      onRightClickNode={onRightClickNode}
      onClickLink={onClickLink}
      onRightClickLink={onRightClickLink}
      onMouseOverNode={onMouseOverNode}
      onMouseOutNode={onMouseOutNode}
      onMouseOverLink={onMouseOverLink}
      onMouseOutLink={onMouseOutLink}
    />
  );
};
