import React from 'react'
import '../post.css'

function Post({ username, caption, imageString, userID, imageType }) {
    return (
        <div className='post_container'>
            <div className='post'>
                <h3 className='post_username'>
                    <a href={`/user/${userID}`}>
                        {username}
                    </a>
                </h3>

                <img className='post_img' src={`data:${imageType};base64,${imageString}`}></img>

                <h4 className='post_caption'><strong>{username}: </strong>{caption}</h4>

                {/*<h4 className='post_comment'><strong>{author}: </strong>{comment}</h4>*/}

                {/*<div>
                    <Form>
                        <Form.Group className="" controlId="formBasicComment">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control type="text" placeholder="Enter Comment" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Post
                        </Button>
                    </Form>
                </div>*/}
            </div>
        </div>
    );
}

export default Post