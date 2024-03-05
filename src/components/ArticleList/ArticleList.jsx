const ArticleList = ({items}) => {
    return (
        <ul>
        {items.map((item) => (
          <li key={item.id}>
            {/* <a href={item.url}>{item.title}</a> */}
            <img src={item.urls.small} alt={item.title} />
          </li>
        ))}
      </ul>

)
}

export default ArticleList