var sessions = [
    {id:0 , title:"The state of jQuery", speaker:"ADAM J. SONTAG", time:"9:40am", room:"Ballroom A", description: "Ah, jQuery! Whether you “might not need” it, always want to use it, or just plain love it, one thing’s for sure: you’re at this conference.2 because you want to find out what’s going on. We’ll cover the latest developments in jQuery, from bug fixes and more modularity, to where the jQuery Foundation has been working in standards processes to help the entire open web platform. We’ll also talk about practical ways of thinking about web application performance and file size, and delve into exactly what it means to “not need” something."},
    {id:1 , title:"A Love Letter to HTML", speaker:"JEN SIMMONS", time:"10:10am", room:"Ballroom B", description: "25 years ago, the web was started as an idea for how to organise communication between a diverse group of people on a wide variety of devices. At the core, HTML holds it all together. Why did HTML and the web grow to dominate all other hypertext systems that came before, and go on to revolutionise human interaction? What is it about HTML that we should remember and respect, even as the web platform grows and changes?"},
    {id:2 , title:"Build for the future", speaker:"PAUL LEWIS", time:"11:10am", room:"Ballroom A", description: "Mobile is the future, desktop is dead! In this session I will be popping round to collect all your computers, since you clearly don’t need them anymore. No? Fine, be selfish. OK, since desktop is clearly not dead, let’s take a look at multi-device development, from mobile-first, through tablet, up to desktop. There will be a scintillating mix of browser internals, performance, up-and-coming browser features and self-deprecating bald jokes."},
    {id:3 , title:"The Chroma Zone: Engineering colour on the web", speaker:"LEA VEROU", time:"11:55am", room:"Ballroom B", description: "We use colour every day, but how well do we really understand it? More often than not, we are merely scratching the surface of a large and complicated discipline. In this dynamic session, we will scratch a little deeper, and you will be surprised at how deep the colourful rabbit hole goes. How does colour work on our screens? What’s the difference between colour models and colour spaces? Which existing features of CSS Colour are we underutilising? What’s in store for CSS Colour level 4? How can we pick both aesthetically pleasing and accessible colour combinations?"},
    {id:4 , title:"Building Multi-Screen Web Apps with Ember.js", speaker:"YEHUDA KATZ", time:"1:55pm", room:"Ballroom A", description: "Ember.js is a framework that helps you build applications with multiple screens that the user navigates between. In this talk, Yehuda will talk about the kinds of problems that come up when you have more than one screen in your application, and how using Ember.js in the normal way solves many of those problems. He’ll also talk about how having a conventional way to structure a multi-screen application helps the community to evolve shared solutions over time."}
];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};