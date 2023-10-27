<script lang="ts">
  import CategoryItem from "./CategoryItem.svelte";
  import type { Category } from "./categories";
  export let category: Category;
</script>

<hr />
<section id={category.id}>
  <h3>
    {category.name}:
    <a href="#table_of_contents">[back to table of contents]</a>
  </h3>
  <ul>
    {#each category.items as item}
      <CategoryItem {item} />
    {/each}
  </ul>
</section>
