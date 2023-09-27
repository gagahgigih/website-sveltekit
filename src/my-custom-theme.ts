
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "0 0 0",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #16E9E9
		"--color-primary-50": "220 252 252", // #dcfcfc
		"--color-primary-100": "208 251 251", // #d0fbfb
		"--color-primary-200": "197 250 250", // #c5fafa
		"--color-primary-300": "162 246 246", // #a2f6f6
		"--color-primary-400": "92 240 240", // #5cf0f0
		"--color-primary-500": "22 233 233", // #16E9E9
		"--color-primary-600": "20 210 210", // #14d2d2
		"--color-primary-700": "17 175 175", // #11afaf
		"--color-primary-800": "13 140 140", // #0d8c8c
		"--color-primary-900": "11 114 114", // #0b7272
		// secondary | #1680E9
		"--color-secondary-50": "220 236 252", // #dcecfc
		"--color-secondary-100": "208 230 251", // #d0e6fb
		"--color-secondary-200": "197 223 250", // #c5dffa
		"--color-secondary-300": "162 204 246", // #a2ccf6
		"--color-secondary-400": "92 166 240", // #5ca6f0
		"--color-secondary-500": "22 128 233", // #1680E9
		"--color-secondary-600": "20 115 210", // #1473d2
		"--color-secondary-700": "17 96 175", // #1160af
		"--color-secondary-800": "13 77 140", // #0d4d8c
		"--color-secondary-900": "11 63 114", // #0b3f72
		// tertiary | #13be69
		"--color-tertiary-50": "220 245 233", // #dcf5e9
		"--color-tertiary-100": "208 242 225", // #d0f2e1
		"--color-tertiary-200": "196 239 218", // #c4efda
		"--color-tertiary-300": "161 229 195", // #a1e5c3
		"--color-tertiary-400": "90 210 150", // #5ad296
		"--color-tertiary-500": "19 190 105", // #13be69
		"--color-tertiary-600": "17 171 95", // #11ab5f
		"--color-tertiary-700": "14 143 79", // #0e8f4f
		"--color-tertiary-800": "11 114 63", // #0b723f
		"--color-tertiary-900": "9 93 51", // #095d33
		// success | #1b8613
		"--color-success-50": "221 237 220", // #ddeddc
		"--color-success-100": "209 231 208", // #d1e7d0
		"--color-success-200": "198 225 196", // #c6e1c4
		"--color-success-300": "164 207 161", // #a4cfa1
		"--color-success-400": "95 170 90", // #5faa5a
		"--color-success-500": "27 134 19", // #1b8613
		"--color-success-600": "24 121 17", // #187911
		"--color-success-700": "20 101 14", // #14650e
		"--color-success-800": "16 80 11", // #10500b
		"--color-success-900": "13 66 9", // #0d4209
		// warning | #c90d33
		"--color-warning-50": "247 219 224", // #f7dbe0
		"--color-warning-100": "244 207 214", // #f4cfd6
		"--color-warning-200": "242 195 204", // #f2c3cc
		"--color-warning-300": "233 158 173", // #e99ead
		"--color-warning-400": "217 86 112", // #d95670
		"--color-warning-500": "201 13 51", // #c90d33
		"--color-warning-600": "181 12 46", // #b50c2e
		"--color-warning-700": "151 10 38", // #970a26
		"--color-warning-800": "121 8 31", // #79081f
		"--color-warning-900": "98 6 25", // #620619
		// error | #DFDFDF
		"--color-error-50": "250 250 250", // #fafafa
		"--color-error-100": "249 249 249", // #f9f9f9
		"--color-error-200": "247 247 247", // #f7f7f7
		"--color-error-300": "242 242 242", // #f2f2f2
		"--color-error-400": "233 233 233", // #e9e9e9
		"--color-error-500": "223 223 223", // #DFDFDF
		"--color-error-600": "201 201 201", // #c9c9c9
		"--color-error-700": "167 167 167", // #a7a7a7
		"--color-error-800": "134 134 134", // #868686
		"--color-error-900": "109 109 109", // #6d6d6d
		// surface | #ffffff
		"--color-surface-50": "255 255 255", // #ffffff
		"--color-surface-100": "255 255 255", // #ffffff
		"--color-surface-200": "255 255 255", // #ffffff
		"--color-surface-300": "255 255 255", // #ffffff
		"--color-surface-400": "255 255 255", // #ffffff
		"--color-surface-500": "255 255 255", // #ffffff
		"--color-surface-600": "230 230 230", // #e6e6e6
		"--color-surface-700": "191 191 191", // #bfbfbf
		"--color-surface-800": "153 153 153", // #999999
		"--color-surface-900": "125 125 125", // #7d7d7d

	}
}