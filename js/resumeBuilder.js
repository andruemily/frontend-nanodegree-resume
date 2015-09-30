/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
Starting experiments


 var firstName = "Emily is awesome"
 console.log(firstName);

 var funThoughts = firstName.replace("awesome", "fun");
 $("#main").append(funThoughts);
 */

//var formattedName = HTMLheaderName.replace("%data%", "Emily Andrulis");
 //var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");

 //$("#header").prepend(formattedRole);
 //$("#header").prepend(formattedName);



var bio = {
	"name" : "Emily Andrulis",
	"role" : "Software Developer",
	"contacts" : {
		"email" : "eandrulis16@cornellcollege.edu",
		"phone" : "630-666-2391",
		"github" : "andruemily"
	},
	"picture" : "images/fry.jpg",
	"welcomeMessage" : "Hello, and welcome to my resume site",
	"skills" : ["Java", "Python", "VB"]
}

var work = {
	"jobs" : [
	{
		"title" : "Peer Consultant",
		"employer" : "Writing Studio at Cornell College",
		"dates" : "May 2013-May 2016",
		"location" : "Mount Vernon, IA",
		"description" : "Helped students improve their writing"
	},
	{
		"title" : "Student Researcher",
		"employer" : "University of Washington Computer Science Department",
		"dates" : "May 2015-August 2015",
		"location" : "Seattle, WA",
		"description" : "Worked with a team on a big data project that aimed to maximize efficiency in the King County public transit system."
	},
	{
		"title" : "Student Researcher",
		"employer" : "Cornell College Computer Science Department",
		"dates" : "May 2014-August 2014",
		"location" : "Mount Vernon, IA",
		"description" : "Conducted research and published a resulting paper on the effects of video manipulation techniques on remote prescence systems"
	}
	]
}

var projects = {
 "projects" : [
	{
		"title" : "Paratransit",
		"dates" : "May 2015-August 2015",
		"description" : "Worked with a team on a big data project that aimed to maximize efficiency in the King County public transit system.",
		"images" : ["images/fry.jpg"] 		//needs to be filled in with pictures
	}
	]

}

var education = {
 	"schools" : [
		{
			"name" : "Cornell College",
			"dates" : "2012-2016",
			"location" : "Mount Vernon, IA",
			"majors" : ["Computer Science"],
			"minors" : ["Spanish"],
			"url" : "www.cornellcollege.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udactiy",
			"dates" : "September - October 2015",
			"url" : "www.udacity.com"
		}
	]

}

$("#main").append(work["position"]);
$("#main").append(education.name);

