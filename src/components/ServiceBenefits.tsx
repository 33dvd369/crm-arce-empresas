import {
    FileText,
    Laptop,
    UserCheck,
    Headset,
    BarChart,
    FileCheck,
    Star,
    MapPin
} from "lucide-react";

const benefits = [
    {
        icon: FileText,
        text: "Contrato sem restrições de modalidade de trabalho (CLT /PJ)",
    },



    {
        icon: Laptop,
        text: "Movimentação eletrônica de vida",
    },
    {
        icon: UserCheck,
        text: "Gerente exclusivo para acompanhamento",
    },
    {
        icon: Headset,
        text: "Canal de atendimento personalizado",
    },
    {
        icon: BarChart,
        text: "Relatórios gerenciais",
    },
    {
        icon: FileCheck,
        text: "Fatura digital",
    },
    {
        icon: Star,
        text: "Benefícios em vida",
    },

    {
        icon: MapPin,
        text: "Atendimento em todo território nacional",
    },
];

const ServiceBenefits = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1120] mb-4 tracking-tight">
                        Benefícios Operacionais
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Vantagens exclusivas pensadas para facilitar o dia a dia da sua empresa.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white border text-balance border-gray-100/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(132,204,22,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
                            style={{ animationDelay: `${index * 50}ms`, opacity: 0, animation: `fade-in 0.5s ease-out forwards ${index * 0.1}s` }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#84cc16] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="w-14 h-14 rounded-xl bg-[#0B1120]/5 text-[#0B1120] flex items-center justify-center mb-5 group-hover:bg-[#84cc16] group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                                <benefit.icon className="w-7 h-7" strokeWidth={2} />
                            </div>
                            <p className="text-[#0B1120] font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceBenefits;
