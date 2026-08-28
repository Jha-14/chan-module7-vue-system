# Defect Report

## Defect ID
DEF-001

## Defect Title
Duplicate task titles were accepted

## Feature
Add Record / Task Validation

## Description
The application previously allowed a user to add a task using a task title that already existed in the task list.

## Steps to Reproduce
1. Add a task with the title "Database Project".
2. Add another task using the same title "Database Project".
3. Click "Add Task".

## Expected Result
The application should reject the duplicate task title and display: "A task with this title already exists."

## Actual Result Before Correction
The application allowed the duplicate task to be submitted because duplicate-title validation was not implemented.

## Severity
Medium

## Correction
Added duplicate-title validation to RecordForm.vue.

## Retest Result
PASS - The automated duplicate-title test passed after the correction.

## Regression Result
PASS - The existing automated tests continued to pass after the correction.
