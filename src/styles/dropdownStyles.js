import { tv } from 'tailwind-variants';

export const dropdown = tv({
    slots: {
        wrapper: 'w-full bg-gray-200',
        trigger: 'w-full bg-blue-200' ,
        content: 'w-[389px]',
    },
    variants: {
        variant: {
            default: {
                trigger: ' text-gray-700 flex justify-between gap-2',
                content: 'text-gray-700',
            },
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});