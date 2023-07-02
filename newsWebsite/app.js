let source = 'bbc-news';
let apikey = 'apikey';
let newsAccordinon = document.getElementById('newsAccordion');
const xhr = new XMLHttpRequest();
xhr.open('GET', `ulr =${source}&apikey=${apikey}`, true)
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news = `<div class="card>
</div>`;
            newsHtml += news;

        });
        newsAccordinon.innerHTML = newsHtml;

    } else {
        console.log("Some error accoured")
    }
}
xhr.send();