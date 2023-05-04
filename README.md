# amazon_clone_mern
A fullstack web app of amazon (clone) with CRUD operation.

MERN Stack Basic Setup
This is a basic setup for a MERN (MongoDB, Express, React, Node.js) stack web application.

Prerequisites
Node.js (v12 or higher)
MongoDB
Setup
Clone the repository: git clone https://github.com/your-username/your-repo.git

Change into the project directory: cd your-repo

Install dependencies:

servers: cd backend then run npm install
amazon_clone: cd frontend then run npm install
Create a .env file in the backend directory with the following environment variables:

makefile
Copy code
PORT=5000
MONGODB_URI=<your-mongodb-uri>
Replace <your-mongodb-uri> with the URI for your MongoDB database.

Start the backend server: cd backend then run npm start

Start the frontend server: cd frontend then run npm start

Open your browser and go to http://localhost:3000

Folder Structure
backend: contains the Express.js server code
frontend: contains the React.js client code
public: contains the static assets for the frontend
src: contains the source code for the frontend
License
This project is licensed under the MIT License. See the LICENSE file for details.
