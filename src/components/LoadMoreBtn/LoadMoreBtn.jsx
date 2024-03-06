import styles from "../LoadMoreBtn/LoadMoreBtn.module.css"

const LoadMoreBtn = ({onClick}) => {
    return <button className={styles.loadMoreBtn} onClick={onClick}>Load more</button>
}

export default LoadMoreBtn