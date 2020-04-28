window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-77365611-1');

function initMap() {
  // The location of Uluru
  var makeSchool = {lat: 37.548592, lng: -122.058594};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: makeSchool});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: makeSchool, map: map});
}


var a = document.getElementById('outerButton')
var b = document.getElementById('navbarRegister')
var div = document.getElementById('innerButton')
var now = new Date()
var closingDate = new Date('November 16, 2019 23:59:00 GMT-07:00')
if (now >= closingDate) {
	a.setAttribute("href", "#")
	b.setAttribute("href", "#")
	div.innerHTML = "registration closed"
}

// function updateTimer() {
// 	const releaseDate = new Date('June 13, 2019 20:30:00 GMT-07:00')
// 	let now = new Date()
// 	let diff = releaseDate - now
// 	let hours = Math.floor(diff / (60 * 60 * 1000))
// 	diff -= (hours * (60 * 60 * 1000))
// 	let minutes = Math.floor(diff / (60 * 1000))
// 	diff -= (minutes * (60 * 1000))
// 	let seconds = Math.floor(diff / 1000)
// 	if (releaseDate > now) {
// 		div.innerHTML = `Apps open in ${hours} hour(s) ${minutes} minute(s) and ${seconds} second(s)`
// 		setTimeout(() => updateTimer(), 1000)
// 	} else {
// 		div.innerHTML = "register now"
// 		a.setAttribute("href", "https://tinyurl.com/gotospectra3")
// 		b.setAttribute("href", "https://tinyurl.com/gotospectra3")
// 	}
// }

// updateTimer()

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var requirement = document.getElementById("modal-requirements");
var description = document.getElementById("modal-description");
var title = document.getElementById("modal-title");

