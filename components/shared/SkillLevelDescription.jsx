"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SkillLevelDescription = ({  
    id,
    skill_level_description,
    isEditing
}) => {
    const [description, setDescription] = useState(skill_level_description);
    const [descriptionEditing, setDescriptionEditing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDescriptionEditing(false);
        //call backend and update the new 'description' value in the database - use 'id' prop to select the correct 
        // skill_level object in the database 
    }

    useEffect(() => {
        setDescriptionEditing(false);
    }, [isEditing])
  
    return isEditing ? (
        
        descriptionEditing ? 
        <form
            className="form"
            onSubmit={handleSubmit}
        >
            <input 
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="form_input"
            />
            <button 
                type='submit'
                className="border border-neutral-700 text-xs font-bold px-2 py-1 shadow-sm bg-neutral-100 hover:bg-neutral-200"
            >
                Change
            </button>
        </form> :
        <div className="flex gap-2">
            <p>{description}</p>
            <Image 
                src="/icons/pencil.svg"
                alt="edit icon"
                width={14}
                height={14}
                className="cursor-pointer"
                onClick={() => setDescriptionEditing(true)}
            />
        </div>
            
    ) : description;
}

export default SkillLevelDescription