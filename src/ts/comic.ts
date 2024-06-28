import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";

window.onload = () => {
  const email: string = "e.chernobrovkin@innopolis.university";
  const url: string = "https://fwd.innopolis.university/api/";
  const goBackButton = document.getElementById("home-btn") as HTMLButtonElement;

  interface Comic {
    id: string;
    safe_title: string;
    img: string;
    alt: string;
    transcript: string;
    year: number;
    month: number;
    day: number;
  }

  goBackButton.onclick = () => {
    location.href = "index.html";
  };

  async function fetchID(): Promise<string> {
    const params = new URLSearchParams({ email });
    const request: string = `${url}hw2?${params.toString()}`;
    const response = await fetch(request);
    const data = await response.json();
    return data;
  }

  async function getComic(id: string): Promise<Comic> {
    const params = new URLSearchParams({ id });
    const request: string = `${url}comic?${params.toString()}`;
    const response = await fetch(request);
    const data = await response.json();
    return data as Comic;
  }

  async function render() {
    const comicID = await fetchID();
    const comic = await getComic(comicID);

    const title = document.getElementById("comic-title") as HTMLElement;
    const image = document.getElementById("comic-image") as HTMLImageElement;
    const alt = document.getElementById("comic-alt") as HTMLElement;
    const date = document.getElementById("comic-date") as HTMLElement;

    title.textContent = comic.safe_title;
    image.src = comic.img;
    image.alt = comic.transcript;
    alt.textContent = comic.alt;

    const comicDate = new Date(comic.year, comic.month, comic.day);
    const currentDate = new Date();
    const yearsDifference = differenceInYears(currentDate, comicDate);
    const monthsDifference = differenceInMonths(currentDate, comicDate) % 12;
    const daysDifference = differenceInDays(currentDate, comicDate) % 30;
    date.textContent = `The comic was released ${yearsDifference} years, ${monthsDifference} months, and ${daysDifference} days ago.`;
  }

  render();
};
