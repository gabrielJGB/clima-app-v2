import React from 'react'

const Loading = (props) => {
    return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    height={150}
    preserveAspectRatio="xMidYMid"
    style={{
      margin: "100px auto",
      background: "0 0",
      display: "block",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={35}
      fill="none"
      stroke="#fff"
      strokeDasharray="164.93361431346415 56.97787143782138"
      strokeWidth={7}
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>)
}

export default Loading



