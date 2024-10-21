export function Now() {
  return (
    <p className="font-bold text-primary">Now: {new Date().toISOString()}</p>
  );
}
