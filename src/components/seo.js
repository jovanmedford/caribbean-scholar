import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

export default function SEO(props){
    const {excerpt, keyword, author, title} = props
    return (
        <Helmet
        title={title}
        meta={[
            {
            name: `description`,
            content: excerpt,
            },
            {
                name: `keywords`,
                content: keyword
            },
            {
                property: `og:title`,
                content: title
            },
            {
                property: `og:description`,
                content: excerpt,
            },
            {
                property: `og:type`,
                content: `article`,
            },
            {
                name: `twitter:creator`,
                content: author,
            },
            {
                name: `twitter:title`,
                content: title,
            },
            {
                name: `twitter:description`,
                content: excerpt,
            },
        ].concat(
            metaImage
            ? [
                {
                    property: 'og:image',
                    content: ''
                }
            ] : [
                    {
                name: "twitter:card",
                content: "summary",
                    }
                ]
        )
        .concat(meta)
    }
        />
    )
}


SEO.defaultProps = {
    excerpt: '',
    keyword: '',
    author: '',
    title: ''
}
