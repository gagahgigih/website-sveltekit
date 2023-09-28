import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme} from './src/my-custom-theme'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontFamily : {
				caveat : ['Caveat'],
				inter: ['Inter'],
				kanit: ['Kanit']
			},
			backgroundImage: {
				'bg-gradient': "url('/bg/bg-gradient.png')",
				'product-one' : "url('/products/Artboard 1.png')",
				'product-two' : "url('/products/Artboard 2.png')",
				'product-three' : "url('/products/Artboard 3.png')",
				'product-four' : "url('/products/Artboard 4.png')",
				'product-five' : "url('/products/Artboard 5.png')",
				'product-six' : "url('/products/Artboard 6.png')",
			},
			colors: {
				blacky: '#222222'
			}
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					myCustomTheme,
				],
			},
		}),
	],
} satisfies Config;
