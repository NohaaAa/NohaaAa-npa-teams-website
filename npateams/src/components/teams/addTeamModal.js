import React, { useState } from 'react'
import { Button, Icon, Image, Modal, Form } from 'semantic-ui-react'

const AddTeamModal = ({ props }) => {

    const [open, setOpen] = useState(false)
    // console.log(props)
    const [teamInfo, setTeamInfo] = useState({
        name: '',
        logo: 'holder.png',
        poll: false,
        count: 0,
        description: '',
        squad: []
    });
    const [imgData, setImgData] = useState('')

    const handleChange = (e) => {

        teamInfo[e.target.name] = e.target.value;
        setTeamInfo(teamInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(teamInfo);
        // console.log(imgData)
        props.addTeam(teamInfo);
        props.uploadLogo(imgData)

    }

    const handleUpload = async (e) => {
        teamInfo['logo'] = e.target.files[0].name;
        setTeamInfo(teamInfo)
        setImgData(e.target.files[0]);
    }
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<button type='button' className='upload-team-btn'><i class="plus icon"></i>Add A Team</button>}
        >
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image scrolling>
                <Image size='small' src='../../assets/avatar.png' wrapped />

                <Modal.Description>
                    <p>
                        Add a New Team
                    </p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Field id='form-input-control-member-name'>
                                <label>Name</label>
                                <input type='text' placeholder='Name' onChange={handleChange} name='name' />
                            </Form.Field>

                        </Form.Group>

                        <Form.Group>
                            <Form.Field id='form-input-control-team-desc'>
                                <label>Description</label>
                                <textarea placeholder='description' onChange={handleChange} name='description' style={{ width: '500px' }}></textarea>
                            </Form.Field>
                        </Form.Group>

                        <Form.Group>
                            <Form.Field id='form-input-control-team-desc'>
                                <label>Team Logo</label>
                                <input type="file" name="teamLogo" onChange={handleUpload} />
                            </Form.Field>
                        </Form.Group>


                        <Form.Button>Submit</Form.Button>
                    </Form>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)} primary >
                    ADD <Icon name='chevron right' />
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default AddTeamModal;