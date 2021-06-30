const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const path = require("path");
app.use(cors());

const results = [
  {
    header: "WHAT'S IN BED!",
    text: "Place a defrosted Gel Freezer Block somewhere around the feet inside the bed! Works well next to the bed where a person steps when they get out of bed as well!",
  },
  {
    header: "OH DEAR!",
    text: "Put a coat hanger or two in between the sheet and the mattress on someone's bed.",
  },
  {
    header: "LABELLED",
    text: "Take Elmer's Glue (make sure that it is either Elmer's or washable) and glue a nice piece of cardboard with wording or anything to your friend's chest, feet, arms, legs. But not to the face .. don't want to restrict breathing.",
  },
  {
    header: "TOILET",
    text: "Put packing bubbles (you know that stuff that keeps things from breaking that's fun to stomp on) under the toilet seat! This is funny!",
  },
  {
    header: "COTTON BALLS",
    text: "When it is below freezing outside, dip cotton balls in water and place them all over the car. Contact will freeze the water making it stick until the temperature climbs above freezing.",
  },
  {
    header: "WHOOPEE",
    text: "Hide a couple of Whoopee cushions in the couch. When everybody goes to sit down there will be a good laugh or two.",
  },
  {
    header: "HAPPY",
    text: "Fill the defroster vents of the front window of someone's car with confetti.",
  },
  {
    header: "SNOW WHITE",
    text: "Fill the front of the hair-dryer with baby powder. When they turn it on, pure white, like snow!",
  },
  {
    header: "EGGS",
    text: "Glue eggs to the carton and beg for eggs in the morning.",
  },
  {
    header: "MY TV",
    text: "Place a piece of black tape over the remote sensor of the TV - No one would be able to change channels with the remote!",
  },
];

const resultURL = "https://www.fun-stuff-to-do.com/good-pranks.html";

app.get("/", (req, res) => res.send(results));

app.listen(port, () =>
  console.log(`Express departing now from http://localhost:${port}!`)
);
