import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreatePost = (props) => {
    const [file, setFile] = useState('');
    const [caption, setCaption] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            return;
        }


        const formData = new FormData();

        formData.append("image", file)
        formData.append("imageCaption", caption)

        await fetch("/api/post", {
            method: "POST",
            body: formData
        });
    };

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group
                    className=' m-2'
                >
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name='image'
                        onChange={e => {
                            const file = e.target.files[0];

                            if (file.size > 2000000) {
                                setValidated(true);
                                e.target.value = '';
                                return;
                            }

                            setFile(file);
                        }}
                    />

                    <Form.Text muted>
                        Your image cannot be larger than 2MB.
                    </Form.Text>
                </Form.Group>

                <Form.Group
                    className='d-flex flex-column m-2'
                >
                    <Form.Label>Add Caption</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        name='imageCaption'
                        required
                        onChange={e => {
                            setCaption(e.target.value)
                        }}
                    />

                    <Button
                        className='m-2 align-self-center'
                        type='submit'
                    >
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default CreatePost;