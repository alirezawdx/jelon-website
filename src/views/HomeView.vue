<template>
  <div>
    <!-- Hero Section - Vue.js Inspired -->
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto max-w-5xl text-center">
        <transition
          appear
          enter-active-class="transition duration-1000 ease-out"
          enter-from-class="transform translate-y-10 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
        >
          <div>
            <h1
              class="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              The
              <span class="text-emerald-500 dark:text-emerald-400"
                >Elegant</span
              >
              JSON
              <br class="hidden sm:block" />
              Database for Python
            </h1>

            <p
              class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              An intuitive, performant and lightweight framework for storing and
              querying JSON data.
            </p>

            <div class="flex flex-wrap justify-center gap-4">
              <a
                href="#why-jelon"
                class="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Why Jelon
              </a>
              <a
                href="#installation"
                class="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-md transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Get Started
              </a>
              <a
                href="https://github.com"
                target="_blank"
                class="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-md transition-colors duration-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <!-- Three Feature Pillars - Vue.js Inspired -->
    <section id="why-jelon" class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6">
            <h3
              class="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Intuitive
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Simple, Pythonic API that feels natural to use. Store and query
              JSON data with minimal code and maximum readability.
            </p>
          </div>

          <div class="p-6">
            <h3
              class="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Performant
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Optimized for speed with efficient indexing and querying
              capabilities. Handles large datasets with minimal overhead.
            </p>
          </div>

          <div class="p-6">
            <h3
              class="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Lightweight
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Zero external dependencies. Built entirely with Python's standard
              library for maximum compatibility and minimal footprint.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Box -->
    <section id="features" class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-5xl">
        <h2
          class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Features
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <FeatureCard
            title="Zero Dependencies"
            description="Built entirely with Python's standard library - no external packages required"
            icon="package"
            delay="0"
          />
          <FeatureCard
            title="Intuitive API"
            description="Clean, Pythonic interface that feels natural and easy to use"
            icon="code"
            delay="100"
          />
          <FeatureCard
            title="File-Based Storage"
            description="Store your data in simple JSON files with automatic persistence"
            icon="database"
            delay="200"
          />
          <FeatureCard
            title="Thread-Safe Operations"
            description="Built-in concurrency support for multi-threaded applications"
            icon="lock"
            delay="300"
          />
          <FeatureCard
            title="Powerful Querying"
            description="Rich query capabilities to filter, sort, and find your data"
            icon="search"
            delay="400"
          />
          <FeatureCard
            title="Lightweight Footprint"
            description="Minimal memory usage with efficient data handling"
            icon="feather"
            delay="500"
          />
        </div>
      </div>
    </section>

    <!-- Code Examples Section -->
    <section id="examples" class="py-16 px-4">
      <div class="container mx-auto max-w-4xl">
        <h2
          class="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white"
        >
          Code Examples
        </h2>
        <p
          class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Simple, intuitive, and powerful. See how easy it is to use Jelon.
        </p>

        <div
          class="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden"
        >
          <div
            class="border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex justify-between items-center"
          >
            <span class="text-gray-700 dark:text-gray-300 font-medium"
              >Basic Usage</span
            >
            <div class="flex space-x-1">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div class="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>
          </div>
          <div class="p-4 bg-gray-900 overflow-x-auto">
            <pre class="text-emerald-100 font-mono text-sm">
# Initialize the database
from jelon import Database

# Create or open a database
db = Database('my_data.json')

# Add data
db.insert({'name': 'John', 'age': 30})
db.insert({'name': 'Alice', 'age': 25})

# Query data
results = db.find({'age': {'$gt': 20}})
print(results)  # All records with age > 20</pre
            >
          </div>
        </div>

        <div
          class="mt-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden"
        >
          <div
            class="border-b border-gray-200 dark:border-gray-700 px-4 py-2 flex justify-between items-center"
          >
            <span class="text-gray-700 dark:text-gray-300 font-medium"
              >Advanced Queries</span
            >
            <div class="flex space-x-1">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div class="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>
          </div>
          <div class="p-4 bg-gray-900 overflow-x-auto">
            <pre class="text-emerald-100 font-mono text-sm">
# Complex queries
from jelon import Database, Query

db = Database('users.json')

# Find users between 25 and 40 years old
q = Query().age.between(25, 40)
results = db.search(q)

# Compound queries
q = (Query().age > 30) & (Query().name.matches('^A.*'))
admin_users = db.search(q)</pre
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Section -->
    <section id="installation" class="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-3xl">
        <h2
          class="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-white"
        >
          Installation
        </h2>
        <p
          class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Get up and running in seconds with a simple pip install
        </p>

        <div class="bg-gray-900 text-white p-4 rounded-lg shadow-sm">
          <pre class="font-mono">pip install jelon</pre>
        </div>

        <div class="mt-8">
          <h3
            class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4"
          >
            Requirements
          </h3>
          <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Python 3.6+</li>
            <li>No external dependencies</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
