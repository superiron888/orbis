<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TradeCo - Global Trading Company</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-pink-50 text-gray-800">
  <!-- Top Navigation -->
  <nav class="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-10">
    <div class="flex items-center space-x-2">
      <img src="handshake_logo.png" class="rounded-full w-10 h-10" alt="Logo">
      <span class="font-bold text-xl">TradeCo</span>
    </div>
    <ul class="flex space-x-6 text-sm font-medium">
      <li><a href="#" class="hover:text-blue-600">Home</a></li>
      <li><a href="#" class="hover:text-blue-600">Services</a></li>
      <li><a href="#" class="hover:text-blue-600">About</a></li>
      <li><a href="#" class="hover:text-blue-600">Contact</a></li>
    </ul>
    <div>
      <button class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-blue-600">Sign Up</button>
    </div>
  </nav>

  <!-- Main Banner -->
  <section class="flex flex-col md:flex-row items-center justify-between px-8 py-10 bg-gradient-to-r from-pink-200 via-pink-100 to-blue-100 rounded-3xl m-8 shadow-lg relative overflow-hidden">
    <div class="max-w-xl z-10">
      <h1 class="text-3xl md:text-4xl font-extrabold mb-4">Empower Your Global Trade Journey</h1>
      <p class="text-lg mb-6">All-in-one platform for international trading, logistics, and business growth. Simple. Smart. Secure.</p>
      <button class="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-pink-600">Get Started Free</button>
    </div>
    <div class="flex-1 flex justify-center md:justify-end z-10">
      <img src="https://placehold.co/350x220?text=Cartoon+Banner" class="rounded-2xl shadow-lg" alt="Banner Illustration">
    </div>
    <!-- Decorative shapes -->
    <div class="absolute left-0 top-0 w-40 h-40 bg-pink-300 opacity-20 rounded-full -z-1"></div>
    <div class="absolute right-0 bottom-0 w-60 h-60 bg-blue-300 opacity-10 rounded-full -z-1"></div>
  </section>

  <!-- Right Side Cards (for desktop, below banner on mobile) -->
  <div class="flex flex-col md:flex-row gap-6 px-8">
    <div class="flex-1"></div>
    <div class="w-full md:w-64 flex flex-col gap-4">
      <div class="bg-blue-100 rounded-2xl p-4 shadow flex items-center">
        <img src="https://placehold.co/48x48?text=Info" class="mr-3 rounded-full" alt="Info">
        <div>
          <div class="font-bold text-blue-700">Latest News</div>
          <div class="text-xs text-gray-600">New logistics partner in Europe!</div>
        </div>
      </div>
      <div class="bg-yellow-100 rounded-2xl p-4 shadow flex items-center">
        <img src="https://placehold.co/48x48?text=Tip" class="mr-3 rounded-full" alt="Tip">
        <div>
          <div class="font-bold text-yellow-700">Trade Tips</div>
          <div class="text-xs text-gray-600">How to optimize your supply chain?</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Service Cards -->
  <section class="px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
      <img src="https://placehold.co/80x80?text=1" class="mb-4 rounded-full" alt="Service 1">
      <h3 class="font-bold text-lg mb-2">Global Sourcing</h3>
      <p class="text-gray-600 text-sm mb-2">Find the best suppliers worldwide with our AI-powered matching system.</p>
      <a href="#" class="text-blue-500 font-semibold text-sm">Learn More</a>
    </div>
    <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
      <img src="https://placehold.co/80x80?text=2" class="mb-4 rounded-full" alt="Service 2">
      <h3 class="font-bold text-lg mb-2">Smart Logistics</h3>
      <p class="text-gray-600 text-sm mb-2">Track, manage, and optimize your shipments in real time, anywhere.</p>
      <a href="#" class="text-blue-500 font-semibold text-sm">Learn More</a>
    </div>
    <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
      <img src="https://placehold.co/80x80?text=3" class="mb-4 rounded-full" alt="Service 3">
      <h3 class="font-bold text-lg mb-2">Business Insights</h3>
      <p class="text-gray-600 text-sm mb-2">Get actionable analytics and reports to grow your business faster.</p>
      <a href="#" class="text-blue-500 font-semibold text-sm">Learn More</a>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="px-8 py-10 bg-white rounded-3xl m-8 shadow-lg">
    <h2 class="text-2xl font-extrabold mb-6 text-center">Why Choose TradeCo?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="flex flex-col items-center">
        <div class="bg-pink-200 rounded-full w-16 h-16 flex items-center justify-center mb-3">
          <span class="text-2xl font-bold">1</span>
        </div>
        <div class="font-semibold mb-2">All-in-One Platform</div>
        <div class="text-gray-600 text-sm text-center">From sourcing to shipping, manage everything in one place.</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center mb-3">
          <span class="text-2xl font-bold">2</span>
        </div>
        <div class="font-semibold mb-2">AI-Powered Solutions</div>
        <div class="text-gray-600 text-sm text-center">Leverage smart tools for better decision making and efficiency.</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="bg-yellow-200 rounded-full w-16 h-16 flex items-center justify-center mb-3">
          <span class="text-2xl font-bold">3</span>
        </div>
        <div class="font-semibold mb-2">Trusted by Clients</div>
        <div class="text-gray-600 text-sm text-center">Hundreds of companies worldwide rely on us for their trade needs.</div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="text-center text-xs text-gray-500 py-6 border-t mt-8">
    &copy; 2025 TradeCo. All rights reserved.
  </footer>
</body>
</html>
