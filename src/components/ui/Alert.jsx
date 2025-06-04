export default function Alert({ message, type }) {
  return <div className={`border-2 border-${type}-500 text-${type}-500 p-4 rounded-md`}>{message}</div>;
}
