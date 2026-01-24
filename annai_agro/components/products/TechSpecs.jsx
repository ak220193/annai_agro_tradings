// components/products/TechSpecs.jsx
export const TechSpecs = ({ specs, hsn }) => (
  <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
    <h2 className="text-xl font-bold mb-6 text-[#a3e635]">Technical Specifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
      {Object.entries(specs).map(([key, value]) => (
        <div key={key} className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-slate-400 text-sm capitalize">{key}</span>
          <span className="font-bold text-sm text-white">{value}</span>
        </div>
      ))}
      <div className="flex justify-between border-b border-white/10 pb-2">
        <span className="text-slate-400 text-sm">HSN Code</span>
        <span className="font-bold text-sm text-[#a3e635]">{hsn}</span>
      </div>
    </div>
  </div>
);