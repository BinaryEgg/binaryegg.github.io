const fs = require('fs')
const {join} = require('path')
const {Feed} = require('feed')
const matter = require('gray-matter')
const remark = require('remark')
const html = require('remark-html')
const emoji = require('remark-emoji')

const POSTS_DIR = join(process.cwd(), 'content/blogs')
const LOCALES = ['en']

const SITE_URL = 'https://binaryegg.com'
const AUTHOR_NAME = 'BinaryEgg'
const DESCRIPTION = 'BinaryEgg Blog'
const TWITTER_USERNAME = ''

const markdownToHtml = (markdown) => remark()
    .use(html)
    .use(emoji)
    .processSync(markdown)
    .toString()

const getPosts = (lang) => {
    const posts = fs.readdirSync(POSTS_DIR)
    return posts
        .map((slug) => {
            const filePath = join(POSTS_DIR, slug)

            const fileContent = fs.readFileSync(filePath, 'utf8')
            const {data, content} = matter(fileContent)

            return {
                title: data.title,
                description: data.description,
                content,
                slug,
                date: data.date
            }
        })
        .filter((p) => Object.keys(p).length > 0)
        .sort((p1, p2) => (p1.date > p2.date ? '-1' : '1'))
}

const generateRssFeed = () => {
    LOCALES.forEach((lang) => {
        const feed = new Feed({
            title: `${AUTHOR_NAME} - Blog RSS Feed`,
            id: `${SITE_URL}/feed.xml`,
            link: `${SITE_URL}/feed.xml`,
            description: DESCRIPTION,
            language: lang,
            generator: 'Next.js using Feed',
            feedLinks: {
                rss2: `${SITE_URL}/feed.xml`
            }
        })

        const posts = getPosts(lang)

        posts.forEach((post) => {
            feed.addItem({
                title: post.title,
                id: `${SITE_URL}/blog/${post.slug}`,
                link: `${SITE_URL}/blog/${post.slug}`,
                description: post.description,
                content: markdownToHtml(post.content),
                date: new Date(post.date)
            })
        })

        fs.writeFileSync(
            `./public/feed.xml`,
            feed.rss2(),
            'utf8'
        )
    })
}

generateRssFeed()
