interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage(prop: ErrorMessageProps) {
  return (
    <div className="p-4 bg-red-100 text-red-700 rounded-lg">{prop.error}</div>
  );
}
