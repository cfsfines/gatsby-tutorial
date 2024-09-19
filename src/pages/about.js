import * as React from "react"
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi there! I'm the proud creator of this side, which I built with Gatsby.</p>
        </Layout>
    )

}

export const Head = () => (
    <title>
        <title>About Me</title>
        <meta name="description" content="My description" />
    </title>
)

export default AboutPage