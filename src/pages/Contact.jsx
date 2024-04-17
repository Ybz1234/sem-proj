import React from 'react'

import DeveloperCard from '../components/DeveloperCard'

export default function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
      <h1 style={{ color: 'white', marginBottom: '2rem' }}>Contact us!</h1>
      <DeveloperCard />
    </div>
  )
}
