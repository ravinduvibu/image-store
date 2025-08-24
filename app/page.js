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

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 pb-20" id="gallery">
        <h2 className="mb-6 text-2xl font-bold">Gallery</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="rounded-lg border p-6 shadow-sm">
              <h3 className="font-semibold">Image Title {n}</h3>
              <p className="text-sm text-neutral-500">Category</p>
              <p className="mt-1 font-bold">$9</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-5xl px-4 pb-20" id="pricing">
        <h2 className="mb-6 text-2xl font-bold text-center">Pricing</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm text-center">
            <h3 className="font-semibold text-lg">Basic</h3>
            <p className="my-3 text-3xl font-bold">$9</p>
            <p className="text-neutral-500">1 Image Download</p>
            <button className="mt-4 w-full rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              Buy Now
            </button>
          </div>
          <div className="rounded-lg border p-6 shadow-sm text-center">
            <h3 className="font-semibold text-lg">Pro</h3>
            <p className="my-3 text-3xl font-bold">$29</p>
            <p className="text-neutral-500">10 Image Downloads</p>
            <button className="mt-4 w-full rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              Buy Now
            </button>
          </div>
          <div className="rounded-lg border p-6 shadow-sm text-center">
            <h3 className="font-semibold text-lg">Unlimited</h3>
            <p className="my-3 text-3xl font-bold">$99</p>
            <p className="text-neutral-500">Unlimited Downloads</p>
            <button className="mt-4 w-full rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-20" id="faq">
        <h2 className="mb-6 text-2xl font-bold text-center">FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">How do I purchase an image?</h3>
            <p className="text-neutral-600">
              Choose a plan, click buy, and you’ll get instant download access.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Do I need an account?</h3>
            <p className="text-neutral-600">
              No, you can checkout directly without creating an account.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I use images commercially?</h3>
            <p className="text-neutral-600">
              Yes, all purchases come with a royalty-free license for personal
              and commercial use.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-3xl px-4 pb-20" id="contact">
        <h2 className="mb-6 text-2xl font-bold text-center">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-md border px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-md border px-4 py-2"
          />
          <textarea
            placeholder="Your message"
            rows="4"
            className="w-full rounded-md border px-4 py-2"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} ImageStore. All rights reserved.
      </footer>
    </main>
  );
}
