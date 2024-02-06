"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h2>Error:{error.message}</h2>
      <button onClick={() => reset()}>Try Again</button>
    </>
  );
}
