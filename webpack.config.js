const path = require("path");

module.exports = {
  entry: "./src/index.js",  // 시작점이 될 파일
  output: {
    path: path.resolve(__dirname, "dist"),  // 빌드된 파일의 저장 경로
    filename: "bundle.js",  // 출력 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // .js 파일에 대해 Babel을 실행
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    static: "./public",  // 개발 서버에서 제공할 정적 파일
    hot: true,
  },
  mode: "development",  // 개발 모드 (배포 시 "production"으로 변경)
};
