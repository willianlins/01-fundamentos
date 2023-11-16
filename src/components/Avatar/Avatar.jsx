
import styles from './Avatar.module.css'

// eslint-disable-next-line react/prop-types
export function Avatar({ src, hasBorder  }) {
  return (
    <img 
      className={ hasBorder ? styles.avatarWithBorder : ''} 
      src={src} 
    />
  )
}
