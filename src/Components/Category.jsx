import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Dropdown from './Dropdown';
import { useState } from 'react';

function Category() {
    const [isOpen, setOpen] = useState(false);
     
    return (
        <div className="">
            <Dropdown
                label="Rekomendasi untukmu"
                isOpen={isOpen}
                onToggle={setOpen}
                variant="default"
            >
                <ul className="text-sm">
                    <li className="py-2"> Daging </li>
                    <li className="py-2"> Sayur </li>
                    <li className="py-2"> Buah </li>
                </ul>
            </Dropdown>
        </div>
    )
}

export default Category;