import './style.scss'

const Well: React.FC<{ variant: 'light' | 'dark' }> = (props) => {
  return <div className={`darkBackground ${props.variant}`}>
    {props.children}
  </div>
}

export default Well;