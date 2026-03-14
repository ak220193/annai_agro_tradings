import Image from "next/image"; // Don't forget to import this
import { FileCheck, TrendingUp } from "lucide-react";


export default function MoUHighlight() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="border-2 border-[#67944e]/20 rounded-[2.5rem] overflow-hidden bg-white shadow-xl">
        <div className="flex flex-col md:flex-row">
          
          {/* Content Side */}
          <div className="p-8 md:p-12 flex-1">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <FileCheck className="w-4 h-4" /> Official Partnership
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
              Scaling Impact: 200 MT Dried Chili Procurement MoU
            </h2>
            
            <p className="font-body text-slate-600 mb-8 leading-relaxed">
              In a landmark move for regional agriculture, <strong>Annai Agro Tradings</strong> has 
              officially signed an MoU with <strong>TNAPEx</strong> in the presence of the 
              <strong> Chief Secretary</strong>. This agreement secures the procurement of 
              <strong> 200 metric tonnes</strong> of dried chilies directly from Farmer Producer 
              Companies (FPCs).
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="font-heading text-2xl text-[#67944e]">200 MT</p>
                <p className="font-body text-xs text-slate-500 uppercase font-bold">Volume Commitment</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="font-heading text-2xl text-[#67944e]">Govt.</p>
                <p className="font-body text-xs text-slate-500 uppercase font-bold">Facilitated Partnership</p>
              </div>
            </div>
          </div>

          {/* Photo Side - IMAGE GOES HERE */}
          <div className="md:w-[40%] bg-slate-100 relative min-h-100">
            {/* The Image component replaces the placeholder div */}
            <Image 
              src={"/sustainble/whatsapp.png"} // Change this to your actual file path
              alt="MoU Exchange with Chief Secretary"
              fill
              className="object-cover"
              priority
            />
            
            {/* Optional Overlay Label for extra "Premium" feel */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-white/20">
              <p className="text-[10px] font-body text-slate-500 uppercase font-bold leading-none">
                MoU Exchange Ceremony
              </p>
              <p className="text-xs font-heading font-bold text-slate-900 mt-1">
                Annai Agro Tradings & TNAPEx
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}