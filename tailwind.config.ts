import type {Config} from 'tailwindcss'

const config: Config = {
    presets: [require('@danver-io/danver-design-system/config/preset/tailwind-preset.js')],
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './component/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@danver-io/danver-design-system/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {},
            fontFamily:{
                default: ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "sans-serif"]
            }
        },
    },
    plugins: [],
}
export default config
