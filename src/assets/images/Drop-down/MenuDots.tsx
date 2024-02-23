import { SVGProps } from 'react'

export const MenuDots = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg fill={'none'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
      <circle cx={12} cy={12} r={8.5} stroke={'#fff'} />
      <g clipPath={'url(#a)'} fill={'#fff'}>
        <path
          d={
            'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
          }
        />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path d={'M6 6h12v12H6z'} fill={'#fff'} />
        </clipPath>
      </defs>
    </svg>
  )
}
