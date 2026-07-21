import CardSkeleton from "./CardSkeleton";

export default function GridSkeleton() {
  const items = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <CardSkeleton key={item} />
      ))}
    </div>
  );
}
