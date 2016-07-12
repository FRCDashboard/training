# FRC Dashboard Training
This repository serves as a training exercise for students and mentors wishing to learn to use the [FRC Dashboard](https://github.com/FRCDashboard/FRCDashboard) FRC user interface development library.

## Prerequisites for this trainer
FRC Dashboard uses JavaScript, HTML, and CSS code. It is HIGHLY recommended that you gain at least some knowledge of all three of these languages before attempting this training or building on to FRC Dashboard. [Codecademy](https://codecademy.com)'s courses ["JavaScript"](https://www.codecademy.com/learn/javascript) and ["HTML & CSS"](https://www.codecademy.com/learn/web) are a quick and easy way to get up and running.

To start the server, you'll also need very basic knowledge of using the Terminal (or cmd, if you're on Windows). We recommend checking out Codecademy's lesson ["Learning the Command Line"](https://www.codecademy.com/learn/learn-the-command-line) if you need help with this.

**Note:** This software also uses a web server which is written in Python. You probably won't need to do modify this, so knowledge of Python isn't really necessary. However, if you're interested (which is great), Codecademy has [a course for that too](https://www.codecademy.com/learn/python).

## Dependencies:
* Python 3
* [pynetworktables2js](https://github.com/robotpy/pynetworktables2js#installation)
    * If you don't have administrator privileges, you can put `--user` at the end of the installation command.

## Starting the server
Use the `cd` command in Terminal (Linux/Mac) or cmd (Windows) to navigate to this directory. Then execute:

    python3 server.py

This will start the server, hosting your code at http://localhost:8888. Open that page to view your dashboard or to use it in competition.

**Note:** The actual dashboard is usually opened in a slightly different way, using something called Electron. You don't have to worry about that yet.

## Tasks
1. Take a look at the checkbox with the ID `#light`. This checkbox should work perfectly.
2. Use this as a model to find the problems with the button underneath `#light`. _Hint: You may need to check the ID of the button, as well as the object at the top of `ui.js`._
3. Now, add a new control element, a slider, to allow choosing a value from 0-50. Make it work just like the other two elements. _Hint: `type="range"` makes a [slider](http://www.w3schools.com/jsref/dom_obj_range.asp), and element.value will get its value._
4. Make several more elements of different kinds for practice. Once you have a good understanding of how the dashboard code works, you should be ready to start building your own dashboard. See you in competition.