<script lang="ts">
  import "@picocss/pico";
</script>

<header class="container">
  <hgroup>
    <nav>
      <ul>
        <li><strong>SvelteKit + Prisma Demo</strong></li>
      </ul>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Pico</a></li>
        <li><a href="/login" role="button" class="outline">Sign in</a></li>
      </ul>
    </nav>
  </hgroup>
</header>

<div class="container">
  <slot />
</div>

<footer class="container">
  <small
    >Built with <a href="https://picocss.com">Pico</a> •
    <a
      href="https://github.com/picocss/examples/blob/master/v1-preview/index.html"
      >Source code</a
    ></small
  >
</footer>
