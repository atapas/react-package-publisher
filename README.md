# react-package-publisher

`react-package-publisher` is a toolkit for reactjs developers to build, test and publish a react component to the [Node Package Magaer(npm)](https://www.npmjs.com/). This project contains important commands in a script file to build, test and publish a package.

> [react-show-greeting](https://www.npmjs.com/package/react-show-greeting) is reactjs based package published using the `react-package-publisher`. This is an example package to greet you once you type-in your name.

# Usage

- Fork or clone this repo.
- Change the directory to, react-package-publisher
- Edit the `package.json` with your package name, version, author, license, dependencies, devDependencies etc. Please note, the `peerDependencies` are already set for a specific version of `react` and `react-dom`. Please feel free to change the versions suitable to your need. If you are new to the npm dependency management, please [read this](https://blog.greenroots.info/npm-dependency-handbook-for-you-ckcg56tei003ejhs16wap1t8r).
- Create your component file and the component code.
- Save and run the `build.sh` file. Please note, use a unix based terminal(example, GitBash) to run the `build.sh` file.

# What is in `build.sh` file?
The `build.sh` file is the main file that helps in building, packaging and publishing your react component to the npm. It helps automating many steps that are usually need to execute line by line and time consuming. It contains commands to faciliate the followings,

- Check Node, NPM and Yarn Versions.
- Remove the existing `dist` folder. This folder will be generated at the compilation step automatically.
- Remove the existing `index.js` file. This file will be generated at the compilation step automatically.
- Perform `yarn install`(Dependency Management).
- Build Components and creates `index.js` file and `dist` folder.
- Copy other required files like, `README.MD`, `*.scss` etc files to the `dist` folder.
- Create a tarball npm for local testing.
- Login and Publish. Here are 2 ways to login
  - 1. Using Intercative mode(Default) => npm login will ask for username, password and email.
  - 2. Using non interactive mode => Edit the file to comment the above option and uncomment the line starts with `npm-login-noninteractive`. Please edit the required parameter values like, <USER_NAME>, <PASSWORD> and <EMAIL>. Please install [npm-login-noninteractive](https://www.npmjs.com/package/npm-login-noninteractive) globally as depenency to use this option.
 
 # Further Read
 A step-by-step turorial to use this toolkit is on the way, please stay tuned.
  
  

