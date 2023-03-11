import { extendTheme } from '@chakra-ui/react'

export const baseTheme = {

  colors: {
    uigrey: `#474747`,
    rgbblack: 'rgb(7 7 7 / .8)',
    uiblack: '#070707',
    uiblue: {
      50: `#BFBBC2`,
      100: '#C7DEEE',
      200: '#809EBA',
      300: '#7C94AC',
      400: '#428099',
      500: '#43CBFF',
    },
    uigold: {
      100: `#B3BB9D`,
      200: `#717857`,
      300: `#B59855`,
      400: `#56483D`,
      500: `#998E7A`,
      600: `#3D3C34`,
      700: `#58554C`,
      900: `#13130E`,
    },
  }
}

export default extendTheme(baseTheme)
