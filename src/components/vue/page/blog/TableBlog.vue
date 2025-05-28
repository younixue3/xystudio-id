<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr class="bg-gray-100">
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Content
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Image
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="blog in blogs" :key="blog.id">
          <td class="px-6 py-4 whitespace-nowrap">{{ blog.title }}</td>
          <td class="px-6 py-4">
            <div class="text-sm text-gray-900 line-clamp-2">
              {{ blog.content }}
            </div>
          </td>
          <td class="px-6 py-4">
            <img
              :src="blog.image"
              alt="Blog image"
              class="h-20 w-20 object-cover rounded-lg"
            />
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="relative">
              <button
                @click="toggleDropdown(blog.id)"
                class="text-gray-500 hover:text-gray-700"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
              <div
                v-if="activeDropdown === blog.id"
                class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div class="py-1">
                  <a
                    href="#"
                    @click="editBlog(blog.id)"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >Edit</a
                  >
                  <a
                    href="#"
                    @click="deleteBlog(blog.id)"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >Delete</a
                  >
                  <a
                    href="#"
                    @click="viewBlog(blog.id)"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >View</a
                  >
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableBlog',
  data() {
    return {
      blogs: [],
      activeDropdown: null
    };
  },
  methods: {
    toggleDropdown(blogId) {
      this.activeDropdown = this.activeDropdown === blogId ? null : blogId;
    },
    editBlog(blogId) {
      // Implement edit functionality
      console.log('Edit blog:', blogId);
    },
    deleteBlog(blogId) {
      // Implement delete functionality
      console.log('Delete blog:', blogId);
    },
    viewBlog(blogId) {
      // Implement view functionality
      console.log('View blog:', blogId);
    }
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
