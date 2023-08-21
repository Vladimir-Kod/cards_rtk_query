import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}>
    <path
      fill="#FFFEFE"
      d="M13.028 9.676a.667.667 0 0 1-1.094.513L8.361 7.203l-3.58 2.88a.667.667 0 0 1-.94-.1.667.667 0 0 1 .1-.974l4-3.22a.667.667 0 0 1 .847 0l4 3.334a.666.666 0 0 1 .24.553Z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
