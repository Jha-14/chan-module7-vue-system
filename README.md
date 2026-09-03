# Student Task Management System

A Vue.js student task management system developed for Module 7.

## Features

- Add new academic tasks
- View all tasks
- Edit existing tasks
- Delete tasks with confirmation
- Search tasks by title or subject
- Form validation
- Task status tracking
- Task priority tracking
- localStorage persistence
- Responsive user interface

## Technologies Used

- Vue.js
- Vite
- Tailwind CSS
- JavaScript
- Git
- GitHub

## How to Run

Install the project dependencies:

```bash
npm install

## Module 9 - Software Evolution

### Change Request
**CR-M9-01: Add Active/Inactive Task Filter**

### Maintenance Type
Perfective Maintenance

### Target Version
1.1.0

### Change Description
Added an Active/Inactive status filter to the task list. Users can select All, Active, or Inactive to quickly view tasks based on their status.

- **All** displays all tasks.
- **Active** displays Pending tasks.
- **Inactive** displays Completed tasks.

### Affected Architecture
The existing Vue.js architecture was preserved. The change primarily affects the RecordList component and task filtering logic.

### Preserved Existing Behavior
The following existing functionality remains available:

- Create tasks
- Edit tasks
- Delete tasks
- Task search
- Input validation
- Delete confirmation
- localStorage persistence
- Responsive interface

### Testing and Build Results
- Automated tests: **7 passed**
- Test files: **2 passed**
- Production build: **Passed**
- GitHub Actions: **Passed**

### Regression Testing
The original Module 8 tests were retained and continued to pass. Two additional tests were added for Active and Inactive filtering.

### Limitations
The Active/Inactive filter maps **Pending** tasks to Active and **Completed** tasks to Inactive. No existing task-status values or localStorage schema were changed.