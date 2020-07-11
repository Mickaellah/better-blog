console.log('it works');


// Grab all the element that I might need for this exercise.

const postList = document.querySelector("#post-list");
// const cardDiv = document.querySelector(".card");
const cardBody = document.querySelector(".card-body");
const form = document.querySelector("#post-form");
const newPostTitle = document.querySelector(`[aria-describedby="postTitle"]`);
const newPostContent = document.querySelector(`[name="postContent"]`);
const newAuthor = document.querySelector(`[name="postAuthor"]`);
console.log(newAuthor)
const newImage = document.querySelector(".card-img-top");
const submitButton = document.querySelector(".btn", "btn-primary");
const hideButton = document.querySelector("#show-form");
const errMessage = document.querySelector(".invalid-feedback hidden");


    hideButton.addEventListener("click", () => {
    const formCard = document.querySelector("#form-card");
    formCard.hidden = "true";
    hideButton.textContent = "Add a post";
});



// Add an event listener to the submit button.
submitButton.addEventListener("click", ($event) => {
    $event.preventDefault();

    const myHTML = `
<div class="card">
    <img class="card-img-top" src="${newImage.value}">
    <div class="card-body">
        <h5 class="card-title">${newPostTitle.value}<small>${newAuthor.value}</small></h5>
        <p class="card-title">${newPostContent.value}</p>
        <input type="date" value="2020-07-11">
        <button type="button" class="btn btn-sm btn-light btn-delete">Delete</button>
    </div>
</div>
`;
// postList.insertAdjacentHTML(`beforebegin`, myHTML);

const fragment = document.createRange().createContextualFragment(myHTML);
postList.prepend(fragment)
form.reset();
if (newPostContent.value < 20) {
    newPostContent.classList.add("is-invalid");
    errMessage.removeClass();
}

});









