import { CSSProperties } from 'react'

export interface StComponent {
  className?: string

  customStyle?: string | CSSProperties
}

// export interface AtIconBaseProps2 extends StComponent {
//   value: string

//   color?: string
// }

// export interface AtIconBaseProps extends StComponent {
//   value: string

//   color?: string

//   prefixClass?: string

//   size?: number | string
// }

export default StComponent
