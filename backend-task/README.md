# Backend Task

## Overview
This project is a backend service built using Node.js with Express and PostgreSQL. It also uses third-party libraries like `axios` for making HTTP requests, `dotenv` for managing environment variables, and `node-cron` for scheduling tasks.

## Prerequisites
Ensure that the following are installed on your system:
- [Node.js](https://nodejs.org/en/download/) (v14+)
- [PostgreSQL](https://www.postgresql.org/download/) (v12+)
- [Nodemon](https://www.npmjs.com/package/nodemon) (for development)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/DiptiPatil1700/Dipti_MERN_stack.git

2. Navigate into the project directory:

    ```bash
    cd backend-task
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

## Setup

1. Add the following environment variables in the `.env` file:

    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=your_db_username
    DB_PASSWORD=your_db_password
    DB_DATABASE=your_db_name
    ```

## Running the Application

1. Start the PostgreSQL database.

2. Run the application in development mode:

    ```bash
    npm start
    ```

   The server will automatically restart with `nodemon` when changes are made to the code.

## Testing
There are no test scripts currently included in this project.

## Dependencies

- **axios**: HTTP client for making requests.
- **cors**: Middleware to enable Cross-Origin Resource Sharing.
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Web framework for Node.js.
- **node-cron**: Job scheduling library for Node.js.
- **pg**: PostgreSQL client for Node.js.
- **nodemon**: Tool for restarting the server on file changes during development.

## License
This project is licensed under the ISC License.
