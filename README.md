# Hospital Management System

The Hospital Management System is a comprehensive application designed to streamline hospital operations, including patient management, appointment scheduling, and staff coordination. This project utilizes the MERN (MongoDB, Express.js, React.js, Node.js) stack to deliver a full-stack solution.

## Features

- **Patient Management**: Efficient handling of patient records, including personal details, medical history, and treatment plans.
- **Appointment Scheduling**: Seamless scheduling and tracking of patient appointments with various departments and doctors.
- **Staff Management**: Administration of hospital staff information, roles, and schedules.
- **Dashboard Analytics**: Real-time analytics and statistics displayed on an intuitive dashboard for quick insights into hospital operations.

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux (if applicable)
- **Authentication**: JSON Web Tokens (JWT)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/23vk1/hospital_management_system.git

2. Backend Setup:
   - Navigate to the backend directory:
       ```bash
       cd hospital_management_system/Backend

   - Install backend dependencies:
       ```bash
       npm install
   - Create a .env file in the Backend directory and add the following environment variables:
       ```env
       PORT=5000
       MONGODB_URI=your_mongodb_connection_string
       JWT_SECRET=your_jwt_secret  
    Replace your_mongodb_connection_string with your actual MongoDB connection string and your_jwt_secret with a secure secret key for JWT authentication.
    
   - Start the backend server:
      ```bash
      npm start
    The backend server will run on http://localhost:5000.
   
  
3. Frontend Setup:

    - Navigate to the frontend directory:
        ```bash
        cd ../Frontend

    - Install frontend dependencies:
        ```bash
        npm install

    - Create a .env file in the Frontend directory and add the following environment variable:
        ```env
          REACT_APP_API_URL=http://localhost:5000
    This sets the base URL for API requests.

    - Start the frontend development server:
        ```bash
        npm start
    The application will be available at http://localhost:3000.


## Usage
  - **Accessing the Application**: Open your browser and navigate to http://localhost:3000 to access the Hospital Management System.
  - **User Authentication**: Register and log in to access the system's features. User roles (e.g., admin, doctor, patient) will have different access levels and functionalities.
  - **Managing Records**: Use the intuitive interface to manage patients, appointments, and staff information efficiently.

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request detailing your changes.    

## License
This project is licensed under the MIT License. See the LICENSE file for more details.


> [!NOTE]
> Ensure that you have MongoDB installed and running on your local machine or have access to a MongoDB Atlas instance. Also, update the .env files with your actual configuration details before running the application.


```pgsql
This `README.md` provides a clear and structured overview of your Hospital Management System project, including its features, technologies used, setup instructions, usage guidelines, contribution steps, and licensing information. Ensure to replace placeholder values in the `.env` files with your actual configuration details before deploying or running the application.
::contentReference[oaicite:0]{index=0}
 










  
