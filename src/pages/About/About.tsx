
import * as React from 'react'

import * as App from 'App'
import * as Icons from 'assets/icons'
import * as Hooks from 'hooks'

import * as Styles from './About.styles'

export interface AboutProps extends React.PropsWithChildren {

}

const About: React.FC<AboutProps> = (props) => {
  const theme = Hooks.common.useTheme()
  const appCtx = App.useAppCtx()

  return (
    <Styles.About ref={appCtx.infoRef} id='info'>
      <h1 className='title space'>Thank you for Visiting</h1>
      <div>
        <p className='message space'>This app was created as a interview assignment for Speer Technologies. I really enjoyed working on the assignment, and I hope you enjoy my work.</p>

        <p className='message'>The Original Assignment object have been meet:</p>
        <ul className='list space'>
          <li className='list__item'><Icons.Solid.Check fill={theme.current.border.color} className='list__icon' size='25px' /><span className='list__text'>Call Feed Created with all messages that have not been archived</span></li>
          <li className='list__item'><Icons.Solid.Check fill={theme.current.border.color} className='list__icon' size='25px' /><span className='list__text'>Call Feed has the ability to archive all calls, also some filtering has been added</span></li>
          <li className='list__item'><Icons.Solid.Check fill={theme.current.border.color} className='list__icon' size='25px' /><span className='list__text'>Call Details where you have the ablility to archive/unarchive a single call</span></li>
          <li className='list__item'><Icons.Solid.Check fill={theme.current.border.color} className='list__icon' size='25px' /><span className='list__text'>Clean Code with good project structure, and best practices used</span></li>
          <li className='list__item'><Icons.Solid.Check fill={theme.current.border.color} className='list__icon' size='25px' /><span className='list__text'>All screen sizes have been accounted for, and only components being used have bee loaded in</span></li>
          <li className='list__item'><Icons.Solid.Sad fill={theme.current.button.variants.danger.fg} className='list__icon' size='25px' /><span className='list__text'>I tried to make the design sensible and pleasant, not my stongest skill</span></li>
        </ul>

        <p className='message'>Additions i Made that was not part of the assignment, I had extra time so I thought I would add some extra features:</p>
        <ul className='list space'>
          <li className='list__item'><Icons.Solid.Star fill='#edd713' className='list__icon' size='25px' /><span className='list__text'>Light and Dark themes have been added, with a setting to toggle between</span></li>
          <li className='list__item'><Icons.Solid.Star fill='#edd713' className='list__icon' size='25px' /><span className='list__text'>Cached storage using local storage to save settings in case of refresh</span></li>
          <li className='list__item'><Icons.Solid.Star fill='#edd713' className='list__icon' size='25px' /><span className='list__text'>A Guided Tour of the app</span></li>
        </ul>

        <p className='message'>What I ran out of time for:</p>
        <ul className='list space'>
          <li className='list__item'><Icons.Solid.Sad fill={theme.current.button.variants.danger.fg} className='list__icon' size='25px' /><span className='list__text'>Adding Tutorial to Mobile Size, and adjusting some setting for Tutorial for the rest of the app</span></li>
          <li className='list__item'><Icons.Solid.Sad fill={theme.current.button.variants.danger.fg} className='list__icon' size='25px' /><span className='list__text'>Localization, almost got there, then decided I wanted to go to sleep</span></li>
        </ul>

        <p className='message'>Here are also some of my links for you, you can find all my latest work here</p>
        <div className='links space'>
          <a href='https://www.justinheisler.me/'><Icons.Solid.Globe fill={theme.current.border.color} size='45px' /></a>
          <a href='https://github.com/Heisey'><Icons.Solid.GitHub fill='#FF5630' size='45px' /></a>
          <a href='https://www.linkedin.com/in/justin-heisler-35069a87/'><Icons.Solid.Linkedin fill='#0077B5' size='45px' /></a>
        </div>

        <p className='message'>Hopefully you enjoyed everything and I hope to hear from you soon</p>
        <p className='message'> Submitted on July 19, 2024 at 7AM PST</p>
        <p className='message'>Cheers</p>
        <p className='message'>Justin Heisler</p>
      </div>
    </Styles.About>
  )
}

export default About