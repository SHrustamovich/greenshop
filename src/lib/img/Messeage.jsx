import * as React from "react"

const Message = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.62 6.516s-2.674 3.21-4.63 3.21c-1.957 0-4.662-3.21-4.662-3.21"
      stroke="#46A358"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M1.043 8.974c0-5.698 1.985-7.597 7.937-7.597s7.936 1.899 7.936 7.597-1.984 7.597-7.936 7.597-7.937-1.9-7.937-7.597Z"
      stroke="#46A358"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Message