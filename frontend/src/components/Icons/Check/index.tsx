const CheckIcon = ({
  size = "40px",
  color = "white",
}: {
  size?: string;
  color?: string;
}) => {
  return (
    <div style={{ width: size, height: size }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12.6111L8.92308 17.5L20 6.5"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default CheckIcon;
