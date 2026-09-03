export function filterTasks(tasks, keyword = '', status = 'All') {
  const term = keyword.toLowerCase().trim()

  return tasks.filter(task => {
    const matchesKeyword =
      !term ||
      task.taskTitle.toLowerCase().includes(term) ||
      task.subject.toLowerCase().includes(term)

    const matchesStatus =
      status === 'All' ||
      (status === 'Active' && task.status === 'Pending') ||
      (status === 'Inactive' && task.status === 'Completed')

    return matchesKeyword && matchesStatus
  })
}