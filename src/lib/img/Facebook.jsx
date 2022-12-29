import * as React from "react"

const Facebook = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 13.333h-2V16h2v8h3.333v-8h2.4L20 13.333h-2.667V12.2c0-.6.134-.867.734-.867H20V8h-2.533C15.067 8 14 9.067 14 11.067v2.266Z"
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

export default Facebook