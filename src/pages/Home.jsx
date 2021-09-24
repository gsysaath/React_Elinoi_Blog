import Header from "../components/header/Header";
import Articles from "../components/articles/Articles";
import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get("/articles");
      setArticles(res.data);
    };
    fetchArticles();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Articles articles={articles} />
      </div>
    </>
  );
}
