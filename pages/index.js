import Head from 'next/head';
import { useEffect, useState } from 'react';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Posts from '../components/Posts';
import environment from '../environment';
export default function Home() {
  let [isLoading, setIsLoading] = useState(false);
  let [featuredPost, setFeaturedPost] = useState(null)
  let [posts, setPosts] = useState([]);
  let [totalPosts, setTotalPosts] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    fetch(environment.baseBlogUrl).then(async res => {
      res.json().then(data => {
        let {
          posts: p = [],
          found = 0
        } = data || {};
        setPosts(p);
        setTotalPosts(found);
        setIsLoading(false);
        if (p.length > 0) {
          setFeaturedPost(p[0])
        }
      }).catch(err => {
        setIsLoading(false);
      });
    }).catch(err => {
      setIsLoading(false);
    })
  }, [])
  return (
    <div>
      <Head>
        <title>Blog of Abdul Mohaimin | #nam_c</title>
        <meta title="description" content="The blog which contains the posts published by Abdul Mohaimin. Stay tuned for more updates and live sessions. Designed and Developed by #nam_c" />
      </Head>
      <div className="wrapper">
        <section id="navbar">
          <Navbar />
        </section>
        {featuredPost && (<section className="d-pc" id="featured">
          <Featured {...featuredPost} />
        </section>)}
        <section id="posts">
          <Posts isLoading={isLoading} posts={posts} totalPosts={totalPosts} />
        </section>
      </div>
      <Footer />
    </div>
  )
}
