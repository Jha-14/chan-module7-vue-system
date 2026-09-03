# CR-M9-01: Add Active/Inactive Task Filter

## Maintenance Type

Perfective Maintenance

## Problem

The current task management system allows users to add, edit, delete, and search tasks, but it does not provide a quick way to filter tasks based on their status.

## Desired Outcome

Users can choose **All**, **Active**, or **Inactive** to quickly view matching tasks while preserving all existing CRUD features.

## Acceptance Criteria

1. A status filter is available in the task list.
2. **All** displays every task.
3. **Active** displays only Pending tasks.
4. **Inactive** displays only Completed tasks.
5. Existing CRUD, search, validation, delete confirmation, and localStorage behavior continue to work.

## Priority

Medium

## Affected Areas

* RecordList component
* Filtering logic
* Automated tests
* Documentation
