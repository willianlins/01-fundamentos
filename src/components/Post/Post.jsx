import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

// eslint-disable-next-line react/prop-types
export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/willianlins.png" />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title="11 de maio ás 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>{content}</p>
        <p><a href='#'>google.com</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'> #nlw</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}> 
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
