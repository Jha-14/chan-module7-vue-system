import { describe, it, expect } from 'vitest'
import { filterTasks } from './filterTasks'

describe('filterTasks', () => {
  const tasks = [
    {
      id: 1,
      taskTitle: 'Study for Exam',
      subject: 'Software Engineering'
    },
    {
      id: 2,
      taskTitle: 'Create Database',
      subject: 'Database Systems'
    },
    {
      id: 3,
      taskTitle: 'Design Homepage',
      subject: 'Web Development'
    }
  ]

  it('finds a task by task title', () => {
    const result = filterTasks(tasks, 'Database')

    expect(result).toHaveLength(1)
    expect(result[0].taskTitle).toBe('Create Database')
  })

  it('finds a task by subject regardless of letter case', () => {
    const result = filterTasks(tasks, 'SOFTWARE')

    expect(result).toHaveLength(1)
    expect(result[0].subject).toBe('Software Engineering')
  })
})