var phones = [
    {id:0 , title:"Phone 01", speaker:"DANIEL LAURINDO", time:"9:40am", room:"Ballroom A", description: "In this session, you'll learn how to build a native-like mobile application using the Ionic Framework, AngularJS, and Cordova."},
    {id:1 , title:"Phone 02", speaker:"LIVIA RITA", time:"10:10am", room:"Ballroom B", description: "In this session, you'll learn everything you need to know to start building next-gen JavaScript applications using AngularJS."},
    {id:2 , title:"Phone 03", speaker:"BIANCA", time:"11:10am", room:"Ballroom A", description: "In this session, John will tell you all you need to know to start contributing to Apache Cordova and become an Open Source Rock Star."},
    {id:3 , title:"Phone 04", speaker:"DAVID", time:"3:10Pm", room:"Ballroom B", description: "In this session, you will learn performance techniques to speed up your mobile application."},
    {id:4 , title:"Phone 05", speaker:"VERA", time:"2:00pm", room:"Ballroom A", description: "Join Laura to learn different approaches to build modular JavaScript applications."}
];

exports.findAll = function (req, res, next) {
    res.send(phones);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(phones[id]);
};