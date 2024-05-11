// 投稿フォームのハンドリング
const postBtn = document.getElementById('post-btn');
const postInput = document.getElementById('post-input');
const postImageInput = document.getElementById('post-image');
const postContainer = document.getElementById('post-container');

postBtn.addEventListener('click', () => {
    const postText = postInput.value.trim();
    const postImage = postImageInput.files[0];

    if (postText !== '' || postImage) {
        const newPost = document.createElement('div');
        newPost.classList.add('post');

        if (postText !== '') {
            const postTextElement = document.createElement('p');
            postTextElement.textContent = postText;
            newPost.appendChild(postTextElement);
        }

        if (postImage) {
            const postImageElement = document.createElement('img');
            postImageElement.src = URL.createObjectURL(postImage);
            postImageElement.alt = 'Uploaded Image';
            postImageElement.classList.add('post-image');
            newPost.appendChild(postImageElement);
        }

        postContainer.appendChild(newPost);
        postInput.value = '';
        postImageInput.value = '';
    }
});
