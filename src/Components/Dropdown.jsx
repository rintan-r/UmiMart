import { useEffect, useRef } from "react";
import { dropdown } from '../styles/dropdownStyles';
import { ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";

export default function Drowpdown({ label, isOpen, onToggle, children, variant = 'default' }) {
    const ref = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onToggle(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const style = dropdown({ variant });

    return (
        <div className={style.wrapper()} ref={ref} >
            <button onClick={() => onToggle(!isOpen)} className={`${style.trigger()}`}>
                {label}
                <span className="flex items-center">{isOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}</span>
            </button>

            {isOpen && <div className={style.content()}> {children} </div>}
        </div>
    )
}