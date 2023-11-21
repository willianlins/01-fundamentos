import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'

import './global.css'

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar/Sidebar'


const posts = [
  {
    Id: 1,
    author: {
      avatarUrl: 'https://github.com/willianlins.png',
      name: 'Willian lins',
      role: 'CTO de nada'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👏' },
      { type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sint quibusdam accusamus qui. Rerum laborum eaque rem, porro fugit magnam sequi facilis a itaque aut? Vero explicabo consectetur alias voluptate.' },
      { type: 'link', content: 'Link-parsa' }
    ],
    publishAt: new Date('2023-05-03 20:00:00'),
  },
  {
    Id: 2,
    author: {
      avatarUrl: 'https://github.com/willian.png',
      name: 'uilha',
      role: 'Vagabundo faz nada'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👏' },
      { type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sint quibusdam accusamus qui. Rerum laborum eaque rem, porro fugit magnam sequi facilis a itaque aut? Vero explicabo consectetur alias voluptate.' },
      { type: 'link', content: 'eo-pix' }
    ],
    publishAt: new Date('2023-11-14 16:00:00'),
  }
]


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Post 
                key={post.Id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
