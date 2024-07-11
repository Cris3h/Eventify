import React from "react";
import { ModalProps, NewsApiCall } from "@/types";
import Link from "next/link";

const ModalNews: React.FC<ModalProps> = ({ modalState, handleModalState }) => {
  // console.log(modalState);

  const testJSONAPIcall = {
    news: [
      {
        id: "123e4567-e89b-12d3-a456-426614174000",
        title: "Nueva función para DJs",
        body: "Nuestra aplicación ahora permite a los DJs compartir sus listas de reproducción en tiempo real con los asistentes.",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174001",
        title: "Optimización para bodas",
        body: "Hemos mejorado la funcionalidad de organización de bodas, permitiendo una mayor personalización de los eventos.Hemos mejorado la funcionalidad de organización de bodas, permitiendo una mayor personalización de los eventos.Hemos mejorado la funcionalidad de organización de bodas, permitiendo una mayor personalización de los eventos.",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174002",
        title: "Actualización en la interfaz de usuario",
        body: "La nueva actualización trae una interfaz más intuitiva y amigable para facilitar la creación de eventos.",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174003",
        title: "Integración con redes sociales",
        body: "Ahora puedes compartir tus eventos directamente en redes sociales desde nuestra aplicación.",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174004",
        title: "Soporte para múltiples idiomas",
        body: "Hemos añadido soporte para varios idiomas, incluyendo español, francés y alemán, para llegar a una audiencia más amplia.",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174005",
        title: "Funciones avanzadas de seguimiento",
        body: "Nuestra nueva función de seguimiento en tiempo real permite a los organizadores monitorizar el progreso del evento.",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174006",
        title: "Mejoras en la seguridad",
        body: "Hemos implementado nuevas medidas de seguridad para proteger la información personal de nuestros usuarios.",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174007",
        title: "Promociones y descuentos",
        body: "Ofrecemos nuevas promociones y descuentos para usuarios que organizan eventos recurrentes con nuestra aplicación.",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174008",
        title: "Integración con servicios de catering",
        body: "Ahora puedes contratar servicios de catering directamente a través de nuestra aplicación para tus eventos.",
      },
      {
        id: "123e4567-e89b-12d3-a456-426614174009",
        title: "Personalización de invitaciones",
        body: "Hemos añadido nuevas opciones para personalizar las invitaciones a los eventos, incluyendo temas y estilos.",
      },
    ],
  };

  return (
    <>
      {modalState && (
        <div className="">
          <h2 className="text-center text-2xl mb-6">Eventify News!</h2>
          <div className="bg-orange-200 border rounded-md justify-center align-center h-72 p-4 overflow-y-scroll scrollbar-custom">
            {testJSONAPIcall?.news.map((notice) => (
              <Link
                href={`/${notice.id}`}
                key={notice.id}
                className="cursor-pointer "
              >
                <section className=" justify-center align-center mb-4 border p-2 h-28 overflow-y-hidden hover:scale-105 hover:shadow-xl">
                  <p className="text-xl border-b-orange-600">{notice.title}</p>
                  <p className="text-sm">{notice.body}</p>
                </section>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalNews;
