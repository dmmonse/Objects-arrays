//object:

const course ={
    courseId: "IMED-2351",
    courseProf: "Macias",
    courseName: "Programming",
    Ssemester: "Spring 2022",
    contactInfo:["Phone:(210)000-000","Email: abcd@gmail.com"] //< array(?)

};
function thisClass(){
    alert("Info about this class: "+"         "+ JSON.stringify(course)+
    "                                             (This is my object attempt on alert...<3");
   
};

//console.log(course.contactInfo);

//array:
const careers = ["Web Developer","UX Design","Graphic Designer","Animator","Photographer",
"Game Developer","Web Content Manager","SEO specialist","App dev","UX researcher"]
function pickOne() {
     alert("Your career is: "+ (careers[Math.floor(Math.random() *10)])+ "! :D" );
     window.location.reload("Refresh");
  }

  