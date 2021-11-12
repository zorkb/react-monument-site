class Article extends React.Component {

    render() { 
        const { image, title, content } = this.props.article;

    return (
        <article className="col-third">
            <img src={image} alt="image" />
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
                <button>Read More</button>
            </div>
        </article>
    )
    }
}

export default Article;