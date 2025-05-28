<script>
  import PocketBase from 'pocketbase';
  import { onMount } from 'svelte';

  const pb = new PocketBase('https://xystudio.up.railway.app');

  let email = '';
  let password = '';
  let errorMessage = '';
  let isLoading = false;

  async function handleLogin() {
    try {
      isLoading = true;
      errorMessage = '';

      const authData = await pb
        .collection('users')
        .authWithPassword(email, password);

      if (pb.authStore.isValid) {
        window.location.href = '/dashboard';
      }
    } catch (err) {
      errorMessage = err.message;
    } finally {
      isLoading = false;
    }
  }
</script>

<div
  class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100"
>
  <div
    class="max-w-md w-full p-10 bg-white rounded-2xl shadow-xl transform transition-all hover:scale-[1.01]"
  >
    <div class="mb-10">
      <h2
        class="text-center text-4xl font-extrabold text-gray-900 tracking-tight"
      >
        Welcome Back
      </h2>
      <p class="mt-3 text-center text-gray-600">
        Please sign in to your account
      </p>
    </div>

    <form class="space-y-6" on:submit|preventDefault={handleLogin}>
      <div class="space-y-4">
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            id="email"
            bind:value={email}
            type="email"
            required
            class="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            bind:value={password}
            type="password"
            required
            class="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
            placeholder="Enter your password"
          />
        </div>
      </div>

      {#if errorMessage}
        <div class="p-3 rounded-lg bg-red-50 text-red-600 text-sm text-center">
          {errorMessage}
        </div>
      {/if}

      <div class="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          class="w-full flex justify-center py-3 px-4 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium text-sm transition duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {#if isLoading}
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Signing in...
          {:else}
            Sign in
          {/if}
        </button>
      </div>

      <div class="mt-6 text-center">
        <a
          href="/forgot-password"
          class="text-sm text-indigo-600 hover:text-indigo-800 transition duration-200"
        >
          Forgot your password?
        </a>
      </div>
    </form>
  </div>
</div>
