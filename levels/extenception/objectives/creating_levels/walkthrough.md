# Getting Started

[Refer to the TwilioQuest Extension Docs for more information.](https://twilioquest.github.io/extension-docs/guide/levels.html)
A level in TwilioQuest is an explorable area in the game that can contain objectives, game objects, and characters for the player to interact with.

A level folder contains a configuration file (a file called `level.json`, which we will cover later on) and the following assets:

* Maps: These files specify the visual layout and game objects present within the level. A level may have multiple maps.
* Objectives: Objectives are where you will deliver most of the educational content for your level. You will describe your objective using Markdown (opens new window)and write validation code for your objective using Node.js (opens new window).
* Conversations: You can write dynamic non-player character (NPC) dialogue for the characters the player will encounter in the level.
* Event Scripting: A level folder contains an events.js file which can respond to level lifecycle events, and add dynamic behavior to your level.

## Creating a new level folder

At the time of this writing, the best way to create a new level is to copy the level folder of an existing level. This will copy all the map and tileset configuration you will need to effectively create a new level. The example level folder in the template repo (opens new window)is a good one to use. It contains all the necessary files you will need to create a level. After doing this, your new level folder should look something like this:

```bash
my_extension/
└── levels/
    ├── the_level_you_copied/
    └── your_new_level_folder/
        ├── maps/
        │   ├── default.json
        ├── objectives/
        │   └── example_objective/
        │       ├── objective.json
        │       ├── description.md
        │       ├── walkthrough.md
        │       └── validator.js
        ├── events.js
        └── level.json
```

## Configuring and building your level

After creating your new level folder, open the `level.json` file at the root of the new level folder. This configuration file contains the metadata for your new level. A full reference for this file [can be found here](https://twilioquest.github.io/extension-docs/api/levels), but here are a few properties you should make sure to change:

* `title`: The human-readable name for your level - it will show up as the title text for either the navigation interface or VR mission computer.
* `description`: The player will see this detail text if they select your level in either the nav interface or VR mission computer.
* `is_mission`: This boolean flag indicates whether or not your level will be displayed in the VR mission computer.