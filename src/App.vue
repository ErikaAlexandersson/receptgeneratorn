<script></script>

<template>
  <nav class="navbar navbar-light bg-light">
    <RouterLink to="/" class="navbar-brand">
      <img
        src="/assets/home.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />Hem
    </RouterLink>
    <RouterLink to="/random/" class="navbar-brand">
      <img
        src="/assets/random.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />Slumpa fram recept
    </RouterLink>
    <RouterLink to="/contact" class="navbar-brand">
      <img
        src="/assets/support.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />Kontakt
    </RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
  $text-colour: #0a0a0acc;
  p,
  h1,
  h5,
  label {
    color: $text-colour;
  }
  .navbar {
    justify-content: space-evenly;
  }
</style>
