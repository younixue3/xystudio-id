<div>
  <!-- 4. Contact Us Section -->
  <section class="py-32 bg-white" id="contact">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-bold text-black text-center mb-8">
        Get in touch with us
      </h2>
      <p class="text-center text-gray-700 mb-16 max-w-3xl mx-auto text-lg">
        Thanks for stopping by! Whether you have a question, comment, or just
        want to say hi, don't be a stranger. We're here to help, and we love
        connecting with our clients.
      </p>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Contact Form -->
        <div class="flex-1 bg-gray-50 rounded-3xl shadow-lg p-8">
          <form on:submit|preventDefault class="space-y-6">
            <div class="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                class="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-black focus:outline-none focus:border-black text-lg transition-all placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                class="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-black focus:outline-none focus:border-black text-lg transition-all placeholder-gray-500"
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                required
                class="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-black focus:outline-none focus:border-black text-lg transition-all placeholder-gray-500 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-4 bg-black text-white text-lg font-bold rounded-xl hover:bg-gray-900 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
              >Send message</button
            >
          </form>
        </div>

        <!-- Contact Info -->
        <div class="md:w-96 space-y-8">
          <!-- Chat to us -->
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-2">Chat to us</h3>
            <p class="text-gray-600 mb-1">Our friendly team is here to help.</p>
            <a
              href="mailto:info@xystudio.com"
              class="text-black font-medium hover:underline"
              >info@xystudio.com</a
            >
          </div>

          <!-- Call us -->
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-2">Call us</h3>
            <p class="text-gray-600 mb-1">Mon-Fri from 9am to 5pm</p>
            <a
              href="tel:+6281234567890"
              class="text-black font-medium hover:underline"
              >+62 812-3456-7890</a
            >
          </div>

          <!-- Visit us -->
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-2">Visit us</h3>
            <p class="text-gray-600 mb-1">Come say hello at our office</p>
            <address class="text-black font-medium not-italic">
              123 Photography St.<br />
              Jakarta, Indonesia
            </address>
          </div>

          <!-- Hours -->
          <div>
            <h3 class="text-2xl font-bold mb-2">Hours</h3>
            <p class="text-gray-600">Monday-Friday: 9am-5pm</p>
            <p class="text-gray-600">Saturday: 10am-4pm</p>
            <p class="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
