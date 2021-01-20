import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql} from "gatsby"

export default function SEO(props){
    const {excerpt, image: metaImage, keyword, author, title, meta, pathname} = props;
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                      siteURL
                      description
            }
        }
    }
    `
    )
    const metaDescription = excerpt || site.siteMetadata.description;
    const image = 
        metaImage && metaImage.src
        ? metaImage.src : null;
    const canonical = 
        pathname ? `${site.siteMetadata.siteURL}${pathname}` : null;

    return (
        <Helmet
        title={title}
        link = {
            canonical
                ? [
                    {
                        rel: "canonical",
                        href: canonical,   
                    },
                  ]
                : []
        }
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
                content: image
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
                },
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
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
    metaImage: ''
}
