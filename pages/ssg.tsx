// 타입을 위해 도입
import { NextPage } from "next";
// Next.js의 내장 컴포넌트
import Head from "next/head";

// 페이지 컴포넌트의 props 타입정의(여기에서는 빔)
type SSGProps = {}

// SSG용 페이지 구현
// NextPage는  Next.js의 Page용 타입
// NextPage<props>에서 props가 들어가는 Page임을 명시
const SSG: NextPage<SSGProps> = () => {
    return(
        <div>
            {/* Head 컴포넌트로 감싸면, 그 요소는 <head> 태그에 배치된다. */}
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <p>
                    이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지 입니다.
                </p>
            </main>
        </div>
    )
}

export default SSG