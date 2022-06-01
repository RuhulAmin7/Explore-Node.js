const Event = require("events");

const events = new Event();

events.on("myEvent", () => {
  console.log("This is my my event");
});

events.emit("myEvent");
