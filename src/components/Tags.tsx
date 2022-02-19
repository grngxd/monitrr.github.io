import React from 'react'
import {Helmet} from "react-helmet";

function Tags() {
  return (
    <Helmet>
            <title>monitrr</title>
            <meta name="title" content="monitrr"/>
            <meta name="description" content="heyyo! :)"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://metatags.io/"/>
            <meta property="og:title" content="monitrr"/>
            <meta property="og:description" content="heyyo! :)"/>
            <meta property="og:image" content={"/projects/Portfolio.png"}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/"/>
            <meta property="twitter:title" content="monitrr"/>
            <meta property="twitter:description" content="heyyo! :)"/>
            <meta property="twitter:image" content={"/projects/Portfolio.png"}/>
    </Helmet>
  )
}

export default Tags