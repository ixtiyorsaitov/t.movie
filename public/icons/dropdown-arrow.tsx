import React from "react";

const DropDownArrow = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.317 0.962755C11.5243 -0.214149 9.79214 -0.214147 8.99941 0.962758L5.45709 6.22174C4.91878 7.02092 4.0183 7.50009 3.05473 7.50009C1.45502 7.50009 0.158203 8.7969 0.158203 10.3966V12.0001C0.158203 14.4854 2.17292 16.5001 4.6582 16.5001H16.6582C19.1435 16.5001 21.1582 14.4854 21.1582 12.0001V10.3966C21.1582 8.7969 19.8614 7.50009 18.2617 7.50009C17.2981 7.50009 16.3976 7.02092 15.8593 6.22174L12.317 0.962755Z"
        fill="black"
        fill-opacity="0.85"
      />
    </svg>
  );
};

export default DropDownArrow;
