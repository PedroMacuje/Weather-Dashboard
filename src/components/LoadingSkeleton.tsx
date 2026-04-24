export function LoadingSkeleton() {
  return (
    <div
      className="animate-pulse bg-white-80 backdrop-blur-sm 
        rounded-lg shadow-lg p-6"
    >
      <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>

      <div className="space-y-3">
        <div className="h-6 bg-gray-200 rounded"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  );
}
