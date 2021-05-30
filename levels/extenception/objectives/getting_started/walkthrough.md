# Getting Started

Creating a new extension requires creating a new subfolder under your extensions folder that contains at least a package.json file. You could create your extension folder from scratch, but it is not recommended to do so. [Twilio has created a template repository on GitHub](https://github.com/TwilioQuest/twilioquest-extension-template) that should be used as a starting point.

To create your own copy of this starter code to host on GitHub (recommended!), click the green "Use this template" button.
![GitHub Green Button Image](https://twilioquest.github.io/extension-docs/assets/img/use_template.55838478.png)

## Working on your extension locally

When you've created your own copy of this template repo, clone your new repository into the extensions folder you specified in the game client when you enabled extensions.

```bash
cd /path/to/extensions/folder
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

Creating a TwilioQuest extension will require that you have [Node.js and npm](https://nodejs.org/en/download/) installed. Once you have installed Node.js, you can install the template extension's dependencies with:

```bash
npm install
```

After cloning your extension in the extensions folder, you should be able to see it in the `Extensions` submenu under `Settings` in the game client.
The template extension has a simple VR training level created for you to reference and start hacking on. Interact with the VR Training computer aboard the Fog Owl to load up this sample mission!
