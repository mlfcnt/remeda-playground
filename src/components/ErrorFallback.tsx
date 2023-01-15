import React from "react";

export const ErrorFallback = ({ error }: { error: Error }) => {
  console.log("here", error);
  return (
    <div role="alert">
      <p>Oh oh ☹️</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <pre>{error.stack}</pre>
    </div>
  );
};
