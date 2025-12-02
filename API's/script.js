const orignalUrl = "https://api.github.com/users/Hussaincaan";
const xhr = new XMLHttpRequest(orignalUrl);

xhr.open('GET', orignalUrl);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let data = JSON.parse(this.responseText)
        let cards = document.querySelectorAll(".eachcard")
        cards[0].querySelector('h3').textContent = data.login // taking data from API and changing the heading of card1 to the name of the user in the url;
        let image = document.createElement('img')
        image.src = `${data.avatar_url}`
        image.style.height = "80%"
        cards[0].appendChild(image)
        cards[0].querySelector('p').textContent = `Name: ${data.name}\nCompany: ${data.company}\nBlog: ${data.blog}`

        const followers = data.followers_url;
        const anotherxhr = new XMLHttpRequest(followers);
        anotherxhr.open('GET', followers);
        anotherxhr.onreadystatechange = function () {
            if (anotherxhr.readyState === 4) {
                let followers_data = JSON.parse(this.response)
                for (i = 0; i < 2; i++) {
                    cards[i + 1].querySelector('h3').textContent = followers_data[i].login
                    let image = document.createElement('img')
                    image.src = `${followers_data[i].avatar_url}`;
                    image.style.height = "80%"
                    cards[i+1].appendChild(image)
                    cards[i+1].querySelector('p').textContent = `Repos URL: ${followers_data[i].repos_url}\nPrivacy: ${followers_data[i].user_view_type}`

                }
            }
        }
        anotherxhr.send();
    }
}
xhr.send();