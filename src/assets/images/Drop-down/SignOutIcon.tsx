import { SVGProps } from 'react'

export const SignOutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg fill={'none'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
      <g clipPath={'url(#a)'} fill={'#fff'}>
        <path
          d={
            'M4.667 4a.667.667 0 1 0 0-1.333H3.333a.667.667 0 0 0-.666.667v9.333a.667.667 0 0 0 .666.667h1.334a.667.667 0 1 0 0-1.333H4V4h.667ZM13.88 7.614 12 4.947a.667.667 0 1 0-1.087.774l1.147 1.613H6.667a.667.667 0 0 0 0 1.333H12l-1.2 1.6a.67.67 0 0 0 .133.934.667.667 0 0 0 .934-.134l2-2.666a.667.667 0 0 0 .013-.787Z'
          }
        />
      </g>
      <defs>
        <clipPath id={'a'}>
          <path d={'M0 .001h16v16H0z'} fill={'#fff'} />
        </clipPath>
      </defs>
    </svg>
  )
}
