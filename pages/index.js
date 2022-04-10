import Head from 'next/head'
import {ArticleCard, ArticleWidget, Topics} from '../components';
import {getArticles} from '../services';

// const articles = [
//   {title: 'Test Article 1', preview: 'The First Test Article'},
//   {title: 'Test Article 2', preview: 'Adding Another Article to Test Layout'}
// ]



export default function Home({articles}) {
  return (
    <div className = 'container'>
      <Head>
        <title>Thoughts & Musings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className = 'main-display'>
        <div className = 'article-display'>
          {articles.map((article, index) => (<ArticleCard article = {article.node} key = {article.title}/>))}
        </div>
        <div className = 'nav-display'>
            <div className = 'nav-display-items'>
              <ArticleWidget />
              <Topics />
            </div>
        </div>
      </div>
      

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export async function getStaticProps() {
  const articles = (await getArticles()) || [];

  return {
    props: {articles}
  }
}