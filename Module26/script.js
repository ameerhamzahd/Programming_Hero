// addEventListener()
document.getElementById('btn-make-green').addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

// practice:01(DOM, EventListener)
document.getElementById('click-here').addEventListener('click', function () {
    const updatePosition = document.getElementById('update-position');
    updatePosition.innerText = 'MERN Stack Developer';
});

// practice:02(DOM, EventListener)
document.getElementById('btn-submit').addEventListener('click', function () {
    const inputCGPA = document.getElementById('input-cgpa');
    const showCGPA = inputCGPA.value;

    const updatedCGPA = document.getElementById('updated-cgpa');
    updatedCGPA.innerText = 'CGPA: ' + showCGPA;
});

// practice:03
document.getElementById('btn-post-comment').addEventListener('click', function () {
    const inputComment = document.getElementById('input-comment');
    const showComment = inputComment.value;

    const commentContainer = document.getElementById('comment-container');

    const newComment = document.createElement('p');
    newComment.classList.add('comment-box-styling');
    newComment.innerText = showComment;

    commentContainer.appendChild(newComment);
    inputComment.value = '';
});

// practice:04 (Delete confirmation button)
document.getElementById('input-delete-repo').addEventListener('keyup', function (event) {
    const inputDeleteRepo = event.target.value;
    const btnDelete = document.getElementById('btn-delete');

    if (inputDeleteRepo === 'delete' || inputDeleteRepo === 'DELETE' || inputDeleteRepo === 'Delete') {
        btnDelete.removeAttribute('disabled');

        btnDelete.addEventListener('click', function () {
            const githubRepoTitle = document.getElementById('GitHub-repo-title');
            githubRepoTitle.style.display = 'none';
        });
    } else {
        btnDelete.setAttribute('disabled', true);
    }
});

// practice:05(Event Delegate)
document.getElementById('item-list').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
});

document.getElementById('btn-add-item').addEventListener('click', function () {
    const ol = document.getElementById('item-list');
    const li = document.createElement('li');
    li.innerText = 'new item';
    ol.appendChild(li);
});