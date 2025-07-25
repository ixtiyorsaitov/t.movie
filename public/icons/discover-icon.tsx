import React from "react";

const DiscoverIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.98 3.01998C20.11 2.14998 18.88 1.80998 17.69 2.10998L7.89 4.55998C6.24 4.96998 4.97 6.24998 4.56 7.88998L2.11 17.7C1.81 18.89 2.15 20.12 3.02 20.99C3.68 21.64 4.55 22 5.45 22C5.73 22 6.02 21.97 6.3 21.89L16.11 19.44C17.75 19.03 19.03 17.76 19.44 16.11L21.89 6.29998C22.19 5.10998 21.85 3.87998 20.98 3.01998ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.85998 9.86 8.11998 12 8.11998C14.14 8.11998 15.88 9.85998 15.88 12C15.88 14.14 14.14 15.88 12 15.88Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DiscoverIcon;
