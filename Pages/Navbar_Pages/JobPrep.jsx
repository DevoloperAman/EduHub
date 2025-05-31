import React from 'react'
import resume_building from '../../../src/assets/job-prep imgages/resume-building.png'
import linkdin_optimization from '../../../src/assets/job-prep imgages/linkdin.png'
import m_interviews from '../../../src/assets/job-prep imgages/Mock_Interviews.png'
import soft_skill from '../../../src/assets/job-prep imgages/S_Skill.png'
import comm_skill from '../../../src/assets/job-prep imgages/C_Skill.png'
import interview_question from '../../../src/assets/job-prep imgages/interview_Questions.png'


function JobPrep() {
  return (
    <>
      {/*  this is the main container  */}
      <div className='pt-8 flex flex-col items-center'>
        {/* This is the text Section */}
        <div className='text-center pt-4 '>
          <h1 className=' text-2xl  md:text-3xl font-bold animate-pulse  '> ||  Job - Preparation || </h1>
          <p className='    text-sm   md:w-2/3  md:text-lg mx-auto pt-4'>Prepare yourself for the competitive world with handpicked resources designed to boost your confidence and skills.  This section covers everything you need — from crafting an impressive resume to cracking technical and HR interviews.</p>
        </div>

        {/*  this is for the buttons Section */}
        <div className='grid grid-cols-2 gap-8 px-1 md:grid-cols-3 md:gap-16 pt-8 md:px-4'>

          {/* This is for the Resume Building  */}
          <a href="###" target="_blank">
            <img
              className='border rounded-2xl md:h-42 md:w-48 hover:cursor-pointer  animate-pulse '
              src={resume_building}
              alt="Resume Building" />
          </a>

          {/* This is for the linkding optimizitations */}
          <a href="###" target="_blank">
          <img 
          className='border rounded-2xl md:h-42 md:w-48 hover:cursor-pointer  animate-pulse ' 
          src={linkdin_optimization} 
          alt="linkdin_optimization" />
          </a>

          {/* this is for the mock intervies from the experts */}
          <a href="###" target="_blank">
          <img className='border rounded-2xl md:h-42 md:w-48 hover:cursor-pointer  animate-pulse ' src={m_interviews} alt="mock_interviews" />
          </a>

          {/* Soft Skills */}
          <a href="###" target="_blank">
          <img className='border rounded-2xl md:h-42 md:w-48 hover:cursor-pointer  animate-pulse ' src={soft_skill} alt="soft_skill" />
          </a>

          {/* This is for the  Communication Skill   */}
          <a href="###" target="_blank">
          <img className='border rounded-2xl hmd:h-42 md:w-48 hover:cursor-pointer  animate-pulse ' src={comm_skill} alt="comm_skill" />
          </a>

          {/* Interview Questions */}
          <a href="###" target="_blank">
          <img className='border rounded-2xl md:h-42 md:w-48 hover:cursor-pointer  animate-pulse ' src={interview_question} alt="interview_question" />
          </a>


        </div>

      </div>
    </>


  )
}

export default JobPrep