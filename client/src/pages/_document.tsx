import { Html, Head, Main, NextScript } from 'next/document'
/*
* _document 역할 (index.h)
* 1. meta 태그 기본 설정
* 2. 폰트 관리
* 3. 스타일 시트 관리
* */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id={'modal'} />
      </body>
    </Html>
  )
}
