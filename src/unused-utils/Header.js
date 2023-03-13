import React from "react"
import styled from "styled-components"
import defaultImg from "../images/hero-burn.jpg"

function HomeHeader({ img, children }) {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: calc(80vh - 68px);
  background: linear-gradient(184deg,#434346, 70%, #5c5c5c42),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`
const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
  max-width: 100vw;
`

HomeHeader.defaultProps = {
  img: defaultImg,
}

PageHeader.defaultProps = {
  img: defaultImg,
}

export { HomeHeader, PageHeader }
