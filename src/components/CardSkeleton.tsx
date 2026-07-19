import imagePlaceholder from "../assets/imagePlaceholder.svg";

export default function CardSkeleton() {
  return (
    <div className="bg-white flex flex-col border border-slate-300 rounded-xl p-3 transition-all duration-200">
      <img
        src={imagePlaceholder}
        className="h-full w-full rounded-md aspect-video object-cover object-center animate-pulse"
      />

      <div className="space-y-3 pt-2 text-sm">
        <div className="h-8 w-40 rounded-md bg-gray-200 animate-pulse" />
        <div className="h-7 w-25 rounded-md bg-gray-200 animate-pulse" />
        <div className="h-6 rounded-md bg-gray-200 animate-pulse" />
        <div className="h-6 rounded-md bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
}
