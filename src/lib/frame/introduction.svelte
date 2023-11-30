<script>
    import img from '$lib/images/IMG1.jpg';
    import img2 from '$lib/images/IMG2.jpg';
    import img3 from '$lib/images/IMG3.jpg';
    import img7 from '$lib/images/IMG7.png';
</script>
<div class="bg-bg-gradient md:w-screen md:h-screen bg-cover py-2">
    <div class="">
        <div class="w-full flex flex-col justify-center items-center mt-3">
            <h1 class="font-extrabold text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl font-inter  text-transparent  bg-clip-text bg-gradient-to-r from-neutral-800 to-red-500">Self Photo Studio</h1>
            <p class="font-inter text-surface-300 text-lg md:text-2xl lg:text-4xl 2xl:text-5xl">Cek Highlight kami</p>
        </div>
        <div class="w-full flex flex-col justify-center items-center mt-3 ">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-around">
            
                <div class="bg-blacky p-6 rounded-xl flex justify-center flex-col gap-4 shadow-2xl shadow-white/20 backdrop-blur-xl bg-blacky/50">
                    <img class="w-60 h-fit img-studio rounded-md"  src={img} alt="" />
                    <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mjc4NDc5MTY1MTU5NDQ1?story_media_id=3203332964641986656_61641968757&igshid=OGQ5ZDc2ODk2ZA==" class="btn button-price-blue">Lihat Harga</a>
                </div>
                <div class="bg-blacky p-6 rounded-xl flex justify-center flex-col gap-4 shadow-2xl shadow-white/20 backdrop-blur-xl bg-blacky/50">
                    <img class="w-60 h-fit  img-studio rounded-md"  src={img3} alt="" />
                    <div class="h-12 bg-gradient-to-r from-red-500 to-teal-500 rounded-full p-1 transition duration-300 ease-in-out hover:-translate-y-2">
                        <div class="flex h-full w-full items-center justify-center bg-blacky rounded-full ">
                            <a href="/gallery" class="text-white font-inter font-bold h-fit">Gallery</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="w-full flex flex-col justify-center items-center mt-3 gap-4">
            <p class="text-white/80 font-caveat text-xl md:text-3xl 2xl:text-5xl text-center">Show Your creativity and identity, be honest to yourself</p>
            <a class="rounded-full bg-surface-500 text-blacky/60 px-4 py-2 font-inter font-semibold" href="#self-photo">Lebih Lanjut</a>
        </div>
    </div>
</div>