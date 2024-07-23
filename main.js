const API_KEY = `d0ecea3618044871bcbb7c6832d38e2b`;
let news = [];

const getLatestNews = async () => {
  const url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  console.log(`url : ${url}`);

  const response = await fetch(url);

  console.log(response);

  // 데이터 출력
  const data = await response.json();
  // console.log(data);
  news = data.articles;
  console.log(news); // 뉴스만 따로 출력
};

getLatestNews();
console.log(`this is for fetch test`);
