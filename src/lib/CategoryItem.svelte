<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import type { Item } from "./categories";
  import MarkdownSection from "./MarkdownSection.svelte";
  import HtmlSection from "./HTMLSection.svelte";

  export let item: Item;
</script>

<li style="margin-top: 5px; margin-bottom: 5px">
  <h4 style="margin:auto; display:flex; align-items:center;" id={item.id}>
    {#if item.icon_image}
      <img
        style="width: 50px; margin-right:10px;"
        src={item.icon_image.src}
        alt={item.icon_image.alt}
      />
    {/if}
    {item.name}
  </h4>
  {#if item.link}
    <a
      style="padding-top: 10px; margin:auto; display:flex; align-items:center;"
      href={item.link.href}
      target="_blank"
    >
      {#if item.link.image_src}
        <img
          style="height: 30px; margin-right:10px;"
          src={item.link.image_src}
          alt="Github Icon for {item.link.name}"
        />
      {/if}
      {item.link.name}
    </a>
  {/if}
  {#if item.small_text}
    <small>{item.small_text}</small>
  {/if}
  {#if item.short_description}
    <SvelteMarkdown source={item.short_description} />
  {/if}
  {#if item.markdown_file}
    <MarkdownSection markdown_file={item.markdown_file} />
  {/if}
  {#if item.html_file}
    <HtmlSection html_file={item.html_file} />
  {/if}
</li>
