# FRC Dashboard Training
This repository serves as a training exercise for students and mentors wishing to learn to use the [FRC Dashboard](https://github.com/FRCDashboard/FRCDashboard) FRC user interface development library.

## Prerequisites for this trainer
FRC Dashboard uses JavaScript, HTML, and CSS code. It is HIGHLY recommended that you gain at least some knowledge of all three of these languages before attempting this training or building on to FRC Dashboard. [Codecademy](https://codecademy.com)'s courses "JavaScript" and "HTML & CSS" are a quick and easy way to get up and running with these languages, and thus FRC Dashboard and other web-based software.

To start the server, you'll also need very basic knowledge of using the Terminal (or cmd, if you're on Windows). We recommend checking out Codecademy's course on the Terminal if you need help with this.

Note: This software also uses a web server which is written in Python. You probably won't need to do modify this, so knowledge of Python isn't really necessary. However, if you're interested (which is great), Codecademy has a course for that too.

## Dependencies:
* Python 3
* `pynetworktables2js`:

    pip3 install pynetworktables2js

(If you don't have administrator privileges, you can put `--user` at the end of that command to install the package for only your account.)

## Starting the server
Use the `cd` command in Terminal (Linux/Mac) or cmd (Windows) to navigate to this directory. Then execute:

    python3 dashboardServer.py

This will start the server, hosting your code at http://localhost:8888. Open that page to view your dashboard or to use it in competition.

## Tasks
1. TODO