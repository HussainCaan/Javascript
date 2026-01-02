const BASE_URL = "https://api.github.com/users/"
let Endpoint; // User name


// Getting Searched Value from the Search input---------------------------------------------
let search_button = document.querySelector("#searchBtn");
search_button.addEventListener("click", () => {
    let search_input = document.querySelector("#userInput");
    let search_value = search_input.value.trim().toLowerCase();
    if (search_value !== "" && search_value != null) {
        Endpoint = search_value;
        getData()
    }
})
let search_suggestion = document.querySelectorAll(".suggestion-tag");
search_suggestion.forEach(element => {
    element.addEventListener("click", function (event) {
        let selected_suggestion = element.textContent;
        document.querySelector("#userInput").value = selected_suggestion;
        Endpoint = selected_suggestion;
        getData()
    })
});
// End of the Section ----------------------------------------------------------------------

function processRepoData(repos) {
    const languageCount = {};

    repos.forEach(repo => {
        const lang = repo.language || 'Other';
        languageCount[lang] = (languageCount[lang] || 0) + 1;
    });

    return languageCount;
}

function getTopRepositories(repos, limit = 3) {
    return repos
        .filter(repo => !repo.fork) // Exclude forked repos
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // Sort by most recently updated
        .slice(0, limit);
}

// Fetching JSON format Data ---------------------------------------------------------------
async function getData() {
    try {
        let COMPLETE_URL = BASE_URL + Endpoint;
        const response = await fetch(COMPLETE_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data)

        // Show main content
        document.querySelector(".main-content").classList.add("show");
        document.querySelector("#noData").style.display = "none";

        // Set Profile Image
        document.querySelector("#profileImage").src = data.avatar_url;

        // Set Profile Info
        document.querySelector("#profileName").textContent = data.name || "No Name";
        document.querySelector("#profileUsername").textContent = "@" + data.login;
        document.querySelector("#profileBio").textContent = data.bio || "No bio available";
        document.querySelector("#profileLocation").textContent = data.location || "Location not specified";

        // Set Stats
        document.querySelector("#followers").textContent = data.followers;
        document.querySelector("#following").textContent = data.following;
        document.querySelector("#repos").textContent = data.public_repos;
        document.querySelector("#gists").textContent = data.public_gists;

        // Set Additional Info
        document.querySelector("#company").textContent = data.company || "Not specified";
        let blog_text = document.querySelector("#blog").textContent = data.blog || "No blog";
        let blog = document.querySelector("#blog");
        blog.addEventListener("click", function () {
            const newTab = window.open("https://" + blog_text)
        })
        document.querySelector("#email").textContent = data.email || "Not available";
        document.querySelector("#twitter").textContent = data.twitter_username || "Not available";
        document.querySelector("#joinDate").textContent = new Date(data.created_at).toLocaleDateString();
        document.querySelector("#lastUpdate").textContent = new Date(data.updated_at).toLocaleDateString();

        // Fetch and process repositories
        const reposURL = `${BASE_URL}${Endpoint}/repos`;
        const reposResponse = await fetch(reposURL);
        if (reposResponse.ok) {
            const repos = await reposResponse.json();
            const languages = processRepoData(repos);
            
            // Display languages
            const languagesList = Object.entries(languages)
                .sort((a, b) => b[1] - a[1])
                .map(([lang, count]) => `${lang} (${count})`)
                .join(", ");
            
            document.querySelector("#languages").textContent = languagesList || "No languages found";
            
            // Display top 3 repositories
            const topRepos = getTopRepositories(repos, 3);
            const reposContainer = document.querySelector("#reposContainer");
            reposContainer.innerHTML = ""; // Clear default content
            
            if (topRepos.length === 0) {
                reposContainer.innerHTML = "<p style='text-align: center; color: #b0b0c0;'>No repositories found</p>";
            } else {
                topRepos.forEach(repo => {
                    const repoCard = document.createElement("div");
                    repoCard.className = "repo-card";
                    repoCard.innerHTML = `
                        <div class="repo-header">
                            <h3><a href="${repo.html_url}" target="_blank" style="color: #1e88e5; text-decoration: none;">${repo.name}</a></h3>
                            <span class="repo-visibility">${repo.private ? "Private" : "Public"}</span>
                        </div>
                        <p class="repo-description">${repo.description || "No description available"}</p>
                        <div class="repo-footer">
                            <span class="repo-lang">${repo.language || "No Language"}</span>
                            <span class="repo-stars">
                                <i class="fas fa-star"></i>
                                ${repo.stargazers_count}
                            </span>
                        </div>
                    `;
                    reposContainer.appendChild(repoCard);
                });
            }
        }

        // Set Links
        document.querySelector("#profileLink").href = data.html_url;
        document.querySelector("#reposLink").href = data.html_url + "?tab=repositories";

    } catch (err) {
        console.error(err);
    }

}


