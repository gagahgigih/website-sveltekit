<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<svelte:head>
	<title>Gagah Gigih: Get Yourself a Photo</title>
	<meta name="description" content="Self Studio Photo Terbaik di Pangkalan Bun" />
	<meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun, Pembuatan Website">
	<meta name="Gagah Gigih" content="Gagah Gigih Studio">
	<meta charset="UTF-8">
</svelte:head>
<script >
	import Introduction from "$lib/frame/introduction.svelte";
	import Product from "$lib/frame/product.svelte";
	import Contact from "$lib/frame/contact.svelte";
	import ProductPhoto from "$lib/frame/productphoto.svelte";
	import SelfPhoto from "$lib/frame/selfphoto.svelte";

</script>
<div class="flex flex-col bg-surface-500 scroll-smooth">
	<Introduction />
	<Product />
	<Contact />
	<SelfPhoto />
	<ProductPhoto />
</div>
