import { ref } from 'vue';

export function useMobileMenu() {
  const isMobileMenuOpen = ref(false);

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    updateScrollLock();
  };

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
    updateScrollLock();
  };

  const updateScrollLock = () => {
    if (isMobileMenuOpen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
}
