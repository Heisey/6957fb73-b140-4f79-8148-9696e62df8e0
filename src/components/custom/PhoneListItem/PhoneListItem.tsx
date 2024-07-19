
import * as React from 'react'
import * as Router from 'react-router-dom'

import * as App from 'App'
import * as Icons from 'assets/icons'
import * as Core from 'core'
import * as Hooks from 'hooks'

import * as Styles from './PhoneListItem.styles'

export interface PhoneListItemProps {
  data: Core.I.Call
}

const PhoneListItem: React.FC<PhoneListItemProps> = (props) => {
  const appCtx = App.useAppCtx()
  const theme = Hooks.common.useTheme()

  const path = () => {
    if (appCtx.showArchived) return Core.Keys.paths.ARCHIVED_DETAILS.replace(':id', props.data.id)
    return Core.Keys.paths.CALL_DETAILS.replace(':id', props.data.id)
  }
  return (
    <Styles.PhoneListItem $incoming={props.data.direction === Core.Keys.callDirection.INBOUND}>
      <Router.Link to={path()} className='container'>
        <div className='icons'>
          <Icons.Solid.Phone size='35px' fill={theme.current.text.primaryColor} />
          <Icons.Solid.Arrow className='arrow' size='15px' fill={theme.current.text.primaryColor} />
        </div>
        <div>
          <div className='to'>
            <p className='text'>From: {props.data.from}</p>
            <span className='via'>(via ${props.data.via})</span>
          </div>
          <p className='text'>To: {props.data.to}</p>
        </div>
      </Router.Link>
    </Styles.PhoneListItem>
  )
}

export default PhoneListItem