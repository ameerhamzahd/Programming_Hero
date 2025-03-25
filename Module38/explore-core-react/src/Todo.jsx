export default function ToDo({task, isDone, time}) {
    if(isDone) {
        return <li>Done: {task} Duration: {time}s</li>
    }
    else{
        return <li>Not Done: {task}</li>
    }
}