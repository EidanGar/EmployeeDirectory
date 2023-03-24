const ProgressBar = ({
  progress,
  width
}: {
  progress: number;
  width?: string;
}) => {
  return (
    <div className={`progress w-${width ?? "100"}`}>
      <div
        className={`progress-bar bg-${
          progress >= 100
            ? "success"
            : progress <= 30
            ? "danger"
            : progress <= 50
            ? "warning"
            : progress <= 70
            ? "info"
            : "primary"
        }`}
        style={{
          width: `${
            progress > 100 ? "100%" : progress < 0 ? "0%" : progress + "%"
          }`
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
