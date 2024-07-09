import Vue from 'vue'
import Vuex from 'vuex'
import { componentsPlugin } from 'bootstrap-vue'
// TODO: Update Descriptions (about short and long and tech)
const store = () => {
  return new Vuex.Store({
    state: {
      projects: [
        {
          id: 0,
          type: "web",
          image: "../whosjimmy.png",
          url: "http://whosjimmy.com",
          project: "whosjimmy",
          title: "Fullstack Web Developer",
          dates: "April 2010 - Present",
          company: "Who's Jimmy",
          shortDescription: "Personal Portfolio of a Skilled Film Gizmologist.",
          description: "Personal Portfolio of a Skilled Film Machinist.",
          about: "",
          tech: ["PhP", "VueJS", "NuxtJS", "Bootstrap"]
        },
        {
          id: 1,
          type: "web",
          image: "../oiika.png",
          url: "http://oiika.com",
          project: "oiika",
          title: "Software Developer",
          dates: "May 2017 –  March 2019",
          company: "Oiika",
          shortDescription: "A platform where passionate tutors and mentors share their knowledge with individuals like yourself.",
          description:
            "A platform where passionate tutors and mentors share their knowledge with individuals like yourself.",
          about:
            "Worked as part of the development team developing, utilizing google maps for visual displays of service areas and stripe to handle transactions.",
          tech: ["Node.js", "React.js", "MongoDB", "Stripe", "Google Maps API", 'React Native']
        },
        {
          id: 2,
          type: "web",
          image: "../edata-web.png",
          url: "http://service.edatanow.com",
          project: "edata",
          title: "Full Stack Web Developer",
          dates: "April 2018 - Sept 2019",
          company: "E-Data Now!",
          shortDescription: "Quality Inspection and Audit Management Software.",
          description:
            "Worked as a Software Developer on this near real time data collection system.  The primary use case is inspection and auditing in the automotive industry.   Typical a user will perform audits using E-Data Now Client (iOS/Swift/C++) and enter their Time sheet’s using E-  Data Now Time (Flutter/Dart).  The data is pushed up to a Rails API, where it’s presented to the Web Administrators using a cutting edge Nuxt/Vue.js frontend stack.",
          about: "",
          tech: ["PhP", "VueJS", "NuxtJS", "Ruby on Rails", "Bootstrap", 'Scout', 'JIRA']
        },
        {
          id: 3,
          type: "app",
          image: "../placeholder.jpg",
          url: "",
          title: "TBD",
          company: "Johnston Software Development",
          shortDescription: "Communicaiton App for limited verbal people.",
          description: "Communicaiton App for limited verbal people.",
          project: "TTC",
          about: "",
          tech: ["SQLite", "Flutter"]
        },
        {
          id: 4,
          type: "app",
          image: "../edata-app.png",
          title: "E-Data Now!",
          company: "E-Data Now!",
          shortDescription: "Quality Inspection and Audit Management Software.",
          description: "Quality Inspection and Audit Management Software.",
          project: "edataApp",
          about: "",
          tech: ["Swift", "C++", "Sqlite", "Ruby on Rails"]
        },
        {
          id: 5,
          type: "app",
          image: "../edata-app-time.png",
          title: "EDN Time",
          company: "E-Data Now!",
          shortDescription: "Helpful companion app to keep track of signing in and out of a job.",
          description: "Helpful companion app to keep track of signing in and out of a job.",
          project: "edataTime",
          about: "",
          tech: ["SQLite", "Flutter"]
        }
      ]
    },
    getters: {
      projects(state) {
        return state.projects
      },
      apps(state) {
        return state.projects.filter((item) => item.type === 'app');
      },
      web(state) {
        return state.projects.filter((item) => item.type === 'web');
      }
    },

  }
  )
}
export default store

