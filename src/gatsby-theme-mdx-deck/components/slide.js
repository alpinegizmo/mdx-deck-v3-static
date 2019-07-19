/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { Fragment } from 'react'
import Context from '../context'
import useDeck from '../hooks/use-deck'
import useSwipe from '../hooks/use-swipe'
import { modes } from '../constants'

export const Slide = ({ slide, index, preview, ...props }) => {
  const outer = useDeck()
  const swipeProps = useSwipe()
  const context = {
    ...outer,
    index,
    preview,
  }

  return (
    <Context.Provider value={context}>
      <div
        {...(!preview ? swipeProps : {})}
        sx={{
          boxSizing: 'border-box',
          width: '100%',
          height: context.mode === modes.print ? '100vh' : '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginLeft: 0,
          paddingLeft: '8vw',
          top: 0,
          overflow: 'hidden',
          position: 'relative',
          color: '#f00',
          bg: '#fff',
          textAlign: 'left',
          variant: 'styles.Slide',
        }}>
        Shadow
      </div>
    </Context.Provider>
  )
}

export default Slide
