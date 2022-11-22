import React, { useState } from 'react';

const init  = {
    title : " ",
    bio : " ",
    skills : " "
}

const CreateForm = () => {
    const [formState , setFormState] = useState({init})
    return (
        <div>
            <h2>Create a New Form</h2>
        </div>
    );
};

export default CreateForm;