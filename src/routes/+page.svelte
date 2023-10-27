<script lang="ts">
  import Category from "../lib/Category.svelte";
  import { categories } from "../lib/categories";
</script>

<svelte:head>
  <style>
	/* START: Made by ChatGPT */
	body {
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
	background-color: #f0f0f0;
	}

	/* Style the header */
	header {
	background-color: #333;
	color: #fff;
	text-align: center;
	padding: 20px;
	}

	/* Style the navigation menu */
	nav ul {
	list-style: none;
	padding: 0;
	text-align: center;
	}

	nav li {
	display: inline;
	margin-right: 20px;
	}

	nav a {
	text-decoration: none;
	color: #fff;
	}

	/* Style the main content section */
	main {
	padding: 20px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	/* Style the portfolio items */
	section {
	margin: 20px;
	padding: 20px;
	background-color: #fff;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	}

	/* Style the footer */
	footer {
	background-color: #333;
	color: #fff;
	text-align: center;
	padding: 10px;
	}

	/* Apply styles to links within the content */
	a {
	color: #0078d4;
	text-decoration: none;
	}

	/* Style headings */
	h1, h2, h3 {
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	color: #333;
	}

	/* Apply styles to images */
	img {
	max-width: 100%;
	height: auto;
	}

	/* Style unordered lists */
	ul {
	list-style: disc;
	margin-left: 20px;
	}

	/* Apply styles to paragraphs */
	p {
	line-height: 1.6;
	}

	/* Apply styles to buttons */
	button {
	background-color: #0078d4;
	color: #fff;
	padding: 10px 20px;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s;
	}

	button:hover {
	background-color: #005a9e;
	}	
	/* END */
    body {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
    h3 a {
      font-size: 0.5em;
      text-align: center;
    }
  </style>
</svelte:head>

<div style="display: flex; flex-direction: row;">
  <section style="width: 50%;" id="main">
    <h1>Chi Huu Huynh</h1>
    <sub>Software Developer</sub>
    <h3 id="table_of_contents">Table of Contents:</h3>
    <ul>
      {#each categories as category}
        <li style="margin-top: 5px; margin-bottom: 5px;">
          <a href="#{category.id}">{category.name}</a>
        </li>
      {/each}
    </ul>
  </section>
  <section
    style="width: 50%; text-align:right; align-items:right;"
    id="contact"
  >
    <h2>Contact</h2>
    <ul style="text-align: right; list-style-position: inside;">
      <li style="margin-top: 5px;">
        Email: <a href="mailto:chi.h.linkedin@gmail.com"
          >chi.h.linkedin@gmail.com</a
        >
      </li>
      <li style="margin-top: 5px;">
        LinkedIn: <a
          href="https://www.linkedin.com/in/chi-huu-huynh-a5b315206/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BS4r6%2BEmtQKyoMSJF%2BryGhg%3D%3D"
          >chi-huu-huynh</a
        >
      </li>
      <li style="margin-top: 5px;">
        Github: <a href="https://github.com/Chi-EEE">Chi-EEE</a>
      </li>
    </ul>
  </section>
</div>

{#each categories as category}
  <Category {category} />
{/each}
<hr />
<footer>
  This website was made using <a href="https://svelte.dev/">Svelte</a>
</footer>
