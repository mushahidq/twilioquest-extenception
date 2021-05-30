/*
In your validation code, you can require core Node.js modules,
third-party modules from npm, or your own code, just like a regular
Node.js module (since that's what this is!)
*/
const assert = require("assert");
const fetch = require('node-fetch');
const fs = require("fs");
var path = require('path');
/*
Objective validators export a single function, which is passed a helper
object. The helper object contains information passed in from the game UI,
such as what the player entered into the fields in the hack interface.

The helper object also has "success" and "fail" callback functions - use
these functions to let the game (and the player) know whether or not they 
have completed the challenge as instructed.
*/
module.exports = async function (helper) {
  // We start by getting the user input from the helper
  //const { answer1, answer2 } = helper.validationFields;
  const answer1 = helper.getNormalizedInput("answer1", { lowerCase: false });
  const answer2 = helper.getNormalizedInput("answer2", { lowerCase: false });
  const answer3 = helper.getNormalizedInput("answer3", { lowerCase: false });

  if (!answer1) {
    return helper.fail(`
      Please the your GitHub username and repository name.
    `);
  }

  try {
    fetch(`https://api.github.com/repos/${answer1}`)
    .then(res => res.json())
    .then(json => {
      if(json.message){
        assert.notStrictEqual(json.message, "Not Found")
      }
    });

  } catch(e) {
    return helper.fail(`
      The response provided to the first question is either an invalid
      username or repository.
  `);
  }
  
  if (!answer2) {
    return helper.fail(`
      Please enter the answer to the second question.
    `);
  }

  try {
    var stats = fs.statSync(path.join(answer2,"package.json"));
    if (!stats.isFile()) throw "Not a file";
  } catch (e) {
    return helper.fail(`
      The second answer you provided was incorrect. The package.json
      file was not found in that folder.
    `);
  }

  if (!answer3) {
    return helper.fail(`
      Please enter the answer to the third question.
    `);
  }

  try {
    assert.strictEqual("VR Training Computer", answer3);
  } catch (e) {
    return helper.fail(`
      The second answer you provided was incorrect. The correct answer
      is "VR.....".
    `);
  }
  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!
  helper.success(
    `
      Hooray! You did it! You can now start editing this extension!
    `,
    [{ name: "EXTENSION_FOLDER", value: answer2 }]
  );
};
