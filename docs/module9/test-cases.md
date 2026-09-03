# Module 9 Updated Manual Test Cases

| ID | Test Case | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| M9-T01 | Add a new task with valid information | Task is added successfully | Task was added successfully | PASS |
| M9-T02 | Edit an existing task | Task information is updated successfully | Task was updated successfully | PASS |
| M9-T03 | Delete an existing task | Delete confirmation appears and task is removed after confirmation | Confirmation appeared and task was removed | PASS |
| M9-T04 | Search for a task by title | Matching task is displayed | Matching task was displayed | PASS |
| M9-T05 | Search for a task by subject | Matching task is displayed | Matching task was displayed | PASS |
| M9-T06 | Submit a task with invalid or missing required information | Validation message prevents invalid submission | Validation prevented invalid submission | PASS |
| M9-T07 | Select All status filter | All tasks are displayed | All tasks were displayed | PASS |
| M9-T08 | Select Active status filter | Only Pending tasks are displayed | Only Pending tasks were displayed | PASS |
| M9-T09 | Select Inactive status filter | Only Completed tasks are displayed | Only Completed tasks were displayed | PASS |
| M9-T10 | Refresh the browser after adding tasks | Saved tasks remain available through localStorage | Tasks remained available after refresh | PASS |
| M9-T11 | Use the status filter after searching | Search and status filtering work together without breaking the list | Filtering continued to work correctly | PASS |
| M9-T12 | View the system on a smaller browser window | Layout remains usable and responsive | Layout remained usable and responsive | PASS |

## Regression Summary

All 12 manual test cases passed after implementing CR-M9-01.

The new Active/Inactive filter works while existing CRUD, search, validation, delete confirmation, localStorage persistence, and responsive behavior remain functional.