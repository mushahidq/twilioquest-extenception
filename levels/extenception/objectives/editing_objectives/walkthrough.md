# Editing Objectives

[TwilioQuest Extensions Docs](https://twilioquest.github.io/extension-docs/api/)

[TwilioQuest Extensions API Docs](https://twilioquest.github.io/extension-docs/guide/)

Below are some examples from the TwilioQuest Extension Guide

## `objective.json`

```json
{
  "title": "Fog Owl: Plant a Tree!",
  "description": "Playing TwilioQuest supports reforestation in Australia. Click <strong>HACK</strong>, and Twilio will donate a dollar to plant a tree!",
  "validation_fields": [
    {
      "name": "prompt",
      "type": "prompt",
      "placeholder": "",
      "label": "Click HACK to plant a tree."
    }
  ],
  "show_ide": false,
  "rewards": {
    "xp": 100
  }
}
```

## `validator.js`

This is a validator that uses an asynchronous network request to check if a user entered a valid GitHub username in an objective.

```javascript
const got = require("got");

module.exports = async (helper) => {
  const username = helper.getNormalizedInput("username", { lowerCase: false });

  if (!username) {
    return helper.fail(`Please enter the username of your GitHub account!`);
  }

  try {
    const response = await got(`https://api.github.com/users/${username}`, {
      throwHttpErrors: false,
    });

    if (response.statusCode === 200) {
      return helper.success(
        `We found your GitHub user, ${username}. Good job!`,
        [{ name: "GITHUB_USERNAME", value: username }]
      );
    } else {
      helper.fail(
        `We couldn't find the GitHub user, ${username}. Is there a typo in the username?`
      );
    }
  } catch (err) {
    helper.fail(
      `Something went wrong when we tried to validate your GitHub username!
      
      ${err}`
    );
  }
};
```
