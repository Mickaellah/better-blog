console.log('it works');


// Grab all the element that I might need for this exercise.

const postList = document.querySelector("#post-list");
const cardBody = document.querySelector(".card-body");
const form = document.querySelector("#post-form");
const newPostTitle = document.querySelector('#postTitle');
const newPostContent = document.querySelector(`[name="postContent"]`);
const newAuthor = document.querySelector(`[name="postAuthor"]`);
const newImage = document.querySelector(".card-img-top");
const submitButton = document.querySelector(".btn-primary");
const formCard = document.querySelector("#form-card");
const showForm = document.querySelector("#show-form");
const errMessage = document.querySelector(".invalid-feedback");
const textAreaErrMsg = document.querySelector("#error-message");
const deleteButton = document.querySelector(".btn-delete");




const newPost = ($event) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.src = 'https://picsum.photos/500/200';
    image.alt ='Card image cap';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const newTitle = document.createElement('h5');
    newTitle.classList.add('card-title');

    const author = document.createElement('small');
    author.textContent = `${newAuthor.value}`;

    const newContent = document.createElement('p');
    newContent.classList.add('card-text');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-sm', 'btn-light', 'btn-delete');
    deleteButton.textContent = 'Delete entry';

    const date = document.createElement('div');
    date.classList.add('card-footer', 'text-muted');

    newTitle.appendChild(author);
    cardBody.appendChild(newTitle);
    cardBody.appendChild(newContent);
    cardBody.appendChild(deleteButton);
    card.appendChild(image);
    card.appendChild(cardBody);
    card.appendChild(date);
    postList.prepend(card);

    newTitle.textContent = `${newPostTitle.value}`;
    author.textContent = `${newAuthor.value}`;
    newContent.textContent = `${newPostContent.value}`;
}

showForm.addEventListener("click", () => {
    formCard.classList.add("hidden");
    showForm.textContent = "Add a post";
});

showForm.addEventListener('mousedown', () => {
    formCard.classList.remove("hidden");
    showForm.textContent = "Hide form";
});



const handleSubmit = ($event) => {
    $event.preventDefault();
    const form = $event.target;
    
    const postContent = form.postContent;
    const nmbOfWords = postContent.value.split(" ").length;

    if (nmbOfWords < 20) {
        postContent.classList.add("is-invalid");
        textAreaErrMsg.classList.remove("hidden");
    } else {
        const anotherPost = newPost($event);
        postList.insertAdjacentElement('afterbegin', anotherPost);

        postContent.classList.remove("is-invalid");
        textAreaErrMsg.classList.add("hidden");
    }

    form.reset();

};

form.addEventListener('submit', handleSubmit);


// A function for the delete button.
const handleDelete = ($event) => {
    if ($event.target.classList.contains('btn-delete')) {
        const deleteBtn = $event.target;
        deleteBtn.closest('.card').remove();
    }
};

document.addEventListener('click', handleDelete);















