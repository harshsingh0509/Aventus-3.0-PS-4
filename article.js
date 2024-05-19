// Simulated logged-in status
let isLoggedIn = true;

// Articles array to hold new/edited articles
let reviewArticles = [];

document.addEventListener("DOMContentLoaded", function() {
    var editButton = document.getElementById("editButton");
    var createArticleButton = document.getElementById("createArticleButton");
    var reviewSection = document.getElementById("reviewArticles");

    // Check if the user is logged in
    if (isLoggedIn) {
        editButton.style.display = "block";
    }

    editButton.addEventListener("click", function() {
        editArticle();
    });

    createArticleButton.addEventListener("click", function() {
        createArticle();
    });

    function displayReviewArticles() {
        reviewSection.innerHTML = "";
        reviewArticles.forEach((article, index) => {
            var articleDiv = document.createElement("div");
            articleDiv.className = "review-article";
            articleDiv.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.content}</p>
                <button onclick="vote(${index}, true)">Upvote</button>
                <button onclick="vote(${index}, false)">Downvote</button>
                <p>Upvotes: ${article.upvotes}, Downvotes: ${article.downvotes}</p>
            `;
            reviewSection.appendChild(articleDiv);
        });
    }

    window.vote = function(index, isUpvote) {
        var article = reviewArticles[index];
        if (isUpvote) {
            article.upvotes++;
        } else {
            article.downvotes++;
        }

        if (article.upvotes + article.downvotes >= 10) {
            if ((article.upvotes / (article.upvotes + article.downvotes)) >= 0.7) {
                alert('Article approved!');
                // Save the article or update the content
            } else {
                alert('Article rejected!');
                reviewArticles.splice(index, 1); // Remove the article
            }
        }
        displayReviewArticles();
    };

    function editArticle() {
        var articleContent = document.getElementById("articleContent");
        var content = articleContent.innerHTML;
        
        var textarea = document.createElement("textarea");
        textarea.id = "editArea";
        textarea.value = content;

        var saveButton = document.createElement("button");
        saveButton.innerText = "Save";
        saveButton.className = "edit-button";
        saveButton.addEventListener("click", function() {
            var updatedContent = textarea.value;
            reviewArticles.push({ title: "Edited Article", content: updatedContent, upvotes: 0, downvotes: 0 });
            displayReviewArticles();
            articleContent.innerHTML = updatedContent;
        });

        articleContent.innerHTML = "";
        articleContent.appendChild(textarea);
        articleContent.appendChild(saveButton);
    }

    function createArticle() {
        var articleContent = document.getElementById("articleContent");
        
        var titleInput = document.createElement("input");
        titleInput.id = "titleInput";
        titleInput.placeholder = "Article Title";

        var textarea = document.createElement("textarea");
        textarea.id = "newArticleArea";
        textarea.placeholder = "Article Content";

        var saveButton = document.createElement("button");
        saveButton.innerText = "Save";
        saveButton.className = "edit-button";
        saveButton.addEventListener("click", function() {
            var title = titleInput.value;
            var content = textarea.value;
            reviewArticles.push({ title: title, content: content, upvotes: 0, downvotes: 0 });
            displayReviewArticles();
            articleContent.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        });

        articleContent.innerHTML = "";
        articleContent.appendChild(titleInput);
        articleContent.appendChild(textarea);
        articleContent.appendChild(saveButton);
    }
});
