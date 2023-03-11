import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo4.svg"
import { FaAlignRight } from "react-icons/fa"
import styled from "styled-components"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="company name" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-icon {
    font-size: 1.75rem;
    color: var(--chakra-colors-uigold-200);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    margin: auto auto;
    .toggle-icon {
      display: none;
    }
  }
`
