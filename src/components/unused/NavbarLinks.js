import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import {Text} from "@chakra-ui/react"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 1,
        path: "/about/",
        name: "About",
      },
      {
        id: 2,
        path: "/developments/",
        name: "Developments",
      },
      {
        id: 3,
        path: "/contact/",
        name: "Contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link className="nav-link" to={item.path}>
                <Text fontSize={'sm'}>{item.name}</Text>
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1.5rem;
    color:var(--chakra-colors-uigrey); 
    transition:all 0.5s ease-in-out;
    &:hover {
      background: var(--chakra-colors-uigrey);
      color: var(--chakra-colors-uigold-100);
      padding: 0.5rem 1rem 0.5rem 2.5rem;
    }
  }

  height: ${props => (props.open ? "120px" : "0px")};
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    background: var(--chakra-colors-white);
    .nav-link:hover {
      background: var(--chakra-colors-white);
      color: var(--chakra-colors-uigold-100);
      padding: 0.5rem 1rem 0.5rem 1.5rem;
    }
  }
`
