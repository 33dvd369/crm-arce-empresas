import {
    FileText,
    Smartphone,
    Users,
    UserPlus,
    Laptop,
    UserCheck,
    Headset,
    BarChart,
    FileCheck,
    Star,
    Sliders,
    MapPin
} from "lucide-react";

const benefits = [
    {
        icon: FileText,
        text: "Contrato sem restrições de modalidade de trabalho (CLT /PJ)",
    },
    {
        icon: Smartphone,
        text: "Comunicados de óbitos via fone, e-mail, SMS ou WhatsApp",
    },
    {
        icon: Users,
        text: "Benefício extensivo aos familiares sem limitação de idade ou grau de parentesco",
    },
    {
        icon: UserPlus,
        text: "Contratação a partir de 05 vidas",
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
        icon: Sliders,
        text: "Plano totalmente customizável e flexível",
    },
    {
        icon: MapPin,
        text: "Atendimento em todo território nacional",
    },
];

const ServiceBenefits = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1120] mb-4">
                        Benefícios Operacionais
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Vantagens exclusivas pensadas para facilitar o dia a dia da sua empresa.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group border-b-4 border-b-[#84cc16]"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0B1120] flex items-center justify-center mb-4 group-hover:bg-[#84cc16]/20 transition-colors">
                                <benefit.icon className="w-6 h-6" strokeWidth={2.5} />
                            </div>
                            <p className="text-[#0B1120] font-medium leading-relaxed">
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
