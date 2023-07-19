import { createSlice } from "@reduxjs/toolkit";
import { getUniqueItems } from "./data/projectData";
let Pro;
let Uni;

async function fetchProjects() {
  return await fetch("http://localhost:5000/api/stuff")
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      const howManyTimesUse = [];
      Uni = getUniqueItems(result, howManyTimesUse);
      Pro = result;
      return [Pro, Uni, howManyTimesUse];
    });
}
async function postFetch(post) {
  await fetch("http://localhost:5000/api/stuff", {
    method: "POST",
    body: JSON.stringify(post),
  });
}

const Container = await fetchProjects();
const Projects = Container[0];
const uniqueItems = Container[1];
export const use = Container[2];
const dataSlice = createSlice({
  name: "data",
  initialState: {
    projects: Projects,
    uniqueItems: uniqueItems,
    currentValue: [],
  },
  reducers: {
    addProject: (state, action) => {
      console.log(action.payload);
      postFetch(action.payload);
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects.filter((e) => e._id !== action.payload);
    },
    updateUniqueItems: (state) => {
      const allTechno = [];
      const allOutils = [];
      const allMethodologies = [];

      state.projects.forEach((project) => {
        allTechno.push(...project.techno);
        allOutils.push(...project.outils);
        allMethodologies.push(...project.methodologies);
      });

      const uniqueTechno = [...new Set(allTechno)].map((item) =>
        item.split(" ").slice(0, -1).join(" ")
      );
      const uniqueOutils = [...new Set(allOutils)].map((item) =>
        item.split(" ").slice(0, -1).join(" ")
      );
      const uniqueMethodologies = [...new Set(allMethodologies)].map((item) =>
        item.split(" ").slice(0, -1).join(" ")
      );

      state.uniqueItems = {
        techno: uniqueTechno,
        outils: uniqueOutils,
        methodologies: uniqueMethodologies,
      };
    },
  },
});

export const { addProject, updateUniqueItems, deleteProject } =
  dataSlice.actions;
export default dataSlice.reducer;
