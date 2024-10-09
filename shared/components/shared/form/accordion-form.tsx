import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion'

interface Part {
  label: string
  value: string | null | undefined
}

interface AccordionProps {
  label: string
  parts: Part[]
}

export const AccordionForm: React.FC<AccordionProps> = ({ label, parts }) => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value={label}>
        <AccordionTrigger>{label}</AccordionTrigger>
        <AccordionContent>
          <ul className='space-y-2'>
            {parts.map((part, index) => (
              <li key={index} className='flex justify-between'>
                <span className='font-semibold text-gray-700 dark:text-gray-300'>
                  {part.label}:
                </span>
                <span className='text-gray-600 dark:text-gray-400'>
                  {part.value || 'Не указан'}
                </span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
