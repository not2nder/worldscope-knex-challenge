type CountryItemProps = {
  icon: React.ReactElement;
  title: string;
  text: string | number | undefined;
};

export default function CountryItem({ icon, title, text }: CountryItemProps) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 transition dark:border-slate-800 dark:bg-slate-800/50">
      <div className="flex gap-3 p-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-slate-600 dark:bg-slate-900 dark:text-cyan-300">
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            {title}
          </h3>

          <p className="mt-1 wrap-break-word text-sm font-medium text-slate-700 dark:text-slate-200">
            {text || "Not informed"}
          </p>
        </div>
      </div>
    </div>
  );
}
