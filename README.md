This project has been hosted on:

https://pizza-innoscripta-front.herokuapp.com/

InnoScripta frontend assignment 

1. Task description
Let’s say you want to start a new pizza delivery business. Please create a web application for
ordering pizza for your clients, which contains a shopping cart. Take the pizza order and the
delivery address and contact details for the client. Login is not required but could be available
for checking the history of orders.


2. Requirements
• Your clients should be able to order pizzas from the menu
• The menu contains at least 8 pizzas
• You can decide what else you want in the menu
• Processing order/etc. with payment is NOT required. Concentrate on the interface to your
pizza customer up to the point the customer confirms his order.
• The pizza order process should cover ordering single or several pizzas with definition of the
quantity and calucation of a total price in Euros and US$ also adding delivery costs to the bill.


• Deployment of the application: Heroku
• This is an endpoint for checking remote "https://remotemysql.com/" database state

https://innoscripta-pizza-backend.herokuapp.com/api/orders


Repo can easily be cloned or pulled and "npm install" will implement all dependencies and dev dependencies needed for project to be runned locally. As usual, "npm start" runs projectt on http://localhost.
Frontend testing perforemd by few snapshots tests performed with Jest and Enzyme... "npm test" will run these few test.