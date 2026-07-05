import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

const works = [
  {
    image: "/demo/paint/work01.jpg",
    title: "外壁塗装工事",
    location: "厚木市｜戸建住宅",
    duration: "工期：12日",
  },
  {
    image: "/demo/paint/work02.jpg",
    title: "屋根塗装工事",
    location: "海老名市｜戸建住宅",
    duration: "工期：8日",
  },
  {
    image: "/demo/paint/work03.jpg",
    title: "外壁・屋根塗装",
    location: "伊勢原市｜戸建住宅",
    duration: "工期：15日",
  },
];

export default function Works() {
  return (
    <section id="works" className="scroll-mt-20 bg-white py-24">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-emerald-700">
              WORKS
            </p>

            <h2 className="mt-4 text-4xl font-light text-zinc-900 md:text-5xl">
              施工事例
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              一件一件、丁寧な施工を心掛けています。
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {works.map((work, index) => (
              <FadeIn key={work.title} delay={index * 120}>
                <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      width={700}
                      height={500}
                      className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-medium text-zinc-900">
                      {work.title}
                    </h3>

                    <p className="mt-4 text-zinc-600">{work.location}</p>

                    <p className="mt-2 text-sm text-zinc-500">
                      {work.duration}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