var descriptions ={
	braintreevenmo: {
		t: "Brainstorming an Idea",
		r: "Anubhava Shrivastava, Technical Leader at Cisco",
		d: "One of the hardest parts of a great hackathon project is coming up with an initial idea. This workshop helps hackers overcome this initial barrier by teaching them how to think of a problem they want to tackle, brainstorm ways to solve the problem using technology, and begin executing their project.</a>"
	},
	android: {
		t: "App Development presented by Thunkable",
		r: "Paul Medlock-Walton, Software Engineer at MIT",
		d: "Building a great mobile app can be difficult if you don't know where to start. This workshop will give a brief overview of how to get started coding a mobile app, along with some tools and software you can use to streamline the process."
	},
	flutter: {
		t: "Machine Learning with Tensorflow and Keras",
		r: "Paige Bailey, Tensorflow Product Manager",
		d: "Machine learning may sound intimidating, but with the use of APIs such as Tensorflow and Keras, it has never been easier. This workshop goes over the basics of Tensorflow's new API, Tensorflow 2.0, along with the use of Keras in Tensorflow 2.0 to give students a head start in machine learning."
	},
	react: {
		t: "Building a STEM Career",
		r: "Vidya Subramanian, Analytics Leader at Apple",
		d: "Choosing the right career path may seem overwhelming and intimidating, which is why this presentation will describe STEM career paths, and how to build up to an ideal STEM career."
	},
	game: {
		t: "Game Changing Bonanza hosted by RingCentral",
		r: "None",
		d: "It's time for the bonus round!  Aka Prizes, prizes prizes!  Join us for 30 minutes of hands on learning, networking, and growing your developer skills (while also learning more about RingCentral) while earning your way to awesome prizes including RingCentral swag, collectibles, conference passes, software and e-learning subscriptions, iPads, game consoles, MacBooks, and even an all expenses paid trip to CoderCruise - the RingCentral Developer conference on a cruise ship in the Bahamas!!!  Plus, we'll have a special prize and an honorary badge to show off to the world for whoever earns the most points!"
	},
	pubnub: {
		t: "PubNub - My Experience as an Intern in Silicon Valley + An Atypical Start in Tech and a Learned Passion for QA/Automation",
		r: "Oscar’s portion of the talk is for all levels! You can check out his React Native tic tac toe game by cloning the following repo and following the README instructions: <a href=\"https://github.com/ocastroa/react-native-tictactoe\">https://github.com/ocastroa/react-native-tictactoe</a>",
		d: "<b>Oscar –</b> What’s it like to be an intern in Developer Relations? I will briefly talk about my personal experience working as a Developer Relations Intern at PubNub. I will go over some projects I have worked on, with an emphasis on my latest project: A realtime React Native tic tac toe game. In this workshop, you will learn about Developer Relations as a career path and how to make a realtime app!<br><b>Craig –</b> Trying to break into the Tech industry without a CS degree? If there’s a will, there’s a way! Many folks with atypical backgrounds make amazing software engineers, but how do you find who/what/where works best for you? A quick walk through how a Texas born nuclear engineer found a passion for QA/Automation and acceptance within the Bay Area tech scene."
	},
	sisu: {
		t: "Sisu - Engineering Product Market Fit",
		r: "None",
		d: "Learn first hand why shipping a product is more than just code, moving fast (and not breaking things) is encouraged, and listening to your customers are key ingredients to building a stellar product and company. In this session, you'll hear directly from Sisu's engineering and design team what really happens behind the scenes at an early startup - the good, the bad, and the messy."
	},
	ios: {
		t: "Intro to iOS",
		r: "Writing utensils and a willingness to share and collaborate.",
		d: "Learn the basics of iOS, Swift, and computer science by studying code written for different iPhone apps!"
	},
	scratch: {
		t: "Build A Website From Scratch!",
		r: "Participants will need their own laptops",
		d: "Learn how to build a simple static personal website or company \"coming soon\" page! This beginner-friendly workshop will cover <b>HTML & CSS basics</b>, how to customize design, how to add images and social media links, and how to get the website hosted on the internet!"
	},
	mongodb: {
		t: "Introduction to MongoDB - Hands-On Workshop",
		r: "Please come with a laptop and a text editor. To get a head start, attendees can download Compass, our GUI for MongoDB - <a href=\"https://www.mongodb.com/download-center/compass\">https://www.mongodb.com/download-center/compass</a>",
		d: "MongoDB is the BEST way to work with data - and the best way to learn MongoDB is to get your hands dirty. Join our hands-on workshop to get up and running with all aspects of MongoDB. From deploying an Atlas cluster to creating Stitch services, we’ll work through a variety of lab exercises together. Don’t worry if you don’t finish! The free environment you create in this lab will be yours forever."
	},
	nlp: {
		t: "Introduction to Natural Language Processing and Machine Learning in Python",
		r: "-Laptop with the <a href=\"https://www.anaconda.com/distribution/\">Anaconda</a> software installed. <br>-Basic knowledge of Python/any programming language will help, but anyone willing to learn is welcome! <br>-Familiarity with basic terminal commands ",
		d: "When you look at a piece of text, what patterns do you see? Maybe you'll notice something about the words that are used or the sentence structure. Natural language processing is a fast-growing, interdisciplinary field that makes use of patterns in textual data, and uses machine learning as a tool to make models and predictions about this data. We'll cover an example of how to use Python tools like Scikit-Learn to classify text and evaluate machine learning models."
	},
	servicenow: {
		t: "Introduction to Enterprise Chatbot",
		r: "Some understanding of the ServiceNow platform will help, but it is not required.",
		d: "Search is the entry point for people interacts with the Web. Have you wondered what will the entry point for entering AI based society?  Many people say it will be a chatbot. In this workshop, you have the opportunity to learn the basics of the Enterprise chatbot and its two key components: NLU and conversation flow designer.  You will also have the chance to watch how a simple conversation flow is built using the ServiceNow platform."
	},
	design: {
		t: "What is Design Thinking?",
		r: "No design experience required. Bring an open mind and curiosity!",
		d: "Of all the Silicon Valley buzzwords, \"design thinking\" is one of the most obtuse. I'll introduce the design process, along with examples of its use, and run a 30-minute journey map activity with participants. Participants should come away with an understanding of what iterative design is and how it can help their work."
	},
	jupyter: {
		t: "Introduction to Data Wrangling with Jupyter Notebooks",
		r: "Bring your curiosity and laptops to follow along. <br>1. Create IBM Cloud Account using THIS URL: <a href=\"http://bit.ly/spectra-ibm\">http://bit.ly/spectra-ibm</a><br>2. Check your email and activate your account. Once activated, log back into your IBM Cloud account using the link above.<br>3. If you already have an account, use the above URL to sign into your IBM Cloud account in the workshop.",
		d: "This is an introductory session on exploring and analyzing data using Python, Pandas and Jupyter Notebooks. We will go over:<br>- how to obtain/read a data file using python in Watson Studio<br>- how to clean noise in data<br>- selecting and querying data<br>- reshaping and filtering data<br>- grouping data into a hierarchy<br>- simple graphing of data<br><br>This is a good session for you if you are <br>- an aspiring data scientist<br>- frequently working with excel files and want another approach to dissect data<br>- a SQL developer looking to get into programming<br>- curious about data in general!"
	},
	dom: {
		t: "DOM manipulations using JavaScript",
		r: "Beginners encouraged, but please come with basic HTML & CSS knowledge as well as rough understanding of JS functionality like functions and variables.",
		d: "Learn how JavaScript ties together with HTML and CSS by manipulating the DOM. What is the DOM, you might ask? Well, visit this workshop and find out! ^-^ We’ll be going over different events fired by the browser when a user interacts with a web page, like what happens when a user scrolls down or clicks on a button. Together we’ll build a drum kit that is going to make certain sounds according to a key user presses on their keyboard. Moreover, we’ll take a close look on OnePlus’ website to identify the use of what was learned in the real world."
	},
	astrobiology: {
		t: "Astrobiology and JavaScript",
		r: "None",
		d: "You can use JavaScript to solve real-world problems, even as an intern! We'll go through a brief introduction to the world of meteors and astrobiology and implement a JavaScript application that uses some simple computational astrophysics to model cometary debris and predict meteor showers. If you're worried about how to contribute to a team as a new developer, remember this program was built by an intern without a CS degree."
	}
}

// When the user clicks on the button, open the modal 
function showDescription(tag) {
  modal.style.display = "block";
  title.innerHTML = descriptions[tag].t
  requirement.innerHTML = descriptions[tag].r
  description.innerHTML = descriptions[tag].d
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
