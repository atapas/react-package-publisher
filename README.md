# react-package-publisher

`react-package-publisher` is a toolkit to help reactjs developers to build, test and publish a react component to the [Node Package Magaer(npm)](https://www.npmjs.com/). This project contains important script file consist of the commands required to build and publish a package.

# Steps to run

- Fork or clone this repo.
- Change directtory to the folder, react-package-publisher
- Edit the `package.json` with your package name, version, author, license, dependencies, devDependencies etc. Please note, the `peerDependencies` are already set for a specific version of `react` and `react-dom`. Please feel free to change the versions suitable to your need. If you are new to the npm dependency management, please [read this](https://blog.greenroots.info/npm-dependency-handbook-for-you-ckcg56tei003ejhs16wap1t8r).
- Create your component file and the component code.
- Save and run the `build.sh` file. Please note, use a unix based terminal(example, GitBash) to run the `build.sh` file.

# What is in `build.sh` file?
The `build.sh` file is the main file that helps in building, packaging and publishing your react component to the npm. It contains commands to faciliate the followings,

- Check Node, NPM and Yarn Versions.
- Remove the existing `dist` folder. This folder will be generated at the compilation step automatically.
- Remove the existing `index.js` file. This file will be generated at the compilation step automatically.
- Perform `yarn install`(Dependency Management).
- Build Components and creates `index.js` file and `dist` folder.
- Copy other required files like, `README.MD`, `*.scss` etc files to the `dist` folder.
- Create a tarball npm for local testing.
- Login and Publish. Here are 2 ways to login
  - 1. Using non interactive mode => Uncomment the line starts with npm-login-noninteractive and edit the required parameter values like, <USER_NAME>, <PASSWORD> and <EMAIL>
  - 2. Using Intercative mode(Default) => npm login will ask for username, password and email.

