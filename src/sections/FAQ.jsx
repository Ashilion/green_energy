import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <section className='flex-col w-full p-20 bg-slate-100'>
      <h1 className='text-5xl text-palanquin'>Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="mt-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I Use Green Energy in My Home or Business?</AccordionTrigger>
          <AccordionContent>
          Absolutely! Green energy solutions are available for both residential and commercial use. You can install solar panels, wind
turbines, or use other clean energy options to power your property.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2"> 
          <AccordionTrigger>What's the Environmental Impact of Green Energy?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How Do I Get Started with Green Energy?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Is Green Energy Reliable During Bad Weather?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What Are the Benefits of Switching to Green Energy?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
        </AccordionItem>

      </Accordion>
    </section>
  )
}

export default FAQ