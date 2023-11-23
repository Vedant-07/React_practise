export const ShimmerRestCard = () => {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((e, index) => (
          <div
            key={index}
            className="m-5  rounded-lg p-5 h-56 w-56  animate-pulse  bg-white"
          />
        ))}
    </>
  );
};
