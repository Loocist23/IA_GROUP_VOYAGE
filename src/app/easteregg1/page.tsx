import Image from "next/image";
import Link from "next/link";

const images = ["/20260211_151123.jpg", "/20260211_151410.jpg"] as const;

export default function EasterEgg1Page() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold">Easter Egg 1</h1>
          <Link href="/" className="text-sm text-gold-400 hover:text-gold-500">
            Retour à l’accueil
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {images.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <Image
                src={src}
                alt="Easter egg"
                width={1400}
                height={900}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
