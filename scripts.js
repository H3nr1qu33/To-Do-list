const form = document.querySelector('#form_task')
const input = document.querySelector('.input-task')
const tagTaskCreates = document.querySelector('.tag1')
const tagTaskFinished = document.querySelector('.tag2')
const boxTask = document.querySelector('.box-tasks')

let taskCount = 0
let finishedCount = 0


function updateTaskCounters() {
    tagTaskCreates.textContent = taskCount
    tagTaskFinished.textContent = finishedCount
}

input.addEventListener('input', () => {
    const regex = /^\s*$/
    input.value = input.value.replace(regex, '')
})


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const valueInput = input.value.trim()

    const div = document.createElement('div')
    div.classList.add('task')

    const imgCheck = document.createElement('img')
    imgCheck.setAttribute('src', 'img/CircleRegular.svg')
    imgCheck.classList.add('circle-task')

    const p = document.createElement('p')
    p.textContent = valueInput

    const imgTrash = document.createElement('img')
    imgTrash.setAttribute('src', 'img/TrashRegular.svg')
    imgTrash.classList.add('trash-task')

    div.append(imgCheck, p, imgTrash)
    boxTask.append(div)

    input.value = ''
    taskCount++
    updateTaskCounters()
});

boxTask.addEventListener('click', (e) => {

    if (e.target.classList.contains('circle-task')) {
        const task = e.target.closest('.task')
        task.classList.toggle('task-finished')

        if (task.classList.contains('task-finished')) {
            e.target.setAttribute('src', 'img/CheckCircleFill.svg')
            finishedCount++
        } else {
            e.target.setAttribute('src', 'img/CircleRegular.svg')
            finishedCount--
        }
        updateTaskCounters()
    }

    if (e.target.classList.contains('trash-task')) {
        const task = e.target.closest('.task')
        if (task.classList.contains('task-finished')) {
            finishedCount--
        }
        task.remove()
        taskCount--
        updateTaskCounters()
    }
})

updateTaskCounters()
