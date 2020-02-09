# Developer Profile Generator with Node.js and ES6

## App Description

A command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command:
node index.js. The user will be prompted for a favorite color, which will be used as the background color to style created portfolio.html and portfolio.pdf.

##  Business Context

Following the common templates for user stories, we can frame this challenge as follows:  

AS A product manager

I WANT a developer profile generator

SO THAT I can easily prepare reports for stakeholders  

When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

## Demo

![](developer-profile-generator.gif)

## The PDF will be populates the following:

- Profile image
- User name
- User location via Google Maps
- User GitHub profile
- User blog
- User bio
- Number of public repositories
- Number of followers
- Number of GitHub stars
- Number of users following

##  NPM/API/Technologies Used

### Inquirer npm

https://www.npmjs.com/package/inquirer 

Running the application from the command line will require some user input (github username and favorite color).

### HTML-PDF npm
https://www.npmjs.com/package/html-pdf

The most approachable way to create a .pdf file would be to first generate some html. 

### GitHub Developer API

In order to create the content necessary for the pdf, information from github is pulled. All the information we need is available through the github api: https://developer.github.com/v3 via two different endpoints:

https://developer.github.com/v3/users/#get-a-single-user - Users Endpoint

https://developer.github.com/v3/repos/ - Repos Endpoint

### Axios

The ajax-like functionality of axios (https://www.npmjs.com/package/axios) is used to call the endpoints.