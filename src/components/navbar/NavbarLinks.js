import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 1,
        path: "/about/",
        name: "about",
      },
      {
        id: 2,
        path: "/developments/",
        name: "developments",
      },
      {
        id: 3,
        path: "/contact/",
        name: "contact",
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
                {item.name}
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
    font-weight: 700;
    text-transform: capitalize;

    transition:all 0.5s ease-in-out;

    &:hover {
      background: var(--chakra-colors-uigrey);
      color: var(--chakra-colors-uigold-100);
      padding: 0.5rem 1rem 0.5rem 3.5rem;
    }
  }
  height: ${props => (props.open ? "160px" : "0px")};
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
