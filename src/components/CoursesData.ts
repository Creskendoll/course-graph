import { Course } from "../models/Course";
interface Link {
  source: string;
  target: string;
}
interface Config {
  nodes: Course[];
  links: Link[];
}

const data: Course[] = [
  {
    id: "CMP",
    name: "Computer",
    code: "CMP",
    parentsIDs: [],
    childrenIDs: ["SEN"]
  },
  {
    id: "SEN",
    name: "Software",
    code: "SEN",
    parentsIDs: ["CMP"],
    childrenIDs: []
  }
];

const getLinks = () => {
  // TODO: Make this functional
  return data
    .map(course => {
      var res = new Array<Link>();
      course.childrenIDs.forEach(childrenID => {
        const link = {
          source: course.id,
          target: childrenID
        };
        res.push(link);
      });

      return res;
    })
    .flat();
};

// console.log(data);

// graph payload (with minimalist structure)
export const CoursesData = {
  nodes: data,
  links: getLinks(),
  focusedNodeId: "SEN"
};
