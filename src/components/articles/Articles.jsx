import Article from "../article/Article";
import "./articles.css";

export default function Articles({ articles }) {
  return (
    console.log(articles),
    (
      <div className="articles">
        {{ articles }.map((article) => (
          <Article article={article} />
        ))}
      </div>
    )
  );
}
