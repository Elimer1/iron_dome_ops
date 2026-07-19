# BACKGROUND

An air defense unit operates an internal system for managing operational incidents in real time.
During operational activity, reports are received from radar systems and various sensors.
When a threat is detected, an operational incident is opened in the system.

# PROJECT GOAL

Build a backend server using:
Node.js ●
Express.js ●
MySQL ●
mysql2 ●
Docker ●
...employing a basic architecture and an organized folder structure.

# FUNCTIONALITY

Operators can:
● Open an incident
● Update incident status
● View open incidents
● Log actions taken
● The system will store all data using MySQL

# ROUTES

| Method    | Endpoint         | Description                            |
| :-------- | :--------------- | :------------------------------------- |
| **POST**  | `/incidents`     | Create a new system incident           |
| **GET**   | `/incidents`     | Retrieve and filter existing incidents |
| **PATCH** | `/incidents/:id` | Update incident status or details      |

---

# DATABASE

| Table         | Primary Purpose           | Key Fields                           |
| :------------ | :------------------------ | :----------------------------------- |
| **operators** | Staff Identity Management | id, name, created_at                 |
| **incidents** | Lifecycle Tracking        | id, operator_id, status, description |
| **logs**      | Immutable Audit Trail     | id, incident_id, operator_id, action |

# PROJECT STRUCTURE

PROJECT/
├── controllers/  
│ ├── incidentController.js
│ ├── logsController.js
│ └── operatorController.js
├── db/  
│ ├── database.js
│ └── database.sql
├── middleware/  
│ └── errorHandler.js
├── repositories/  
│ ├── baseRepository.js
│ ├── incidentRepository.js
│ ├── logsRepository.js
│ └── operatorRepository.js
├── routes/  
│ ├── incidents.js
│ ├── logs.js
│ └── operators.js
├── services/  
│ ├── incidentService.js
│ ├── logService.js
│ └── operatorService.js
├── .env  
├── .gitignore  
├── app.js  
├── docker-compose.yml  
└── package.json

# Prerequisites

- **Node.js** (v18 or higher)
- **Docker & Docker Compose** (for the MySQL database)
- **npm**

# requirements

npm install
docker-compose up -d
npm start
