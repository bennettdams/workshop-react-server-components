export function Now() {
  return <p className="font-bold text-primary">{new Date().toISOString()}</p>;
}
