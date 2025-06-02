import { tv } from 'tailwind-variants';

export const dropdown = tv({
    slots: {
        wrapper: '',
        trigger: '' ,
        content: '',
    },
    variants: {
        variant: {
            default: {
                trigger: 'text-gray-700 flex justify-between gap-2',
                content: 'text-gray-700 px-6',
            },
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});