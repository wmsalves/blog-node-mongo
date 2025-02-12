<h1 align="center">NodeJS, Express, EJS & MongoDB Blog - CRUD Application</h1>

<p align="center">
  <img src="/finishedProject.png?raw=true" alt="finished project">
</p>

This is a simple blog application that demonstrates CRUD (Create, Read, Update, Delete) operations using Node.js, Express, EJS, and MongoDB. The application allows users to create, view, edit, and delete blog posts, making it an excellent starting point for learning about full-stack development with these technologies.

## Prerequisites

To set up and run this project, you need:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: A free MongoDB cluster. Sign up at [MongoDB Atlas](https://www.mongodb.com/)

## Setting Up the Database

1. Create a free cluster on MongoDB Atlas by following their [documentation](https://www.mongodb.com/docs/atlas/).
2. Obtain your connection string (e.g., `mongodb+srv://<username>:<password>@clusterName.xxxxxxx.mongodb.net/blog`).

## Creating the `.env` File

Create a `.env` file in the root directory of the project to store your environment variables securely. Use the following template:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@clusterName.xxxxxxx.mongodb.net/blog
JWT_SECRET=MySecretBlog
```

- Replace `<username>`, `<password>`, and `clusterName` with your MongoDB credentials.
- `JWT_SECRET` is used for authentication and should be replaced with a secure value.

## Installation and Running the Project

Follow these steps to install dependencies and start the server:

1. Install project dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

The server will start, and the application will be accessible at `http://localhost:3000` by default.

---

