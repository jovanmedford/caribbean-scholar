import React from "react"
import { Helmet } from "react-helmet"

export default function SEO(props){
    const {excerpt, meta, keyword, author, title, img} = props
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
                property: `og:image`,
                content: img
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
            img
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
    title: '',
    meta: []
}
