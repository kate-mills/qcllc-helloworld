import { extendTheme } from '@chakra-ui/react'

export const baseTheme = {
  colors: {
    primary: '#686868',
    themeorange: {
      100: 'rgb(246 237 235)',
      900: 'rgb(182 89 39)',
    },
    themeblue: {
      100: 'rgb(181 184 203 / 34%)',
    }

  }
}

export default extendTheme(baseTheme)
