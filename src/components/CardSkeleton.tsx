import imagePlaceholder from "../assets/imagePlaceholder.svg";

export default function CardSkeleton() {
  return (
    <div className="bg-white flex flex-col border border-slate-300 rounded-xl shadow-md shadow-slate-200 p-3">
      <div className="h-full rounded-md aspect-video object-cover object-center animate-pulse bg-gray-200">
        <img src={imagePlaceholder} />
      </div>

      <div className="space-y-3 pt-2">
        <h3 className="font-bold text-xl w-full bg-gray-200 animate-pulse h-8 rounded-md"></h3>
        <div className="bg-gray-200 animate-pulse w-40 h-6 rounded-md p-0.5 px-2.5"></div>
        <div className="flex justify-between bg-gray-200 animate-pulse w-full h-5"></div>
        <div className="flex justify-between bg-gray-200 animate-pulse w-full h-5"></div>
      </div>
    </div>
  );
}
