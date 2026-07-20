import Header from "@/components/sections/Header/Header";
import Footer from "@/components/sections/Footer/Footer";


type Props = {
  header: any;
  footer: any;
  theme: any;
  data: any;
};

export default function AboutPage({
  header,
  footer,
  theme,
  data,
}: Props) {
  return (
    <>
      

      <main>

        <section className="py-32 bg-slate-900 text-white text-center">
          <div className="max-w-5xl mx-auto px-6">

            <h1 className="text-6xl font-bold mb-6">
              {data.hero.title}
            </h1>

            <p className="text-xl text-gray-300">
              {data.hero.subtitle}
            </p>

          </div>
        </section>

        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-bold mb-6">
              {data.story.title}
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              {data.story.description}
            </p>

          </div>
        </section>

      </main>

     
    </>
  );
}