export function Kpi({ value, label, hint }: { value: string; label: string; hint?: string }) {
  return (
    <article className="kpi">
      <div className="kpiValue">{value}</div>
      <div className="kpiLabel">{label}</div>
      {hint ? <div className="kpiHint">{hint}</div> : null}
    </article>
  );
}
