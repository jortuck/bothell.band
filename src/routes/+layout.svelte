<script>
	import "../app.css";
</script>

<div class="container mx-auto flex flex-col h-screen justify-between">
	<main>
		<slot />
	</main>
	<footer>
		<p class="text-center text-gray-500 my-5">
			This website is not affiliated with the Northshore School District or Bothell High Shchool.
		</p>
	</footer>
</div>
