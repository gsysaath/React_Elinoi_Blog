import "./article.css";

export default function Article({ article }) {
  return (
    <div className="article">
      <div className="articleInfo">
        <div className="articleCats">
          {article.categories.map((c) => (
            <span className="articleCat">{c.name}</span>
          ))}
        </div>

        <span className="articleTitle">{article.title}</span>

        <hr />
        <span className="articleDate">
          {new Date(article.createdAt).toDateString()}
        </span>
      </div>
      <p className="articleContent">{article.content}</p>
    </div>
  );
}

//         <Link to={`/article/${article._id}`} className="link"></Link>
