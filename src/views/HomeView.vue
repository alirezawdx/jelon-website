<template>
  <section>
    <div class="card bg-base-300 shadow">
      <div class="hero min-h-96">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl leading-16 font-bold mt-18">
              Your app is looking for 🍈&nbsp;Jelon!
            </h1>
            <p class="py-6">It's time to change and shine.</p>
            <div class="flex gap-2 justify-center mb-18">
              <a href="#download" class="btn btn-primary">Download</a>
              <button class="btn btn-secondary">Docs</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 mt-3 shadow">
      <div class="hero min-h-96">
        <div class="hero-content text-center">
          <div class="max-w-2xl">
            <h1 class="text-5xl leading-16 font-bold">What's Jelon?</h1>
            <p class="pt-6">
              Jelon is a simple yet powerful Python library for managing
              JSON-based data storage, inspired by pickleDB but with a cleaner
              API and enhanced features. Designed for small to medium-sized
              applications, Jelon provides an easy way to persist data without
              requiring a full database system.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-300 mt-3 shadow" id="download">
      <div class="hero min-h-82">
        <div class="hero-content text-center">
          <div class="min-w-80 flex flex-wrap justify-center">
            <h1 class="text-5xl leading-16 mb-4 font-bold">Get started...</h1>
            <div class="mockup-code w-full bg-base-100 text-start">
              <pre data-prefix="$"><code>pip install jelon</code></pre>
              <pre
                data-prefix=">"
                class="text-warning"
              ><code>installing...</code></pre>
              <pre data-prefix=">" class="text-success"><code>done!</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
