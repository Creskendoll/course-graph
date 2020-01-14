export interface Course {
  id: string;
  name: string;
  code: string;
  parentsIDs: string[];
  childrenIDs: string[];
}
