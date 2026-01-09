import { MessageSquare, Star, LifeBuoy } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <MessageSquare size={48} className="text-[#1A3B7A]" />,
      title: "RESPONSIVENESS",
    },
    {
      icon: <Star size={48} className="text-[#1A3B7A]" />,
      title: "QUALITY",
    },
    {
      icon: <LifeBuoy size={48} className="text-[#1A3B7A]" />,
      title: "SUPPORT",
    },
  ];

  const points = [
    { title: "Decades of Mastery", desc: "Boasting over 15 years of maritime expertise, our team has a deep-seated understanding of the nuances and intricacies of the industry. Our legacy stands as a testament to our commitment and prowess." },
    { title: "Unwavering Commitment", desc: "Our dedication knows no bounds. Operating around the clock, Balancia ensures you're never left unsupported, regardless of the hour or weather. We stand steadfast by your side, ensuring seamless operations." },
    { title: "Local Insights, Global Outreach", desc: "At Balancia, we merge invaluable local insights with an expansive global perspective, providing unparalleled agency and stevedoring solutions. Our sprawling network, coupled with our agile and adaptive approach, means we're perfectly poised to cater to any maritime requirement." },
    { title: "Our outlined standards", desc: "We are certified according to ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018" },
    { title: "Advanced Technological Integration", desc: "By leveraging cutting-edge technology, we provide efficient and real-time solutions, making maritime operations smoother and more transparent." },
    { title: "Safety First", desc: "We prioritize the safety of both your crew and cargo. Adhering strictly to international safety protocols, we ensure risk-free operations at all levels." },
    { title: "Tailored Solutions", desc: "Recognizing that every client's needs are distinct, we offer bespoke solutions crafted meticulously to match your specific requirements." },
    { title: "Environmentally Conscious", desc: "In an era of environmental awareness, our operations are crafted to minimize ecological impact, championing maritime excellence and eco-responsibility." },
    { title: "Transparent Pricing", desc: "With Balancia, there are no hidden fees. We champion transparency, providing cost-effective solutions without compromising on quality." },
    { title: "Trusted Partnerships", desc: "Our network is vast, but it's also carefully curated. We collaborate only with the most reputable partners, ensuring quality services." },
    { title: "Consistent Positive Feedback", desc: "Our customer's testimonials testify to our dedication and unparalleled service. Join a community that consistently vouches for our excellence." },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-[#1A3B7A] text-4xl md:text-5xl font-black uppercase mb-16">
          Why Choose Us
        </h2>

        {/* Feature Cards Grid (Offset Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 relative">
          {/* Card 1 & 2 (Top Row) */}
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50">
            {features[0].icon}
            <h3 className="mt-6 text-[#1A3B7A] text-xl font-black tracking-widest">{features[0].title}</h3>
          </div>
          <div className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50">
            {features[1].icon}
            <h3 className="mt-6 text-[#1A3B7A] text-xl font-black tracking-widest">{features[1].title}</h3>
          </div>
          
          {/* Card 3 (Bottom Row - Centered) */}
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full md:w-1/2 bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-50">
              {features[2].icon}
              <h3 className="mt-6 text-[#1A3B7A] text-xl font-black tracking-widest">{features[2].title}</h3>
            </div>
          </div>
        </div>

        {/* Detailed Points List */}
        <div className="space-y-4">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-[#1A3B7A] font-black text-lg min-w-[24px]">
                {index + 1}.
              </span>
              <p className="text-[#1A3B7A] text-lg leading-relaxed">
                <span className="font-black">{point.title}:</span> {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}