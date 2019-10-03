# Boomazon
unit 10 Node Homework
**Creator**: `Christin Boner`

**Created on**: `October 2, 2019`

- - -

## ABOUT THE APP
This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents the customer interface. The  `Command` is:

   * `node boom.js`

- - -
## HOW TO USE Boomazon
### **Video Guide**

Watch the video here: https://drive.google.com/file/d/16RYCPXsASuEmGaIgbq68JGGzOeZ8_DvU/view


### **Step by Step instructions**

1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `boom.js` file. 
3. You can begin the app by running `node boom.js`. 

    **Cycle 1**: Upon running the initial command:
    
        `node boom.js`
    
    Output: The system will display a table of information retrieved from a mySQL database and prompt two integer selections to begin the app. 

    **Cycle 2**: After choosing your product and amount to purchase:
    
    Output 1: The system will display a message to reflect whether the item is IN stock.

    Output 2: OR whether the number you requested is actually available.


    **Final Cycle**: Once you have gone through this process, the database will be updated and a new table will print.
    Then you will be prompted on whether or not you would like to continue with another item.
    Rinse & Repeat.
- - -

## TECHNOLOGIES USED
* Javascript
* Nodejs
* mySQL
* Node packages:
    * mysql
    * inquirer

* GitBash
* GitHub