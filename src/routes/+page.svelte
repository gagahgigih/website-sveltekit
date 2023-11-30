<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<svelte:head>
	<title>Gagah Gigih: Get Yourself a Photo</title>
	<meta name="description" content="Self Studio Photo Terbaik di Pangkalan Bun" />
	<meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun, Pembuatan Website, Data Analyst">
	<meta name="Gagah Gigih" content="Gagah Gigih Studio">
	<meta charset="UTF-8">
	<meta property="og:site_name" content="Gagah Gigih Self Photo Studio" />
	<meta property="og:locale" content="en" />
	<meta property="og:url" content={"https://www.gagahgigih.site/gallery"} />
	<meta property="og:type" content="blog" />
	<meta property="og:title" content={"Gagah Gigih: Get Yourself a Photo"} />
	<meta property="og:description" content={"Self Studio Photo Terbaik di Pangkalan Bun"} />
	<meta property="og:image" content={"https://ibb.co/yfBCMsX"} />
	<meta property="og:image:alt" content={"Gagah Gigih Logo"} />
	<meta property="og:image:width" content="500" />
	<meta property="og:image:height" content="500" />
</svelte:head>
<MetaTags>

</MetaTags>
<script >
	import Introduction from "$lib/frame/introduction.svelte";
	import Product from "$lib/frame/product.svelte";
	import Contact from "$lib/frame/contact.svelte";
	import ProductPhoto from "$lib/frame/productphoto.svelte";
	import SelfPhoto from "$lib/frame/selfphoto.svelte";
	import { MetaTags } from 'svelte-meta-tags';
	import Booking from "$lib/frame/booking.svelte"
</script>
<div class="flex flex-col  scroll-smooth">
	<Booking />
	<Introduction />
	
	<Product />
	<Contact />
	<SelfPhoto />
	<ProductPhoto />
</div>
