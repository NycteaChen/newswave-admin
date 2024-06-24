export default defineNuxtRouteMiddleware(() => {
  const nuxtApp = useNuxtApp();

  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) {
    return;
  }

  const token = useCookie('token');
  if (token.value) {
    return;
  }
  console.log('auth');
  // eslint-disable-next-line consistent-return
  return navigateTo('/login');
});
