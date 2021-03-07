import fs from 'fs';
import matter from 'gray-matter';
import Head from "next/Head";
import Link from 'next/link';
import Foot from '../components/foot'
import Header from '../components/header'
import styles from '../styles/Blog.module.css'
import Utils from '../utils/utils'

function Blog({posts}) {
    return (
        <main>
            <Head><title>Blog</title></Head>
            <Header/>
            <div className={styles.container}>
                {posts.map(({slug, matter: {title, description, date}}) => (
                    <div className={styles.blog_item} key={title}>
                        <Link href={`/blog/${slug}`}>
                            <article>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <span>{date}</span>
                            </article>
                        </Link>
                    </div>
                ))}
            </div>
            <Foot/>
        </main>
    );
}

export default Blog

export const getStaticProps = async () => {
    const files = fs.readdirSync(`${process.cwd()}/content/blogs`);

    const posts = files.map((filename) => {
        const markdownWithMetadata = fs
            .readFileSync(`content/blogs/${filename}`)
            .toString();

        const {data} = matter(markdownWithMetadata);

        return {
            slug: filename.replace(".md", ""),
            matter: {
                ...data,
                date: Utils.formatDate(data.date),
            },
        };
    }).sort(function (o1, o2) {
        return o1.matter.date.localeCompare(o2.matter.date)
    });

    return {
        props: {
            posts,
        },
    };
}
