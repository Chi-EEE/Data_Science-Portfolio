<script lang="ts">
    import PreviewSection from "./PreviewSection.svelte";
    import type { Category } from "./categories";
    export let category: Category;
</script>
<hr />
<section id={category.id}>
    <h3>{category.name}: <a href="#table_of_contents">[back to table of contents]</a></h3>
    <ul>
        {#each category.items as item}
            <li style="margin-top: 5px; margin-bottom: 5px">
                <h4 style="margin:auto; display:flex; align-items:center;">
                    {#if item.icon_image}
                        <img
                            style="width: 50px; margin-right:10px"
                            src={item.icon_image.src}
                            alt={item.icon_image.alt}
                        />
                    {/if}
                    {@html item.name}
                </h4>
                {#if item.link}
                    <a href={item.link.href}>{item.link.name}</a>
                {/if}
                {#if item.small_text}
                    <small>{item.small_text}</small>
                {/if}
                {#if item.short_description}
                    <p>{@html item.short_description}</p>
                {/if}
                {#if item.preview_section}
                    <PreviewSection preview_section={item.preview_section} />
                {/if}
            </li>
        {/each}
    </ul>
</section>