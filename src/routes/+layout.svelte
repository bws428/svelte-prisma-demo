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
