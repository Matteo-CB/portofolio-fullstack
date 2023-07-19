export const howManyTimesUse = [];
Object.defineProperties(Array.prototype, {
  count: {
    value: function (value) {
      return this.filter((x) => x === value).length;
    },
  },
});

const techno = [
  "HTML 0",
  "CSS 1",
  "Sass 2",
  "JavaScript 3",
  "React 4",
  "Redux 5",
  "Redux-Toolkit 6",
  "Angular 7",
  "Vue 8",
  "Node.js 9",
  "PHP 10",
  "Java 11",
  "Python 12",
  "Symphony 13",
  "Laravel 14",
  "Django 15",
  "Sprint 16",
  "Express 17",
  "MongoDB 18",
  "MySQL 19",
  "JSON 20",
  "Wordpress 21",
];

const outils = [
  "VScode 0",
  "Postman 1",
  "Git/Github 2",
  "Lighthouse 3",
  "React Devtools 4",
  "Webpack 5",
  "Babel 6",
  "ESLint 7",
  "Prettier 8",
  "Jest 9",
  "Storybook 10",
  "DevTools 11",
  "npm 12",
  "Travis CI 13",
  "Docker 14",
  "Figma 15",
  "Photoshop 16",
  "Sketch 17",
  "InVision 18",
  "Wave 19",
  "Redux Devtools 20",
  "Rich Snippets 21",
  "yarn 22",
  "Replit 23",
];

const methodologies = [
  "SEO 0",
  "Accessibilité 1",
  "Agile 2",
  "Scrum 3",
  "API 4",
  "Responsive 5",
];

function getTechno(...indexs) {
  return indexs.map((index) => techno[index].split(" ").slice(0, -1).join(" "));
}

function getOutils(...indexs) {
  return indexs.map((index) => outils[index].split(" ").slice(0, -1).join(" "));
}

function getMethodologies(...indexs) {
  return indexs.map((index) =>
    methodologies[index].split(" ").slice(0, -1).join(" ")
  );
}

export function getImagesPublic(name) {
  return "./images/projects/" + name;
}
export function getImagesStyle(name) {
  return "../images/projects/" + name;
}
export function getImagesCarousel(name) {
  return "../images/projects/" + name;
}

// HTML 0 CSS 1 Sass 2 JavaScript 3 React 4 Redux 5 Redux-Toolkit 6 Angular 7 Vue 8 Node.js 9 PHP 10 Java 11 Python 12 Symphony 13 Laravel 14 Django 15 Sprint 16 Express 17 MongoDB 18 MySQL 19 JSON 20 Wordpress 21
//  VScode 0 Postman 1 Git/Github 2 Lighthouse 3 React Devtools 4 Webpack 5 Babel 6 ESLint 7 Prettier 8 Jest 9 Storybook 10 Chrome DevTools 11 npm 12 Travis CI 13 Docker 14 Figma 15 Adobe Photoshop 16 Sketch 17 InVision 18 Wave 19 Redux Devtools 20 Google Rich Snippets 21 yarn 22 Replit 23
//  SEO 0 Accessibilité 1 Agile 2 Scrum 3 API 4 Responsive 5

export function getUniqueItems(projects, use) {
  const allTechno = [];
  const allOutils = [];
  const allMethodologies = [];

  projects.forEach((project) => {
    allTechno.push(...project.techno);
    allOutils.push(...project.outils);
    allMethodologies.push(...project.methodologies);
  });

  const uniqueTechno = [...new Set(allTechno)];
  const uniqueOutils = [...new Set(allOutils)];
  const uniqueMethodologies = [...new Set(allMethodologies)];

  uniqueTechno.forEach((technos) => {
    const countTechno = allTechno.count(technos);
    use.push(technos + " " + countTechno);
  });

  return {
    techno: uniqueTechno,
    outils: uniqueOutils,
    methodologies: uniqueMethodologies,
    All: {
      techno: getTechno(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21
      ),
      outils: getOutils(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ),
      methodologies: getMethodologies(0, 1, 2, 3, 4, 5),
    },
  };
}
