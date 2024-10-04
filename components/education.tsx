'use client';

import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { EducationData } from '@/lib/data';

export const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: sectionRef } = useSectionInView('education');

  return (
    <section ref={sectionRef} id="experience" className="my-10 scroll-mt-28">
      <SectionHeading
        heading="My Education"
        content="Professional Education that I have accumulated over several years."
      />
      <VerticalTimeline lineColor="hsl(var(--muted))">
        {EducationData.map(({ title, description, location, date }) => (
          <VerticalTimelineElement
            key={title}
            contentStyle={{
              background: 'var(--color-background)', 
              color: 'var(--color-text)',
              boxShadow: 'none',
              padding: '20px',
            }}
            contentArrowStyle={{ display: 'none' }}
            date={date}
            dateClassName="!font-medium text-muted-foreground dark:text-white"
            icon={<Icons.briefcase />}
            iconStyle={{
              background: 'var(--color-icon-background)', 
              color: 'var(--color-icon)',
              boxShadow: 'none',
              border: '2px solid var(--border-color)',
            }}
          >
            <h3 ref={ref} className={`text-foreground font-medium ${inView ? 'animate-fadeIn' : ''} dark:text-dark `}>
              {title}
            </h3>
            <p className="text-muted-foreground !mt-0 !font-normal text-gray-800 dark:text-gray-800">
              {location}
            </p>
            <p className="text-muted-foreground !mt-1 !font-normal text-gray-800 dark:text-gray-800">
              {description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
