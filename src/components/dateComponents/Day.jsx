export default function Day() {
  const day = new Date();
  const options = { weekday: "long" };
  const today = day.toLocaleString("en-US", options);

  return (
    <>
      <div>{today}</div>
    </>
  );
}
