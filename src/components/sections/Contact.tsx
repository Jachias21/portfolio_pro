'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">¿Hablamos?</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Estoy disponible para nuevos proyectos y oportunidades.
        </p>
        <a 
          href="mailto:joanalbertchias9@gmail.com" 
          className="inline-block px-8 py-3 bg-indigo-600 rounded-full font-bold hover:bg-indigo-700 transition"
        >
          Enviar Email
        </a>
      </div>
    </section>
  );
}