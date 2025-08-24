import Chatbot from "./components/Chatbot";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Sell <span className="text-blue-600">Beautiful Images</span>
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          A modern minimal store built with Next.js & Tailwind.
        </p>
        <a
          href="#gallery"
          className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Browse Gallery
        </a>
      </section>
      <Chatbot />

      {/* Gallery placeholder */}
      <section className="mx-auto max-w-4xl px-4 pb-20" id="gallery">
        <h2 className="mb-6 text-2xl font-bold">Gallery</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="font-semibold">Image Title</h3>
            <p className="text-sm text-neutral-500">Category</p>
            <p className="mt-1 font-bold">$9</p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="font-semibold">Image Title</h3>
            <p className="text-sm text-neutral-500">Category</p>
            <p className="mt-1 font-bold">$12</p>
          </div>
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="font-semibold">Image Title</h3>
            <p className="text-sm text-neutral-500">Category</p>
            <p className="mt-1 font-bold">$8</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} ImageStore. All rights reserved.
      </footer>
    </main>
  );
}
