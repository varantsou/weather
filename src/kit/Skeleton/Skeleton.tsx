import React from "react";

export const LoadingSkeleton = ({
  loading,
  children,
  width = "100%",
  height = "20px",
  className = "",
  style = {},
}) => {
  const skeletonStyle = {
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "#f0f0f0",
    width,
    height,
    animation: "pulse 1.5s infinite ease-in-out",
    ...style,
  };

  return loading ? (
    <>
      <div className={className} style={skeletonStyle}>
        <style jsx global>{`
          @keyframes pulse {
            0% {
              background-color: #e0e0e0;
            }
            50% {
              background-color: #f0f0f0;
            }
            100% {
              background-color: #e0e0e0;
            }
          }
        `}</style>
      </div>
    </>
  ) : (
    children
  );
};
