// const API_KEY = `29a96ef9b757480189bbd02b34691b57`;

// let news = [];
// const getLatesNews = async () => {
//   const url = new URL(
//     `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
//   );
//   //   console.log("uuu", url);
//   const response = await fetch(url);
//   const data = await response.json();
//   news = data.articles;
//   console.log("ddddddd", news);
// };

// getLatesNews();

const api_key = `https://noona-times-v2.netlify.app/top-headlines`;
let news = [];
const pageSize = 8;
let page = 2;
let category = "";
let keyword = "";
const getLatestNews = async () => {
  const url = new URL(
    `https://lucky-klepon-e2f176.netlify.app//top-headlines?country=us&pageSize=${pageSize}&page=${page}${category}${keyword}`
  );

  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("news=", news);
};

getLatestNews();
