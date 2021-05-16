// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PostsService from '../services/PostsService'

const App = () => {
    const [posts, setPosts] = useState([])
    const [currentId, setCurrentId] = useState(null)
    const [currentPost, setCurrentPost] = useState(null)

    const loadMore = () => {
        PostsService.getAll().then((resp) => {
            if (resp) {
                const newPosts = [...posts, ...resp]
                setPosts(newPosts)
            }
        })
    }

    const onChange = (id) => {
        if (id) {
            setCurrentId(id)
        }
    }

    const loadPost = () => {
        PostsService.get(currentId).then((resp) => {
            if (resp) {
                setCurrentPost(resp)
            }
        })
    }

    useEffect(() => {
        loadMore()
    }, [])

    useEffect(() => {
        loadPost()
    }, [currentId])

    useEffect(() => {
        loadMore()
    }, [currentPost])

    return (
        <>
            <h1>Post list</h1>
            <Container>
                <Row>
                    <Col>
                        <button onClick={loadMore}>Carica ancora...</button>
                        {posts.map((post, index) => (
                            <article key={index}>
                                <h2>{post.title}</h2>
                                <button onClick={() => onChange(post.id)}>
                                    details
                                </button>
                            </article>
                        ))}
                        <button onClick={loadMore}>Carica ancora...</button>
                    </Col>
                    <Col>
                        {currentPost && (
                            <article>
                                <h3>{currentPost.title}</h3>
                                <p>{currentPost.abstract}</p>
                                <hr />
                                <p>{currentPost.text}</p>
                            </article>
                        )}
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <br />
        </>
    )
}

export default App
