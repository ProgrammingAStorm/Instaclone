import { useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreatePost = (props) => {
    const [file, setFile] = useState('');
    const [caption, setCaption] = useState('');

    return (
        <Container>
            <Form>
                <Form.Group
                    className=' m-1'
                >
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name='image'
                        onChange={e => {
                            setFile(e.target.files[0])
                        }}
                    />
                </Form.Group>

                <Form.Group
                    className='d-flex flex-column m-1'
                >
                    <Form.Label>Add Caption</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        required
                        name='imageCaption'
                        onChange={e => {
                            setCaption(e.target.value)
                        }}
                    />
                    <Button
                        className='m-2 align-self-center'
                        type='submit'
                        onClick={async e => {
                            e.preventDefault()

                            const formData = new FormData();

                            formData.append("image", file)
                            formData.append("imageCaption", caption)

                            fetch("/api/post", {
                                method: "POST",
                                body: formData
                            });
                        }}
                    >
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default CreatePost;