import * as React from "react"

const Linkln = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.333 9.667a1.65 1.65 0 0 1-1.666 1.666A1.65 1.65 0 0 1 8 9.667 1.65 1.65 0 0 1 9.667 8a1.65 1.65 0 0 1 1.666 1.667Zm0 3H8v10.666h3.333V12.667Zm5.334 0h-3.334v10.666h3.334v-5.6c0-3.133 4-3.4 4 0v5.6H24V16.6c0-5.267-5.933-5.067-7.333-2.467v-1.466Z"
      fill="#46A358"
      fillOpacity={0.6}
    />
    <rect
      x={0.5}
      y={0.5}
      width={31}
      height={31}
      rx={4.5}
      stroke="#46A358"
      strokeOpacity={0.2}
    />
  </svg>
)

export default Linkln