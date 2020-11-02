'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'workshopListindex.html',
      template: 'workshopListindex.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'header.html',
      template: 'header.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'singleWorkshopindex.html',
      template: 'singleWorkshopindex.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'Contactindex.html',
      template: 'Contactindex.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'index.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'classesTable.html',
      template: 'classesTable.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'blog.html',
      template: 'blog.html'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'footer.html',
      template: 'footer.html'
    }),
  ],
  devtool: 'inline-source-map',
};

module.exports = development;
