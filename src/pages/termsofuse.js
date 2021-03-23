
/** @jsx jsx */
import { jsx } from 'theme-ui'
import InformationPageTemplate from '../components/informationPageTemplate'
import { graphql } from 'gatsby'

export default function TermsOfUse({data}) {
    return(
        <InformationPageTemplate information={data} title="Terms of Use"/>
    )
}

export const query = graphql`
    query {
        wpPost(title: {eq: "Terms of Use"}){
            content
        }
    }
`