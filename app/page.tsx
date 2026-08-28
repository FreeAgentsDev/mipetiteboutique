import { Catalog } from "@/components/catalog";
import { BrandMark } from "@/components/brand-mark";
import { Shell } from "@/components/shell";
import { CATEGORIES, SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <Shell>
      <div className="text-center">
        <BrandMark size="lg" />
        <p className="mt-4 font-serif text-3xl italic text-ink">{SITE.name}</p>
        <h1 className="mt-5 font-serif text-[1.65rem] leading-snug italic text-ink sm:text-3xl">
          Pequeños detalles que hacen especial tu estilo.
        </h1>
        <p className="mt-4 text-sm font-light leading-relaxed text-ink/80">
          Descubre accesorios, bolsos y piezas especiales pensadas para
          acompañarte, complementar tus looks y hacerlos sentir más tuyos.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href="/catalogo"
          className="inline-flex h-12 items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream"
        >
          Descubrir colección
        </a>
        <a
          href="/#nosotros"
          className="inline-flex h-12 items-center justify-center rounded-full border border-ink/15 text-sm font-medium tracking-wide"
        >
          Conoce MiPetiteBoutique
        </a>
      </div>

      <section id="coleccion" className="mt-14 scroll-mt-8">
        <h2 className="text-center font-serif text-2xl italic">Colección</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {CATEGORIES.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-3xl border border-ink/10 bg-paper px-5 py-5 transition hover:border-gold/40"
            >
              <p className="font-serif text-xl italic">{item.name}</p>
              <p className="mt-2 text-sm font-light leading-relaxed text-mute">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="nosotros" className="mt-16 scroll-mt-8 text-center">
        <h2 className="font-serif text-2xl italic">
          Un poquito de MiPetiteBoutique ♡
        </h2>
        <div className="mt-5 space-y-4 text-sm font-light leading-relaxed text-ink/80">
          <p>
            MiPetiteBoutique nació del amor por los detalles, la moda y esas
            pequeñas cosas que hacen que un look se sienta completamente tuyo.
          </p>
          <p>
            Somos un emprendimiento creado en Manizales que busca ofrecer
            piezas bonitas, femeninas y especiales, seleccionadas y creadas
            para acompañarte en diferentes momentos.
          </p>
          <p>
            Cada accesorio, cada bolso y cada detalle lleva detrás una
            historia, mucho cariño y la ilusión de que cuando lo recibas
            digas: “Esto es muy yo”. ♡
          </p>
          <p>
            Gracias por hacer parte de este pequeño proyecto y permitirnos
            crecer contigo.
          </p>
        </div>
      </section>

      <section id="accesorios" className="mt-16 scroll-mt-8">
        <h2 className="text-center font-serif text-2xl italic">
          Accesorios ✨
        </h2>
        <p className="mt-2 text-center text-sm italic text-mute">
          Porque un pequeño detalle puede cambiarlo todo.
        </p>
        <div className="mt-5 space-y-4 text-center text-sm font-light leading-relaxed text-ink/80">
          <p>
            Aretes, collares, ear cuffs y otras piezas pensadas para darle ese
            toque especial a tus outfits.
          </p>
          <p>
            En MiPetiteBoutique nos encantan los accesorios que puedes
            combinar, mezclar y hacer completamente tuyos.
          </p>
          <p>Encuentra esa pieza que te estaba haciendo falta. ♡</p>
        </div>
        <p className="mt-5 text-center text-[11px] leading-relaxed text-mute">
          Algunas de nuestras piezas son de unidades limitadas, así que si
          encuentras una que te encanta, no la dejes ir.
        </p>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream"
        >
          Ver accesorios en Instagram
        </a>
      </section>

      <section id="lame" className="mt-16 scroll-mt-8">
        <h2 className="text-center font-serif text-2xl italic">L’âme ♡</h2>
        <p className="mt-2 text-center text-sm italic text-mute">
          Hecho a mano, pensado para ti.
        </p>
        <p className="mt-5 text-center text-sm font-light leading-relaxed text-ink/80">
          L’âme es nuestra línea de bolsos tejidos a mano, creada para quienes
          aman llevar piezas diferentes, auténticas y llenas de personalidad.
          Cada bolso es elaborado artesanalmente, cuidando los detalles para
          convertirlo en mucho más que un accesorio: una pieza que te acompaña
          y hace parte de tu estilo.
        </p>
        <a
          href="/catalogo"
          className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-ink/15 text-sm font-medium tracking-wide"
        >
          Descubrir L’âme
        </a>
        <div className="mt-8">
          <Catalog limit={2} />
        </div>
        <a
          href="/catalogo"
          className="mt-5 inline-flex w-full items-center justify-center text-sm font-medium tracking-wide text-mute underline decoration-gold/50 underline-offset-4 hover:text-ink"
        >
          Ver todas las piezas L’âme
        </a>
      </section>

      <section className="mt-16">
        <h2 className="text-center font-serif text-2xl italic">
          ¿Por qué MiPetiteBoutique? ♡
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          <li className="rounded-3xl bg-paper px-5 py-5">
            <p className="font-medium">✨ Piezas con personalidad</p>
            <p className="mt-1 text-sm font-light leading-relaxed text-mute">
              Seleccionamos cada detalle pensando en mujeres que disfrutan
              expresar su estilo.
            </p>
          </li>
          <li className="rounded-3xl bg-paper px-5 py-5">
            <p className="font-medium">Hecho con amor</p>
            <p className="mt-1 text-sm font-light leading-relaxed text-mute">
              Nuestra línea artesanal nace de manos creativas y de un proceso
              lleno de dedicación.
            </p>
          </li>
          <li className="rounded-3xl bg-paper px-5 py-5">
            <p className="font-medium">Detalles que enamoran</p>
            <p className="mt-1 text-sm font-light leading-relaxed text-mute">
              Queremos que comprar en MiPetiteBoutique sea una experiencia
              bonita desde el primer momento.
            </p>
          </li>
          <li className="rounded-3xl bg-paper px-5 py-5">
            <p className="font-medium">Emprendimiento local</p>
            <p className="mt-1 text-sm font-light leading-relaxed text-mute">
              Nacimos en Manizales y seguimos creciendo gracias a cada persona
              que decide apoyar este pequeño sueño.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-16 text-center">
        <h2 className="font-serif text-2xl italic">
          Un detalle desde que lo recibes ♡
        </h2>
        <p className="mt-5 text-sm font-light leading-relaxed text-ink/80">
          Queremos que abrir tu pedido también sea parte de la experiencia.
          Cada compra se prepara con cariño, cuidando esos pequeños detalles
          que hacen que recibir algo de MiPetiteBoutique se sienta especial.
        </p>
      </section>

      <section id="instagram" className="mt-16 scroll-mt-8 text-center">
        <h2 className="font-serif text-2xl italic">
          También somos parte de tu día a día ♡
        </h2>
        <p className="mt-5 text-sm font-light leading-relaxed text-ink/80">
          Síguenos en Instagram para descubrir nuevas piezas, lanzamientos,
          ferias, novedades y un poquito más de lo que pasa detrás de
          MiPetiteBoutique.
        </p>
        <p className="mt-4 font-medium tracking-wide">{SITE.instagramHandle}</p>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream"
        >
          Seguir en Instagram
        </a>
      </section>

      <section className="mt-16 rounded-3xl bg-blush/40 px-5 py-10 text-center">
        <h2 className="font-serif text-2xl italic">
          ¿Encontraste algo que te encantó? ♡
        </h2>
        <p className="mt-4 text-sm font-light leading-relaxed text-ink/80">
          Haz que ese pequeño detalle sea parte de tu próximo look.
        </p>
        <a
          href="/catalogo"
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream"
        >
          Descubrir colección
        </a>
      </section>
    </Shell>
  );
}
