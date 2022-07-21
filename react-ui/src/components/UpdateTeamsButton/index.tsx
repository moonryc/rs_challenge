import React, { useState } from 'react'
import styles from './updateTeamsButton.module.scss'

interface UpdateTeamsButtonProps {
  handleClick: () => void
  isError: boolean
}

const UpdateTeamsButton = ({
  handleClick,
  isError,
}: UpdateTeamsButtonProps) => {
  const [clicked, setClicked] = useState(false)

  const onClick = () => {
    handleClick()
    setClicked(true)
  }

  return (
    <button
      className={`${styles.root} ${isError && clicked && styles.shake}`}
      onAnimationEnd={() => setClicked(false)}
      onClick={onClick}
    >
      GET ALL NBA TEAMS
    </button>
  )
}

export default React.memo(UpdateTeamsButton)
