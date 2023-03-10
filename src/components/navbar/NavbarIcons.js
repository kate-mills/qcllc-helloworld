import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com",
      },
      {
        id: 1,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: "https://www.twitter.com",
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: "https://www.instagram.com",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
  }
  .facebook-icon {
    color: ${styles.colors.icons.facebook};
  }
  .twitter-icon {
    color: ${styles.colors.icons.twitter};
  }
  .instagram-icon {
    color: ${styles.colors.icons.instagram};
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`
