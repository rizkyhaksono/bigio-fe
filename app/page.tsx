import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Bigio&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Fullstack&nbsp;</h1>
        <h2 className={subtitle({ class: "mt-10" })}>Muhammad Rizky Haksono</h2>
        <h2 className={subtitle({ class: "mt-2" })}>mrizkyhaksono@gmail.com</h2>
      </div>
    </section>
  );
}
