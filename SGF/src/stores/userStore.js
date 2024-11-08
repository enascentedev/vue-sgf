import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const token = ref('');

  const setToken = (newToken) => {
    token.value = newToken;
  };

  return {
    token,
    setToken,
  };
});
