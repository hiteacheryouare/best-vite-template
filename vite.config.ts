export default {
    plugins: [],
    server: {
        open: '/index.html',
        port: 3000,
    },
    build: {
        rollupOptions: {
            target: "ES2017",
            input: {
                main: 'index.html'
            },
            output: {
                dir: './out'
            }
        }
    }
}