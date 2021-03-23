
/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import InformationPageTemplate from '../components/informationPageTemplate'
import { graphql } from 'gatsby'

export default function PrivacyPolicy({data}) {
    return(
        <InformationPageTemplate information={data} title="Privacy Policy"/>
    )
}

export const query = graphql`
    query MyQuery {
        wpPost(title: {eq: "Privacy Policy"}){
            content
        }
    }
`