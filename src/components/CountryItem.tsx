type CountryItemProps = {
  icon: React.ReactElement;
  title: string;
  text: string | number | undefined;
};

export default function CountryItem({ icon, title, text }: CountryItemProps) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50">
      <div className="flex gap-3 p-2">
        <div className="flex items-center justify-center rounded-md text-slate-700">
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold uppercase text-slate-400">
            {title}
          </h3>

          <p className="mt-1 wrap-break-word text-sm font-medium text-slate-700">
            {text || "Not informed"}
          </p>
        </div>
      </div>
    </div>
  );
}
