import React from 'react'
import matter from 'gray-matter'
import Markdown from '../../components/markdown'
import Foot from '../../components/foot'
import Head from "next/head";
import styles from '../../styles/BlogArticle.module.css'
import Utils from '../../utils/utils'
import fs from "fs";
import Link from "next/link";

function BlogTemplate({content, title, description, date}) {
    return (
        <main>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={styles.container}>
                <article key={title}>
                    <h1>{title}</h1>
                    <span>{date}</span>
                    <div
                        className={`${styles.description} ${description == null ? styles.hidden : ''}`}>{description}</div>
                    <Markdown source={content}/>
                </article>
                <div className={styles.return_to_blog}>
                    <p>Back to <Link href='/blog'><a id='text_yellow_underline'>Blog</a></Link></p>
                </div>
            </div>
            <Foot/>
        </main>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(`${process.cwd()}/content/blogs`);
    const paths = files.map(file => `/blog/${file.replace('.md', '')}`)
    return {paths, fallback: false}
}

export const getStaticProps = async ({params}) => {
    const content = await import(`../../content/blogs/${params.blog}.md`)
    const data = matter(content.default)
    return {
        props: {
            content: data.content,
            title: data.data.title,
            description: data.data.description,
            date: Utils.formatDate(data.data.date)
        }
    }
}

export default BlogTemplate
