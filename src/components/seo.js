import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql} from "gatsby"

export default function SEO(props){
    const {excerpt, image: metaImage, keyword, author, title, meta} = props;
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteUrl
                    }
                }
            }
        `
    )
    const metaDescription = excerpt || site.siteMetadata.metaDescription;
    const image = 
        metaImage && metaImage.src
        ? `${site.siteMetadata.siteUrl}${metaImage.src}` : null;

    return (
        <Helmet
        title={title}
        meta={[
            {
            name: `description`,
            content: metaDescription,
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
                content: metaDescription,
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
                content: metaDescription,
            },
        ].concat(
            metaImage
            ? [
                {
                    property: 'og:image',
                    content: image
                },
                {
                    property: "og:image:width",
                    content: metaImage.width
                },
                {
                    property: "og:image:height",
                    content: metaImage.height
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
    meta: [],
    metaImage
}
