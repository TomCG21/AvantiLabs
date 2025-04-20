
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">AVANTI LABS</h1>
        <p className="text-xl mb-6">
          Transformamos empresas desde adentro: estrategia, tecnología y legalidad
          con propósito. Tu siguiente versión empieza aquí.
        </p>
        <Button className="text-lg px-6 py-3">Solicitá tu diagnóstico</Button>
      </div>

      <div className="max-w-5xl mx-auto mt-20 grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Transformación Estratégica</h3>
            <p>Asesoría en modelos de negocio, procesos y escalamiento para MiPymes y empresas medianas.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Tecnología Aplicada</h3>
            <p>Digitalización, IA práctica y herramientas eficientes para automatizar lo que importa.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Eficiencia Legal y Fiscal</h3>
            <p>Estructuras sólidas y cumplimiento normativo para que tu crecimiento sea sostenible.</p>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu empresa?</h2>
        <p className="mb-6">Contactanos para una evaluación gratuita de oportunidades de mejora.</p>
        <Button className="text-lg px-6 py-3">Quiero transformar mi negocio</Button>
      </div>
    </div>
  );
}
