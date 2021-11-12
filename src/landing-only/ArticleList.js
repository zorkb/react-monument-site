import Article from './Article';

const ArticleList = ({articles}) => {
    return (
        <div className="grid-wrapper articles">
            {
            articles.map(article =>
            <Article 
                key={article.id}
                article={article}
            />
            )
        }
        </div>
    )
}

export default ArticleList;