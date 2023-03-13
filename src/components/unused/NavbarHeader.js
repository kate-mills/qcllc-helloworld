import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'


export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => { handleNavbar() }}
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg#nav-logo{ max-width: 200px; }

  svg {
    transition: all 0.5s ease-in-out;
    color: var(--chakra-colors-uigold-300);
  }

  .toggle-icon {
    font-size: 1.75rem;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    svg#nav-logo{ max-width: 300px; }

    #logo {
    }
    .toggle-icon {
      display: none;
    }
  }
`
