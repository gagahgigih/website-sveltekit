<svelte:head>
    <title>Gagah Gigih: Buddy</title>
    <meta name="description" content="Gallery dan Aksesoris Self Studio Photo Terbaik di Pangkalan Bun" />
    <meta name="keywords" content="Foto, Studio Foto, Pangkalan Bun, Pembuatan Website, Data Analyst">
    <meta name="Gagah Gigih" content="Gagah Gigih Studio">
    <meta charset="UTF-8">
</svelte:head>
<script>
    import img2 from '$lib/images/gallery/monochrome/M1.jpg';
    import img3 from '$lib/images/gallery/buddy/B1.jpg';
    import img1 from '$lib/images/IMG5.jpg'
    import img4 from '$lib/images/gallery/cosplay/C1.jpg';
</script>
<div class="w-screen flex flex-col justify-center items-center bg-surface-500 py-8  ">
    <div>
        <div class="w-screen flex justify-center items-center mb-4">
            <h1 class="font-inter h1">Gallery Kami</h1>
        </div>
        <div class="w-screen flex justify-center items-center mb-4">
            <h1 class="font-inter h2">Discover Limitless Inspiration</h1>
        </div>
        <div class="w-screen flex justify-center items-center mb-4">
            <p class="font-inter text-center">Step into a realm where creativity knows no bounds. At Gagah Gigih Studio, we transcend the ordinary, inviting you to experience art in fun way to celebrate moment.</p>
        </div>
    </div>
    <div class="w-screen flex justify-center items-center">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="m-4 flex justify-center items-center flex-col gap-4  text-center">
                <a class="space-y-2" href="/gallery/vibrant">
                    <div class="flex flex-col justify-center items-center gap-3">
                        <div>
                            <p class="font-inter font-extrabold text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl text-center text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-500">Vibrant</p>
                        </div>
                        <div>
                            <p class="font-inter text-lg lg:text-2xl">Color Your World, Capture Your Vibe.</p>
                        </div>
                        <div>
                            <img class="w-80 h-fit  rounded-md img-studio lg:max-2xl object-contain"  alt="img 2" src={img1} >
                        </div>
                    </div>
                </a>

            </div>
            <div class="m-4 flex justify-center items-center flex-col gap-4  text-center">
                <a class="space-y-2" href="/gallery/monochrome">
                    <div class="flex flex-col justify-center items-center gap-3">
                        <div>
                            <p class="font-inter font-extrabold text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl text-center text-transparent  bg-clip-text bg-gradient-to-r from-neutral-900 to-gray-300">Monochrome </p>
                        </div>
                        <div>
                            <p class="font-inter text-lg lg:text-2xl">Timeless Elegance in Every Shade</p>
                        </div>
                        <div>
                            <img class="w-80 h-fit  rounded-md img-studio lg:max-2xl object-contain"  alt="BUDDIES" src={img2} >
                        </div>
                    </div>
                </a>
            </div>
            <div class="m-4 flex justify-center items-center flex-col gap-4  text-center">
                <a class="space-y-2" href="/gallery/buddy">
                    <div class="flex flex-col justify-center items-center gap-3">
                        <div>
                            <p class="font-inter font-extrabold text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl text-center text-transparent  bg-clip-text bg-gradient-to-r from-pink-500  to-red-200">Buddy</p>
                        </div>
                        <div>
                            <p class="font-inter text-lg lg:text-2xl">Through the Lens of Friendship</p>
                        </div>
                        <div>
                            <img class="w-80 h-fit  rounded-md img-studio lg:max-2xl object-contain"  alt="img 2" src={img3} >
                        </div>
                    </div>
                </a>
            </div>
            <div class="m-4 flex justify-center items-center flex-col gap-4  text-center">
                <a class="space-y-2" href="/gallery/cosplay">
                    <div class="flex flex-col justify-center items-center gap-3">
                        <div>
                            <p class="font-inter font-extrabold text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl text-center text-transparent  bg-clip-text bg-gradient-to-r from-teal-500  to-orange-200">Cosplay</p>
                        </div>
                        <div>
                            <p class="font-inter text-lg lg:text-2xl">Unleash Your Alter Ego</p>
                        </div>
                        <div>
                            <img class="w-80 h-fit  rounded-md img-studio lg:max-2xl object-contain"  alt="cosplay" src={img4} >
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="mt-8">
        <a class="h-10 btn text-md md:text-lg lg:text-2xl rounded-full bg-gradient-to-r from-pink-700 to-teal-600 p-4 text-md no-underline font-inter opacity-80 text-white "  href="https://gg-self-studio-photo.youcanbook.me/">Booking Disini</a>
    </div>
</div>