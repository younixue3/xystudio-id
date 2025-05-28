<template>
  <div>
    <!-- Create Blog Button -->
    <button
      @click="showModal = true"
      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Create New Blog
    </button>

    <!-- Create Blog Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">Create New Blog Post</h2>
          <button
            @click="showModal = false"
            class="text-gray-500 hover:text-gray-700"
          >
            <span class="text-2xl">&times;</span>
          </button>
        </div>

        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              v-model="blogData.title"
              type="text"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Content
            </label>
            <textarea
              v-model="blogData.content"
              rows="6"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <div class="flex justify-end gap-2">
            <button
              type="button"
              @click="showModal = false"
              class="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateBlog',
  data() {
    return {
      showModal: false,
      blogData: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission here
      console.log('Blog data:', this.blogData);

      // Reset form and close modal
      this.blogData = {
        title: '',
        content: ''
      };
      this.showModal = false;
    }
  }
};
</script>
