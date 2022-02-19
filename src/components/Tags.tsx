import React from 'react'
import {Helmet} from "react-helmet";

function Tags() {
  return (
    <Helmet>
        <title>monitrr</title>
        <meta name="description" content="heyyo!"/>

        <meta property="og:url" content="https://moni.is-a.dev"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="monitrr"/>
        <meta property="og:description" content="heyyo!"/>
        <meta property="og:image" content="https://moni.is-a.dev/projects/Portfolio.png"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="monitrr"/>
        <meta name="twitter:description" content="heyyo!"/>
        <meta name="twitter:image" content="https://moni.is-a.dev/projects/Portfolio.png"/>
    </Helmet>
  )
}

export default Tags