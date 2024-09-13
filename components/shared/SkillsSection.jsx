"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import CustomButton from "./CustomButton";
import Pagination from "./Pagination";
import { getData } from "@/lib/utils";
import SpinnerLoader from "./SpinnerLoader";
import SkillLevelDescription from "./SkillLevelDescription";

const SkillsSection = () => {
    const searchParams = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;
    const router = useRouter();

    const [skill, setSkill] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    const { toast } = useToast();

    useEffect(() => {
        const fetchSkill = async () => {
            try {
                //below is a function to mock a RESTful API. We can replace the mock function with an actual API.
                const response = await getData(page - 1);

                setSkill(response.skill);
                setTotalPages(response.pages);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
                setIsEditing(false);
            }
        }

        fetchSkill();
    }, [page])

    const showToast = () => {
        if (page < totalPages) {
            toast({
                title: "Okay. Let's take you to the next skill",
                duration: 1000,
            });

            setTimeout(() => {
                const newPage = page + 1;
                const params = new URLSearchParams(searchParams);
                params.set('page', newPage.toString());
                router.push(`?${params.toString()}`, { scroll: false });
            }, 1000);
        } else {
            toast({
                title: "Great. You're all done",
                duration: 1000,
            });
        }
    }

    return (
        <section className="w-full">
            {loading ?
                <SpinnerLoader /> :
                <div className="flex flex-col items-start gap-4 w-full">
                    <p className="font-extrabold stroke_primary text-3xl">{skill.name}</p>
                    <p className="stroke_secondary font-semibold">{skill.description}</p>
                    <div className="w-full mt-3 flex flex-col items-start gap-4">
                        <Table className='border-2 border-neutral-700'>
                            <TableHeader className='border-b-2 border-neutral-700'>
                                <TableRow className='stroke_primary bg-neutral-200'>
                                    <TableHead className="w-[50px] sm:w-[100px] stroke_primary font-extrabold">Level</TableHead>
                                    <TableHead className='stroke_primary font-extrabold'>Description</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className='bg-neutral-200'>
                                {
                                    skill.skill_levels.map(skillLevel => (
                                        <TableRow key={skillLevel.id} className='border-b-2 border-neutral-700 font-semibold stroke_primary'>
                                            <TableCell className="p-3">{skillLevel.skill_level_mark}</TableCell>
                                            <TableCell className="p-3">
                                                <SkillLevelDescription {...skillLevel} isEditing={isEditing} />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                        <div className="flex flex-col items-center md:flex-row md:justify-between w-full gap-4">
                            <Pagination totalPages={totalPages} />
                            <div className="flex gap-4">
                                <CustomButton
                                    text='Looks Good to Me'
                                    color='green'
                                    handleClick={showToast}
                                />
                                <CustomButton
                                    text={isEditing ? "Don't Show Edits" : "Suggest Edits"}
                                    color='red'
                                    handleClick={() => setIsEditing(prevState => !prevState)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default SkillsSection