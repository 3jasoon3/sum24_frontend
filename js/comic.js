window.onload = () => {
    const email = "e.chernobrovkin@innopolis.university";
    const url = "https://fwd.innopolis.university/api/";
    const goBackButton = document.getElementById("home-btn");
    goBackButton.onclick = () => { location.href = "./index.html" }

    async function fetchID() {
        const params = new URLSearchParams({email});
        const response = await fetch(`${url}hw2?${params.toString()}`);
        return response.json();
    }

    async function getComic(id) {
        const params = new URLSearchParams({id});
        const response = await fetch(`${url}comic?${params.toString()}`);
        return response.json();
    }

    async function render() {
        const comicID = await fetchID();
        const comic = await getComic(comicID);
        const title = document.getElementById("comic-title");
        const image = document.getElementById("comic-image");
        const alt = document.getElementById("comic-alt");
        const date = document.getElementById("comic-date");
        title.textContent = comic.title;
        image.src = comic.img;
        image.alt = comic.alt;
        alt.textContent = comic.alt;
        const comicDate = new Date(comic.year, comic.month, comic.day);
        date.textContent = `Comic date: ${comicDate.toLocaleDateString()}`;
    }

    render();
}
