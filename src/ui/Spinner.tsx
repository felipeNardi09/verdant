export default function Spinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative h-12 w-12 animate-spin rounded-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 ">
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white bg-green-100"></div>
      </div>
    </div>
  );
}
