"use client";

import { skills } from "@/constants"
import { useEffect, useState } from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import CustomButton from "./CustomButton";


const SkillsSection = () => {
    const [skill, setSkill] = useState(null);

    useEffect(() => {
        setSkill(skills[0]);
    }, [])

  return (
    <div className="flex flex-col items-start gap-4 w-full">
        {skill && 
            <>
                <p className="font-extrabold stroke_primary text-3xl">{skill.name}</p>
                <p className="stroke_secondary font-semibold">{skill.description}</p>
                <div className="w-full mt-3 flex flex-col items-start gap-4">
                  <Table className='border-2 border-neutral-700'>
                      <TableHeader className='border-b-2 border-neutral-700'>
                          <TableRow className='stroke_primary bg-neutral-200'>
                              <TableHead className="w-[100px] stroke_primary font-extrabold">Level</TableHead>
                              <TableHead className='stroke_primary font-extrabold'>Description</TableHead>
                          </TableRow>
                      </TableHeader>
                      <TableBody className='bg-neutral-200'>
                        {
                            skill.skill_levels.map(skillLevel => (
                                <TableRow key={skillLevel.id} className='border-b-2 border-neutral-700 font-semibold stroke_primary'>
                                    <TableCell className="p-3">{skillLevel.skill_level_mark}</TableCell>
                                    <TableCell className="p-3">{skillLevel.skill_level_description}</TableCell>
                                </TableRow>
                            ))
                        }     
                      </TableBody>
                  </Table>
                  <div className="flex flex-col items-center md:flex-row md:justify-between w-full gap-4">
                    <div className="flex gap-4">
                        <CustomButton text='Previous' />
                        <CustomButton text='Next' />
                    </div>
                    <div className="flex gap-4">
                        <CustomButton text='Looks Good to Me' color='green' />
                        <CustomButton text='Suggest Edits' color='red' />
                    </div>
                  </div>
                </div> 
            </>
        }       
    </div>
  )
}

export default SkillsSection