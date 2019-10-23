import React from 'react'
import { Link } from 'react-router-dom'

import CodeWrapper from './CodeWrapper'
import synter from '../utils/synter'

const BlankLink = (url, label, inactive) => (
  <a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    style={{ textDecoration: inactive ? 'line-through' : 'none' }}
  >
    {label}
  </a>
)

const HomePage = () => {
   return (
      <CodeWrapper>
{synter`
/**
 * welcome to levon's personal space!
 */

class levon extends human {

  occupation = {
    'by day': 'full-stack engineer with front-end bias',
    'by night': 'UI & UX designer',
    // there's a nice work-life balance right there...
  }

  experience = { // in human years
    'UI & UX design': 3+,
    'Development': {
      ${ BlankLink('http://www.ecma-international.org/', 'JavaScript') }:  8+, // ES6/7/8
      ${ BlankLink('https://reactjs.org/', 'React.js') }:    4+,
      ${ BlankLink('https://facebook.github.io/react-native/', 'ReactNative') }: 1,
      ${ BlankLink('https://www.meteor.com/', 'Meteor.js') }:   3,
      ${ BlankLink('https://nodejs.org/', 'Node.js') }:     3,
      ${ BlankLink('https://www.mongodb.com/', 'MongoDB') }:     3,
      ${ BlankLink('https://graphql.org/', 'GraphQL') }:     1+,
    }
   }

  work = {
    ${ BlankLink('https://iunu.com/', 'iUNU Inc') }: '2017 – present',
    ${ BlankLink('https://gotbookt.com/', 'Bookt') }:    '2019',
    ${ BlankLink('https://www.glyph.id/', 'Glyph ID') }: '2018',
    ${ BlankLink('https://pushloop.co/', 'Pushloop', true) }: '2016',
    ${ BlankLink('https://teeadmaster.com/', 'TeeAdMaster', true) }: '2014-2017',
    ${ BlankLink('https://digitalpomegranate.com/', 'Digital Pomegranate') }: '2012-2014',
  }

  skills = [
    ${ BlankLink('https://www.figma.com/', 'Figma') },
    ${ BlankLink('https://www.framer.com/', 'Framer X') },
    ${ BlankLink('https://www.adobe.com/products/photoshopfamily.html', 'Photoshop') },
    ${ BlankLink('https://www.adobe.com/products/illustrator.html', 'Illustrator') },
  ]

  certifications = [
    ${ BlankLink('http://coursera.org/verify/6VHNXAW2JQL8', 'Stanford University – Machine Learning') },
  ]

  ${ <Link to='/interests'>passionateAbout()</Link> }

  social = {
    facebook: ${ BlankLink('http://facebook.com/levonarakelyan', 'levonarakelyan') },
    twitter:  ${ BlankLink('http://twitter.com/levonarakelian', '@levonarakelian') }
  }

  contact = {
    email: ✉️ => ${ BlankLink('mailto:levon@arakelyan.id', 'levon@arakelyan.id') },
    phone: 📱 => ${ BlankLink('tel:374-95-773-700', '+374 95 77-37-00') }
  }

  languages = {
    'armenian': 'native',
    'english':  'fluent',
    'russian':  'fluent',
    'french':   'intermediate',
    'german':   'basic',
  }
}
`}
      </CodeWrapper>
   )
}

export default HomePage
