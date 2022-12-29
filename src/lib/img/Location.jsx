import * as React from "react"

const Location = (props) => (
  <svg
    width={14}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M9.092 7.925a2.083 2.083 0 1 0-4.167 0 2.083 2.083 0 0 0 4.167 0Z"
      stroke="#46A358"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M7 16.5C4.585 16.5.75 12.299.75 7.832.75 4.335 3.548 1.5 7 1.5s6.25 2.835 6.25 6.332C13.25 12.3 9.415 16.5 7 16.5Z"
      stroke="#46A358"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Location