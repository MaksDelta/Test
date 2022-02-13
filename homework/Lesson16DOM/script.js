const title = 'Some blog';

const titleElement = document.querySelector('#title');

titleElement.innerHTML = title;



const data = [{
        name: 'Hello',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae, eligendi quia nemo, explicabo sapiente cupiditate tempore natus ipsam recusandae fugit laudantium animi nam excepturi quos incidunt rerum omnis aspernatur.',
        comments: ['new Comment', 'newCom 2'],
    },
    {
        name: 'Hello',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quae, eligendi quia nemo, explicabo sapiente cupiditate tempore natus ipsam recusandae fugit laudantium animi nam excepturi quos incidunt rerum omnis aspernatur.',
        comments: [],
    },
];

if (!localStorage.getItem('data')) {
    localStorage.setItem('data', JSON.stringify(data));
}

const data1 = JSON.parse(localStorage.getItem('data'));

const addCommentBlock = (postElement, postItem) => {

    const commentsBlock = document.createElement('div');
    commentsBlock.innerHTML = '<h3>Comments:</h3>';

    const comments = document.createElement('div');
    commentsBlock.appendChild(comments);
    

    postItem.comments.forEach((comment) => {
        const commentElement = document.createElement('h5');
        commentElement.innerText = comment;
        comments.appendChild(commentElement);
    });

    postElement.appendChild(commentsBlock);

    const newForm = document.createElement('form');
    commentsBlock.appendChild(newForm);

    const inputComment = document.createElement('input');
    inputComment.type = 'text';

    const submitComment = document.createElement('button');
    submitComment.type = 'submit';
    submitComment.innerText = 'Add comment';

    newForm.appendChild(inputComment);
    newForm.appendChild(submitComment);

    mainContainer.appendChild(postElement);


    newForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const postElement = document.createElement('form');
        postElement.classList.add('post');

        const newComment = document.createElement('h5');
        newComment.innerHTML = inputComment.value;
        comments.appendChild(newComment);


        data1.forEach((item) => {
            if (item.name === postItem.name) {
                item.comments.push(inputComment.value);
            }
        });

        localStorage.setItem('data', JSON.stringify(data1));

        inputComment.value = '';
    });
};




const mainContainer = document.querySelector('#comment_field');
const showData = (dataToShow) => {
    dataToShow.forEach((postItem) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const newH1 = document.createElement('h1');
        newH1.innerHTML = postItem.name;
        postElement.appendChild(newH1);

        const newP1 = document.createElement('p');
        newP1.innerHTML = postItem.description;
        postElement.appendChild(newP1);


        addCommentBlock(postElement, postItem);

    });
};

showData(data1);





const addPostComment = document.querySelector('#formList');
const nameInput = document.querySelector('#nameInput');
const descriptionInput = document.querySelector('#descriptionInput');

addPostComment.addEventListener('submit', (event) => {
    event.preventDefault();


    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const newDataItem = {
        name: nameInput.value,
        description: descriptionInput.value,
        comments: [],
    }
    data1.push(newDataItem);

    localStorage.setItem('data', JSON.stringify(data1));

    const newH1 = document.createElement('h1');
    newH1.innerHTML = nameInput.value;
    postElement.appendChild(newH1);

    nameInput.value = '';

    const newP1 = document.createElement('p1');
    newP1.innerHTML = descriptionInput.value;
    postElement.appendChild(newP1);

    descriptionInput.value = '';

    mainContainer.appendChild(postElement);


    addCommentBlock(postElement, newDataItem);

    event.preventDefault();
});