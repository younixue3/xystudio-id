<template>
  <div class="w-full">
    <!-- Search and Filter Section -->
    <div class="flex gap-4 mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search..."
        class="px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      // Embed Short Youtube //
      <iframe
        width="325"
        height="578"
        src="https://www.youtube.com/embed/XXA4f_7EFf4"
        title="Coklat rambut nenek 🤨👍🏿⁉️#shorts #short #bahayasih #coklat #viralvideo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <select
        v-model="selectedFilter"
        class="px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All</option>
        <option v-for="filter in filters" :key="filter" :value="filter">
          {{ filter }}
        </option>
      </select>
    </div>

    <!-- Table -->
    <table class="w-full border-collapse my-4">
      <thead>
        <tr>
          <th
            v-for="(value, key) in dynamicColumns"
            :key="key"
            @click="sort(key)"
            class="p-3 bg-gray-100 border border-gray-300 text-left cursor-pointer hover:bg-gray-200"
          >
            {{ formatColumnHeader(key) }}
            <span v-if="sortKey === key">
              {{ sortOrder === 'asc' ? '▲' : '▼' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedData" :key="item.id">
          <td
            v-for="(value, key) in dynamicColumns"
            :key="key"
            class="p-3 border border-gray-300"
          >
            {{ formatCellValue(item[key]) }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="flex justify-center items-center gap-4">
      <button
        :disabled="currentPage === 1"
        @click="currentPage--"
        class="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="currentPage++"
        class="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    data: {
      type: Array,
      required: true
    },
    excludeColumns: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Array,
      default: () => []
    },
    itemsPerPage: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1,
      searchQuery: '',
      selectedFilter: '',
      sortKey: '',
      sortOrder: 'asc'
    };
  },
  computed: {
    dynamicColumns() {
      if (!this.data || this.data.length === 0) return {};
      const sample = this.data[0];
      const columns = {};
      Object.keys(sample).forEach(key => {
        if (!this.excludeColumns.includes(key)) {
          columns[key] = true;
        }
      });
      return columns;
    },
    filteredData() {
      let result = [...this.data];

      // Apply search
      if (this.searchQuery) {
        result = result.filter(item =>
          Object.values(item).some(value =>
            String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
          )
        );
      }

      // Apply filter
      if (this.selectedFilter) {
        result = result.filter(item => item.category === this.selectedFilter);
      }

      // Apply sort
      if (this.sortKey) {
        result.sort((a, b) => {
          const aValue = a[this.sortKey];
          const bValue = b[this.sortKey];
          return this.sortOrder === 'asc'
            ? String(aValue).localeCompare(String(bValue))
            : String(bValue).localeCompare(String(aValue));
        });
      }

      return result;
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    }
  },
  methods: {
    formatColumnHeader(key) {
      return key
        .split(/(?=[A-Z])|_/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    },
    formatCellValue(value) {
      if (value instanceof Date) {
        return value.toLocaleString();
      }
      if (typeof value === 'boolean') {
        return value ? 'Yes' : 'No';
      }
      return value;
    },
    sort(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }
    }
  },
  watch: {
    searchQuery() {
      this.currentPage = 1;
    },
    selectedFilter() {
      this.currentPage = 1;
    }
  }
};
</script>
