const HeartIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M8.22 1.54999C7.315 1.54999 6.505 1.98999 6 2.66499C5.495 1.98999 4.685 1.54999 3.78 1.54999C2.245 1.54999 1 2.79999 1 4.34499C1 4.93999 1.095 5.48999 1.26 5.99999C2.05 8.49999 4.485 9.99499 5.69 10.405C5.86 10.465 6.14 10.465 6.31 10.405C7.515 9.99499 9.95 8.49999 10.74 5.99999C10.905 5.48999 11 4.93999 11 4.34499C11 2.79999 9.755 1.54999 8.22 1.54999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HeartIcon;
