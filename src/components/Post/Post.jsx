/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar';
import styles from './Post.module.css'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function Post({ author, content, publishAt }) {

  const [comments, setComments] = useState([
    'Post muito bacana. Hein!'
  ])
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault();
  
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          {/* eslint-disable-next-line react/prop-types */}
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            {/* eslint-disable-next-line react/prop-types */}
            <strong>{author.name}</strong>
            {/* eslint-disable-next-line react/prop-types */}
            <span>{author.role}</span>
          </div>
        </div>

        {/* eslint-disable-next-line react/prop-types */}
        <time title={publishedDateFormatted} dateTime={publishAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return (
              <p>{line.content}</p>
            )
          } else {
            return (
              <p><a href='#'>{line.content}</a></p>
            )
          }
        })}

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          name='comment'
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment} />
        })}
      </div>
    </article>
  )
}
