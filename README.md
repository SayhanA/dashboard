
# Project Title

A brief description of what this project does and who it's for

Here's a template for your README.md file:

# Project Management Dashboard

## Overview
This project is a dashboard for a project management application. It allows users to manage tasks and projects efficiently. The dashboard includes features such as authentication, project overview, project details, task management, task filters, search functionality, and an interactive dashboard.

## Features
- **Authentication Page**: Users can log in with a form that includes validation using Ant Design components. Mock responses are provided for successful and unsuccessful logins.
- **Projects Overview Page**: Displays a list of projects with options to view, edit, or delete. Project data is fetched using React Query from a mock API.
- **Project Details Page**: Shows detailed information about selected projects, including tasks, team members, and recent activities. Functionalities to add new tasks and assign team members are included.
- **Task Management**: Tasks can be added, edited, or marked as completed. Each task has a detailed view with descriptions, deadlines, and assigned members. Zustand is used for state management, including implementing a drag-and-drop feature to change task statuses.
- **Task Filters and Search Functionality**: Users can filter tasks by status, due date, or assignee. A search bar is provided for quick task search.
- **Interactive Dashboard**: Utilizes Ant Design components for modals, dropdowns, and tooltips to enhance interactivity. All components are responsive with Tailwind CSS.

## Technical Requirements
- **Framework**: Next.js is used for routing and server-side rendering.
- **State Management**: Zustand manages the global state.
- **Data Fetching**: React Query handles asynchronous data fetching, state management, and cache management.
- **UI Components**: Ant Design provides pre-built UI components for improved user experience.
- **Styling**: Tailwind CSS is implemented for responsive design and custom styling needs.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository_url>
   ```

2. Install dependencies:
   ```
   cd project-management-dashboard
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open http://localhost:3000 in your browser to view the application.

## Architecture Overview
- **Frontend Framework**: Next.js is chosen for its routing capabilities and server-side rendering.
- **State Management**: Zustand is used for managing global state, providing a simple and efficient solution.
- **Data Fetching**: React Query is employed for handling asynchronous data fetching, state management, and cache management, enhancing the performance of the application.
- **UI Components**: Ant Design components are utilized to create a consistent and visually appealing user interface.
- **Styling**: Tailwind CSS is used for responsive design and custom styling, providing flexibility and ease of use.

## Folder Structure
```
project-management-dashboard/
├── components/
│   ├── Authentication/
│   ├── Projects/
│   ├── ProjectDetails/
│   ├── TaskManagement/
│   └── ...
├── pages/
│   ├── index.js
│   ├── login.js
│   ├── project/[id].js
│   ├── ...
├── public/
│   └── ...
├── styles/
│   └── ...
├── README.md
└── ...
```

## Contributors
- [Your Name](https://github.com/your_username)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.