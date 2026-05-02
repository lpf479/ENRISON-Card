import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Settings, 
  Cpu, 
  PenTool, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  QrCode, 
  Copy,
  CheckCircle2,
  Trophy,
  Factory,
  Car,
  Bike
} from 'lucide-react';

// ----- Data Configuration ----- //
const PROFILE = {
  name: "David",
  enName: "",
  title: "大客户总监 | Key Account Director",
  company: "广州科瑞盛碳纤维科技有限公司",
  enCompany: "ENRISON Carbon Fiber Factory",
  avatarId: "avatar",
  phone: "+86 138-0000-0000",
  wechat: "Enrison_David",
  email: "david@enrison-carbon.com",
  address: "广州从化",
  slogan: "CRAFTING THE FUTURE WITH CARBON FIBER."
};

const BUSINESS_AREAS = [
  { icon: PenTool, title: "碳纤维制品研发与生产", desc: "全程自主研发，从图纸到成品的一站式解决方案" },
  { icon: Factory, title: "热压罐工艺干碳制品", desc: "军工级制造标准，极致轻量化与高强度的完美结合" },
  { icon: Settings, title: "模压制品定制", desc: "高精度模具开发，满足批量化开模生产需求" },
  { icon: Cpu, title: "钛合金生产线", desc: "配套钛合金精密加工部件，打造复合材料生态" }
];

const RESOURCES = [
  { icon: Car, title: "保时捷配套供应商", desc: "长期为高端汽车品牌提供碳纤维外饰及内饰件" },
  { icon: Bike, title: "杜卡迪/宝马摩托车", desc: "专注两轮高性能改装件研发，顶级赛事验证" },
  { icon: Trophy, title: "出口定制业务", desc: "产品远销欧美，符合严格的行业准入标准" }
];

const EQUIPMENT = [
  { label: "大型热压罐", count: "2", unit: "台", spec: "航空级温压控制系统" },
  { label: "模压生产设备", count: "6", unit: "台", spec: "百吨级精密成型锁模" },
  { label: "CNC加工中心", count: "8", unit: "台", spec: "五轴联动高精度雕刻" },
  { label: "无尘恒温车间", count: "1", unit: "座", spec: "ISO Class 7 洁净标准" }
];

// ----- Reusable Components ----- //
const SectionHeading = ({ children, en }: { children: React.ReactNode, en: string }) => (
  <div className="mb-8">
    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">{children}</h2>
    <p className="font-sans text-xs md:text-sm font-medium tracking-widest text-zinc-400 mt-1 uppercase">{en}</p>
    <div className="h-px w-12 bg-zinc-900 mt-4"></div>
  </div>
);

