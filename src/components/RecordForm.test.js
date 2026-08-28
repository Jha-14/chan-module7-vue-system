import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import RecordForm from './RecordForm.vue'

describe('RecordForm', () => {
  it('shows an error when required fields are empty', async () => {
    const wrapper = mount(RecordForm)

    await wrapper.find('form').trigger('submit')

    expect(wrapper.text()).toContain(
      'Please complete all required fields.'
    )
  })

  it('rejects a task with a duplicate title', async () => {
  const wrapper = mount(RecordForm, {
    props: {
      existingTasks: [
        {
          id: 1,
          taskTitle: 'Database Project'
        }
      ]
    }
  })

  await wrapper.find('input[placeholder="Enter task title"]')
    .setValue('Database Project')

  await wrapper.find('input[placeholder="Enter subject"]')
    .setValue('Database Systems')

  await wrapper.find('input[type="date"]')
    .setValue('2026-09-01')

  await wrapper.find('form').trigger('submit')

  expect(wrapper.text()).toContain('A task with this title already exists.')
})
    })

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import RecordList from './RecordList.vue'

describe('RecordList', () => {
  it('displays the provided task records', () => {
    const tasks = [
      {
        id: 1,
        taskTitle: 'Study for Exam',
        subject: 'Software Engineering',
        description: 'Review Module 8',
        dueDate: '2026-09-01',
        priority: 'High',
        status: 'Pending'
      },
      {
        id: 2,
        taskTitle: 'Create Database',
        subject: 'Database Systems',
        description: 'Finish database design',
        dueDate: '2026-09-02',
        priority: 'Medium',
        status: 'Completed'
      }
    ]

    const wrapper = mount(RecordList, {
      props: { tasks }
    })

    expect(wrapper.text()).toContain('Study for Exam')
    expect(wrapper.text()).toContain('Software Engineering')
    expect(wrapper.text()).toContain('Create Database')
    expect(wrapper.text()).toContain('Database Systems')
    expect(wrapper.text()).toContain('2 tasks')
  })
})