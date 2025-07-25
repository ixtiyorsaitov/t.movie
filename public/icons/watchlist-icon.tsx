import React from "react";

const WatchListIcon = ({ className }: { className?: string }) => {
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
        d="M22 5.11V16.47C22 17.92 20.96 18.53 19.69 17.83L17.76 16.75C17.6 16.66 17.5 16.49 17.5 16.31V8.99C17.5 6.45 15.43 4.38 12.89 4.38H8.82C8.45 4.38 8.19 3.99 8.36 3.67C8.88 2.68 9.92 2 11.11 2H18.89C20.6 2 22 3.4 22 5.11Z"
        fill="currentColor"
      />
      <path
        d="M12.89 5.88H5.11C3.4 5.88 2 7.28 2 8.99V20.35C2 21.8 3.04 22.41 4.31 21.71L8.24 19.52C8.66 19.29 9.34 19.29 9.76 19.52L13.69 21.71C14.96 22.41 16 21.8 16 20.35V8.99C16 7.28 14.6 5.88 12.89 5.88ZM11 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H11C11.41 11.25 11.75 11.59 11.75 12C11.75 12.41 11.41 12.75 11 12.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WatchListIcon;