// ----- Main App Component ----- //
export default function App() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-100 selection:bg-zinc-900 selection:text-white pb-24 font-sans">
      
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden flex justify-center z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-b from-zinc-200/50 to-transparent blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-zinc-200/50 to-transparent blur-3xl opacity-50"></div>
      </div>

      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20">
        
        {/* Profile Card / Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-zinc-200/60 overflow-hidden relative"
        >
          {/* Subtle industrial pattern background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
            <div className="relative group">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-zinc-900 overflow-hidden shadow-lg border border-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=256&h=256" 
                  alt={PROFILE.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center shadow-lg border-2 border-white">
                <Building2 className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 rounded-lg text-xs font-semibold tracking-wider mb-4 border border-zinc-200">
                {PROFILE.enCompany}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-2">
                {PROFILE.name}
                {PROFILE.enName && <span className="font-sans text-xl sm:text-2xl font-light text-zinc-400 ml-2">/ {PROFILE.enName}</span>}
              </h1>
              <p className="text-zinc-600 font-medium text-sm sm:text-base leading-relaxed">
                {PROFILE.title}<br/>
                <span className="text-zinc-500">{PROFILE.company}</span>
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-100 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => handleCopy(PROFILE.phone, 'phone')}
                className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 hover:border-zinc-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-zinc-900 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-xs text-zinc-500 font-medium font-display uppercase tracking-widest">Phone</p>
                  <p className="text-sm font-semibold text-zinc-900 mt-0.5">{PROFILE.phone}</p>
                </div>
                {copiedField === 'phone' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-zinc-300 group-hover:text-zinc-500 transition-colors" />}
              </button>

              <button 
                onClick={() => handleCopy(PROFILE.wechat, 'wechat')}
                className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 hover:border-zinc-200 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-zinc-900 group-hover:scale-110 transition-transform">
                  <QrCode className="w-4 h-4" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-xs text-zinc-500 font-medium font-display uppercase tracking-widest">WeChat</p>
                  <p className="text-sm font-semibold text-zinc-900 mt-0.5">{PROFILE.wechat}</p>
                </div>
                {copiedField === 'wechat' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-zinc-300 group-hover:text-zinc-500 transition-colors" />}
              </button>
            </div>

            <button 
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(PROFILE.address)}`, '_blank')}
              className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 hover:border-zinc-200 transition-all group w-full"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-zinc-900 group-hover:scale-110 transition-transform border border-zinc-200/60">
                <MapPin className="w-4 h-4 text-zinc-900" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs text-zinc-500 font-medium font-display uppercase tracking-widest">Location / 位置</p>
                <p className="text-sm font-semibold text-zinc-900 mt-0.5">工厂定位：{PROFILE.address}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Main Business Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <SectionHeading en="Core Business">主营业务</SectionHeading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BUSINESS_AREAS.map((area, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200/60 hover:shadow-md transition-shadow group flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-4 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <area.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-zinc-900 mb-2 font-display">{area.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industry Resources Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <SectionHeading en="Industry Resources">行业资源</SectionHeading>
          
          <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 sm:px-10 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="space-y-6 relative z-10">
              {RESOURCES.map((res, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="mt-1 w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0 flex items-center justify-center border border-zinc-700">
                    <res.icon className="w-4 h-4 text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-display tracking-wide">{res.title}</h3>
                    <p className="text-zinc-400 text-sm mt-1 leading-relaxed">{res.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Core Equipment Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <SectionHeading en="Factory Equipment">核心设备</SectionHeading>
          
          <div className="grid grid-cols-2 gap-4">
            {EQUIPMENT.map((eq, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-zinc-200/60 flex flex-col justify-between">
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest font-display mb-3">{eq.label}</p>
                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display font-light text-4xl sm:text-5xl text-zinc-900 tracking-tighter">{eq.count}</span>
                    <span className="text-zinc-400 font-medium">{eq.unit}</span>
                  </div>
                  <p className="text-xs text-zinc-500 font-mono tracking-tight">{eq.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Factory Showcase Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <SectionHeading en="Production Base">生产基地</SectionHeading>
          
          <div className="bg-white rounded-3xl p-2 shadow-sm border border-zinc-200/60 overflow-hidden group">
            <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1565514020179-02685747ea01?auto=format&fit=crop&q=80&w=800" 
                alt="3万平米自有厂房" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Factory className="w-4 h-4 text-white" />
                    <span className="text-white text-xs font-semibold tracking-wider font-display">自有厂房 / OWNED FACTORY</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <h3 className="text-white text-3xl font-bold font-display tracking-tight">30,000</h3>
                    <span className="text-lg font-normal text-zinc-300">m²</span>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  规模化产能 / MASS PRODUCTION
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Detailed Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <SectionHeading en="Get in Touch">联系交流</SectionHeading>
          
          <div className="space-y-3">
            {[
              { icon: Phone, label: "电话咨询 / Phone", value: PROFILE.phone, id: 'full-phone' },
              { icon: Mail, label: "商务邮箱 / Email", value: PROFILE.email, id: 'email' },
              { icon: MapPin, label: "工厂定位 / Location", value: PROFILE.address, id: 'address' }
            ].map((contact, idx) => (
              <div 
                key={idx} 
                className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-zinc-200/60 justify-between group cursor-pointer hover:border-zinc-400 transition-colors" 
                onClick={() => contact.id === 'address' ? window.open(`https://maps.google.com/?q=${encodeURIComponent(contact.value)}`, '_blank') : handleCopy(contact.value, contact.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium mb-0.5">{contact.label}</p>
                    <p className="text-sm font-semibold text-zinc-900">{contact.value}</p>
                  </div>
                </div>
                {contact.id === 'address' ? (
                  <ChevronRight className="w-5 h-5 text-zinc-300 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                ) : copiedField === contact.id ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* QR Code Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white p-8 sm:p-10 rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-zinc-200/60 text-center flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
            <QrCode className="w-7 h-7" />
          </div>
          <h3 className="font-display text-xl font-bold text-zinc-900 mb-2">添加微信 / Add WeChat</h3>
          <p className="text-sm text-zinc-500 mb-8 max-w-sm">扫描下方二维码获取详细产品图册及报价 / Scan the QR code to get detailed catalogues and quotes.</p>
          
          <div className="w-48 h-48 bg-zinc-100 rounded-2xl p-4 border border-zinc-200 flex items-center justify-center relative inner-shadow">
            {/* Placeholder for real QR code */}
            <div className="w-full h-full bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}></div>
               <QrCode className="w-12 h-12 text-zinc-300" />
            </div>
            <div className="absolute inset-0 border-2 border-dashed border-zinc-300 rounded-2xl"></div>
          </div>
          <p className="text-xs font-mono text-zinc-400 mt-4 tracking-widest">{PROFILE.wechat}</p>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center border-t border-zinc-200 pt-10"
        >
          <Building2 className="w-8 h-8 text-zinc-300 mx-auto mb-4" />
          <h4 className="font-display font-bold text-zinc-900 tracking-widest uppercase mb-2">{PROFILE.enCompany}</h4>
          <p className="text-xs font-mono text-zinc-500 tracking-widest mb-8">{PROFILE.slogan}</p>
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest">&copy; {new Date().getFullYear()} Enrison. All rights reserved.</p>
        </motion.footer>

      </main>
    </div>
  );
}

