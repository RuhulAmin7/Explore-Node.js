const Event = require("events");

const events = new Event();

events.on("myEvent", (p) => {
  console.log("This is my event");
  console.log(p);
});

events.emit("myEvent", {
  name: "node.js",
  birthYear: "2009",
});
