# Editing Objectives

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Go through the content given below.</li>
  <li>Change the objective in your level as you see fit. You can add another input, change its validation etc.</li>
</ul>
</div>

You can use objectives with laser barriers, chests etc to show the user required steps to complete the level.
Laser barriers are used to show necessary steps wheras chests like this are used to denote rewards like custom assets or more `xp`.

## `objective.json`

Configuration properties for your objective are editable in `levels/<level_name>/objectives/<objective_name>/objective.json`.
Some important components are listed below:

* `title`: This text is played at the top of the Hack Interface when the objective is opened.
* `description`: This text is showed on the first page of the Hack Interface. It is intended to give the player a small bit of context about this objective. HTML elements are allowed in this string like `<strong>`.
* `validation_fields`: This is a list of the user input fields a player will have access to. They're used to pass information into a `validator.js` file so that player's input can be validated as part of the objective validation process. Even objectives that have no need for player input should make use of the prompt type.
* `rewards`: This is an object that describes the experience and item rewards that a player receives if they pass the validation for this objective.

[Breakdown of all the components of `objective.json`](https://twilioquest.github.io/extension-docs/api/objectives.html)

## `validator.js`

The code for validating the user inputs from the `validation_fields` is stored in the `validator.js` file. This is a node module so it can import other node modules and these can be used to execute code in reuntime environments like python, access the file system etc.
The validator also has a `helper` object that is passed to it. This is used for various things in TwilioQuest. It can store and access environment variables inside TwilioQuest, access and modify objectives, display messages to the user, decide when the user has failed or successfully completed the objective etc.

We hope you learned something useful from this extension that would inspire and help you creat your own TwilioQuest extensions. Thanks for playing.
