<script lang="ts">
</script>

<!-- Main -->

<article class="grid">
  <div>
    <hgroup>
      <h1>Sign in</h1>
      <h2>A minimalist layout for Login pages</h2>
    </hgroup>
    <form>
      <input
        type="text"
        name="login"
        placeholder="Login"
        aria-label="Login"
        autocomplete="nickname"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        aria-label="Password"
        autocomplete="current-password"
        required
      />
      <fieldset>
        <label for="remember">
          <input type="checkbox" role="switch" id="remember" name="remember" />
          Remember me
        </label>
      </fieldset>
      <button type="submit" class="contrast">Login</button>
    </form>
  </div>
  <div class="mountain-img" />
</article>

<style>
  .grid {
    margin-top: 100px;
  }

  .mountain-img {
    background-color: #374956;
    background-image: url("https://raw.githubusercontent.com/picocss/examples/master/v1-sign-in/img/alessio-soggetti-8jeWeKdygfk-unsplash-1000x1200.jpg");
    background-position: center;
    background-size: cover;
  }
</style>
