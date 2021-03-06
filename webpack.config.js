module: {
    entry: [
    // Set up an ES6-ish environment
        'babel-polyfill',

    // Add your application's scripts below
        './src/app',
        './src/math'
    ]

    loaders: [
        {
            loader: "babel-loader",

            // Skip any files outside of your project's `src` directory
            include: [
                path.resolve(__dirname, "src"),
            ],

            // Only run `.js` and `.jsx` files through Babel
            test: /\.jsx?$/,

            // Options to configure babel with
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015'],
            }
        },
    ]
}
