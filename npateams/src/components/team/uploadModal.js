import React, { useState } from 'react'
import { Button, Icon, Image, Modal, Form } from 'semantic-ui-react'

const UploadModal = ({ props }) => {

    const id = props.match.params.id;
    const squad = props.teamDetail.squad;
    const [open, setOpen] = useState(false);

    const [memberInfo, setMemberInfo] = useState({
        name: '',
        number: '',
        PPG: '',
        APG: '',
        RPG: ''
    });

    const handleChange = (e) => {
        if (e.target.type === 'number') {
            memberInfo[e.target.name] = parseInt(e.target.value);

        } else {

            memberInfo[e.target.name] = e.target.value;

        }
        setMemberInfo(memberInfo);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await squad.push(memberInfo);
        // console.log(squad);
        props.updateTeam({ squad: squad }, id);

    }
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<button type='button' className='upload-btn'><i class="plus icon"></i>Add A Member</button>}
        >
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image scrolling>
                <Image size='small' src='../../assets/avatar.png' wrapped />

                <Modal.Description>
                    <p>
                        Add a new member for this team
                    </p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Field id='form-input-control-member-name'>
                                <label>Name</label>
                                <input type='text' placeholder='Name' onChange={handleChange} name='name' />
                            </Form.Field>

                            <Form.Field id='form-input-control-number'>
                                <label>Number</label>
                                <input type='number' placeholder='Number' onChange={handleChange} name='number' step='0.01' />
                            </Form.Field>


                        </Form.Group>

                        <Form.Group width='equal'>
                            <Form.Field id='form-input-control-ppg'>
                                <label>PPG</label>
                                <input type='number' placeholder='PPG' onChange={handleChange} name='PPG' step='0.01' />
                            </Form.Field>

                            <Form.Field id='form-input-control-apg'>
                                <label>APG</label>
                                <input type='number' placeholder='APG' onChange={handleChange} name='APG' step='0.01' />
                            </Form.Field>

                            <Form.Field id='form-input-control-rpg'>
                                <label>RPG</label>
                                <input type='number' placeholder='RPG' onChange={handleChange} name='RPG' step='0.01' />
                            </Form.Field>
                        </Form.Group>
                        <Form.Button>ADD</Form.Button>
                    </Form>

                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)} primary >
                    Close <Icon name='chevron right' />
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default UploadModal;