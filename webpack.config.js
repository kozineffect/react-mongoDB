module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./src/index.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    filename: "public/bundle.js"
  },

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        include: /src/, 
        loader: "babel-loader", 
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "es2015"]
        }
      },
      { test: /\.css$/, loader: "ignore-loader" },
      { test: /\.png$/, loader: "ignore-loader" },
      { test: /\.jpg$/, loader: "ignore-loader" },
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
