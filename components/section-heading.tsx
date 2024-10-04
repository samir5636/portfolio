import { ReactNode } from 'react';

type TProps = {
  heading: string;
  content?: string | ReactNode | undefined;
};

export const SectionHeading = ({ heading, content }: TProps) => {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-medium tracking-tighter text-foreground text-gray-800 dark:text-white">
        {heading}
      </h2>
      {content && (
        <p className="text-muted-foreground mt-2 text-sm text-gray-800 dark:text-gray-400">
          {content}
        </p>
      )}
    </div>
  );
};
