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





var bio = {
	"name" : "Emily Andrulis",
	"role" : "Software Developer",
	"contacts" : {
		"email" : "eandrulis16@cornellcollege.edu",
		"phone" : "630-666-2391",
		"github" : "andruemily",
		"location" : "Brookfield, IL"
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//email, phone, github, location
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedPhone, formattedEmail, formattedGithub, formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);

for(var i =0; i< bio.skills.length; i++){
	if(i == 0){
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
	else {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill)
	} 
}


var displayWork = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkDates.replace("%data%", work.jobs[job].location);

		//$(".work-entry:last").append(formattedLocation);
	 	$(".work-entry:last").append(formattedDate);
		$(".work-entry:last").append(formattedDesc);
	}
}

displayWork();


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


function inName() {
	nameArray = name.trim().split(" ");
	var firstName =  nameArray[0];
	var lastName = nameArray[1].toUpperCase();
	return firstName + " " + lastName;
}

var name = $("#name").text();

$("#main").append(internationalizeButton);

projects.display = function() {
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		console.log(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		//next line should be in a loop
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDate);
		$(".project-entry:last").append(formattedDesc);
		$(".project-entry:last").append(formattedImage);
	}
}

projects.display();

$("#mapDiv").append(googleMap);











