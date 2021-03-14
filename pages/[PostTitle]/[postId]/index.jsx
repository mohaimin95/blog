import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import environment from '../../../environment';
import Categories from '../../../components/Categories';
import Tags from '../../../components/Tags';
import Footer from '../../../components/Footer';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';
import Subnav from '../../../components/Subnav';
export default function index() {
    let router = useRouter();
    let [post, setPost] = useState(null);
    let [allPosts, setAllPosts] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    const getPost = () => {
        setIsLoading(true);
        let {
            postId
        } = router.query;
        fetch(`${environment.baseBlogUrl}/${postId}`).then(res => {
            res.json().then(data => {
                setIsLoading(false);
                console.log(data);
                setPost(data);
            }).catch(err => {
                setIsLoading(false);

            })
        }).catch(err => {
            setIsLoading(false);

        })
    }
    const getAllPosts = () => {
        fetch(`${environment.baseBlogUrl}`).then(res => {
            res.json().then(data => {
                setAllPosts(data.posts || []);
            }).catch(err => {

            })
        }).catch(err => {

        })
    }
    useEffect(() => {
        if (router.query.postId) {
            getPost();
            // getAllPosts();
        }

    }, [router.query.postId]);
    return (
        <div>
            <Navbar />
            <Subnav />
            {isLoading ? <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>loading ...</div> : (<div>

                {post && <div className="post-wrapper">
                    <Head>
                        <title>{post.title}</title>
                        <meta name="description" content={environment.stripHTML(post.excerpt)} />
                    </Head>
                    <div className="post-date"><time dateTime={post.date}>{environment.changeFormat(post.date)}</time></div>
                    <div className="page-post-title">
                        <h1>{post.title}</h1>
                        <p className="post-date">by Abdul Mohaimin N</p>
                    </div>
                    <div className="page-post-thumbnail mt-1">
                        <img src={post.featured_image || "https://picsum.photos/300/200"} alt={post.title || "Sample Image"} />
                    </div>
                    <div className="mt-1 page-post-content">
                        <div className="mt-1 page-post-categories">
                            <Categories categories={post.categories} />
                        </div>
                        <article>
                            {environment.stripHTML(post.content)}
                        </article>
                    </div>
                    <div className="mt-1 page-post-tags">
                        <Tags tags={post.tags} bold />
                    </div>

                </div>}

            </div>)}
            <div className="mt-1">
                <Footer />
            </div>
            <style jsx>{`
                .other-posts {
                    padding:1rem 12rem;
                }
                .post-list {
                    display:flex;
                    
                }
                .post-list-thumbnail {
                    width:8rem;
                }
                
                .post-list-thumbnail img {
                    width:100%;
                }

                .post-list-body {
                    margin-left:1rem;
                }
                .post-list-title {
                    font-size:1.3rem;
                    font-weight:bold;
                }
            `}</style>
        </div>
    )
}
