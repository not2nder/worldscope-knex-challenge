import CardSkeleton from "./CardSkeleton";

export default function GridSkeleton() {
  const items: number[] = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <div className="w-full grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <CardSkeleton key={item} />
      ))}
    </div>
  );
}
