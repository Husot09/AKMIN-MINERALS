import { comparisonRows } from "@/lib/content";

export function MaterialComparison() {
  return (
    <div className="overflow-hidden rounded-sm border border-ink/10 bg-white shadow-sm">
      <div className="grid grid-cols-3 bg-ink text-sm font-bold uppercase tracking-[0.14em] text-white">
        <div className="p-4">Criteria</div>
        <div className="p-4">Feldspar</div>
        <div className="p-4">Quartz</div>
      </div>
      {comparisonRows.map(([label, feldspar, quartz]) => (
        <div key={label} className="grid grid-cols-1 border-t border-ink/10 md:grid-cols-3">
          <div className="bg-mineral p-4 text-sm font-semibold text-ink">{label}</div>
          <div className="p-4 text-sm leading-7 text-stone">{feldspar}</div>
          <div className="border-t border-ink/10 p-4 text-sm leading-7 text-stone md:border-l md:border-t-0">{quartz}</div>
        </div>
      ))}
    </div>
  );
}
