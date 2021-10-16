/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Spacing } from "../../utils/spacing"

/**
 *
 */

export default function SidebarLink({ text, link, isInternal }) {
  const linkTag = isInternal ? (
    <Link to={link}>{text}</Link>
  ) : (
    <a href={link}>{text}</a>
  )

  return (
    <div className="linkContainer">
      <li>{linkTag}</li>
      <hr
        sx={{
          height: "2px",
          margin: `${Spacing.mobile.vertical.extraSmall}
                                    ${Spacing.mobile.horizontal.extraLarge}
                                    ${Spacing.mobile.vertical.extraSmall}
                                    0`,
          color: "white",
        }}
      ></hr>
    </div>
  )
}
