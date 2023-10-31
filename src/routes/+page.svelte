<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({ articles } = data);
</script>

<h3>Building a basic application with SvelteKit + Prisma + PicoCSS</h3>

<p>
  Check out Huntabyte's <a
    href="https://www.youtube.com/watch?v=E9J2VXd-bzE"
    target="blank">YouTube tutorial</a
  > to go along with this project.
</p>

<div class="grid">
  <div>
    <h4>Post list:</h4>

    {#if articles.length > 0}
      <!-- We use the spread operator to create a new articles[] array 
      so we can .reverse() it, thus posts display in reverse chrono order. -->
      {#each [...articles].reverse() as article}
        <article>
          <h4>{article.title}</h4>
          <p>{article.content}</p>

          <form action="?/deleteArticle&id={article.id}" method="POST">
            <div class="grid">
              <a href="/{article.id}" role="button" class="outline">Edit</a>
              <button
                type="submit"
                class="secondary outline"
                style="margin-bottom: 0">Delete</button
              >
            </div>
          </form>
        </article>
      {/each}
    {:else}
      <article>No posts found.</article>
    {/if}
  </div>

  <form action="?/createArticle" method="POST">
    <h4>Create a new post:</h4>
    <article>
      <label for="title"> Title </label>
      <input type="text" id="title" name="title" />
      <label for="content"> Content </label>
      <textarea id="content" name="content" rows={5} />
      <button type="submit">Add new post</button>
    </article>
  </form>
</div>
